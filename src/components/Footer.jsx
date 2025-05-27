import React from 'react';
import logoB from '../assets/media/SciLogoB.png';

export default function Footer() {
  const columns = [
    { title: 'Why Scissor?', links: ['Scissor 101','Integrations & API','Pricing'] },
    { title: 'Resources', links: ['Blog','Resource Library','Developers'] },
    { title: 'Solutions', links: ['Social Media','Digital Marketing','Customer Service'] },
    { title: 'Legal', links: ['Privacy Policy','Terms of Service','Acceptable Use Policy'] },
    { title: 'Company', links: ['About','Careers','Contact'] },
  ];
  return (
    <footer className="bg-gray-50 pt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div>
          <div className="flex items-center mb-4">
            <img src={logoB} alt="Logo" className="h-8 w-8 mr-2" /> SCISSOR
          </div>
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook-square"></i></a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="font-semibold mb-2">{col.title}</h4>
              <ul className="space-y-1 text-gray-600">
                {col.links.map(link => <li key={link}><a href="#" className="hover:underline">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-6 text-gray-500 text-sm">
        Terms of Service | Security | © Scissor 2023
      </div>
    </footer>
  );
}