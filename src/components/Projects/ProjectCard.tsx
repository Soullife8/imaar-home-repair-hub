
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Construction, MapPin } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  address: string;
  status: string;
  statusColor: string;
  imageSrc: string;
  needsDonation?: boolean;
  completionPercentage?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  address,
  status,
  statusColor,
  imageSrc,
  needsDonation,
  completionPercentage = 0,
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        {needsDonation && (
          <Badge
            className="absolute top-2 left-2 bg-imaar-accent"
          >
            بحاجة للدعم
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge className={statusColor}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{address}</span>
        </div>
        
        {completionPercentage > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">نسبة الإكمال:</span>
              <span className="font-medium">{completionPercentage}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-imaar-primary rounded-full" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-2">
        <Link to={`/projects/${id}`} className="w-full">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 border-imaar-primary text-imaar-primary hover:bg-imaar-primary hover:text-white"
          >
            <Construction className="h-4 w-4" />
            <span>عرض المشروع</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
