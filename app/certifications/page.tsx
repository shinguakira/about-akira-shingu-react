import CertificationItem from "@/components/ui/certification-item"

export default function CertificationsPage() {

  const creadlyLink = "https://www.credly.com/users/username.aff80586"
    // Dummy data for certifications
    const certifications = [
      {
        id: 1,
        name: "基本情報技術者試験",
        organization: "IPA",
        date: "2023-05",
        verifyLink: "https://example.com/verify/123"
      },
      {
        id: 2,
        name: "ドットコムマスターアドバンス シングルスター",
        organization: ".com",
        date: "2023-5",
        verifyLink: "https://example.com/verify/456"
      },
      {
        id: 3,
        name: "情報セキュリティマネジメント",
        organization: "IPA",
        date: "2023-06",
        verifyLink: "https://example.com/verify/789"
      },
      {
        id: 4,
        name: "ディジタル技術検定 2級 情報",
        organization: "",
        date: "2023-07",
        verifyLink: "https://example.com/verify/101"
      }
      ,
      {
        id: 5,
        name: "組み込みソフトウェア技術者クラス2 グレードB",
        organization: "",
        date: "2023-07",
        verifyLink: "https://example.com/verify/101"
      }
      ,
      {
        id: 6,
        name: "Oracle Certified Java Programmer, Gold SE 11",
        organization: "Oracle",
        date: "2024-02",
        verifyLink: "https://example.com/verify/101"
      }
      ,
      {
        id: 7,
        name: "Python3 エンジニア認定基礎試験",
        organization: "Python",
        date: "2023-02",
        verifyLink: "https://example.com/verify/101"
      }
      ,
      {
        id: 8,
        name: "Python3 エンジニア認定データ分析試験",
        organization: "Python",
        date: "2024-02",
        verifyLink: "https://example.com/verify/101"
      }
      ,
      {
        id: 9,
        name: "Python3 エンジニア認定実践試験",
        organization: "Python",
        date: "2024-02",
        verifyLink: "https://example.com/verify/101"
      },
      {
        id: 10,
        name: "AZ-900 Microsoft Azure Fundamentals",
        organization: "Microsoft",
        date: "2024-03",
        verifyLink: "https://example.com/verify/101"
      },
      {
        id: 11,
        name: "HTML5プロフェッショナル認定試験レベル1",
        organization: "LPI-Japan",
        date: "2024-03",
        verifyLink: "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
      },{
        id: 12,
        name: "AWS Certified Solutions Architect – Associate",
        organization: "AWS",
        date: "2024-03",
        verifyLink: creadlyLink
      },{
        id: 13,
        name: "HTML5プロフェッショナル認定試験レベル2",
        organization: "LPI-Japan",
        date: "2024-04",
        verifyLink: "https://ma.educo-j.or.jp/h/EID900045390/qntzzbkx3h"
      },
      {
        id: 40,
        name: "AWS Certified SysOps Administrator – Associate",
        organization: "AWS",
        date: "2024-04",
        verifyLink: creadlyLink
      },
      {
        id: 14,
        name: "AWS Certified Developer – Associate",
        organization: "AWS",
        date: "2024-05",
        verifyLink: creadlyLink
      },
      {
        id: 15,
        name: "AWS Certified DevOpes Engineer – Professional",
        organization: "AWS",
        date: "2024-05",
        verifyLink: creadlyLink
      },
      {
        id: 16,
        name: "AWS Certified Machine Learning – Specialty",
        organization: "AWS",
        date: "2024-06",
        verifyLink: creadlyLink
      },
      {
        id: 17,
        name: "AWS Certified Data Enginner - Associate",
        organization: "AWS",
        date: "2024-06",
        verifyLink: creadlyLink
      },
      {
        id: 18,
        name: "AWS Certified Solutions Architect – Professional",
        organization: "AWS",
        date: "2024-07",
        verifyLink: creadlyLink
      },
      {
        id: 19,
        name: "AZ-204 Developing Solutions for Microsoft Azure",
        organization: "Microsoft",
        date: "2024-07",
        verifyLink: "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/8238075B8F146208?sharingId=EC8829B80AA18FB2"
      },
      {
        id: 20,
        name: "OSS DB Silver",
        organization: "LPI-Japan",
        date: "2024-07",
        verifyLink: "https://ma.educo-j.or.jp/d/EID900045390/unpqcjywm8"
      },
      {
        id: 21,
        name: "AWS Certified Advanced Networking – Specialty",
        organization: "AWS",
        date: "2024-08",
        verifyLink: creadlyLink
      },
      {
        id: 22,
        name: "REACT DEVELOPER CERTIED LEVEL 1",
        organization: "Certificates.dev",
        date: "2024-08",
        verifyLink: "https://interstate21.com/certificate/?code=5H11TDN"
      }
      ,
      {
        id: 23,
        name: "Certified Junior Angular Developer",
        organization: "Certificates.dev Angular Traning",
        date: "2024-09",
        verifyLink: "	https://certificates.dev/c/9cea8a10-14d5-44e4-9343-70c02f44c9b7"
      },
      {
        id: 24,
        name: "Certified Typescript Developer Professional",
        organization: "w3schools",
        date: "2024-09",
        verifyLink: "https://verify.w3schools.com/1P5VV1GZ0S"
      },
      {
        id: 25,
        name: "AZ-104 Microsoft Azure Administrator",
        organization: "Microsoft",
        date: "2024-10",
        verifyLink: "https://learn.microsoft.com/api/credentials/share/ja-jp/08201797/5656C6EBDF249EA9?sharingId=EC8829B80AA18FB2"
      },
      {
        id: 26,
        name: "AWS Certified AI Practitioner",
        organization: "AWS",
        date: "2024-10",
        verifyLink: creadlyLink
      },
      {
        id: 27,
        name: "AWS Certified Machine Learning - Associate",
        organization: "AWS",
        date: "2024-11",
        verifyLink: creadlyLink
      },
      {
        id: 28,
        name: "Certified Sass Developer Professional",
        organization: "w3schools",
        date: "2024-11",
        verifyLink: "https://verify.w3schools.com/1PD7RE2K1Y"
      }
    ]
  
    return (
      <div className="container mx-auto px-4 py-8">
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