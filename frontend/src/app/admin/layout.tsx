/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description admin layout for the application
 */

// UI components
import AdminSidebar from "./_ui/AdminSidebar";

//type
import type { Metadata } from "next";

// element for [ hade ]
export const metadata: Metadata = {
  title: "Admin Dashboard ",
  description: "This is admin dashboard",
};

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
      <div className=" overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5">
        <AdminSidebar />
      </div>
      <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
