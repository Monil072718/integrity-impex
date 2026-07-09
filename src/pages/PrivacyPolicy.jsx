import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#fefae0] min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-[#d4a373]/20">
          <h1 className="text-4xl font-bold text-[#6c584c] mb-6 border-b border-[#d4a373]/30 pb-4">Privacy Policy</h1>
          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500 italic">Last updated: {new Date().toLocaleDateString()}</p>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">1. Information We Collect</h2>
              <p>At Integrity Impex, we collect information that you provide directly to us when you use our website, such as your name, email address, phone number, and any other details you choose to provide via our contact forms.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to communicate with you, process your requests, improve our services, and send you updates about our products. We do not sell your personal information to third parties.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">3. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#6c584c] mb-3">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:nakranimonil18@gmail.com" className="text-[#d4a373] hover:underline font-medium">nakranimonil18@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
