import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Profissionalismo impecável. O Dr. e sua equipe me deram todo o suporte necessário em um momento muito delicado. O resultado superou minhas expectativas.",
      author: "Carlos Mendes",
      role: "Empresário"
    },
    {
      text: "A atenção aos detalhes e a clareza nas explicações fizeram toda a diferença. Senti segurança do início ao fim do processo. Recomendo de olhos fechados.",
      author: "Fernanda Souza",
      role: "Médica"
    },
    {
      text: "Dedicação total ao caso. Fui tratado com dignidade e respeito. A estratégia jurídica adotada foi brilhante e fundamental para a minha absolvição.",
      author: "Roberto Silva",
      role: "Engenheiro"
    }
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h4 className="text-brand-gold font-bold uppercase tracking-widest mb-2 text-sm">Depoimentos</h4>
           <h2 className="text-3xl md:text-4xl font-playfair font-bold">O Que Dizem Nossos Clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg relative border border-slate-700">
              {/* Big Quote Icon */}
              <div className="absolute -top-5 left-8 text-6xl text-brand-gold opacity-50 font-playfair">
                &ldquo;
              </div>
              
              <p className="text-gray-300 italic mb-6 relative z-10 pt-4 leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-700 pt-4">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-brand-dark font-bold text-lg">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-brand-gold">{item.author}</h5>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;