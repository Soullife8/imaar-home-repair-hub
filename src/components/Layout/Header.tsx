
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, User, Home } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Building className="h-8 w-8 text-imaar-primary" />
            <span className="text-2xl font-bold text-imaar-primary">إعمار</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4 space-x-reverse">
          <Link to="/" className="text-gray-700 hover:text-imaar-primary px-3 py-2">
            الرئيسية
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-imaar-primary px-3 py-2">
            عن المشروع
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-imaar-primary px-3 py-2">
            المشاريع
          </Link>
          <Link to="/donate" className="text-gray-700 hover:text-imaar-primary px-3 py-2">
            التبرعات
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="outline" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>تسجيل الدخول</span>
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button className="bg-imaar-primary hover:bg-imaar-primary/90 flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>لوحة التحكم</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
