import { AppLayout } from "@/components/AppLayout";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { Send } from "lucide-react";

export default function Deliveries() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Delivery Orders</h1>
          <p className="text-gray-600 mt-2">Manage outgoing goods for customer shipment</p>
        </div>
        <PagePlaceholder
          title="Delivery Orders (Outgoing Goods)"
          description="Create and manage delivery orders for customer shipments. Outgoing stock will automatically decrease your inventory."
          icon={<Send className="w-12 h-12 text-purple-600" />}
        />
      </div>
    </AppLayout>
  );
}
