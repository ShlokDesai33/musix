import Layout from '@/components/layouts/mobile'
import Link from 'next/link'
import { themes } from '@/shared/constants'

export default function CreateSession() {
  return (
    <>
      <p className="text-xl font-semibold">
        Select a theme, {"Shlok"}
      </p>

      <div className="mt-4">
        {themes.map((theme) => (
          <Link
            key={theme.id}
            href={`/host?theme=${theme.id}`}
            prefetch={false}
          >
            <div className="mt-3 bg-slate-100 px-4 py-2 rounded-md">
              <p>{theme.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

CreateSession.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}