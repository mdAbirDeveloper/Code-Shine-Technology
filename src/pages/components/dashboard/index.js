import React, { useEffect, useState } from "react";
import DashboardLayout from "./dashboardLayout";
import Link from "next/link";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  if (!user || user?.email !== "MDSAHJALAL9778@GMAIL.COM") {
    return (
      <div className=" flex items-center justify-center bg-gray-100 text-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-red-500">
            Access Denied
          </h1>
          <p className="text-lg text-gray-700">
            You do not have permission to view this page. Please contact the
            administrator if you believe this is an error.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-slate-900 shadow mt-6 rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Link href={"/components/dashboard/dComponents/addProject"}>
          <div className="bg-slate-950 shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add Project</h2>
            <p className="">Overview of recent projects and control all of them.</p>
          </div>
        </Link>
        {/* Card 2 */}
        <Link href={"/components/dashboard/dComponents/messages"}>
          <div className="bg-slate-950 shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <p className="">Manage and review all incoming messages.</p>
          </div>
        </Link>
        {/* Card 3 */}
        <Link href={"/components/dashboard/dComponents/addCustomer"}>
          <div className="bg-slate-950 shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add Customer</h2>
            <p className="">Overview of recent customer and control all of them.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
