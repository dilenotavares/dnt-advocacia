import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "fa-gavel",
      title: "Direito Penal",
      description: "Defesa especializada em inquéritos policiais e processos criminais, atuando com vigor em todas as instâncias."
    },
    {
      icon: "fa-scale-balanced",
      title: "Direito Civil",
      description: "Resolução de conflitos contratuais, responsabilidade civil e indenizações, sempre buscando a melhor reparação."
    },
    {
      icon: "fa-briefcase",
      title: "Direito Empresarial",
      description: "Consultoria preventiva e contenciosa para empresas, visando segurança jurídica e crescimento sustentável."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-brand-light relative">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-sm">O Que Fazemos</h4>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark">Áreas de Atuação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-b-4 border-transparent hover:border-brand-gold"
            >
              <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                <i className={`fa-solid ${service.icon} text-2xl text-brand-dark group-hover:text-white`}></i>
              </div>
              <h3 className="text-xl font-playfair font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;