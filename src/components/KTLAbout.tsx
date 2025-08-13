import { motion } from "framer-motion";
import { Factory, Users, Shield, TrendingUp, Award, Globe } from "lucide-react";

const KTLAbout = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">About Kattali Textile Ltd.</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Kattali Textile Ltd. (KTL) is a Bangladesh-based apparel manufacturer serving export buyers in Canada and the USA. 
            We run 12 production lines across knit and woven—t-shirts, denim bottoms, and ladies tops—supported by ISO 9001 
            quality systems and CTPAT supply-chain security. We're modernizing operations with real-time production visibility 
            (StitchOS/TextileTrack) to improve planning accuracy and reduce rework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Factory className="h-12 w-12 text-accent" />,
              title: "Knit & Woven",
              description: "T-shirts, denim bottoms, and ladies tops across our specialized production lines"
            },
            {
              icon: <Users className="h-12 w-12 text-accent" />,
              title: "Scale: 12 lines, 850+ team",
              description: "Experienced workforce with dedicated training center and upskilling programs"
            },
            {
              icon: <Shield className="h-12 w-12 text-accent" />,
              title: "Compliance: ISO 9001, CTPAT",
              description: "Quality management system and supply-chain security certifications"
            },
            {
              icon: <TrendingUp className="h-12 w-12 text-accent" />,
              title: "IE & Planning",
              description: "Line balancing, SMV/time study, target tracking, and continuous improvement"
            },
            {
              icon: <Award className="h-12 w-12 text-accent" />,
              title: "Training Center",
              description: "New operator intake and upskilling programs for career development"
            },
            {
              icon: <Globe className="h-12 w-12 text-accent" />,
              title: "Tech: RFID/live dashboards",
              description: "StitchOS/TextileTrack implementation for real-time production visibility"
            }
          ].map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4 mx-auto">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">{capability.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KTLAbout;