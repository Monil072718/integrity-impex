import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#fefae0] min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-[#d4a373]/20">
          <h1 className="text-4xl font-bold text-[#6c584c] mb-6 border-b border-[#d4a373]/30 pb-4">Terms of Service</h1>
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 italic">Last updated: {new Date().toLocaleDateString()}</p>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the Integrity Impex website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">2. Intellectual Property</h2>
              <p>All content included on this site, such as text, graphics, logos, images, and product designs, is the property of Integrity Impex and is protected by international copyright laws. Unauthorized use of this material is prohibited.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">3. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Integrity Impex's website for personal, non-commercial transitory viewing only.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">4. Disclaimer</h2>
              <p>The materials on Integrity Impex's website are provided on an 'as is' basis. Integrity Impex makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">5. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at <a href="mailto:nakranimonil18@gmail.com" className="text-[#d4a373] hover:underline font-medium">nakranimonil18@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
