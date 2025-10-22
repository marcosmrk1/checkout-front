import { HeaderCatalog } from '@/components/Catalog/Header'
import { ListProductPrice } from '@/components/Catalog/ListProductPrice'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <HeaderCatalog />
      <ListProductPrice />
    </div>
  )
}
