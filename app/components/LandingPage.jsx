'use client';

import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Leaf, BookOpen, Target, Linkedin, Github } from 'lucide-react';
// Componente personalizado para o ícone R$
const RealIcon = ({ className }) => (
  <div className={`font-bold flex items-center justify-center ${className}`}>
    Eco$
  </div>
);

export default function LandingPage() {
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-green-400 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateToPage('home')}>
              <RealIcon className="h-8 w-8 text-white text-2xl" />
              <span className="text-white text-xl font-bold">.enso</span>
            </div>

            <div className="flex space-x-8">
              <button
                onClick={() => {
                  navigateToPage('home');
                  setTimeout(() => scrollToSection('inicio'), 100);
                }}
                className="text-white hover:text-green-200 transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => {
                  navigateToPage('home');
                  setTimeout(() => scrollToSection('fundamentos'), 100);
                }}
                className="text-white hover:text-green-200 transition-colors font-medium"
              >
                Fundamentos
              </button>
              <button
                onClick={() => navigateToPage('sobre')}
                className="text-white hover:text-green-200 transition-colors font-medium"
              >
                Sobre
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <section id="inicio" className="pt-24 pb-2 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Educação Financeira Sustentável para Famílias
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transforme a relação da sua família com o dinheiro enquanto cuida do planeta. 
                Aprenda a prosperar financeiramente com consciência ambiental e social.
              </p>
              <button 
                onClick={() => scrollToSection('fundamentos')}
                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Comece Agora
              </button>
            </div>
          </section>

          {/* Content Sections */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto space-y-24">
              
              {/* Section 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                  <img 
                  src="/financeiro_familiar.jpg" 
                  alt="Planejamento Familiar"
                  className="w-full h-full"
                  />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Construindo o Futuro Juntos
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    O planejamento financeiro familiar vai além de economizar dinheiro. É sobre criar 
                    um legado sustentável para as próximas gerações. Aprenda a envolver todos os membros 
                    da família nas decisões financeiras, ensinando valores de consumo consciente e 
                    responsabilidade ambiental desde cedo. Juntos, vocês podem estabelecer metas que 
                    beneficiam tanto o orçamento familiar quanto o meio ambiente.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                  <img 
                  src="/consumo_consciente.jpg" 
                  alt="Consumo Consciente"
                  className="w-full h-full"
                  />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Cada Escolha Importa
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    O consumo consciente é a ponte entre a saúde financeira e a sustentabilidade. 
                    Descubra como pequenas mudanças nos hábitos de compra podem gerar grandes economias 
                    e reduzir significativamente o impacto ambiental da sua família. Aprenda a priorizar 
                    produtos duráveis, apoiar empresas sustentáveis e reduzir desperdícios, criando um 
                    ciclo positivo que beneficia seu bolso e o planeta.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                  <img 
                  src="/investimentos_sustentaveis.jpg" 
                  alt="Investimentos Verdes"
                  className="w-full h-full"
                  />
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Crescimento com Propósito
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Investir com consciência ambiental não significa abrir mão de retornos financeiros. 
                    Explore oportunidades de investimento em empresas e fundos que priorizam práticas 
                    sustentáveis, energia renovável e responsabilidade social. Aprenda a diversificar 
                    seu portfólio de forma ética, contribuindo para um futuro mais verde enquanto 
                    constrói patrimônio para sua família.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Fundamentos Section */}
          <section id="fundamentos" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Fundamentos da Educação Financeira
              </h2>
              <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                Domine os pilares essenciais para construir uma vida financeira sólida e sustentável
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Orçamento Familiar</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aprenda a mapear todas as receitas e despesas da família, criando um orçamento 
                    realista que permita alcançar objetivos financeiros sem comprometer a qualidade 
                    de vida. Inclua categorias para gastos sustentáveis e reserve recursos para 
                    investimentos verdes.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Metas e Objetivos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Defina metas financeiras de curto, médio e longo prazo que estejam alinhadas com 
                    valores sustentáveis. Seja economizar para instalar painéis solares, criar um fundo 
                    de emergência ou planejar uma aposentadoria consciente, estabeleça objetivos claros 
                    e mensuráveis.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Educação Contínua</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Transforme a educação financeira em um processo familiar contínuo. Realize reuniões 
                    mensais para discutir finanças, compartilhe conhecimentos sobre sustentabilidade e 
                    ensine as crianças sobre o valor do dinheiro e a importância de proteger o meio 
                    ambiente.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-green-500">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Pronto para Transformar suas Finanças?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Junte-se a milhares de famílias que já descobriram como prosperar financeiramente 
                enquanto cuidam do planeta.
              </p>
              <button className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-colors shadow-xl">
                Começar Minha Jornada
              </button>
            </div>
          </section>
        </>
      ) : (
        /* Página Sobre */
        <section className="pt-24 pb-16 px-4 min-h-screen">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 text-white rounded-2xl p-12 mb-12 shadow-2xl">
              <h1 className="text-5xl font-bold mb-6 text-center">
                Conscientização Financeira e Sustentabilidade Familiar
              </h1>
              <p className="text-xl text-center text-teal-100">
                Este site foi criado com o propósito de promover a educação financeira sustentável no contexto familiar, reforçando valores como consumo consciente, responsabilidade ambiental e inclusão econômica.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-10 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                INSTITUIÇÃO
              </h2>
              <p className="text-xl text-gray-700 text-center">
                Cruzeiro do Sul - Polo: Taboão da Serra
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-10 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                INTEGRANTE
              </h2>
              <p className="text-xl text-gray-700 text-center">
                Eduardo dos Santos da Costa
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-10 mb-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                ORIENTADORES
              </h2>
              <div className="text-xl text-gray-700 text-center space-y-2">
                <p>Douglas Almendro</p>
                <p>Vagner Da Silva</p>
                <p>Joaquim Felix Da Silva</p>
                <p>Cayro de MacEdo</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigateToPage('home')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg inline-flex items-center gap-2"
              >
                Voltar ao Menu
              </button>
            </div>
          </div>
        </section>
      )}

    {/* Social Links Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-6">
            
            <a 
              href="https://www.linkedin.com/in/eduardo-dos-santos-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/eduardovirtual"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors shadow-md"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <RealIcon className="h-8 w-8 text-white text-2xl" />
            <span className="text-2xl font-bold">.enso</span>
          </div>

          <p className="text-gray-400">
            Educação financeira sustentável para um futuro melhor
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Eco$enso. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}