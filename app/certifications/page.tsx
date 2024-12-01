import CertificationItem from "@/components/ui/certification-item"
import {certifications} from "@/constants"

export default function CertificationsPage() {

  
    return (
      <div className="h-auto container mx-auto px-4 py-8 bg-slate-100">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">My Certifications</h1>
          <p className="text-xl text-gray-600">Showcasing my professional achievements and expertise</p>
        </header>
  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert,index: number) => (
            <CertificationItem key={index} {...cert}/>
          ))}
        </div>
      </div>
    )
  }