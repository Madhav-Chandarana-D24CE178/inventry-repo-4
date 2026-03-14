import { AppLayout } from "@/components/AppLayout";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { Package } from "lucide-react";

export default function Products() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600 mt-2">Create, update, and manage your product catalog</p>
        </div>
        <PagePlaceholder
          title="Product Management"
          description="Manage your product inventory, categories, and stock levels across all warehouses"
          icon={<Package className="w-12 h-12 text-blue-600" />}
        />
      </div>
    </AppLayout>
  );
}
