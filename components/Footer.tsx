import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
             <a href="#" className="text-3xl font-bold font-playfair tracking-wide text-white">
              AC <span className="text-brand-gold">Advocacia</span>
            </a>
          </div>
          
          <div className="flex space-x-8">
            <a href="#home" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Home</a>
            <a href="#sobre" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Sobre</a>
            <a href="#servicos" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Serviços</a>
            <a href="#contato" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">Contato</a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AC Advocacia. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
             <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
             <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;