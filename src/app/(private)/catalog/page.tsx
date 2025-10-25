import { redirectIfNoSession } from '@/app/api/auth/[...nextauth]/route'
import { HeaderCatalog } from '@/components/Catalog/Header'
import { ListProductPrice } from '@/components/Catalog/ListProductPrice'

export default async function Home() {
  redirectIfNoSession()
  return (
    <div>
      <HeaderCatalog />
      <ListProductPrice />
    </div>
  )
}
