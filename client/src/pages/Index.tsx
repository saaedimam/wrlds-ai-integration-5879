
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import KTLAbout from '@/components/KTLAbout';
import KTLSustainability from '@/components/KTLSustainability';
import KTLCertifications from '@/components/KTLCertifications';
import KTLClients from '@/components/KTLClients';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Kattali Textile Ltd. - Bangladesh Apparel Manufacturer (ISO 9001, CTPAT)" 
        description="KTL runs 12 production lines and 850+ staff producing knit & woven garments for North America. Careers and investor information inside."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['Bangladesh apparel manufacturing', 'textile manufacturer', 'garment production', 'ISO 9001', 'CTPAT', 'knit woven production', 'North America export', 'textile careers', 'apparel investment']}
      />
      <Hero />
      <KTLAbout />
      <KTLSustainability />
      <KTLCertifications />
      <KTLClients />
    </PageLayout>
  );
};

export default Index;
