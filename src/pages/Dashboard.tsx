
import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import UserDashboard from "@/components/Dashboard/UserDashboard";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <UserDashboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
