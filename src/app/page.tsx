import { Product } from '@/views/components/Product'
import { ProductProps } from '@/views/models'

export default async function Home() {
   const response = await fetch('https://fakestoreapi.com/products')
   const products: ProductProps[] = await response.json()

   return (
      <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
         <section className="flex flex-col space-y-12 pb-44">
            <h1 className="text-5xl font-bold text-center uppercase">
               Promoções do dia
            </h1>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
               {products.map((product) => (
                  <Product key={product.id} product={product} />
               ))}
            </div>
         </section>
      </main>
   )
}
