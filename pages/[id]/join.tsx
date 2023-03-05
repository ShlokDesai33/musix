import MobileLayout from "@/components/layouts/mobile"
import LoadingSpinner from "@/components/loading"
import joinSession from "@/hooks/join"
import { themesMap } from "@/shared/constants"
import useMusixStore from "@/shared/store"
import Head from "next/head"
import { useRouter } from "next/router"
import { SignOut } from "phosphor-react"

export default function JoinSession() {
  const router = useRouter();
  const user = useMusixStore(state => state.user);
  // get url params
  const { id } = router.query;
  
  const { data, isLoading } = joinSession({
    sessionId: id as string,
    userId: user?.id
  });

  console.log(data);

  if (isLoading) return <LoadingSpinner />;
  
  return (
    <MobileLayout>
      <Head>
        <title>Join Session | Musix</title>
      </Head>

      <div>
        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <p className="text-xl font-semibold">
              {data.creatorName}'s Session
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Theme: <span className="text-blue-600 font-semibold">{themesMap.get(data.themeId)}</span>
            </p>

            <hr className="mt-5 mb-4" />

            
          </div>

          <button className="flex items-center justify-center gap-x-2 py-3 rounded-full mt-8 bg-blue-500">
            <SignOut size={24} color="#fff" weight='fill' />
            <p className="text-white font-semibold">
              Stop Session
            </p>
          </button>
        </div>
      </div>
    </MobileLayout>
  )
}