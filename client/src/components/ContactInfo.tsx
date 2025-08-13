
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our apparel manufacturing services? Reach out to our team and let's discuss how we can support your production needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Contact */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 bg-primary/10 flex items-center justify-center">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Human Resources</h3>
              <p className="text-gray-600 mb-4">General Inquiries</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:hr@ktlbd.com" className="flex items-center text-gray-700 hover:text-primary">
                  <Mail className="w-5 h-5 mr-2" />
                  hr@ktlbd.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Contact */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 bg-accent/10 flex items-center justify-center">
                <Phone className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Business Development</h3>
              <p className="text-gray-600 mb-4">Export Inquiries</p>
              <div className="flex flex-col space-y-3">
                <span className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-2" />
                  Available upon request
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
  );
};

export default ContactInfo;
