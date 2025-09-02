import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../src/components/ui/Input'
import { Search, User, Mail, Lock, Phone, CreditCard } from 'lucide-react'

const meta = {
  title: 'UI Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Form input komponenti. Çeşitli ikonlar ve hata durumları destekler.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'tel'],
      description: 'Input tipi',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Pasif durumu',
    },
    error: {
      control: { type: 'text' },
      description: 'Hata mesajı',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        placeholder="Search..."
        leftIcon={<Search className="h-4 w-4" />}
      />
      <Input
        placeholder="Username"
        leftIcon={<User className="h-4 w-4" />}
      />
      <Input
        type="email"
        placeholder="Email address"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <Input
        type="password"
        placeholder="Password"
        leftIcon={<Lock className="h-4 w-4" />}
      />
    </div>
  ),
}

export const FormInputs: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input
          type="email"
          placeholder="your@email.com"
          leftIcon={<Mail className="h-4 w-4" />}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <Input
          type="tel"
          placeholder="+90 (555) 123-4567"
          leftIcon={<Phone className="h-4 w-4" />}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Card Number</label>
        <Input
          placeholder="1234 5678 9012 3456"
          leftIcon={<CreditCard className="h-4 w-4" />}
        />
      </div>
    </div>
  ),
}

export const ErrorStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        placeholder="Enter email"
        error="This field is required"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <Input
        type="password"
        placeholder="Password"
        error="Password must be at least 8 characters"
        leftIcon={<Lock className="h-4 w-4" />}
      />
    </div>
  ),
}

export const SearchBar: Story = {
  render: () => (
    <div className="w-96">
      <Input
        placeholder="Search invoices, customers..."
        leftIcon={<Search className="h-4 w-4" />}
        className="bg-white shadow-sm"
      />
    </div>
  ),
}




