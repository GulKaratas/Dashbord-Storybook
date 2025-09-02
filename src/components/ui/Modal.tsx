"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Modal({
  open,
  onClose,
  children,
  title,
  className,
}: ModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-hidden",
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-secondary-200">
            <h2 className="text-lg font-semibold text-secondary-900">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-secondary-100 rounded-md transition-colors"
            >
              <X className="h-5 w-5 text-secondary-500" />
            </button>
          </div>
        )}

        <div className="max-h-[calc(90vh-4rem)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}



