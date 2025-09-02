import type { Meta, StoryObj } from '@storybook/react'
import { StatCard } from '../../src/components/dashboard/StatCard'
import { Users, ShoppingCart, TrendingUp, DollarSign, FileText, Clock } from 'lucide-react'

const meta = {
  title: 'Dashboard/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dashboard istatistik kartları. İkon, trend ve değer gösterimi ile.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
    icon: <Users className="h-6 w-6" />,
  },
}

export const WithPositiveTrend: Story = {
  args: {
    title: 'Total Revenue',
    value: '$24,500',
    icon: <DollarSign className="h-6 w-6" />,
    trend: {
      value: 12,
      isPositive: true,
    },
  },
}

export const WithNegativeTrend: Story = {
  args: {
    title: 'Bounce Rate',
    value: '2.4%',
    icon: <TrendingUp className="h-6 w-6" />,
    trend: {
      value: 5,
      isPositive: false,
    },
  },
}

export const InvoiceDashboard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      <StatCard
        title="Clients Added"
        value="100"
        icon={<div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-400 rounded" />
        </div>}
      />
      <StatCard
        title="Contracts Signed"
        value="10"
        icon={<div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-400 rounded" />
        </div>}
      />
      <StatCard
        title="Invoices Sent"
        value="3"
        icon={<div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-400 rounded" />
        </div>}
      />
    </div>
  ),
}

export const BusinessMetrics: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
      <StatCard
        title="Active Users"
        value="2,543"
        icon={<Users className="h-6 w-6" />}
        trend={{ value: 15, isPositive: true }}
      />
      <StatCard
        title="Monthly Revenue"
        value="$34,200"
        icon={<DollarSign className="h-6 w-6" />}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        title="Total Orders"
        value="1,845"
        icon={<ShoppingCart className="h-6 w-6" />}
        trend={{ value: 3, isPositive: false }}
      />
      <StatCard
        title="Pending Tasks"
        value="28"
        icon={<Clock className="h-6 w-6" />}
        trend={{ value: 12, isPositive: false }}
      />
    </div>
  ),
}

export const LargeNumbers: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
      <StatCard
        title="Page Views"
        value="1,234,567"
        icon={<TrendingUp className="h-6 w-6" />}
        trend={{ value: 23, isPositive: true }}
      />
      <StatCard
        title="Downloads"
        value="89.2K"
        icon={<FileText className="h-6 w-6" />}
        trend={{ value: 45, isPositive: true }}
      />
    </div>
  ),
}



