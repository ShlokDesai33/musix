import MobileLayout from "@/components/layouts/mobile"
import LoadingSpinner from "@/components/loading"
import joinSession from "@/hooks/join"
import useMusixStore from "@/shared/store"
import Head from "next/head"
import { useRouter } from "next/router"

export default function JoinSession() {
  const router = useRouter();
  const user = useMusixStore(state => state.user);
  // get url params
  const { id } = router.query;
  const { data, isLoading } = joinSession({
    id: id as string,
    userId: user?.id
  });

  if (isLoading) return <LoadingSpinner />;
  
  return (
    <MobileLayout>
      <Head>
        <title>Join Session | Musix</title>
      </Head>

      <div>
        
      </div>
    </MobileLayout>
  )
}