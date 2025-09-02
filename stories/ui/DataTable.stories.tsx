import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "../../src/components/ui/DataTable";
import { Badge } from "../../src/components/ui/Badge";

const meta = {
  title: "UI Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Advanced data table with sorting, filtering, pagination and bulk actions.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample invoice data
const invoiceData = [
  {
    id: "INV001",
    client: "Digital Design Ocean",
    email: "contact@digitaldesign.com",
    amount: 5500,
    status: "pending",
    dueDate: "2024-08-13",
    createdAt: "2024-07-13",
  },
  {
    id: "INV002",
    client: "Studio Canva School",
    email: "info@canvaschool.com",
    amount: 7300,
    status: "paid",
    dueDate: "2024-06-20",
    createdAt: "2024-05-20",
  },
  {
    id: "INV003",
    client: "Ridho Tijan",
    email: "ridho@example.com",
    amount: 1500,
    status: "overdue",
    dueDate: "2024-05-10",
    createdAt: "2024-04-10",
  },
  {
    id: "INV004",
    client: "Tech Innovations LLC",
    email: "contact@techinnovations.com",
    amount: 8900,
    status: "paid",
    dueDate: "2024-07-25",
    createdAt: "2024-06-25",
  },
  {
    id: "INV005",
    client: "Creative Agency Pro",
    email: "hello@creativeagency.com",
    amount: 3200,
    status: "draft",
    dueDate: "2024-09-01",
    createdAt: "2024-08-01",
  },
];

// Sample user data
const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2024-01-15",
    joinDate: "2023-06-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "active",
    lastLogin: "2024-01-14",
    joinDate: "2023-08-15",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "Moderator",
    status: "inactive",
    lastLogin: "2024-01-10",
    joinDate: "2023-12-01",
  },
];

const invoiceColumns = [
  {
    key: "id" as const,
    label: "Invoice ID",
    sortable: true,
    width: "w-24",
  },
  {
    key: "client" as const,
    label: "Client",
    sortable: true,
  },
  {
    key: "email" as const,
    label: "Email",
    sortable: true,
  },
  {
    key: "amount" as const,
    label: "Amount",
    sortable: true,
    render: (value: number) => `$${value.toLocaleString()}`,
  },
  {
    key: "status" as const,
    label: "Status",
    sortable: true,
    render: (value: string) => {
      const variants = {
        paid: "success" as const,
        pending: "warning" as const,
        overdue: "error" as const,
        draft: "secondary" as const,
      };
      return (
        <Badge variant={variants[value as keyof typeof variants]}>
          {value}
        </Badge>
      );
    },
  },
  {
    key: "dueDate" as const,
    label: "Due Date",
    sortable: true,
  },
];

const userColumns = [
  {
    key: "id" as const,
    label: "ID",
    sortable: true,
    width: "w-16",
  },
  {
    key: "name" as const,
    label: "Name",
    sortable: true,
  },
  {
    key: "email" as const,
    label: "Email",
    sortable: true,
  },
  {
    key: "role" as const,
    label: "Role",
    sortable: true,
    render: (value: string) => {
      const variants = {
        Admin: "error" as const,
        Moderator: "warning" as const,
        User: "info" as const,
      };
      return (
        <Badge variant={variants[value as keyof typeof variants]}>
          {value}
        </Badge>
      );
    },
  },
  {
    key: "status" as const,
    label: "Status",
    sortable: true,
    render: (value: string) => (
      <Badge variant={value === "active" ? "success" : "secondary"}>
        {value}
      </Badge>
    ),
  },
  {
    key: "lastLogin" as const,
    label: "Last Login",
    sortable: true,
  },
];

export const InvoiceTable: Story = {
  args: {
    data: invoiceData,
    columns: invoiceColumns,
    searchable: true,
    searchKeys: ["id", "client", "email"],
    actions: [
      {
        label: "View",
        onClick: (row) => alert(`Viewing invoice ${row.id}`),
        variant: "ghost",
      },
      {
        label: "Edit",
        onClick: (row) => alert(`Editing invoice ${row.id}`),
        variant: "default",
      },
      {
        label: "Delete",
        onClick: (row) => alert(`Deleting invoice ${row.id}`),
        variant: "destructive",
      },
    ],
  },
};

export const UserTable: Story = {
  args: {
    data: userData,
    columns: userColumns,
    searchable: true,
    searchKeys: ["name", "email", "role"],
    pageSize: 5,
    actions: [
      {
        label: "Edit",
        onClick: (row) => alert(`Editing user ${row.name}`),
        variant: "default",
      },
      {
        label: "Deactivate",
        onClick: (row) => alert(`Deactivating user ${row.name}`),
        variant: "destructive",
      },
    ],
  },
};

export const SimpleTable: Story = {
  args: {
    data: invoiceData.slice(0, 3),
    columns: invoiceColumns.slice(0, 4),
    searchable: false,
    filterable: false,
    exportable: false,
    pagination: false,
  },
};

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 50 }, (_, i) => ({
      id: `INV${String(i + 1).padStart(3, "0")}`,
      client: `Client ${i + 1}`,
      email: `client${i + 1}@example.com`,
      amount: Math.floor(Math.random() * 10000) + 1000,
      status: ["paid", "pending", "overdue", "draft"][
        Math.floor(Math.random() * 4)
      ],
      dueDate: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      createdAt: new Date(
        Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .split("T")[0],
    })),
    columns: invoiceColumns,
    searchable: true,
    pageSize: 10,
    actions: [
      {
        label: "View",
        onClick: (row) => alert(`Viewing ${row.id}`),
        variant: "ghost",
      },
    ],
  },
};


