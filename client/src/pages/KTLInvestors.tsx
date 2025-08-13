import PageLayout from '@/components/PageLayout';
import { ArrowLeft, FileText, Shield, Users, Factory, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEO from '@/components/SEO';

const KTLInvestors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <SEO 
          title="Investor Information - Kattali Textile Ltd."
          description="KTL operates 12 production lines with 850+ employees, serving export buyers in Canada and USA. ISO 9001 & CTPAT compliance with digitalization roadmap."
          keywords={['textile investment Bangladesh', 'apparel manufacturing investment', 'garment industry investment', 'export manufacturing', 'textile factory investment']}
        />
        
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-accent mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h1 className="text-4xl font-bold mb-6 text-primary">Investor Information</h1>
                <p className="text-xl text-gray-600 max-w-4xl">
                  Kattali Textile Ltd. operates 12 production lines with 850+ employees, serving export buyers in Canada and the USA. 
                  We maintain ISO 9001 and CTPAT compliance and are digitizing factory operations via StitchOS/TextileTrack to improve 
                  planning accuracy, reduce rework, and protect margins.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-8">Operating Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Factory className="h-8 w-8 text-accent" />,
                      title: "Production Capacity",
                      description: "12 production lines covering knit & woven capacity (tees, denim, ladies tops)"
                    },
                    {
                      icon: <Users className="h-8 w-8 text-accent" />,
                      title: "Workforce Excellence",
                      description: "850+ skilled employees with IE & Planning discipline and dedicated Training Center"
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8 text-accent" />,
                      title: "Digitalization Roadmap",
                      description: "RFID + live dashboards implementation for throughput & DHU improvement"
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-accent" />,
                      title: "Compliance Standards",
                      description: "ISO 9001 Quality Management System and CTPAT security certification"
                    },
                    {
                      icon: <FileText className="h-8 w-8 text-accent" />,
                      title: "Export Focus",
                      description: "Established relationships with buyers in Canada and USA markets"
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8 text-accent" />,
                      title: "Process Improvement",
                      description: "Continuous improvement through IE samples (SMV/SOB) and CAPA systems"
                    }
                  ].map((highlight, i) => (
                    <Card key={i} className="border-accent/20 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          {highlight.icon}
                          <CardTitle className="text-lg">{highlight.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Shield className="h-6 w-6 text-accent" />
                      Governance & Policies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Corporate Structure</h4>
                        <p className="text-gray-600">Private company with board-led oversight and transparent governance practices</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Human Resources</h4>
                        <p className="text-gray-600">Ethical hiring practices and comprehensive worker training programs</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Environmental Policy</h4>
                        <p className="text-gray-600">Environmental & social policies aligned with international buyer requirements</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Compliance</h4>
                        <p className="text-gray-600">Regular audits and certifications maintaining export market standards</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-16"
              >
                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <FileText className="h-6 w-6 text-accent" />
                      Data Room (under NDA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Factory profile (line map/capacity)",
                        "Compliance scans (ISO 9001, CTPAT)",
                        "12–24-month order mix & OTD",
                        "DHU/rework trends & CAPA",
                        "IE samples (SMV/SOB)",
                        "Last 3-year financials",
                        "Capex roadmap",
                        "Risk register"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <FileText className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact (interim)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      Use the site Contact form or email <span className="font-medium text-accent">hr@ktlbd.com</span> for IR routing.
                    </p>
                    <p className="text-sm text-gray-500">
                      (Create investors@ktlbd.com later; I'll update copy.)
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Disclaimer:</strong> Information may include forward-looking statements and is subject to risks and uncertainties. 
                    KTL undertakes no obligation to update except as required by law.
                  </AlertDescription>
                </Alert>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default KTLInvestors;