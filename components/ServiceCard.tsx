import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 mb-4 text-[#0caadc]">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="ghost"
          className="group-hover:text-[#0caadc] transition-colors"
          asChild
        >
          <Link href={href} className="flex items-center gap-2">
            Learn More
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}