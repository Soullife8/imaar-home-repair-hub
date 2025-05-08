
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "@/components/Auth/RegisterForm";
import LoginForm from "@/components/Auth/LoginForm";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Building } from "lucide-react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md mx-4">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <Building className="h-12 w-12 text-imaar-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">منصة إعمار</h1>
            <p className="text-gray-600 mt-2">لإعادة بناء المنازل المتضررة</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
                <TabsTrigger value="register">إنشاء حساب</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              
              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
