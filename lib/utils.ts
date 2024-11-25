import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("ur-PK", {
    style: "currency",
    currency: "PKR",
  })

  return formatter.format(price)
}

export function constructMetadata({
  title = 'CinnamonVentures- Cinnamon Soapy Ventures',
  description = 'Hand-crafted oaps for your skin',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph:{
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://localhost:3000/")
  }
}