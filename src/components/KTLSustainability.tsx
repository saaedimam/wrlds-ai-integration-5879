import { motion } from "framer-motion";
import { Leaf, Recycle, Users, Target } from "lucide-react";

const KTLSustainability = () => {
  return (
    <section id="sustainability" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">Sustainability</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We focus on practical impact—quality systems, supply-chain security, and operator training. 
            As we roll out real-time tracking, we reduce rework, protect materials, and improve energy use per garment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Target className="h-12 w-12 text-accent" />,
              title: "Quality Systems",
              description: "ISO 9001 certified processes reduce waste and rework through systematic quality management"
            },
            {
              icon: <Users className="h-12 w-12 text-accent" />,
              title: "Operator Training",
              description: "Skilled workforce development reduces errors and improves efficiency across all production lines"
            },
            {
              icon: <Recycle className="h-12 w-12 text-accent" />,
              title: "Material Protection",
              description: "Real-time tracking systems minimize waste and optimize material usage throughout production"
            },
            {
              icon: <Leaf className="h-12 w-12 text-accent" />,
              title: "Energy Efficiency",
              description: "Live production dashboards help optimize energy consumption per garment produced"
            }
          ].map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4 mx-auto">
                {practice.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{practice.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KTLSustainability;