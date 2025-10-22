import { Card } from '@/components/ui/card'
import { User, Mail, Phone, MapPin } from 'lucide-react'

const UserReadingCard = () => {
  // Dados mockados do usuário
  const user = {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    address: 'Rua Exemplo, 123 - São Paulo, SP',
  }

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <User className="h-5 w-5" />
        Informações do Cliente
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-muted-foreground" />
          <p className="font-medium">{user.name}</p>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <p className="font-medium">{user.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <p className="font-medium">{user.phone}</p>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <p className="font-medium">{user.address}</p>
        </div>
      </div>
    </Card>
  )
}

export { UserReadingCard }
