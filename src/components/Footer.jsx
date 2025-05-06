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
                 No.10 Xikeng Road ,Zuotan villagers committee,Longjiang Town,Shunde district, Foshan City ,Guangdong Province ,China.<br />
                Ph- +86 130 7422 9152
              </p>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold mb-4">India Office</h4>
              <p className="text-sm leading-relaxed">
                 461, Laxmi Enclave 2, Opp. Gajera School, Katargam, Surat. 395004 <br />
                Ph- +91 9974606135 / +91 98982 29152
                
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  