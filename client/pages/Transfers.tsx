import { AppLayout } from "@/components/AppLayout";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { ArrowRightLeft } from "lucide-react";

export default function Transfers() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Internal Transfers</h1>
          <p className="text-gray-600 mt-2">Move inventory between locations within your organization</p>
        </div>
        <PagePlaceholder
          title="Internal Transfers"
          description="Transfer stock between warehouses, racks, and production areas. Total stock remains the same, but locations are updated."
          icon={<ArrowRightLeft className="w-12 h-12 text-indigo-600" />}
        />
      </div>
    </AppLayout>
  );
}
