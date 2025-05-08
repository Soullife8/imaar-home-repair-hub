
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

type UserType = "homeowner" | "engineer" | "contractor" | "donor";

const RegisterForm: React.FC = () => {
  const [userType, setUserType] = useState<UserType>("homeowner");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Password validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "خطأ في كلمة المرور",
        description: "كلمات المرور غير متطابقة",
        variant: "destructive",
      });
      return;
    }
    
    // Form submission would go here
    toast({
      title: "تم إنشاء الحساب بنجاح!",
      description: "يمكنك الآن تسجيل الدخول بمعلوماتك",
    });
    
    console.log("Registration data:", { ...formData, userType });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">إنشاء حساب جديد</h2>
        
        <div className="space-y-2">
          <Label htmlFor="userType">نوع الحساب</Label>
          <RadioGroup
            value={userType}
            onValueChange={(value) => setUserType(value as UserType)}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center space-x-2 space-x-reverse">
              <RadioGroupItem value="homeowner" id="homeowner" />
              <Label htmlFor="homeowner">صاحب منزل</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <RadioGroupItem value="engineer" id="engineer" />
              <Label htmlFor="engineer">مهندس</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <RadioGroupItem value="contractor" id="contractor" />
              <Label htmlFor="contractor">مقاول / ورشة</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <RadioGroupItem value="donor" id="donor" />
              <Label htmlFor="donor">جهة داعمة / متبرع</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
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
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full bg-imaar-primary hover:bg-imaar-primary/90">
        إنشاء حساب
      </Button>
      
      <div className="text-center text-sm">
        لديك حساب بالفعل؟{" "}
        <a href="#login" className="text-imaar-accent hover:underline">
          تسجيل الدخول
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
