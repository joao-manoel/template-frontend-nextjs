'use client'
import { Button } from '@/components/form/button'
import { useAuthContext } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { user, signOut, isLoading } = useAuthContext()
  console.log(isLoading)
  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1>Dashboard {user?.username}</h1>
        <Button onClick={signOut}>Logout</Button>
      </main>
    )
  }
}
