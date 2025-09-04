import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";

const meta = {
  title: "UI Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Modal dialog komponenti. Overlay ile açılır ve kapanır.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Modal açık/kapalı durumu",
    },
    title: {
      control: { type: "text" },
      description: "Modal başlığı",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Modal boyutu",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Modal",
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <p>This is a basic modal with default styling.</p>
          <div className="flex gap-2 mt-4">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const WithForm: Story = {
  args: {
    title: "Create New Item",
    open: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                type="email"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                alert(`Created: ${name} (${email})`);
                setOpen(false);
              }}>
                Create
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const ConfirmationDialog: Story = {
  args: {
    title: "Confirm Delete",
    open: false,
    size: "sm",
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="space-y-4">
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => {
                alert("Item deleted!");
                setOpen(false);
              }}>
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const LargeModal: Story = {
  args: {
    title: "Large Content Modal",
    open: false,
    size: "lg",
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Content Overview</h3>
              <p className="text-gray-600 mb-4">
                This is a larger modal that can contain more content and complex layouts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Status Indicators</h4>
                <div className="flex gap-2">
                  <Badge variant="success">Active</Badge>
                  <Badge variant="warning">Pending</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Quick Actions</h4>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">Share</Button>
                  <Button size="sm" variant="outline">Export</Button>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 justify-end border-t pt-4">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button onClick={() => setOpen(false)}>
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const OpenByDefault: Story = {
  args: {
    title: "Always Open Modal",
    open: true,
    size: "md",
  },
  render: (args) => {
    const [open, setOpen] = useState(true);
    
    return (
      <Modal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="space-y-4">
          <p>This modal is open by default for demonstration purposes.</p>
          <div className="flex gap-2 justify-end">
            <Button onClick={() => setOpen(false)}>Close Modal</Button>
          </div>
        </div>
      </Modal>
    );
  },
};

