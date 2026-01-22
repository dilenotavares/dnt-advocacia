import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-brand-blue rounded-lg z-0 hidden md:block"></div>
            <img 
              src="https://picsum.photos/600/800" 
              alt="Advogado Sênior" 
              className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-sm">Sobre Nós</h4>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-6">
              Experiência e Dedicação <br /> em Cada Caso
            </h2>
            <div className="w-20 h-1 bg-brand-blue mb-8"></div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Com mais de 15 anos de atuação, a <strong>AC Advocacia</strong> consolidou-se como referência em direito criminal e defesa estratégica. Entendemos que por trás de cada processo existe uma vida, uma família e uma reputação a ser preservada.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa abordagem combina conhecimento técnico profundo com um atendimento humanizado e personalizado. Não somos apenas advogados; somos seus parceiros na busca pela justiça.
            </p>

            <a 
              href="#contato" 
              className="inline-flex items-center text-brand-gold font-bold hover:text-brand-blue transition-colors group"
            >
              Saiba Mais Sobre Nossa História 
              <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;