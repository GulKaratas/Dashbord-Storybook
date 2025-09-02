"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { User, Mail, DollarSign, Calendar, FileText } from "lucide-react";

interface InvoiceFormData {
  clientName: string;
  clientEmail: string;
  amount: number;
  description: string;
  dueDate: string;
}

interface InvoiceFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (
    data: InvoiceFormData & {
      id: string;
      date: Date;
      status: "pending" | "completed";
    }
  ) => void;
}

export function InvoiceForm({ open, onClose, onSubmit }: InvoiceFormProps) {
  const [formData, setFormData] = useState<InvoiceFormData>({
    clientName: "",
    clientEmail: "",
    amount: 0,
    description: "",
    dueDate: "",
  });

  const [errors, setErrors] = useState<Partial<InvoiceFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<InvoiceFormData> = {};

    if (!formData.clientName.trim()) {
      newErrors.clientName = "Client name is required";
    }

    if (!formData.clientEmail.trim()) {
      newErrors.clientEmail = "Client email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.clientEmail)) {
      newErrors.clientEmail = "Invalid email format";
    }

    if (!formData.amount || formData.amount <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.dueDate) {
      newErrors.dueDate = "Due date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const invoice = {
        ...formData,
        id: `INV${Date.now()}`,
        date: new Date(),
        status: "pending" as const,
      };

      onSubmit(invoice);

      // Reset form
      setFormData({
        clientName: "",
        clientEmail: "",
        amount: 0,
        description: "",
        dueDate: "",
      });
      setErrors({});
      onClose();
    }
  };

  const handleInputChange = (
    field: keyof InvoiceFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create New Invoice"
      className="max-w-lg"
    >
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Client Name</label>
          <Input
            placeholder="Enter client name"
            leftIcon={<User className="h-4 w-4" />}
            value={formData.clientName}
            onChange={(e) => handleInputChange("clientName", e.target.value)}
            error={errors.clientName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Client Email</label>
          <Input
            type="email"
            placeholder="client@example.com"
            leftIcon={<Mail className="h-4 w-4" />}
            value={formData.clientEmail}
            onChange={(e) => handleInputChange("clientEmail", e.target.value)}
            error={errors.clientEmail}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Amount ($)</label>
          <Input
            type="number"
            placeholder="0.00"
            leftIcon={<DollarSign className="h-4 w-4" />}
            value={formData.amount || ""}
            onChange={(e) =>
              handleInputChange("amount", parseFloat(e.target.value) || 0)
            }
            error={errors.amount}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Input
            placeholder="Invoice description"
            leftIcon={<FileText className="h-4 w-4" />}
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            error={errors.description}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Due Date</label>
          <Input
            type="date"
            leftIcon={<Calendar className="h-4 w-4" />}
            value={formData.dueDate}
            onChange={(e) => handleInputChange("dueDate", e.target.value)}
            error={errors.dueDate}
          />
        </div>

        <div className="pt-4 border-t border-secondary-200">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Status:</span>
            <Badge variant="warning">Pending</Badge>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
            >
              Create Invoice
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}



