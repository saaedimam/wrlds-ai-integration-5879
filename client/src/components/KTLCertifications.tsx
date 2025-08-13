import { motion } from "framer-motion";
import { Shield, Award, CheckCircle } from "lucide-react";

const KTLCertifications = () => {
  return (
    <section id="certifications" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality and security is demonstrated through internationally recognized certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="modern-card p-10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-lg mb-6 mx-auto">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-primary">ISO 9001</h3>
            <p className="text-gray-600 text-center mb-4">Quality Management System</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-green-600 mb-2">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">Currently Certified</span>
              </div>
              <p className="text-sm text-gray-600">
                Internationally recognized standard for quality management systems, ensuring consistent 
                quality across all production processes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="modern-card p-10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-lg mb-6 mx-auto">
              <Shield className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-accent">CTPAT</h3>
            <p className="text-gray-600 text-center mb-4">Customs Trade Partnership Against Terrorism</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-green-600 mb-2">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">Currently Certified</span>
              </div>
              <p className="text-sm text-gray-600">
                U.S. Customs and Border Protection voluntary supply-chain security program ensuring 
                secure international trade lanes.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Future Certifications</h4>
            <p className="text-gray-600">
              <span className="text-gray-500">Not currently held:</span> WRAP (Worldwide Responsible Accredited Production), 
              ICTI (International Council of Toy Industries)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KTLCertifications;