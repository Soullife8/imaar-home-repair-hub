
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Building, Construction, Home, HandshakeIcon, User } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-imaar-light to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-imaar-dark">
              منصة <span className="text-imaar-primary">إعمار</span> لإعادة بناء المنازل المتضررة
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-700">
              نربط السكان المتضررين مع المهندسين والمقاولين وجهات الدعم لإعادة إعمار المنازل بأفضل الطرق
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/request-assessment">
                <Button size="lg" className="bg-imaar-primary hover:bg-imaar-primary/90 text-lg">
                  تقديم طلب تقييم
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="border-imaar-primary text-imaar-primary hover:bg-imaar-primary hover:text-white text-lg">
                  تبرع للمشاريع
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">كيف تعمل المنصة؟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-imaar-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Home className="h-10 w-10 text-imaar-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">تقديم طلب تقييم</h3>
                <p className="text-gray-600">قم بتسجيل منزلك المتضرر وطلب زيارة ميدانية للتقييم</p>
              </div>
              
              <div className="text-center">
                <div className="bg-imaar-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-imaar-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">زيارة مهندس</h3>
                <p className="text-gray-600">يقوم مهندس متخصص بزيارة المنزل وتقييم الأضرار</p>
              </div>
              
              <div className="text-center">
                <div className="bg-imaar-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Construction className="h-10 w-10 text-imaar-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">خطة الترميم</h3>
                <p className="text-gray-600">استلام تقرير مفصل وخيارات متعددة للترميم حسب الميزانية</p>
              </div>
              
              <div className="text-center">
                <div className="bg-imaar-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-10 w-10 text-imaar-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">تنفيذ المشروع</h3>
                <p className="text-gray-600">البدء بأعمال البناء والترميم مع متابعة مستمرة للمشروع</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-imaar-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">هل منزلك متضرر؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تقدم بطلبك اليوم للحصول على تقييم مجاني من مهندسين متخصصين
            </p>
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="bg-white text-imaar-primary hover:bg-gray-100 text-lg">
                سجل الآن
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
