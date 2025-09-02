"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  FileText,
  Activity,
} from "lucide-react";

interface AnalyticsData {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "yellow" | "purple";
}

interface AnalyticsWidgetProps {
  data: AnalyticsData[];
  period?: string;
}

const colorClasses = {
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
  yellow: "bg-yellow-500 text-yellow-900",
  purple: "bg-purple-500 text-white",
};

export function AnalyticsWidget({
  data,
  period = "This Month",
}: AnalyticsWidgetProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">
          Analytics Overview
        </CardTitle>
        <Badge variant="secondary" className="text-xs">
          {period}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${colorClasses[item.color]}`}>
                  {item.icon}
                </div>
                <div className="flex items-center space-x-1">
                  {item.change > 0 ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      item.change > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.change > 0 ? "+" : ""}
                    {item.change}%
                  </span>
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-secondary-900">
                  {item.value}
                </div>
                <div className="text-sm text-secondary-600">{item.title}</div>
                <div className="text-xs text-secondary-500 mt-1">
                  {item.changeLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Chart Area */}
        <div className="mt-6 pt-4 border-t border-secondary-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-secondary-700">
              Performance Trend
            </h4>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-secondary-600">Revenue</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-secondary-600">Growth</span>
              </div>
            </div>
          </div>

          {/* Simple Bar Chart Simulation */}
          <div className="flex items-end space-x-1 h-20">
            {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 85].map(
              (height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div
                    className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                </div>
              )
            )}
          </div>

          <div className="flex justify-between mt-2 text-xs text-secondary-500">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}



