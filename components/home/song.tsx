import Image from "next/image"

export default function Song({ name, image, artist }: Props) {
  return (
    <div className="flex items-center mt-3">
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
      />
      <div className="ml-2">
        <p className="text-sm text-gray-800 truncate">{name}</p>
        <p className="text-sm text-gray-600 truncate">{artist}</p>
      </div>
    </div>
  )
}

// ------------------------------ //
// types

type Props = {
  name: string
  image: string
  artist: string
}