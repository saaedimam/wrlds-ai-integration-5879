import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, MapPin, Clock, Users, Award, Target } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';

const KTLCareers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <SEO 
          title="Careers - Kattali Textile Ltd. | Join Our Team"
          description="Build what the world wears. Join KTL's 850+ team across 12 production lines. Training center, growth paths, ISO 9001 & CTPAT standards."
          keywords={['textile jobs Bangladesh', 'apparel manufacturing careers', 'garment industry jobs', 'production supervisor jobs', 'quality assurance jobs', 'industrial engineering careers']}
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
                className="text-center mb-16"
              >
                <h1 className="text-5xl font-bold mb-6 text-primary">Build what the world wears.</h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Join Kattali Textile Ltd. to grow your craft in a factory that values skill, discipline, and steady improvement. 
                  From sewing lines to planning and IT, we invest in people and promote from within.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-8 text-center">Why work at KTL</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Users className="h-8 w-8 text-accent" />,
                      title: "Training Center",
                      description: "New operator intake & upskilling programs with dedicated training facilities"
                    },
                    {
                      icon: <Target className="h-8 w-8 text-accent" />,
                      title: "Clear Growth Paths",
                      description: "IE & HR support with structured career advancement and promotion opportunities"
                    },
                    {
                      icon: <Award className="h-8 w-8 text-accent" />,
                      title: "Export Standards",
                      description: "Work with ISO 9001 and CTPAT standards serving North American programs"
                    },
                    {
                      icon: <Clock className="h-8 w-8 text-accent" />,
                      title: "Modern Technology",
                      description: "Hands-on experience with RFID & live production dashboards (StitchOS/TextileTrack)"
                    },
                    {
                      icon: <MapPin className="h-8 w-8 text-accent" />,
                      title: "Stable Operations",
                      description: "12 production lines with consistent export orders to Canada and USA"
                    },
                    {
                      icon: <Users className="h-8 w-8 text-accent" />,
                      title: "Team of 850+",
                      description: "Join a skilled workforce across knit & woven production with diverse opportunities"
                    }
                  ].map((benefit, i) => (
                    <Card key={i} className="border-accent/20 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          {benefit.icon}
                          <CardTitle className="text-lg">{benefit.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{benefit.description}</p>
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
                <h2 className="text-3xl font-bold mb-8 text-center">Teams we hire</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Production (Operators/Helpers/Supervisors)",
                    "Quality (Inline/End-line/QA)",
                    "IE & Planning",
                    "Merchandising & Commercial",
                    "Store & Inventory", 
                    "HR & Training",
                    "IT/Systems",
                    "Maintenance & Engineering"
                  ].map((team, i) => (
                    <div key={i} className="bg-accent/5 border border-accent/20 p-4 rounded-lg text-center">
                      <p className="font-medium text-gray-800">{team}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-16"
              >
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Sample Opening</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Senior Line Supervisor — Knit/Woven</h3>
                    <p className="text-gray-700">
                      Lead day-to-day sewing operations to hit hourly targets with safety and quality. 
                      Partner with IE & QA to maintain line balance and reduce DHU.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">Requirements:</p>
                      <p className="text-gray-700">5+ years on high-mix lines, basic IE exposure, line leadership.</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Mail className="mr-2 h-4 w-4" />
                      Apply: hr@ktlbd.com
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Card className="border-accent/20 max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-2xl">How to apply</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      Email your CV to <span className="font-medium text-accent">hr@ktlbd.com</span> with subject:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                      Application – [Role] – [Your Name]
                    </div>
                    <p className="text-gray-600 text-sm">
                      Include: earliest start date, current/expected salary, city, and two references.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Application
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default KTLCareers;