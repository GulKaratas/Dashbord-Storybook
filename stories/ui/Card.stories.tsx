import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../src/components/ui/Card'
import { Button } from '../../src/components/ui/Button'
import { Badge } from '../../src/components/ui/Badge'
import { MoreHorizontal, TrendingUp, Users, DollarSign } from 'lucide-react'

const meta = {
  title: 'UI Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Esnek card komponenti. Başlık, içerik ve footer bölümleri ile.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a simple card description explaining what the card contains.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. This can include any type of content.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const StatsCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold">1,234</p>
              <p className="text-sm text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-3xl font-bold">$24,500</p>
              <p className="text-sm text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion</p>
              <p className="text-3xl font-bold">3.2%</p>
              <p className="text-sm text-red-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                -2% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
}

export const PaymentCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-medium">
              SCS
            </div>
            <div>
              <p className="font-medium">Studio Canva School</p>
              <Badge variant="success" size="sm">Completed</Badge>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Jun 20, 2024</p>
            <p className="text-sm text-gray-600">Paypal</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">$7300</p>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-80 p-6">
      <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
      <p className="text-gray-600">
        A simple card with just content, no header or footer.
      </p>
    </Card>
  ),
}




