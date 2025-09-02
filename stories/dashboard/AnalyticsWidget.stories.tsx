import type { Meta, StoryObj } from "@storybook/react";
import { AnalyticsWidget } from "../../src/components/dashboard/AnalyticsWidget";
import {
  DollarSign,
  Users,
  FileText,
  Activity,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const meta = {
  title: "Dashboard/AnalyticsWidget",
  component: AnalyticsWidget,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Analytics dashboard widget with metrics and trend visualization.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    period: {
      control: { type: "text" },
      description: "Time period for the analytics data",
    },
  },
} satisfies Meta<typeof AnalyticsWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: 12.5,
    changeLabel: "vs last month",
    icon: <DollarSign className="h-4 w-4" />,
    color: "blue" as const,
  },
  {
    title: "Active Users",
    value: "2,543",
    change: 8.2,
    changeLabel: "vs last month",
    icon: <Users className="h-4 w-4" />,
    color: "green" as const,
  },
  {
    title: "Total Orders",
    value: "1,234",
    change: -2.4,
    changeLabel: "vs last month",
    icon: <FileText className="h-4 w-4" />,
    color: "yellow" as const,
  },
  {
    title: "Conversion Rate",
    value: "3.8%",
    change: 15.3,
    changeLabel: "vs last month",
    icon: <Activity className="h-4 w-4" />,
    color: "purple" as const,
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    period: "This Month",
  },
};

export const WeeklyAnalytics: Story = {
  args: {
    data: [
      {
        title: "Revenue",
        value: "$12,847",
        change: 5.4,
        changeLabel: "vs last week",
        icon: <DollarSign className="h-4 w-4" />,
        color: "blue" as const,
      },
      {
        title: "New Customers",
        value: "127",
        change: 18.7,
        changeLabel: "vs last week",
        icon: <Users className="h-4 w-4" />,
        color: "green" as const,
      },
      {
        title: "Orders",
        value: "284",
        change: -5.2,
        changeLabel: "vs last week",
        icon: <FileText className="h-4 w-4" />,
        color: "yellow" as const,
      },
      {
        title: "Avg Order Value",
        value: "$89.34",
        change: 12.1,
        changeLabel: "vs last week",
        icon: <TrendingUp className="h-4 w-4" />,
        color: "purple" as const,
      },
    ],
    period: "This Week",
  },
};

export const SaaSMetrics: Story = {
  args: {
    data: [
      {
        title: "Monthly Recurring Revenue",
        value: "$125,430",
        change: 23.1,
        changeLabel: "MoM growth",
        icon: <CreditCard className="h-4 w-4" />,
        color: "blue" as const,
      },
      {
        title: "Active Subscribers",
        value: "8,439",
        change: 12.5,
        changeLabel: "vs last month",
        icon: <Users className="h-4 w-4" />,
        color: "green" as const,
      },
      {
        title: "Churn Rate",
        value: "2.3%",
        change: -8.2,
        changeLabel: "vs last month",
        icon: <Activity className="h-4 w-4" />,
        color: "yellow" as const,
      },
      {
        title: "Customer LTV",
        value: "$2,847",
        change: 15.7,
        changeLabel: "vs last month",
        icon: <TrendingUp className="h-4 w-4" />,
        color: "purple" as const,
      },
    ],
    period: "SaaS Metrics",
  },
};

export const EcommerceMetrics: Story = {
  args: {
    data: [
      {
        title: "Total Sales",
        value: "$89,472",
        change: 19.3,
        changeLabel: "vs last month",
        icon: <DollarSign className="h-4 w-4" />,
        color: "blue" as const,
      },
      {
        title: "Website Visitors",
        value: "45,721",
        change: 7.8,
        changeLabel: "vs last month",
        icon: <Users className="h-4 w-4" />,
        color: "green" as const,
      },
      {
        title: "Conversion Rate",
        value: "4.2%",
        change: 11.5,
        changeLabel: "vs last month",
        icon: <Activity className="h-4 w-4" />,
        color: "purple" as const,
      },
      {
        title: "Cart Abandonment",
        value: "68.5%",
        change: -3.2,
        changeLabel: "vs last month",
        icon: <FileText className="h-4 w-4" />,
        color: "yellow" as const,
      },
    ],
    period: "E-commerce Overview",
  },
};



