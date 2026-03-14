import { AppLayout } from "@/components/AppLayout";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { Settings as SettingsIcon } from "lucide-react";

export default function Settings() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Configure warehouses, locations, and system preferences</p>
        </div>
        <PagePlaceholder
          title="System Settings"
          description="Manage warehouse configurations, create locations, and set up your inventory system."
          icon={<SettingsIcon className="w-12 h-12 text-gray-600" />}
        />
      </div>
    </AppLayout>
  );
}
