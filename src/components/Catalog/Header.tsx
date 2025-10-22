import { ListProductPrice } from '@/components/Catalog/ListProductPrice'

const HeaderCatalog = () => {
  const productCount = 4

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-foreground mb-1">Todos os Produtos</h1>
      <p className="text-sm ">{productCount} produtos encontrados</p>
    </div>
  )
}
export { HeaderCatalog }
