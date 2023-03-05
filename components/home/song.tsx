import Image from "next/image"

export default function Song({ name, image, artist }: Props) {
  return (
    <div className="flex items-center mt-3 mr-2">
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
      />
      <div>
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