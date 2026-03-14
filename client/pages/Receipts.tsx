import { AppLayout } from "@/components/AppLayout";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { TrendingUp } from "lucide-react";

export default function Receipts() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Receipts</h1>
          <p className="text-gray-600 mt-2">Manage incoming goods from suppliers</p>
        </div>
        <PagePlaceholder
          title="Receipts (Incoming Goods)"
          description="Record and manage goods received from vendors. Incoming stock will automatically update your inventory."
          icon={<TrendingUp className="w-12 h-12 text-green-600" />}
        />
      </div>
    </AppLayout>
  );
}
