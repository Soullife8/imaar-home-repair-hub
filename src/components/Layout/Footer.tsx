
import React from "react";
import { Building, Mail, Phone, CreditCard, Wallet, BanknoteIcon } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-imaar-dark text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-8 w-8 text-imaar-primary" />
              <span className="text-xl font-bold">إعمار</span>
            </div>
            <p className="text-gray-300">
              منصة لربط سكان المناطق المتضررة مع مهندسين وورشات عمل لإعادة إعمار المنازل المتضررة.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">الرئيسية</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">عن المشروع</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white">المشاريع</a>
              </li>
              <li>
                <a href="/donate" className="text-gray-300 hover:text-white">التبرعات</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-imaar-primary" />
                <span>البريد الإلكتروني: soullife89@hotmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-imaar-primary" />
                <span>الهاتف: +963993214616</span>
              </li>
              <li>العنوان: دير الزور، سوريا</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">طرق الدفع</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BanknoteIcon className="h-4 w-4 text-imaar-primary" />
                <span>التحويل البنكي: بنك سوريا المركزي - رقم الحساب: 9834-7261-0012</span>
              </li>
              <li className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-imaar-primary" />
                <span>المحفظة الإلكترونية: PayPal - imaar@rebuild.org</span>
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-imaar-primary" />
                <span>بطاقات الائتمان: Visa / Mastercard</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} إعمار. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
