import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InvoiceForm } from "../../src/components/dashboard/InvoiceForm";
import { Button } from "../../src/components/ui/Button";

const meta = {
  title: "Dashboard/InvoiceForm",
  component: InvoiceForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Yeni fatura oluşturma formu. Modal içinde açılır.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InvoiceForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Invoice Form</Button>
        <InvoiceForm
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={(invoice) => {
            console.log("New invoice:", invoice);
            alert(
              `Invoice created for ${invoice.clientName}: $${invoice.amount}`
            );
          }}
        />
      </>
    );
  },
};

export const OpenByDefault: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <InvoiceForm
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(invoice) => {
          console.log("New invoice:", invoice);
          setOpen(false);
        }}
      />
    );
  },
};



