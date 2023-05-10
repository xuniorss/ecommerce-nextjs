import ProductView from '@/views/Product/[id]'

export default function Product({
   params: { id },
}: {
   params: { id: string }
}) {
   return <ProductView productid={id} />
}
