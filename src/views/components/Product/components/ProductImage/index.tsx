'use client'

import { ProductProps } from '@/views/models'
import Image from 'next/image'
import { useState } from 'react'

type ProductImageProps = {
   product: ProductProps
   fill?: boolean
}

export const ProductImage = ({ product, fill }: ProductImageProps) => {
   const [loading, setLoading] = useState(true)

   return (
      <>
         {fill && (
            <Image
               src={product.image}
               fill
               alt={product.title}
               className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                  loading
                     ? 'scale-110 blur-2xl grayscale'
                     : 'scale-100 blur-0 grayscale-0'
               }`}
               onLoadingComplete={() => setLoading(false)}
            />
         )}

         {!fill && (
            <Image
               src={product.image}
               alt={product.image}
               width={400}
               height={1000}
               className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                  loading
                     ? 'scale-110 blur-2xl grayscale'
                     : 'scale-100 blur-0 grayscale-0'
               }`}
               onLoadingComplete={() => setLoading(false)}
            />
         )}
      </>
   )
}
