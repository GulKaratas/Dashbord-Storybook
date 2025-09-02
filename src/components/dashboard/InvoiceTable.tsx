"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency, formatDate } from "@/lib/utils";
import { MoreHorizontal, ChevronDown, Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

interface Invoice {
  id: string;
  clientName: string;
  clientEmail: string;
  amount: number;
  description: string;
  dueDate: string;
  date: Date;
  status: "pending" | "completed";
}

interface InvoiceTableProps {
  invoices: Invoice[];
}

export function InvoiceTable({ invoices }: InvoiceTableProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);
  };

  const handleStatusChange = (invoiceId: string) => {
    // Bu fonksiyon parent'a status değişikliğini bildirebilir
    console.log("Status change for:", invoiceId);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Invoice History</CardTitle>
        <div className="flex items-center gap-2 text-sm text-secondary-600">
          <span>Total: {invoices.length}</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {invoices.length === 0 ? (
          <div className="p-8 text-center text-secondary-500">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
              📄
            </div>
            <p className="text-lg font-medium mb-2">No invoices yet</p>
            <p>Create your first invoice to get started</p>
          </div>
        ) : (
          <div className="space-y-0">
            {invoices.map((invoice) => (
              <div key={invoice.id}>
                <div className="flex items-center justify-between p-4 hover:bg-secondary-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium text-white ${
                        invoice.status === "completed"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }`}
                    >
                      {getInitials(invoice.clientName)}
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900">
                        {invoice.clientName}
                      </p>
                      <p className="text-sm text-secondary-600">
                        {invoice.description}
                      </p>
                      <Badge
                        variant={
                          invoice.status === "completed" ? "success" : "warning"
                        }
                        size="sm"
                        className="mt-1"
                      >
                        {invoice.status === "completed"
                          ? "Completed"
                          : "Pending"}
                      </Badge>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-secondary-600">
                      {formatDate(invoice.date)}
                    </p>
                    <p className="text-sm text-secondary-600">
                      Due: {new Date(invoice.dueDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-secondary-900">
                        {formatCurrency(invoice.amount)}
                      </p>
                      <p className="text-xs text-secondary-500">{invoice.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          setExpandedRow(
                            expandedRow === invoice.id ? null : invoice.id
                          )
                        }
                      >
                        <ChevronDown
                          className={`h-4 w-4 text-secondary-400 transition-transform ${
                            expandedRow === invoice.id ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4 text-secondary-400" />
                      </Button>
                    </div>
                  </div>
                </div>

                {expandedRow === invoice.id && (
                  <div className="border-t bg-secondary-50 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-secondary-700 mb-2">
                          Client Details
                        </p>
                        <div className="text-secondary-600 space-y-1">
                          <p>
                            <strong>Name:</strong> {invoice.clientName}
                          </p>
                          <p>
                            <strong>Email:</strong> {invoice.clientEmail}
                          </p>
                          <p>
                            <strong>Invoice ID:</strong> {invoice.id}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-secondary-700 mb-2">
                          Status
                        </p>
                        <Badge
                          variant={
                            invoice.status === "completed"
                              ? "success"
                              : "warning"
                          }
                          className="mb-2"
                        >
                          {invoice.status === "completed"
                            ? "Completed"
                            : "Pending"}
                        </Badge>
                        {invoice.status === "pending" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleStatusChange(invoice.id)}
                            className="block"
                          >
                            Mark as Paid
                          </Button>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-secondary-700 mb-2">
                          Dates
                        </p>
                        <div className="text-secondary-600 space-y-1">
                          <p>
                            <strong>Created:</strong> {formatDate(invoice.date)}
                          </p>
                          <p>
                            <strong>Due:</strong>{" "}
                            {new Date(invoice.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-secondary-700 mb-2">
                          Amount
                        </p>
                        <p className="text-2xl font-bold text-primary-600 mb-2">
                          {formatCurrency(invoice.amount)}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-3 w-3 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}




