import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";
import {
  Plus,
  Download,
  ArrowRight,
  Settings,
  Edit,
  Eye,
  Trash2,
} from "lucide-react";

const meta = {
  title: "UI Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Temel buton komponenti. Farklı varyantlar ve boyutlar destekler.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Buton stili",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "Buton boyutu",
    },
    loading: {
      control: { type: "boolean" },
      description: "Yükleniyor durumu",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Pasif durumu",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button leftIcon={<Download className="h-4 w-4" />}>Download</Button>
      <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Continue</Button>
      <Button variant="outline" leftIcon={<Plus className="h-4 w-4" />}>
        Add Item
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button>Normal</Button>
      <Button loading>Loading...</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const InvoiceButton: Story = {
  render: () => (
    <Button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500">
      <Plus className="h-4 w-4 mr-2" />
      New Invoice
    </Button>
  ),
};

export const TableActions: Story = {
  render: () => (
    <div className="flex gap-1">
      <Button size="sm" variant="ghost">
        <Eye className="h-4 w-4" />
      </Button>
      <Button size="sm" variant="ghost">
        <Edit className="h-4 w-4" />
      </Button>
      <Button size="sm" variant="ghost">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  ),
};
