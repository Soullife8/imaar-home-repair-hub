
import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import RequestForm from "@/components/Projects/RequestForm";

const RequestAssessment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6 text-center">طلب تقييم منزل</h1>
          <RequestForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RequestAssessment;
