import { redirectIfNoSession } from '@/app/api/auth/[...nextauth]/route'
import { ProgressOrderStep } from '@/components/ReviewOrder/ProgressOrder'
export default async function Home() {
  await redirectIfNoSession()
  return <ProgressOrderStep currentStep={2} />
}
