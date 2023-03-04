import Artist from '@/components/home/artist'
import Song from '@/components/home/song'
import Layout from '@/components/layouts/mobile'
import Show from '@/components/show.'
import Link from 'next/link'
import { UsersThree, SpotifyLogo, Equalizer } from 'phosphor-react'

const artists = [
  {
    name: 'The Weeknd',
    image: 'https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90',
  },
  {
    name: 'The Weeknd',
    image: 'https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90',
  },
  {
    name: 'The Weeknd',
    image: 'https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div>
        <p className="text-xl font-semibold">
          Welcome back, {"Shlok"}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Start listening now!
        </p>

        <hr className="mt-5 mb-4" />

        <div>
          <div className="flex items-center gap-x-2">
            <Equalizer size={32} />
            <span className="text-base text-gray-800">Active Sessions</span>
          </div>

          <Show
            when={false} // TODO: Change this to true when there are active sessions
            fallback={<p className="text-sm text-gray-600 mt-1">You have no active sessions</p>}
          >
            <div>
              TODO
            </div>
          </Show>
        </div>

        <hr className="mt-5 mb-4" />

        <div>
          <div className="flex items-center gap-x-2">
            <SpotifyLogo size={32} color="#1db954" />
            <span className="text-base text-gray-800">Your Acount</span>
          </div>

          <div className="mt-3 grow-0 flex items-center gap-x-1 text-sm">
            <p className="shrink-0">User ID:</p>
            <p className="text-gray-600 truncate">{"123456789"}</p>
          </div>

          <p className="text-sm mt-1">
            Email:{' '}
            <span className="text-gray-600">{"shlok6203@gmail.com"}</span>
          </p>

          <p className="text-sm mt-4">
            Your Top Artists
          </p>
          <div className="flex gap-4 flex-wrap mt-2">
            {artists.map((artist) => (
              <Artist key={artist.name} {...artist} />
            ))}
          </div>

          <p className="text-sm mt-5">
            Your Top Songs
          </p>
          <div>
            {artists.map((song) => (
              <Song key={song.name} {...song} />
            ))}
          </div>
        </div>
      </div>
      
      <Link href="/create">
        <div className="flex items-center justify-center gap-x-2 py-4 rounded-full mt-8 bg-gray-200">
          <UsersThree size={24} />
          Create Session
        </div>
      </Link>
    </div>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}