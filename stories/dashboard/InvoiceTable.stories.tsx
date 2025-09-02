import type { Meta, StoryObj } from "@storybook/react";
import { InvoiceTable } from "../../src/components/dashboard/InvoiceTable";

const mockInvoices = [
  {
    id: "INV001",
    clientName: "Digital Design Ocean",
    clientEmail: "contact@digitaldesign.com",
    amount: 5500,
    description: "Website redesign project",
    dueDate: "2024-08-13",
    date: new Date("2024-07-13"),
    status: "pending" as const,
  },
  {
    id: "INV002",
    clientName: "Studio Canva School",
    clientEmail: "info@canvaschool.com",
    amount: 7300,
    description: "E-learning platform development",
    dueDate: "2024-06-20",
    date: new Date("2024-05-20"),
    status: "completed" as const,
  },
  {
    id: "INV003",
    clientName: "Ridho Tijan",
    clientEmail: "ridho@example.com",
    amount: 1500,
    description: "Logo design and branding",
    dueDate: "2024-05-10",
    date: new Date("2024-04-10"),
    status: "completed" as const,
  },
  {
    id: "INV004",
    clientName: "Tech Solutions Inc.",
    clientEmail: "hello@techsolutions.com",
    amount: 12000,
    description: "Mobile app development",
    dueDate: "2024-09-15",
    date: new Date("2024-08-15"),
    status: "pending" as const,
  },
];

const meta = {
  title: "Dashboard/InvoiceTable",
  component: InvoiceTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Fatura listesi tablosu. Detayları genişletilebilir satırlar ile.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invoices: mockInvoices,
  },
  render: (args) => (
    <div className="max-w-6xl">
      <InvoiceTable {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    invoices: [],
  },
  render: (args) => (
    <div className="max-w-6xl">
      <InvoiceTable {...args} />
    </div>
  ),
};

export const SingleInvoice: Story = {
  args: {
    invoices: [mockInvoices[0]],
  },
  render: (args) => (
    <div className="max-w-6xl">
      <InvoiceTable {...args} />
    </div>
  ),
};

export const MixedStatuses: Story = {
  args: {
    invoices: mockInvoices,
  },
  render: (args) => (
    <div className="max-w-6xl">
      <InvoiceTable {...args} />
    </div>
  ),
};



