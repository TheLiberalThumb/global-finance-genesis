import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactMethods from '@/components/contact/ContactMethods';
import ContactForm from '@/components/contact/ContactForm';
import OfficeLocations from '@/components/contact/OfficeLocations';
import ResponseCommitment from '@/components/contact/ResponseCommitment';
import ContactFAQ from '@/components/contact/ContactFAQ';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <OfficeLocations />
      <ResponseCommitment />
      <ContactFAQ />
      <Footer />
    </div>
  );
};

export default Contact;