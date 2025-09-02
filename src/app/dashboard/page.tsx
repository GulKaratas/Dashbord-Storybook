"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { StatCard } from "@/components/dashboard/StatCard";
import { InvoiceForm } from "@/components/dashboard/InvoiceForm";
import { InvoiceTable } from "@/components/dashboard/InvoiceTable";
import { AnalyticsWidget } from "@/components/dashboard/AnalyticsWidget";
import { NotificationCenter } from "@/components/dashboard/NotificationCenter";
import {
  Search,
  Plus,
  Grid3X3,
  Menu,
  DollarSign,
  Users,
  FileText,
  Activity,
} from "lucide-react";

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

export default function DashboardPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV001",
      clientName: "Digital Design Ocean",
      clientEmail: "contact@digitaldesign.com",
      amount: 5500,
      description: "Website redesign project",
      dueDate: "2024-08-13",
      date: new Date("2024-07-13"),
      status: "pending",
    },
    {
      id: "INV002",
      clientName: "Studio Canva School",
      clientEmail: "info@canvaschool.com",
      amount: 7300,
      description: "E-learning platform development",
      dueDate: "2024-06-20",
      date: new Date("2024-05-20"),
      status: "completed",
    },
    {
      id: "INV003",
      clientName: "Ridho Tijan",
      clientEmail: "ridho@example.com",
      amount: 1500,
      description: "Logo design and branding",
      dueDate: "2024-05-10",
      date: new Date("2024-04-10"),
      status: "completed",
    },
  ]);

  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreateInvoice = (newInvoice: Invoice) => {
    setInvoices((prev) => [newInvoice, ...prev]);
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      title: "Clients Added",
      value: new Set(invoices.map((inv) => inv.clientEmail)).size.toString(),
      icon: (
        <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-400 rounded" />
        </div>
      ),
    },
    {
      title: "Contracts Signed",
      value: invoices
        .filter((inv) => inv.status === "completed")
        .length.toString(),
      icon: (
        <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-400 rounded" />
        </div>
      ),
    },
    {
      title: "Invoices Sent",
      value: invoices.length.toString(),
      icon: (
        <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center">
          <div className="w-4 h-4 bg-yellow-400 rounded" />
        </div>
      ),
    },
  ];

  // Analytics data
  const analyticsData = [
    {
      title: "Total Revenue",
      value: `$${invoices
        .filter((inv) => inv.status === "completed")
        .reduce((sum, inv) => sum + inv.amount, 0)
        .toLocaleString()}`,
      change: 12.5,
      changeLabel: "vs last month",
      icon: <DollarSign className="h-4 w-4" />,
      color: "blue" as const,
    },
    {
      title: "Active Clients",
      value: new Set(invoices.map((inv) => inv.clientEmail)).size.toString(),
      change: 8.2,
      changeLabel: "vs last month",
      icon: <Users className="h-4 w-4" />,
      color: "green" as const,
    },
    {
      title: "Pending Invoices",
      value: invoices
        .filter((inv) => inv.status === "pending")
        .length.toString(),
      change: -5.1,
      changeLabel: "vs last month",
      icon: <FileText className="h-4 w-4" />,
      color: "yellow" as const,
    },
    {
      title: "Success Rate",
      value: `${Math.round(
        (invoices.filter((inv) => inv.status === "completed").length /
          invoices.length) *
          100
      )}%`,
      change: 15.3,
      changeLabel: "vs last month",
      icon: <Activity className="h-4 w-4" />,
      color: "purple" as const,
    },
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <Input
            placeholder="Search invoices, clients..."
            leftIcon={<Search className="h-4 w-4" />}
            className="bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Grid3X3 className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <Button
            className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
            onClick={() => setIsInvoiceModalOpen(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 p-8">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-secondary-900">
              Professional Invoices Made Easy.
            </h1>
            <p className="text-lg text-secondary-600 max-w-md">
              Quickly understand who your best customers are or who need a
              little motivation to pay their bills.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Tutorial
            </Button>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-64 h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg transform rotate-12 opacity-80" />
              <div className="absolute top-4 left-4 w-56 h-40 bg-white rounded-lg shadow-xl transform -rotate-6">
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-secondary-200 rounded w-3/4" />
                  <div className="h-2 bg-secondary-100 rounded w-1/2" />
                  <div className="h-2 bg-secondary-100 rounded w-2/3" />
                  <div className="space-y-1">
                    <div className="h-1 bg-blue-200 rounded w-full" />
                    <div className="h-1 bg-blue-200 rounded w-4/5" />
                    <div className="h-1 bg-blue-200 rounded w-3/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-secondary-900">Overview</h2>
          <div className="flex items-center gap-2 text-sm text-secondary-600">
            <span>This Week</span>
            <Button variant="ghost" size="sm">
              ↓
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>

      {/* Analytics Widget */}
      <AnalyticsWidget data={analyticsData} period="This Month" />

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment History - Takes 2 columns */}
        <div className="lg:col-span-2">
          <InvoiceTable invoices={filteredInvoices} />
        </div>

        {/* Notification Center - Takes 1 column */}
        <div className="lg:col-span-1">
          <NotificationCenter />
        </div>
      </div>

      {/* Invoice Form Modal */}
      <InvoiceForm
        open={isInvoiceModalOpen}
        onClose={() => setIsInvoiceModalOpen(false)}
        onSubmit={handleCreateInvoice}
      />
    </div>
  );
}
