import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { RiPrivacyPolicyLine } from 'react-icons/ri';


export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: developerinu@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-secondary-dark flex items-center space-x-2">
                <FaTwitter />
                <span>Twitter</span>
              </a> */}
              <a href="#" className="hover:text-secondary-dark flex items-center space-x-2">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
            <Link to="/regulations" className="hover:text-secondary-dark flex items-center space-x-2">
              <span>Privacy Policy</span>
            </Link>
              {/* <a href="#" className="hover:text-secondary-dark flex items-center space-x-2">
                <MdOutlineGavel />
                <span>Terms of Service</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Human or Ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};