import { Waveform } from '@uiball/loaders'

export default function Index() {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
        <div className="flex flex-col items-center mb-40">
          <Waveform
            size={55}
            lineWeight={4}
            speed={2}
            color="black"
          />
          <h1 className="text-4xl font-semibold mt-5">Musix</h1>
        </div>
      </div>

      <button className="absolute items-center justify-center gap-x-2 py-4 rounded-full bottom-6 left-4 right-4 bg-gray-200">
        Log in with Spotify
      </button>
    </>
  )
}