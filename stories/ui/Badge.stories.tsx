import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../src/components/ui/Badge";

const meta = {
  title: "UI Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Durum ve kategori belirtmek için kullanılan badge komponenti.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "success", "warning", "error", "info"],
      description: "Badge renk teması",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Badge boyutu",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Payment Status</h4>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="success">Completed</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Failed</Badge>
          <Badge variant="info">Processing</Badge>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">User Roles</h4>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Admin</Badge>
          <Badge variant="secondary">User</Badge>
          <Badge variant="info">Moderator</Badge>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Invoice Types</h4>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="success">Paid</Badge>
          <Badge variant="warning">Draft</Badge>
          <Badge variant="error">Overdue</Badge>
          <Badge variant="info">Sent</Badge>
        </div>
      </div>
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Destructive: Story = {
  args: {
    variant: "error",
    children: "Destructive",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button className="p-2 bg-gray-100 rounded-lg">📧</button>
        <Badge
          variant="error"
          size="sm"
          className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 flex items-center justify-center text-xs"
        >
          3
        </Badge>
      </div>

      <div className="relative">
        <button className="p-2 bg-gray-100 rounded-lg">🔔</button>
        <Badge
          variant="warning"
          size="sm"
          className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 flex items-center justify-center text-xs"
        >
          12
        </Badge>
      </div>
    </div>
  ),
};
