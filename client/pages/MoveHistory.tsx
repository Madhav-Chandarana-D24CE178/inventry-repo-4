import { AppLayout } from "@/components/AppLayout";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { History } from "lucide-react";

export default function MoveHistory() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Move History</h1>
          <p className="text-gray-600 mt-2">View the complete stock movement ledger and transaction history</p>
        </div>
        <PagePlaceholder
          title="Stock Movement Ledger"
          description="View all inventory transactions including receipts, deliveries, internal transfers, and adjustments. Every movement is tracked and logged."
          icon={<History className="w-12 h-12 text-blue-600" />}
        />
      </div>
    </AppLayout>
  );
}
