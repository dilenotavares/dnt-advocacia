import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-brand-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
            <h3 className="text-2xl font-playfair font-bold text-brand-dark mb-6">Envie sua Mensagem</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-slate-50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-slate-50"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-slate-50 resize-none"
                    placeholder="Descreva brevemente o seu caso..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-sm">Fale Conosco</h4>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-8">Estamos prontos para defender você.</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Entre em contato agora mesmo para agendar uma consulta inicial. Garantimos sigilo absoluto e atendimento prioritário.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-brand-dark">Endereço</h5>
                  <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-brand-dark">Telefone</h5>
                  <p className="text-gray-600">(11) 99999-9999<br />(11) 3333-3333</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="ml-6">
                  <h5 className="text-lg font-bold text-brand-dark">Email</h5>
                  <p className="text-gray-600">contato@acadvocacia.com.br<br />juridico@acadvocacia.com.br</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;