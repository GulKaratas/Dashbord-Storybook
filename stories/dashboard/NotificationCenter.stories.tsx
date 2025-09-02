import type { Meta, StoryObj } from "@storybook/react";
import { NotificationCenter } from "../../src/components/dashboard/NotificationCenter";

const meta = {
  title: "Dashboard/NotificationCenter",
  component: NotificationCenter,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Notification center component with filtering and actions.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const EmptyState: Story = {
  args: {
    notifications: [],
  },
};

export const ManyNotifications: Story = {
  args: {
    notifications: [
      {
        id: "1",
        type: "success",
        title: "Payment Received",
        message: "Digital Design Ocean paid invoice INV001 ($5,500)",
        timestamp: "2 minutes ago",
        read: false,
        actionRequired: false,
      },
      {
        id: "2",
        type: "warning",
        title: "Invoice Due Soon",
        message: "Invoice INV003 for Ridho Tijan is due in 2 days",
        timestamp: "1 hour ago",
        read: false,
        actionRequired: true,
      },
      {
        id: "3",
        type: "info",
        title: "New Client Added",
        message: "Tech Innovations LLC has been added to your client list",
        timestamp: "3 hours ago",
        read: true,
        actionRequired: false,
      },
      {
        id: "4",
        type: "error",
        title: "Payment Failed",
        message: "Payment attempt for invoice INV005 was declined",
        timestamp: "1 day ago",
        read: false,
        actionRequired: true,
      },
      {
        id: "5",
        type: "success",
        title: "Invoice Sent",
        message: "Invoice INV007 has been sent to startup@example.com",
        timestamp: "2 days ago",
        read: true,
        actionRequired: false,
      },
      {
        id: "6",
        type: "warning",
        title: "Subscription Expiring",
        message: "Your premium plan expires in 5 days",
        timestamp: "3 days ago",
        read: false,
        actionRequired: true,
      },
      {
        id: "7",
        type: "info",
        title: "System Update",
        message: "New features have been added to your dashboard",
        timestamp: "1 week ago",
        read: true,
        actionRequired: false,
      },
    ],
  },
};

export const HighPriorityNotifications: Story = {
  args: {
    notifications: [
      {
        id: "1",
        type: "error",
        title: "Critical: Server Down",
        message: "Payment processing server is currently unavailable",
        timestamp: "5 minutes ago",
        read: false,
        actionRequired: true,
      },
      {
        id: "2",
        type: "error",
        title: "Payment Failed",
        message: "Multiple payment attempts have failed for invoice INV123",
        timestamp: "10 minutes ago",
        read: false,
        actionRequired: true,
      },
      {
        id: "3",
        type: "warning",
        title: "Account Limit Reached",
        message: "You've reached 90% of your monthly invoice limit",
        timestamp: "30 minutes ago",
        read: false,
        actionRequired: true,
      },
      {
        id: "4",
        type: "warning",
        title: "Overdue Invoice",
        message: "Invoice INV098 is now 30 days overdue",
        timestamp: "2 hours ago",
        read: false,
        actionRequired: true,
      },
    ],
  },
};

export const SuccessNotifications: Story = {
  args: {
    notifications: [
      {
        id: "1",
        type: "success",
        title: "Monthly Target Achieved",
        message: "Congratulations! You've reached your monthly revenue goal",
        timestamp: "1 hour ago",
        read: false,
        actionRequired: false,
      },
      {
        id: "2",
        type: "success",
        title: "Large Payment Received",
        message: "Enterprise client paid $25,000 invoice",
        timestamp: "3 hours ago",
        read: false,
        actionRequired: false,
      },
      {
        id: "3",
        type: "success",
        title: "New Milestone",
        message: "You've successfully processed 1000 invoices!",
        timestamp: "1 day ago",
        read: true,
        actionRequired: false,
      },
      {
        id: "4",
        type: "success",
        title: "Client Upgraded",
        message: "Acme Corp upgraded to premium plan",
        timestamp: "2 days ago",
        read: true,
        actionRequired: false,
      },
    ],
  },
};


