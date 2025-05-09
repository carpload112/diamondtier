import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diamond-Tier-Inverted-Color-2400x1800-3-1024x768-kC0UNo9ToKek1cV72cw2aDelalBEv2.png"
        alt="Diamond Tier Agency"
        width={150}
        height={112}
        priority
        className="w-auto h-auto"
      />
    </Link>
  )
}
