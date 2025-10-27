import { useGetUser } from '@/api/hooks/user/useGet/useGetUser'
import { Card } from '@/components/ui/card'
import { User, Mail } from 'lucide-react'

const UserReadingCard = () => {
  const { user } = useGetUser()

  return (
    <Card className="w-full rounded-md p-4 bg-card border-transparent relative">
      {user?.image && (
        <img
          src={user.image}
          alt="Foto do usuário"
          className="absolute top-4 right-4 h-10 w-10 rounded-full object-cover border border-gray-200 shadow-sm"
        />
      )}

      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <User className="h-5 w-5" />
        Informações do Cliente
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-muted-foreground" />
          <p className="font-medium">{user?.name}</p>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <p className="font-medium">{user?.email}</p>
        </div>
      </div>
    </Card>
  )
}

export { UserReadingCard }
