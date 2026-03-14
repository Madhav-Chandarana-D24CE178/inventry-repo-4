import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export function PagePlaceholder({ title, description, icon }: PagePlaceholderProps) {
  return (
    <div className="flex items-center justify-center min-h-full">
      <Card className="border-0 shadow-sm max-w-md w-full mx-4">
        <div className="p-12 text-center space-y-4">
          {icon ? (
            <div className="flex justify-center">{icon}</div>
          ) : (
            <div className="flex justify-center">
              <AlertCircle className="w-12 h-12 text-gray-400" />
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            {description && (
              <p className="text-gray-600 mt-2 text-sm">{description}</p>
            )}
          </div>
          <p className="text-xs text-gray-500 pt-4">
            This page is coming soon. Continue with more prompts to build this feature.
          </p>
        </div>
      </Card>
    </div>
  );
}
