import React from 'react';
import logoB from '../assets/media/SciLogoB.png';
import footBg1 from '../assets/media/foot-bg-1.png';
import footBg2 from '../assets/media/foot-bg-2.png';
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';

const footerData = {
  socialIcons: [
    { icon: <FaXTwitter className="size-6 hover:text-[#8f8e8e] hover:-translate-y-1 transition duration-300 ease-in-out" /> },
    { icon: <FaInstagram className="size-6 hover:text-[#E4405F] hover:-translate-y-1 transition duration-300 ease-in-out" /> },
    { icon: <FaLinkedin className="size-6 hover:text-[#0A66C2] hover:-translate-y-1 transition duration-300 ease-in-out" /> },
    { icon: <FaFacebookSquare className="size-6 hover:text-[#007bff] hover:-translate-y-1 transition duration-300 ease-in-out" /> }
  ],
  columns: [
    {
      title: 'Why Scissor?',
      links: ['Scissor 101', 'Integrations & API', 'Pricing']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Resource Library', 'Developers', 'App Connectors', 'Support', 'Trust Center', 'Browser Extension', 'Mobile App']
    },
    {
      title: 'Solutions',
      links: ['Social Media', 'Digital Marketing', 'Customer Service', 'For Developers']
    },
    {
      title: 'Features',
      links: ['Branded Links', 'Mobile Links', 'Campaign Management & Analytics', 'QR Code generation']
    },
    {
      title: 'Products',
      links: ['Link Management', 'QR Codes', 'Link-in-bio']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Cookie Policy', 'Terms of Service', 'Acceptable Use Policy', 'Code of Conduct']
    },
    {
      title: 'Company',
      links: ['About Scissor', 'Careers', 'Partners', 'Press', 'Contact', 'Reviews']
    }
  ],
  bottomLinks: ['Terms of Service', 'Security', 'Scissor 2025']
};

export default function Footer() {
  return (
    <footer className='relative'>
      <img src={footBg1} alt="background pattern" className="footBg1 absolute top-0 left-0 w-[600px] h-[670px] -z-10" />
      <div className="footer-container flex pt-20 max-w-[1000px] gap-20 my-0 mx-auto">
        <div className="footer-logo flex flex-col gap-5">
          <img src={logoB} alt="Scissor Logo" className="h-[40px]" />
          <div className="social-icons flex gap-6">
            {footerData.socialIcons.map((social, index) => (
              <a key={index} href="#" className="social-icon decoration-0">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-columns flex gap-[50px] mb-8">
          {/* First Column Group */}
          <div className="min-w-[200px] flex-1">
            <div className="h-[128px] mb-[80px]">
              <h4 className="mb-[15px] font-semibold">{footerData.columns[0].title}</h4>
              <ul className="list-none">
                {footerData.columns[0].links.map((link, index) => (
                  <li key={index} className="mb-[7px]">
                    <a href="#" className="decoration-0 text-[#666] transition duration-300 ease-in-out hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-[15px] font-semibold">{footerData.columns[1].title}</h4>
              <ul className="list-none">
                {footerData.columns[1].links.map((link, index) => (
                  <li key={index} className="mb-[7px]">
                    <a href="#" className="decoration-0 text-[#666] transition duration-300 ease-in-out hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Second Column Group */}
          <div className="min-w-[200px] flex-1">
            <div className="h-[128px] mb-[80px]">
              <h4 className="mb-[15px] font-semibold">{footerData.columns[2].title}</h4>
              <ul className="list-none">
                {footerData.columns[2].links.map((link, index) => (
                  <li key={index} className="mb-[7px]">
                    <a href="#" className="decoration-0 text-[#666] transition duration-300 ease-in-out hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[128px] mb-[80px]">
              <h4 className="mb-[15px] font-semibold">{footerData.columns[3].title}</h4>
              <ul className="list-none">
                {footerData.columns[3].links.map((link, index) => (
                  <li key={index} className="mb-[7px]">
                    <a href="#" className="decoration-0 text-[#666] transition duration-300 ease-in-out hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Third Column Group */}
          <div className="min-w-[200px] flex-1">
            <div className="h-[128px] mb-[80px]">
              <h4 className="mb-[15px] font-semibold">{footerData.columns[4].title}</h4>
              <ul className="list-none">
                {footerData.columns[4].links.map((link, index) => (
                  <li key={index} className="mb-[7px]">
                    <a href="#" className="decoration-0 text-[#666] transition duration-300 ease-in-out hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[128px] mb-[80px]">
              <h4 className="mb-[15px] font-semibold">{footerData.columns[5].title}</h4>
              <ul className="list-none">
                {footerData.columns[5].links.map((link, index) => (
                  <li key={index} className="mb-[7px]">
                    <a href="#" className="decoration-0 text-[#666] transition duration-300 ease-in-out hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Fourth Column */}
          <div className="min-w-[200px] flex-1">
            <h4 className="mb-[15px] font-semibold">{footerData.columns[6].title}</h4>
            <ul className="list-none">
              {footerData.columns[6].links.map((link, index) => (
                <li key={index} className="mb-[7px]">
                  <a href="#" className="decoration-0 text-[#666] transition duration-300 ease-in-out hover:text-black">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-right pb-5 px-[90px] text-[14px] text-[#112232] font-[300] [word-spacing:3px]">
        <p>{footerData.bottomLinks.join(' | ')}</p>
      </div>
      <img src={footBg2} alt="background pattern" className="footBg2 absolute bottom-[-16px] right-0 w-[auto] h-[330px] -z-10" />
    </footer>
  );
}