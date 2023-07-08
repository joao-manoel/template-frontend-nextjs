'use client'
import { useAuthContext } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { user, signOut } = useAuthContext()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Dashboard {user?.username}</h1>
      <button className="bg-red-500 py-2 px-10" onClick={signOut}>
        Logout
      </button>
    </main>
  )
}
