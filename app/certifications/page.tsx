export default function CertificationsPage() {
    // Dummy data for certifications
    const certifications = [
      {
        id: 1,
        name: "Certified Web Developer",
        organization: "Web Development Institute",
        date: "2023-05-15",
        verifyLink: "https://example.com/verify/123"
      },
      {
        id: 2,
        name: "Advanced React Specialist",
        organization: "React Mastery Academy",
        date: "2022-11-30",
        verifyLink: "https://example.com/verify/456"
      },
      {
        id: 3,
        name: "UI/UX Design Professional",
        organization: "Design Excellence School",
        date: "2022-08-22",
        verifyLink: "https://example.com/verify/789"
      },
      {
        id: 4,
        name: "Agile Project Management",
        organization: "Agile Certification Board",
        date: "2023-02-10",
        verifyLink: "https://example.com/verify/101"
      }
    ]
  
    return (
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">My Certifications</h1>
          <p className="text-xl text-gray-600">Showcasing my professional achievements and expertise</p>
        </header>
  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span className="text-blue-500" aria-hidden="true">🏆</span>
                  {cert.name}
                </h2>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                  {cert.organization}
                </span>
                <p className="text-sm text-gray-600 flex items-center mt-2">
                  <span className="mr-1" aria-hidden="true">📅</span>
                  <span className="sr-only">Issued on</span>
                  {new Date(cert.date).toLocaleDateString()}
                </p>
              </div>
              <div className="px-6 py-4 mt-auto">
                <a 
                  href={cert.verifyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <span className="mr-2" aria-hidden="true">🔗</span>
                  View / Verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }