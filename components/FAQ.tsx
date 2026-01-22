import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Qual o prazo médio para a resolução de um processo?",
      answer: "O tempo de um processo varia conforme a complexidade do caso e a vara judicial. No entanto, nossa equipe trabalha com agilidade processual e acompanhamento diário para garantir a maior celeridade possível."
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta é uma reunião estratégica para entendermos os detalhes do seu caso. Analisamos documentos, ouvimos seu relato e traçamos as primeiras linhas de defesa ou ação. Pode ser realizada presencialmente ou online."
    },
    {
      question: "Vocês atendem em quais regiões do país?",
      answer: "Embora nossa sede seja física, atuamos em todo o território nacional através do sistema de processo eletrônico e de parcerias estratégicas, garantindo defesa de excelência onde você estiver."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-brand-light hover:bg-brand-blue/10 transition-colors focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-bold text-brand-dark text-left font-playfair">{faq.question}</span>
                <i className={`fa-solid fa-chevron-down text-brand-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-white text-gray-600 border-t border-gray-100 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;