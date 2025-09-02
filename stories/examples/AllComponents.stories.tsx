import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../src/components/ui/Button";
import { Input } from "../../src/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../../src/components/ui/Card";
import { Badge } from "../../src/components/ui/Badge";
import { StatCard } from "../../src/components/dashboard/StatCard";
import { Search, Plus, Users, DollarSign, Mail, User } from "lucide-react";

const meta = {
  title: "Examples/All Components Showcase",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Tüm komponentlerin bir arada kullanım örneği",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentLibraryShowcase: Story = {
  render: () => (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-secondary-900">
          UI Component Library
        </h1>
        <p className="text-lg text-secondary-600">
          Modern, accessible, and themeable React components
        </p>
      </div>

      {/* Button Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Primary Actions</h4>
            <div className="flex gap-3 flex-wrap">
              <Button>Create Invoice</Button>
              <Button variant="secondary">Save Draft</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">With Icons</h4>
            <div className="flex gap-3 flex-wrap">
              <Button leftIcon={<Plus className="h-4 w-4" />}>
                Add New
              </Button>
              <Button variant="outline" rightIcon={<Search className="h-4 w-4" />}>
                Search
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">States</h4>
            <div className="flex gap-3 flex-wrap">
              <Button>Normal</Button>
              <Button loading>Loading...</Button>
              <Button disabled>Disabled</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input 
                placeholder="Enter your name"
                leftIcon={<User className="h-4 w-4" />}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input 
                type="email"
                placeholder="your@email.com"
                leftIcon={<Mail className="h-4 w-4" />}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Search</label>
              <Input 
                placeholder="Search invoices..."
                leftIcon={<Search className="h-4 w-4" />}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Error State</label>
              <Input 
                placeholder="This field has an error"
                error="This field is required"
                leftIcon={<User className="h-4 w-4" />}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badge Showcase */}
      <Card>
        <CardHeader>
          <CardTitle>Status Indicators</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3">Payment Status</h4>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="success">Paid</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="error">Failed</Badge>
              <Badge variant="info">Processing</Badge>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">User Roles</h4>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="default">Admin</Badge>
              <Badge variant="secondary">User</Badge>
              <Badge variant="info">Moderator</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Showcase */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Dashboard Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Users"
            value="2,543"
            icon={<Users className="h-6 w-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Revenue"
            value="$34,200"
            icon={<DollarSign className="h-6 w-6" />}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Conversion Rate"
            value="3.2%"
            icon={<Users className="h-6 w-6" />}
            trend={{ value: 2, isPositive: false }}
          />
        </div>
      </div>

      {/* Layout Example */}
      <Card>
        <CardHeader>
          <CardTitle>Layout Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Input 
                placeholder="Search..."
                leftIcon={<Search className="h-4 w-4" />}
                className="w-64"
              />
              <Badge variant="info">24 results</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Filter</Button>
              <Button leftIcon={<Plus className="h-4 w-4" />}>
                Add New
              </Button>
            </div>
          </div>
          
          <div className="text-center py-8 text-secondary-500">
            <p>Content area with proper spacing and alignment</p>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const DarkThemeExample: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div className="space-y-6 p-6 bg-secondary-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold">Dark Theme Example</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-secondary-800 border-secondary-700">
          <CardHeader>
            <CardTitle className="text-white">Dark Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-300 mb-4">
              Components adapting to dark theme
            </p>
            <div className="flex gap-2">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          <Input placeholder="Dark theme input" />
          <div className="flex gap-2">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};



