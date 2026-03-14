import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  AlertTriangle,
  TrendingUp,
  Send,
  ArrowRightLeft,
  AlertCircle,
} from "lucide-react";

// Mock data
const mockKPIs = {
  totalProducts: 1250,
  lowStockItems: 45,
  pendingReceipts: 12,
  pendingDeliveries: 8,
  internalTransfers: 3,
};

const mockOperations = [
  {
    id: "REC001",
    type: "Receipt",
    product: "Steel Rods",
    quantity: 50,
    location: "Main Warehouse",
    status: "Completed",
    date: "2024-03-14",
  },
  {
    id: "DEL002",
    type: "Delivery",
    product: "Aluminum Sheets",
    quantity: 30,
    location: "Zone A",
    status: "Pending",
    date: "2024-03-14",
  },
  {
    id: "TRN003",
    type: "Internal Transfer",
    product: "Copper Wire",
    quantity: 100,
    location: "Main → Production",
    status: "In Progress",
    date: "2024-03-13",
  },
  {
    id: "ADJ004",
    type: "Adjustment",
    product: "Plastic Beads",
    quantity: -5,
    location: "Storage B",
    status: "Completed",
    date: "2024-03-13",
  },
  {
    id: "REC005",
    type: "Receipt",
    product: "Iron Plates",
    quantity: 75,
    location: "Main Warehouse",
    status: "Completed",
    date: "2024-03-12",
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-amber-100 text-amber-800",
  "In Progress": "bg-blue-100 text-blue-800",
  Draft: "bg-gray-100 text-gray-800",
  Ready: "bg-blue-100 text-blue-800",
  Done: "bg-green-100 text-green-800",
  Canceled: "bg-red-100 text-red-800",
};

export default function Dashboard() {
  const [documentType, setDocumentType] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");
  const [warehouse, setWarehouse] = useState<string>("all");

  const handleDocumentTypeChange = (value: string) => {
    setDocumentType(value === "all" ? "all" : value);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value === "all" ? "all" : value);
  };

  const handleWarehouseChange = (value: string) => {
    setWarehouse(value === "all" ? "all" : value);
  };

  const filterOperations = () => {
    return mockOperations.filter((op) => {
      if (documentType !== "all" && op.type !== documentType) return false;
      if (status !== "all" && op.status !== status) return false;
      return true;
    });
  };

  const filteredOps = filterOperations();

  const KPICard = ({
    title,
    value,
    icon: Icon,
    color,
    description,
  }: {
    title: string;
    value: number;
    icon: any;
    color: string;
    description?: string;
  }) => (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
            {description && (
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            )}
          </div>
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <AppLayout>
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Real-time view of your inventory operations and key metrics
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <KPICard
            title="Total Products"
            value={mockKPIs.totalProducts}
            icon={Package}
            color="bg-blue-600"
            description="In stock"
          />
          <KPICard
            title="Low Stock Items"
            value={mockKPIs.lowStockItems}
            icon={AlertTriangle}
            color="bg-amber-600"
            description="Need reorder"
          />
          <KPICard
            title="Pending Receipts"
            value={mockKPIs.pendingReceipts}
            icon={TrendingUp}
            color="bg-green-600"
            description="Incoming goods"
          />
          <KPICard
            title="Pending Deliveries"
            value={mockKPIs.pendingDeliveries}
            icon={Send}
            color="bg-purple-600"
            description="Outgoing goods"
          />
          <KPICard
            title="Transfers Scheduled"
            value={mockKPIs.internalTransfers}
            icon={ArrowRightLeft}
            color="bg-indigo-600"
            description="Internal moves"
          />
        </div>

        {/* Filters Section */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Document Type
                </label>
                <Select value={documentType} onValueChange={handleDocumentTypeChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    <SelectItem value="Receipt">Receipts</SelectItem>
                    <SelectItem value="Delivery">Delivery</SelectItem>
                    <SelectItem value="Internal Transfer">Internal Transfer</SelectItem>
                    <SelectItem value="Adjustment">Adjustments</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Status
                </label>
                <Select value={status} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Canceled">Canceled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Warehouse
                </label>
                <Select value={warehouse} onValueChange={handleWarehouseChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All warehouses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All warehouses</SelectItem>
                    <SelectItem value="main">Main Warehouse</SelectItem>
                    <SelectItem value="zone-a">Zone A</SelectItem>
                    <SelectItem value="zone-b">Zone B</SelectItem>
                    <SelectItem value="production">Production Floor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setDocumentType("all");
                    setStatus("all");
                    setWarehouse("all");
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Operations Table */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Operations</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                {filteredOps.length} operation{filteredOps.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </CardHeader>
          <CardContent>
            {filteredOps.length === 0 ? (
              <div className="flex items-center justify-center py-12 text-gray-500">
                <AlertCircle className="w-5 h-5 mr-2" />
                No operations found matching your filters
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOps.map((op) => (
                      <TableRow key={op.id}>
                        <TableCell className="font-medium">{op.id}</TableCell>
                        <TableCell>{op.type}</TableCell>
                        <TableCell>{op.product}</TableCell>
                        <TableCell>
                          <span
                            className={`font-semibold ${
                              op.quantity > 0 ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {op.quantity > 0 ? "+" : ""}{op.quantity}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">{op.location}</TableCell>
                        <TableCell className="text-sm text-gray-600">{op.date}</TableCell>
                        <TableCell>
                          <Badge
                            className={`${
                              statusColors[
                                op.status as keyof typeof statusColors
                              ]
                            }`}
                          >
                            {op.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
