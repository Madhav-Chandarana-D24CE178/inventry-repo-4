import { AppLayout } from "@/components/AppLayout";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { AlertTriangle } from "lucide-react";

export default function Adjustments() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Inventory Adjustments</h1>
          <p className="text-gray-600 mt-2">Correct inventory discrepancies between recorded and physical counts</p>
        </div>
        <PagePlaceholder
          title="Inventory Adjustments"
          description="Record adjustments to fix mismatches between recorded inventory and physical counts. All adjustments are logged in the stock ledger."
          icon={<AlertTriangle className="w-12 h-12 text-amber-600" />}
        />
      </div>
    </AppLayout>
  );
}
