import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BarChart3,
  Package,
  Truck,
  Settings,
  LogOut,
  User,
  Menu,
  Home,
  History,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Products", href: "/products", icon: Package },
  {
    label: "Operations",
    icon: Truck,
    submenu: [
      { label: "Receipts", href: "/operations/receipts" },
      { label: "Delivery Orders", href: "/operations/deliveries" },
      { label: "Internal Transfers", href: "/operations/transfers" },
      { label: "Adjustments", href: "/operations/adjustments" },
    ],
  },
  { label: "Move History", href: "/move-history", icon: History },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (href: string) => location.pathname === href;
  const isSubmenuActive = (submenu: any[]) =>
    submenu.some((item) => location.pathname === item.href);

  const handleLogout = () => {
    logout();
  };

  const NavLink = ({
    item,
  }: {
    item: (typeof navigationItems)[0];
  }) => {
    if ("submenu" in item) {
      const Icon = item.icon;
      const isSubmenuCurrentlyActive = isSubmenuActive(item.submenu);
      return (
        <div>
          <button
            onClick={() =>
              setOpenSubmenu(openSubmenu === item.label ? null : item.label)
            }
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
              isSubmenuCurrentlyActive
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="flex items-center gap-3">
              <Icon className="w-5 h-5" />
              {item.label}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSubmenu === item.label ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSubmenu === item.label && (
            <div className="mt-2 space-y-1 pl-4">
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.href}
                  to={subitem.href}
                  className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                    isActive(subitem.href)
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {subitem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    const Icon = item.icon;
    return (
      <Link
        to={item.href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isActive(item.href)
            ? "bg-blue-100 text-blue-700 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon className="w-5 h-5" />
        {item.label}
      </Link>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col">
        <div className="p-6 border-b border-gray-200">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">CoreInventory</h1>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navigationItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="border-t border-gray-200 p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start px-4">
                <User className="w-5 h-5 mr-2" />
                <span className="flex-1 text-left truncate">{user?.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem disabled className="text-xs text-gray-500">
                {user?.email}
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Mobile Header and Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-gray-900">CoreInventory</h1>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav className="space-y-2 mt-8">
                {navigationItems.map((item) => (
                  <NavLink key={item.label} item={item} />
                ))}
              </nav>
              <div className="border-t border-gray-200 mt-8 pt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start px-4">
                      <User className="w-5 h-5 mr-2" />
                      {user?.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">
                        <User className="w-4 h-4 mr-2" />
                        My Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer text-red-600"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
