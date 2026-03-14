import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Calendar } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();

  return (
    <AppLayout>
      <div className="p-6 max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">View and manage your account information</p>
        </div>

        {/* Profile Card */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your personal account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Full Name</p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">{user?.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Email</p>
                      <p className="text-gray-700">{user?.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Member Since</p>
                      <p className="text-gray-700">March 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Account Status</CardTitle>
            <CardDescription>Your current account status and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Account Status</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                Active
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Role</span>
              <span className="text-gray-900 font-medium">Inventory Manager</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-700">Warehouse Access</span>
              <span className="text-gray-900 font-medium">All Locations</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
