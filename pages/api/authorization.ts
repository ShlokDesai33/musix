import type { NextApiRequest, NextApiResponse } from 'next'

export default function Authorization(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  const scopes = [
    'streaming',
    'app-remote-control',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-read-playback-state'
  ]

  const redirectUri = 'http://localhost:3000/api/callback'
  const clientId = '1a1b5b6ffcd84abe970e58d7524b24ce'

  res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(' ')}`)
}