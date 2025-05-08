
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form submission would go here
    toast({
      title: "تم تسجيل الدخول بنجاح!",
      description: "مرحبًا بك في منصة إعمار",
    });
    
    console.log("Login data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">تسجيل الدخول</h2>
        
        <div className="space-y-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">كلمة المرور</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="text-left">
          <a href="#forgot" className="text-sm text-imaar-accent hover:underline">
            نسيت كلمة المرور؟
          </a>
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-imaar-primary hover:bg-imaar-primary/90">
        تسجيل الدخول
      </Button>
      
      <div className="text-center text-sm">
        ليس لديك حساب؟{" "}
        <a href="#register" className="text-imaar-accent hover:underline">
          إنشاء حساب جديد
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
