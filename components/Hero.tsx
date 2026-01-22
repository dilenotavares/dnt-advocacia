import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Escritório de Advocacia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <span className="block text-brand-gold font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base animate-fade-in-up">
          AC Advocacia
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight mb-6">
          Defendendo seus Direitos <br /> com <span className="text-brand-gold italic">Excelência</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Comprometimento, ética e resultados. Sua segurança jurídica é a nossa prioridade absoluta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contato" 
            className="bg-brand-gold hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded shadow-lg transition-all transform hover:-translate-y-1 text-center"
          >
            Agendar Consulta
          </a>
          <a 
            href="#sobre" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-8 rounded shadow-lg transition-all text-center"
          >
            Conheça o Escritório
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;