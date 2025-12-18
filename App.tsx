
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Settings, Zap, Factory, Package, FlaskConical, Car, ChevronRight, Phone, Mail, ArrowRight, X, Menu, Droplets, Gauge } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';
import WhatsAppWidget from './components/WhatsAppWidget';
import { TechnicalFeature } from './types';

// Technical Catalog Data
const CATALOG: TechnicalFeature[] = [
  { 
    id: '1', 
    name: 'LINHA PU (POLIURETANO)', 
    category: 'ALTA FLEXIBILIDADE', 
    specs: 'Ideal para painéis e garras',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
    description: 'Flexibilidade extrema para aplicações com raios de curvatura apertados. Resistência superior à abrasão e dobras.'
  },
  { 
    id: '2', 
    name: 'LINHA NYLON (PA12)', 
    category: 'ESTABILIDADE TÉRMICA', 
    specs: 'Alta pressão e resistência',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
    description: 'Excelente resistência química e estabilidade dimensional. Perfeito para linhas de ar comprimido e lubrificação centralizada.'
  },
  { 
    id: '3', 
    name: 'LINHA TRANÇADA (PVC)', 
    category: 'RESISTÊNCIA MECÂNICA', 
    specs: 'Reforço para impactos',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    description: 'Mangueiras reforçadas com tramas de poliéster para aplicações que exigem alta resistência mecânica e visualização do fluido.'
  },
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<TechnicalFeature | null>(null);
  
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-[#e31e24] selection:text-white cursor-auto md:cursor-none overflow-x-hidden bg-[#0a0b1e]">
      <CustomCursor />
      <FluidBackground />
      <AIChat />
      <WhatsAppWidget />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference">
        <div className="flex items-center gap-3 z-50">
          <div className="flex items-center font-heading text-xl md:text-2xl font-black tracking-tighter">
            <span className="text-[#e31e24]">SK-</span>
            <span className="text-[#28a745]">G</span>
            <span className="text-white ml-2 text-sm md:text-base font-bold uppercase tracking-widest">Automação</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
          {['Catálogo', 'Benefícios', 'Setores', 'Contato'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-red-500 transition-colors text-white cursor-pointer bg-transparent border-none"
              data-hover="true"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Logo oficial no topo direito */}
        <div className="hidden md:block">
          <img 
            src="https://i.imgur.com/hURknEb.png" 
            alt="SK-G Automação" 
            className="h-12 w-auto object-contain cursor-pointer transition-opacity hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        <button className="md:hidden text-white z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[100svh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.div style={{ y, opacity }} className="z-10 text-center flex flex-col items-center w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-green-400 tracking-[0.4em] uppercase mb-8 bg-white/5 px-6 py-2 border border-white/10 rounded-full backdrop-blur-xl"
          >
            <Droplets className="w-4 h-4 text-red-500" />
            <span>Evite desperdícios na sua planta</span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/>
            <span>Aumento de 18% em eficiência</span>
          </motion.div>

          <div className="relative w-full flex flex-col justify-center items-center px-4">
            <h1 className="text-2xl md:text-3xl leading-tight font-black tracking-tighter text-center uppercase mb-4 text-white">
              TÁ VAZANDO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600">PRODUTIVIDADE</span>
            </h1>
            <h2 className="text-lg md:text-xl font-heading font-light tracking-widest text-gray-400 uppercase">NA SUA FÁBRICA?</h2>
          </div>
          
          <motion.div
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-6 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg font-light max-w-2xl mx-auto text-gray-400 leading-relaxed px-4 text-center"
          >
            Descubra como as mangueiras industriais certas podem reduzir desperdícios, evitar paradas e <span className="text-white font-medium">aumentar a eficiência em até 18%</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-col md:flex-row gap-4"
          >
            <button onClick={() => scrollToSection('contato')} className="bg-[#e31e24] text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-xl shadow-red-600/20" data-hover="true">Recomendação Técnica Gratuita</button>
            <div className="flex gap-4">
               <a href="https://wa.me/5511997379588" target="_blank" className="flex items-center gap-2 border border-green-500/30 px-6 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-green-600 transition-all text-white no-underline" data-hover="true">
                 <Phone className="w-4 h-4" /> WhatsApp
               </a>
               <a href="mailto:vendas.jundiai@skgautomacao.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-white/20 px-6 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all text-white no-underline" data-hover="true">
                 <Mail className="w-4 h-4" /> E-mail
               </a>
            </div>
          </motion.div>
        </motion.div>

        {/* MARQUEE */}
        <div className="absolute bottom-16 left-0 w-full py-6 bg-black/60 backdrop-blur-md text-white z-20 overflow-hidden border-y border-white/20">
          <motion.div 
            className="flex w-fit will-change-transform"
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((key) => (
              <div key={key} className="flex whitespace-nowrap shrink-0">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-2xl md:text-4xl font-heading font-black px-12 flex items-center gap-6 text-white opacity-100">
                    SK-G AUTOMAÇÃO <span className="text-[#e31e24]">●</span> 
                    DISTRIBUIDOR AUTORIZADO CAMOZZI <span className="text-[#28a745]">●</span> 
                    ENTREGA RÁPIDA <span className="text-[#28a745]">●</span>
                    ESPECIALISTAS EM AUTOMAÇÃO INDUSTRIAL <span className="text-[#e31e24]">●</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* CATALOG SECTION */}
      <section id="catálogo" className="relative z-10 py-32">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase leading-tight text-white">
              Catálogo Técnico <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500">Expresso</span>
            </h2>
            <p className="text-gray-400 max-w-md mt-6 md:mt-0 md:text-right font-light italic text-sm">
              "Mangueiras técnicas sob medida para quem não pode parar."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
            {CATALOG.map((feature) => (
              <div 
                key={feature.id} 
                className="group relative h-[450px] overflow-hidden border border-white/5 bg-black/40 cursor-pointer"
                data-hover="true"
                onClick={() => setSelectedFeature(feature)}
              >
                <img src={feature.image} alt={feature.name} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <span className="text-[10px] font-mono border border-green-500/40 px-3 py-1 rounded-full w-fit backdrop-blur-md uppercase tracking-widest text-green-400">{feature.category}</span>
                  <div>
                    <h3 className="text-3xl font-heading font-bold mb-2 uppercase">{feature.name}</h3>
                    <p className="text-red-500 font-mono text-sm tracking-widest uppercase">{feature.specs}</p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       Saiba mais <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contato" className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0a192f]/80 border border-white/10 p-8 md:p-16 backdrop-blur-2xl rounded-3xl relative overflow-hidden shadow-2xl shadow-black/50">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-green-600 to-red-600" />
             
             <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left mb-12">
                {/* Mascote Oficial SK-G */}
                <div className="shrink-0 relative group">
                   <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-red-500/15 transition-colors duration-500" />
                   <img 
                     src="https://i.imgur.com/jAm2QjF.png" 
                     alt="Mascote SK-G Automação" 
                     className="relative w-32 h-auto md:w-56 h-auto object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-all duration-500"
                   />
                </div>
                
                <div className="flex-1">
                   <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white uppercase tracking-tight leading-tight">
                     Fale com nossa Engenharia
                   </h3>
                   <p className="text-gray-400 max-w-2xl text-base md:text-lg font-light leading-relaxed">
                     Analise sua planta industrial agora com especialistas em transcodificação Camozzi e mangueiras técnicas. 
                     Solicite sua <span className="text-white font-bold">recomendação gratuita</span>.
                   </p>
                </div>
             </div>
             
             <div className="flex flex-col md:flex-row gap-6 mb-12">
                <a href="mailto:vendas.jundiai@skgautomacao.com.br" target="_blank" rel="noopener noreferrer" className="flex-1 py-6 bg-red-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group shadow-lg shadow-red-600/20 no-underline" data-hover="true">
                  <Mail className="w-4 h-4" /> Solicitar por E-mail
                </a>
                <a href="https://wa.me/5511997379588" target="_blank" className="flex-1 py-6 bg-green-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group no-underline shadow-lg shadow-green-600/20" data-hover="true">
                  <Phone className="w-4 h-4" /> WhatsApp Engenharia
                </a>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left p-8 bg-black/40 rounded-2xl border border-white/5">
                <div>
                   <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-mono">Contatos Diretos</div>
                   <div className="space-y-2 text-sm font-mono">
                      <div className="flex items-center gap-3 text-white"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> (11) 99737-9588</div>
                      <div className="flex items-center gap-3 text-white"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> (11) 99730-2938</div>
                   </div>
                </div>
                <div>
                   <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-mono">E-mail Corporativo</div>
                   <div className="text-sm font-mono text-white underline break-all">vendas.jundiai@skgautomacao.com.br</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <img src="https://i.imgur.com/hURknEb.png" alt="SK-G" className="h-10 w-auto opacity-80" />
            <div>
              <div className="font-heading text-lg font-bold tracking-tighter">SK-G Automação</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Distribuidor Autorizado Camozzi</div>
            </div>
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-right leading-relaxed font-mono">
            © 2025 SK-G Automação Industrial Ltda. <br/>
            Selo de Confiança Camozzi | Conteúdo Técnico Consultivo
          </div>
        </div>
      </footer>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFeature(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#0a192f] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button onClick={() => setSelectedFeature(null)} className="absolute top-6 right-6 z-20 p-2 text-white/50 hover:text-white transition-colors" data-hover="true">
                <X className="w-8 h-8" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img src={selectedFeature.image} alt={selectedFeature.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <div className="text-red-500 font-mono text-sm uppercase tracking-widest mb-6">{selectedFeature.category}</div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-4">{selectedFeature.name}</h3>
                <div className="text-xl font-bold text-white mb-8 border-l-2 border-green-600 pl-4">{selectedFeature.specs}</div>
                <p className="text-gray-400 leading-relaxed text-lg font-light mb-10">{selectedFeature.description}</p>
                <div className="flex gap-4">
                  <button onClick={() => { setSelectedFeature(null); scrollToSection('contato'); }} className="flex-1 bg-red-600 text-white px-6 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Solicitar Cotação</button>
                  <button onClick={() => { setSelectedFeature(null); }} className="flex-1 border border-white/20 text-white px-6 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-white/10 transition-all">Fechar</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
