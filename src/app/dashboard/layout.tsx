'use client'

import { Sidebar } from '@/components/ui/Sidebar'
import { SIDEBAR_ITEMS } from '@/lib/constants'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-secondary-50">
      <Sidebar 
        items={SIDEBAR_ITEMS} 
        collapsed={sidebarCollapsed}
      />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}


