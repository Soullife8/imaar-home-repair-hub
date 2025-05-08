
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Construction, FileText, Home, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const notifications = [
  { id: 1, message: "تم الموافقة على طلب التقييم الخاص بك", date: "منذ يومين" },
  { id: 2, message: "سيقوم المهندس أحمد بزيارة منزلك غدًا", date: "منذ 5 ساعات" },
];

const projects = [
  { 
    id: 1, 
    address: "دير الزور - حي القصور", 
    status: "قيد التقييم",
    date: "10/04/2025",
    statusColor: "bg-yellow-100 text-yellow-800" 
  },
  { 
    id: 2, 
    address: "دير الزور - حي الجورة", 
    status: "جاهز للتنفيذ",
    date: "05/04/2025",
    statusColor: "bg-green-100 text-green-800" 
  }
];

const UserDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">لوحة التحكم</h2>
        <Link to="/request-assessment">
          <Button className="bg-imaar-primary hover:bg-imaar-primary/90">
            طلب تقييم جديد
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-imaar-primary" />
              <span>مشاريع</span>
            </CardTitle>
            <CardDescription>مشاريع الترميم الخاصة بك</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{projects.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Construction className="h-5 w-5 text-imaar-secondary" />
              <span>قيد التنفيذ</span>
            </CardTitle>
            <CardDescription>المشاريع الجارية</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-imaar-accent" />
              <span>إشعارات</span>
            </CardTitle>
            <CardDescription>إشعارات جديدة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{notifications.length}</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-imaar-primary" />
            <span>المشاريع الحالية</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {projects.length > 0 ? (
            <div className="space-y-4">
              {projects.map(project => (
                <div 
                  key={project.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <h4 className="font-medium">{project.address}</h4>
                      <p className="text-sm text-gray-500">تاريخ الطلب: {project.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-2 md:mt-0 gap-3">
                    <span className={`text-sm px-3 py-1 rounded-full ${project.statusColor}`}>
                      {project.status}
                    </span>
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="outline" size="sm">
                        عرض التفاصيل
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              لا توجد مشاريع حالية
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-imaar-accent" />
            <span>الإشعارات</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map(notification => (
                <div 
                  key={notification.id}
                  className="flex justify-between items-start p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 text-gray-500 mt-1" />
                    <div>
                      <p>{notification.message}</p>
                      <p className="text-sm text-gray-500">{notification.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              لا توجد إشعارات جديدة
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;
