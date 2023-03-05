import Layout from "@/components/layouts/mobile"
import Head from "next/head"
import { SignOut } from "phosphor-react"

export default function JoinSession() {
  return (
    <>
      <Head>
        <title>Join Session | Musix</title>
      </Head>

      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <p className="text-xl font-semibold">
            Shlok's Session
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Theme: <span className="text-blue-600 font-semibold">Pirate Metal Shanty</span>
          </p>
        </div>

        <button className="flex items-center justify-center gap-x-2 py-3 rounded-full mt-8 bg-blue-500">
          <SignOut size={24} color="#fff" weight='fill' />
          <p className="text-white font-semibold">
            Leave Session
          </p>
        </button>
      </div>
    </>
  )
}

JoinSession.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}