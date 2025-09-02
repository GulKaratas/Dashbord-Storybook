"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/dashboard/StatCard";
import { Plus, Search, User, Mail, Users, DollarSign } from "lucide-react";

export default function ComponentsPage() {
  return (
    <div className="flex-1 space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          UI Component Showcase
        </h1>
        <p className="text-secondary-600">
          Reusable components documentation and examples
        </p>
      </div>

      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-3">Variants</h4>
            <div className="flex gap-2 flex-wrap">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Sizes</h4>
            <div className="flex gap-2 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Plus className="h-4 w-4" /></Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">With Icons</h4>
            <div className="flex gap-2 flex-wrap">
              <Button leftIcon={<Plus className="h-4 w-4" />}>
                Add Item
              </Button>
              <Button variant="outline" rightIcon={<Search className="h-4 w-4" />}>
                Search
              </Button>
              <Button loading>Loading...</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inputs */}
      <Card>
        <CardHeader>
          <CardTitle>Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Basic input" />
            <Input 
              placeholder="With left icon"
              leftIcon={<User className="h-4 w-4" />}
            />
            <Input 
              placeholder="With right icon"
              rightIcon={<Search className="h-4 w-4" />}
            />
            <Input 
              placeholder="Email input"
              type="email"
              leftIcon={<Mail className="h-4 w-4" />}
            />
            <Input 
              placeholder="Error state"
              error="This field is required"
              leftIcon={<User className="h-4 w-4" />}
            />
            <Input 
              placeholder="Disabled input"
              disabled
              leftIcon={<User className="h-4 w-4" />}
            />
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-3">Variants</h4>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Sizes</h4>
            <div className="flex gap-2 items-center">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Status Examples</h4>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="success">Completed</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="error">Failed</Badge>
              <Badge variant="info">In Progress</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stat Cards */}
      <Card>
        <CardHeader>
          <CardTitle>Stat Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Total Users"
              value="1,234"
              icon={<Users className="h-6 w-6" />}
            />
            <StatCard
              title="Revenue"
              value="$24,500"
              icon={<DollarSign className="h-6 w-6" />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              title="Conversion Rate"
              value="3.2%"
              icon={<Users className="h-6 w-6" />}
              trend={{ value: 5, isPositive: false }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Cards */}
      <Card>
        <CardHeader>
          <CardTitle>Cards</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-600">
                  This is a simple card with header and content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Badge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Badge variant="success">Active</Badge>
                  <span className="text-secondary-600">Status indicator</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


