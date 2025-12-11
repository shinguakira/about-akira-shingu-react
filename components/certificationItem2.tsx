import React from "react";
import { ExternalLink, Award, Calendar, Building, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { CertificationItem } from "@shinguakira/portfolio-api-types";

type CertificationItemProps = CertificationItem & {
  className?: string;
};

const CertificationItem2 = ({
  id,
  name,
  organization = "unknown",
  date = "",
  verifyLink,
  className = "",
}: CertificationItemProps) => {
  const handleVerify = (verifyLink?: string) => {
    if (verifyLink) {
      window.open(verifyLink, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <Card
      key={id}
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <CardContent className="p-0">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
          <div className="mb-4 flex items-center justify-between">
            <Award className="h-8 w-8" />
            <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
          </div>
          <h3 className="mb-2 text-lg font-bold leading-tight">{name}</h3>
          <div className="flex items-center gap-2 text-blue-100">
            <Building className="h-4 w-4" />
            <span className="text-sm">{organization}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4 flex items-center gap-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>

          <Button
            onClick={() => handleVerify(verifyLink)}
            className="w-full transition-colors hover:bg-blue-600"
            disabled={!verifyLink}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Verify Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationItem2;
