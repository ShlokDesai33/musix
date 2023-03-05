import { Waveform } from "@uiball/loaders";
import Head from "next/head";

export default function LoadingSpinner() {
  return (
    <>
      <Head>
        <title>Musix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex items-center justify-center h-full w-full">
        <Waveform
          size={40}
          lineWeight={2}
          speed={1}
          color="black"
        />
      </div>
    </>
  )
}