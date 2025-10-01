import React from "react";
import {
  ExternalLink,
  Award,
  Calendar,
  Building,
  Star,
  Trophy,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CertificationItem3 = ({
  id,
  name,
  organization = "unknown",
  issuer, // Support API format
  date = "",
  verifyLink,
  className = "",
}: CertificationItemProps) => {
  // Use organization if available, otherwise use issuer (for API data)
  const displayOrganization = organization || issuer || "Unknown";

  const handleVerify = (verifyLink?: string) => {
    if (verifyLink) {
      window.open(verifyLink, "_blank", "noopener,noreferrer");
    }
  };

  const getIconForIndex = (index?: number) => {
    const icons = [Trophy, Shield, Star, Award];
    const IconComponent = icons[(index || 0) % icons.length];
    return IconComponent;
  };
  const IconComponent = getIconForIndex(id);
  const isEven = (id || 0) % 2 === 0;

  return (
    <Card
      key={id}
      className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl ${isEven ? "hover:rotate-1" : "hover:-rotate-1"}`}
    >
      <CardContent className="p-0">
        <div
          className={`bg-gradient-to-br ${isEven ? "from-blue-500 to-cyan-500" : "from-purple-500 to-pink-500"} relative overflow-hidden p-8 text-white`}
        >
          <div className="absolute right-0 top-0 size-32 -translate-y-16 translate-x-16 rounded-full bg-white/10"></div>
          <div className="absolute bottom-0 left-0 size-24 -translate-x-12 translate-y-12 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-between">
              <IconComponent className="size-12" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-300 text-yellow-300"
                  />
                ))}
              </div>
            </div>

            <h3 className="mb-3 text-2xl font-bold leading-tight">{name}</h3>
            <div className="mb-4 flex items-center gap-2 text-white/80">
              <Building className="size-5" />
              <span className="text-lg">{displayOrganization}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="size-5" />
              <span className="text-lg">Certified {date}</span>
            </div>
            <Badge
              variant="secondary"
              className="border-green-200 bg-green-50 px-3 py-1 text-green-700"
            >
              Verified ✓
            </Badge>
          </div>

          <Button
            onClick={() => handleVerify(verifyLink)}
            className={`w-full py-3 text-lg ${isEven ? "bg-blue-500 hover:bg-blue-600" : "bg-purple-500 hover:bg-purple-600"} transition-transform group-hover:scale-105`}
            disabled={!verifyLink}
          >
            <ExternalLink className="mr-3 size-5" />
            Verify Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationItem3;
