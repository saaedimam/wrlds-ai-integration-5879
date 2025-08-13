import { motion } from "framer-motion";
import { Globe, Target, Calendar, Users } from "lucide-react";

const KTLClients = () => {
  return (
    <section id="clients" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary">Clients</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We manufacture for export programs in North America. If you're a brand or sourcing office, 
            our IE-backed costing and realistic delivery plans help you hit calendar targets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="h-12 w-12 text-accent" />,
              title: "North American Markets",
              description: "Established export programs serving brands across Canada and USA"
            },
            {
              icon: <Target className="h-12 w-12 text-accent" />,
              title: "IE-Backed Costing",
              description: "Industrial engineering foundation ensures accurate pricing and delivery estimates"
            },
            {
              icon: <Calendar className="h-12 w-12 text-accent" />,
              title: "Calendar Targets",
              description: "Realistic delivery planning helps brands meet their seasonal deadlines"
            },
            {
              icon: <Users className="h-12 w-12 text-accent" />,
              title: "Sourcing Partnerships",
              description: "Working directly with brands and sourcing offices for long-term relationships"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center fx-press"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Partner With Us</h3>
            <p className="text-gray-600 mb-6">
              Looking for a reliable manufacturing partner in Bangladesh? Our combination of skilled workforce, 
              quality certifications, and modern production tracking makes us an ideal choice for North American brands.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-primary">12</div>
                <div className="text-gray-600">Production Lines</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary">850+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-primary">2</div>
                <div className="text-gray-600">Major Certifications</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KTLClients;