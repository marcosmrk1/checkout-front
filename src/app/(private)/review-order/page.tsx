import { redirectIfNoSession } from '@/app/api/auth/[...nextauth]/route'
import { ProgressOrderStep } from '@/components/ReviewOrder/ProgressOrder'
export default function Home() {
  redirectIfNoSession()
  return <ProgressOrderStep currentStep={1} />
}
