import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#fefae0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#6c584c] mb-4 uppercase">GET IN TOUCH</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Please fill out the form below or reach out to us using our contact details.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Details */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8 h-full">
            <h3 className="text-2xl font-semibold text-[#6c584c] mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#d4a373] bg-opacity-20 p-4 rounded-full text-[#6c584c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#6c584c] text-lg">Office Address</h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    123 Furniture Avenue,<br />
                    Design District,<br />
                    NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#d4a373] bg-opacity-20 p-4 rounded-full text-[#6c584c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#6c584c] text-lg">Email Us</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@integrityimpex.com" className="hover:text-[#d4a373] transition-colors">
                      info@integrityimpex.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#d4a373] bg-opacity-20 p-4 rounded-full text-[#6c584c]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#6c584c] text-lg">Call Us</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+15551234567" className="hover:text-[#d4a373] transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#6c584c] mb-6">Send a Message</h3>
            <form action="https://formsubmit.co/info@integrityimpex.com" method="POST" className="space-y-5">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting us! We'll get back to you shortly." />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" name="firstName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#6c584c] focus:border-transparent outline-none transition-all duration-200" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" name="lastName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#6c584c] focus:border-transparent outline-none transition-all duration-200" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#6c584c] focus:border-transparent outline-none transition-all duration-200" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#6c584c] focus:border-transparent outline-none transition-all duration-200" placeholder="How can we help?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows="5" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#6c584c] focus:border-transparent outline-none transition-all duration-200 resize-none" placeholder="Your message here..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#6c584c] hover:bg-[#5b4a40] text-white font-medium py-3.5 px-4 rounded-lg shadow-md transition-colors duration-200 mt-2 text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
