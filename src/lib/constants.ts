import { 
  LayoutDashboard, 
  FileText, 
  Inbox, 
  Star, 
  Trash2, 
  BarChart3, 
  Calendar, 
  LogOut,
  Palette
} from 'lucide-react'
import { SidebarItem, DashboardStats, ActivityItem } from '@/types'

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    id: 'components',
    label: 'Components',
    icon: Palette,
    href: '/dashboard/components',
  },
  {
    id: 'draft',
    label: 'Draft',
    icon: FileText,
    href: '/dashboard/draft',
  },
  {
    id: 'inbox',
    label: 'Inbox',
    icon: Inbox,
    href: '/dashboard/inbox',
    badge: '12',
  },
  {
    id: 'favorite',
    label: 'Favorite',
    icon: Star,
    href: '/dashboard/favorite',
  },
  {
    id: 'delete',
    label: 'Delete',
    icon: Trash2,
    href: '/dashboard/delete',
  },
  {
    id: 'statistics',
    label: 'Statistics',
    icon: BarChart3,
    href: '/dashboard/statistics',
  },
  {
    id: 'schedule',
    label: 'Schedule',
    icon: Calendar,
    href: '/dashboard/schedule',
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: LogOut,
    href: '/logout',
  },
]

export const MOCK_STATS: DashboardStats = {
  totalUsers: 100,
  totalRevenue: 25000,
  totalOrders: 10,
  conversionRate: 3.2,
}

export const MOCK_ACTIVITIES: ActivityItem[] = [
  {
    id: '1',
    user: 'Digital Design Ocean',
    action: 'Payment received',
    timestamp: new Date('2024-08-13'),
    status: 'warning',
  },
  {
    id: '2',
    user: 'Studio Canva School',
    action: 'Invoice completed',
    timestamp: new Date('2024-06-20'),
    status: 'success',
  },
  {
    id: '3',
    user: 'Ridho Tijan',
    action: 'Payment completed',
    timestamp: new Date('2024-05-10'),
    status: 'success',
  },
]


