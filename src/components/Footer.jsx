const Footer = () => {
    return (
      <footer className="bg-[#252e32] text-white text-sm">
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src="/logo.svg" alt="Logo" className="h-6" /> {/* Replace with actual logo */}
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
  
          <hr className="my-10 border-gray-600" />
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Creation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Furniture</a></li>
                <li><a href="#" className="hover:underline">Lighting</a></li>
                <li><a href="#" className="hover:underline">Decorative</a></li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">China Office</h4>
              <p className="text-sm leading-relaxed">
                Address- 803, 8th Floor XINGYAO Plaza, No.14, Lecong Jianshe Road,<br />
                Shunde District, Foshan City,<br />
                Guangdong Province, China<br />
                Ph- +86 135 3458 7106
              </p>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">India Office</h4>
              <p className="text-sm leading-relaxed">
                Address- 106 Unnati Tower, Central Spine,<br />
                Vidyadhar Nagar Jaipur,<br />
                Rajasthan -302039<br />
                Ph- +91-7014124192
              </p>
            </div>
          </div>
        </div>
  
        <div className="bg-[#f6f3eb] text-[#7c3a23] py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <span>
            Designed and Managed by <a href="#" className="font-medium text-black">Driftclick</a>
          </span>
          <div className="flex space-x-4 mt-2 md:mt-0 text-[#7c3a23]">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Disclaimer</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  