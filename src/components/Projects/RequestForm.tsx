
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MapPin, Check, Phone, Mail } from "lucide-react";

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "+963993214616",
    email: "",
    address: "",
    description: "",
    images: [] as File[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: Array.from(e.target.files),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "تم إرسال الطلب بنجاح!",
        description: "سوف يتم التواصل معك لتحديد موعد الزيارة",
      });
      
      console.log("Request data:", formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-imaar-primary" />
          <span>طلب تقييم منزل</span>
        </CardTitle>
        <CardDescription>
          يرجى تعبئة النموذج بالمعلومات المطلوبة لتقييم حالة المنزل
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">الاسم الكامل</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                    <Phone className="h-4 w-4 text-gray-500" />
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <div className="flex">
                <div className="flex-shrink-0 flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                  <Mail className="h-4 w-4 text-gray-500" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-l-none"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">العنوان بالتفصيل</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">وصف الأضرار</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="يرجى وصف الأضرار في المنزل بالتفصيل..."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="images">صور للمنزل (اختياري)</Label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="images"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-3 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">اضغط لرفع الصور</span> أو اسحب الملفات هنا
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG (الحد الأقصى: 5 ميجابايت)
                    </p>
                  </div>
                  <Input
                    id="images"
                    name="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              {formData.images.length > 0 && (
                <p className="text-sm text-green-600 flex items-center gap-1 mt-2">
                  <Check className="h-4 w-4" />
                  <span>تم اختيار {formData.images.length} صور</span>
                </p>
              )}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-imaar-primary hover:bg-imaar-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري الإرسال..." : "إرسال طلب التقييم"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RequestForm;
