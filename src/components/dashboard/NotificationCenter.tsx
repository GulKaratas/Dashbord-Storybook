"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Bell,
  Check,
  X,
  AlertCircle,
  CheckCircle,
  Info,
  DollarSign,
  Users,
  FileText,
} from "lucide-react";

interface Notification {
  id: string;
  type: "success" | "warning" | "error" | "info";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionRequired?: boolean;
}

interface NotificationCenterProps {
  notifications?: Notification[];
}

const typeIcons = {
  success: CheckCircle,
  warning: AlertCircle,
  error: X,
  info: Info,
};

const typeColors = {
  success: "text-green-500 bg-green-50",
  warning: "text-yellow-500 bg-yellow-50",
  error: "text-red-500 bg-red-50",
  info: "text-blue-500 bg-blue-50",
};

const defaultNotifications: Notification[] = [
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
];

export function NotificationCenter({
  notifications = defaultNotifications,
}: NotificationCenterProps) {
  const [notifs, setNotifs] = useState(notifications);
  const [filter, setFilter] = useState<"all" | "unread" | "action">("all");

  const unreadCount = notifs.filter((n) => !n.read).length;
  const actionCount = notifs.filter((n) => n.actionRequired && !n.read).length;

  const markAsRead = (id: string) => {
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifs((prev) => prev.filter((n) => n.id !== id));
  };

  const filteredNotifications = notifs.filter((n) => {
    if (filter === "unread") return !n.read;
    if (filter === "action") return n.actionRequired && !n.read;
    return true;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Notifications</CardTitle>
            {unreadCount > 0 && (
              <Badge variant="error" className="text-xs">
                {unreadCount}
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
            >
              Mark all read
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-1 mt-3">
          <Button
            variant={filter === "all" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All ({notifs.length})
          </Button>
          <Button
            variant={filter === "unread" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter("unread")}
          >
            Unread ({unreadCount})
          </Button>
          <Button
            variant={filter === "action" ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilter("action")}
          >
            Action Required ({actionCount})
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 max-h-96 overflow-y-auto">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-8 text-secondary-500">
            <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No notifications found</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const IconComponent = typeIcons[notification.type];

            return (
              <div
                key={notification.id}
                className={`p-3 rounded-lg border transition-colors ${
                  notification.read
                    ? "bg-secondary-50 border-secondary-100"
                    : "bg-white border-secondary-200 shadow-sm"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`p-1 rounded-full ${
                      typeColors[notification.type]
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`text-sm font-medium ${
                          notification.read
                            ? "text-secondary-600"
                            : "text-secondary-900"
                        }`}
                      >
                        {notification.title}
                      </h4>
                      <div className="flex items-center space-x-1">
                        {notification.actionRequired && (
                          <Badge variant="warning" className="text-xs">
                            Action
                          </Badge>
                        )}
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        )}
                      </div>
                    </div>

                    <p
                      className={`text-sm mt-1 ${
                        notification.read
                          ? "text-secondary-500"
                          : "text-secondary-600"
                      }`}
                    >
                      {notification.message}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-secondary-400">
                        {notification.timestamp}
                      </span>

                      <div className="flex items-center space-x-1">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs h-6 px-2"
                          >
                            <Check className="h-3 w-3 mr-1" />
                            Mark read
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          className="text-xs h-6 px-2 text-red-600 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}


