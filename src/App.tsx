import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Gift, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  X,
  Star,
  ArrowRight,
  Smartphone,
  BookOpen,
  Target,
  Calendar,
  Lock,
  Zap,
  Check,
  AlertCircle,
  Timer,
  ShoppingBag,
  TrendingDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const PRIMARY_COLOR = "text-green-600";
const BUTTON_BG = "bg-green-600 hover:bg-green-700";

// --- Components ---

const TopBar = () => (
  <div className="bg-red-600 text-white py-2 px-4 text-center text-xs md:text-sm font-black sticky top-0 z-[60] shadow-md animate-pulse">
    🚨 ATENÇÃO: ÚLTIMAS VAGAS COM VALOR PROMOCIONAL DISPONÍVEIS 🚨
  </div>
);

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="bg-white pt-12 pb-20 px-6 md:pt-20 overflow-hidden relative border-b border-gray-100">
    <div className="max-w-[1100px] mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black mb-8 border border-red-100 uppercase tracking-widest leading-none">
          <Zap size={14} className="fill-red-600" /> Método Testado e Aprovado
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 max-w-5xl mx-auto text-balance tracking-tighter">
          RESGATE SUA AUTOESTIMA E <span className="text-red-600">ELIMINE A BARRIGA</span> EM APENAS 20 DIAS
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
          Descubra o único método prático que foca no que realmente importa: <span className="font-bold text-gray-900 shadow-sm">resultados rápidos</span> sem passar fome ou desistir no meio do caminho.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onCtaClick(); }}
            className={`w-full md:w-auto ${BUTTON_BG} text-white font-black py-5 px-12 rounded-2xl text-xl md:text-2xl shadow-[0_20px_50px_rgba(22,163,74,0.3)] transform transition hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-4 group`}
          >
            QUERO COMEÇAR AGORA! 
            <ArrowRight size={24} className="group-hover:translate-x-1 transition" />
          </button>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 font-bold text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" /> Compra 100% Segura
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" /> Acesso Imediato
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" /> Garantia de 7 Dias
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ThePain = () => (
  <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
    <div className="max-w-[800px] mx-auto text-center">
      <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-4">Seja sincera com você mesma...</h2>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-10 leading-tight tracking-tight text-balance">
        Quantas vezes você tentou começar e <span className="text-red-600/80">desistiu logo na primeira semana?</span>
      </h3>
      
      <div className="space-y-6 text-left">
        {[
          "Você começa a segunda-feira super animada, compra saladas, se matricula na academia...",
          "Mas chega na quarta-feira e o estresse do trabalho te faz atacar o primeiro chocolate que vê pela frente.",
          "O resultado? Aquela frustração enorme, sentimento de incapacidade e a calça que continua apertada.",
          "O terrível 'efeito sanfona' não é sua culpa, é culpa de métodos complicados que ninguém consegue seguir."
        ].map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4"
          >
            <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <p className="text-gray-700 text-lg font-medium leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 bg-red-50 p-6 rounded-3xl border border-red-100">
        <p className="text-red-800 font-black text-xl italic">
          "Você não precisa de mais força de vontade. Você precisa de um SISTEMA que trabalhe por você."
        </p>
      </div>
    </div>
  </section>
);

const TheMethod = () => (
  <section className="bg-white py-24 px-6 relative overflow-hidden">
    {/* Decorative element */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
    
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-left">
        <span className="inline-block text-green-600 font-black uppercase tracking-widest mb-4 text-xs">Conheça o seu GPS de emagrecimento</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tighter">
          Apresentamos o <span className="text-green-600 underline decoration-green-200 underline-offset-4">Método Reset 20D</span>
        </h2>
        <p className="text-gray-600 text-xl mb-8 leading-relaxed font-medium">
          Esqueça as dietas restritivas que te deixam de mau humor. O Reset 20D é um sistema de reprogramação focado em praticidade absoluta.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-2xl flex-shrink-0">
              <TrendingDown size={24} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-black text-gray-900 text-lg mb-1">Impacto Imediato</h4>
              <p className="text-gray-500 font-medium leading-relaxed">Desenvolvido para você ver os primeiros resultados já nos primeiros dias, mantendo sua motivação no topo.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-2xl flex-shrink-0">
              <ShoppingBag size={24} className="text-green-600" />
            </div>
            <div>
              <h4 className="font-black text-gray-900 text-lg mb-1">Simplicidade Real</h4>
              <p className="text-gray-500 font-medium leading-relaxed">Sem ingredientes caros. Sem horas na cozinha. Apenas o que funciona para quem tem uma vida corrida.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 w-full max-w-md md:max-w-none">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="bg-gray-950 rounded-[40px] p-2 shadow-2xl overflow-hidden">
            <img 
              src="https://i.ibb.co/1fxsKWJH/Chat-GPT-Image-Mar-31-2026-07-16-01-PM.png" 
              alt="Projeto Reset 20D Mockup" 
              className="w-full h-auto rounded-[32px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 z-20 flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-xl">
              <CheckCircle2 size={24} className="text-green-600" />
            </div>
            <div className="text-left">
              <p className="text-xs font-black text-gray-400 tracking-widest uppercase">Resultados</p>
              <p className="text-xl font-black text-gray-900">Média de -5kg</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const list = [
    {
      title: "VOCÊ VAI SABER EXATAMENTE O QUE COMER",
      desc: "Chega de dúvidas ou receitas mirabolantes. Você recebe o guia definitivo com ingredientes que você já tem em casa.",
      icon: <Check className="text-green-600" size={20} />
    },
    {
      title: "NÃO VAI PERDER TEMPO DECIDINDO",
      desc: "O cardápio está pronto. É só abrir e seguir. Ganhe horas de vida sem precisar planejar cada refeição.",
      icon: <Timer className="text-green-600" size={20} />
    },
    {
      title: "VOCÊ SÓ SEGUE E EMAGRECE",
      desc: "Um plano de 20 dias milimetricamente desenhado para forçar seu corpo a queimar gordura de forma natural.",
      icon: <ArrowRight className="text-green-600" size={20} />
    }
  ];

  return (
    <section className="bg-gray-950 py-24 px-6 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-[10%] w-[40%] h-[40%] bg-green-600 rounded-full blur-[150px] opacity-10"></div>
      
      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <h2 className="text-sm font-black text-green-500 uppercase tracking-[0.2em] mb-4">A Liberdade que você merece</h2>
        <h3 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">O QUE ACONTECE NO SEU CORPO EM 20 DIAS:</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[32px] text-left hover:bg-white/10 transition group">
              <div className="bg-green-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-green-500/30 group-hover:scale-110 transition shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-xl font-black mb-4 leading-tight tracking-tight text-white uppercase italic">{item.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="bg-white py-24 px-6">
    <div className="max-w-[1100px] mx-auto text-center">
      <span className="text-green-600 font-black uppercase tracking-widest text-xs mb-4 inline-block">Provas da Transformação</span>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 tracking-tighter">MAIS DE <span className="text-green-600">3.500 VIDAS</span> TRANSFORMADAS</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Bruna Mendes",
            res: "Finalmente entrei naquele vestido que estava guardado há 2 anos. Fiz por 20 dias e pareço outra pessoa!",
            lost: "-6.2kg",
            img: "https://i.ibb.co/JWmxycq1/571a308c7cb0b6a413ebe8a8e07e5421.jpg"
          },
          {
            name: "Lucas Pereira",
            res: "Minha disposição triplicou. O melhor é que não precisei parar de comer as coisas que gosto de verdade.",
            lost: "-5.5kg",
            img: "https://i.ibb.co/FkXMnkGs/23b7dba95dd0cca0185331a6eaa31c3b.jpg"
          },
          {
            name: "Fernanda Lima",
            res: "As pessoas na minha família notaram na mesma hora. Me sinto mais leve, produtiva e feliz.",
            lost: "-4.8kg",
            img: "https://i.ibb.co/qLdzh4rm/26dce3c1ad4f4a3bf0828cc2c03c47d7.jpg"
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-[40px] text-left relative flex flex-col group hover:shadow-xl transition-shadow duration-500">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-gray-700 text-xl font-medium leading-relaxed mb-10 flex-grow italic">"{item.res}"</p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <img src={item.img} alt={item.name} className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition duration-500 shadow-md" />
              <div>
                <p className="font-black text-gray-900 text-lg uppercase tracking-tight leading-none">{item.name}</p>
                <p className="text-green-600 font-black text-sm uppercase tracking-widest mt-1">Resultado: {item.lost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <button 
          type="button"
          onClick={(e) => { e.preventDefault(); onCtaClick(); }}
          className="text-gray-900 font-black flex items-center gap-2 mx-auto hover:gap-4 transition-all duration-300 text-lg group uppercase tracking-widest"
        >
          VEJA OS PLANOS E COMECE SEU RESET AGORA
          <ArrowRight className="text-green-600" />
        </button>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { 
      q: "Eu não tenho muito tempo, funciona pra mim?", 
      a: "Sim! Este método foi desenhado justamente para quem tem rotina corrida. Você não vai gastar mais de 15 minutos organizando suas refeições." 
    },
    { 
      q: "Já tentei de tudo e nada funcionou. Por que o Reset seria diferente?", 
      a: "As outras dietas focam em privação. Nós focamos em RESET. Nós limpamos o 'ruído' metabólico e te damos um plano de ação que ataca a gordura sem sacrificar seu humor ou energia." 
    },
    { 
      q: "Preciso de suplementos caros?", 
      a: "Absolutamente não. Tudo o que sugerimos você encontra no supermercado da esquina." 
    },
    { 
      q: "O acesso é vitalício?", 
      a: "Depende do plano escolhido. No plano 'Completo', o acesso é seu para sempre, incluindo todas as futuras atualizações." 
    }
  ];

  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-sm font-black text-green-600 text-center uppercase tracking-widest mb-4">Transparência Total</h2>
        <h3 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-16 tracking-tighter">PERGUNTAS FREQUENTES</h3>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-[28px] border border-gray-100 overflow-hidden transition-all duration-300">
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); setOpenIdx(openIdx === idx ? null : idx); }}
                className="w-full flex items-center justify-between p-7 text-left transition"
              >
                <span className="font-black text-gray-900 text-lg md:text-xl leading-snug tracking-tight">{faq.q}</span>
                <div className={`p-2 rounded-full transition-all duration-300 ${openIdx === idx ? 'bg-green-600 text-white rotate-180' : 'bg-white text-gray-400 shadow-sm'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    key="faq-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-7 pb-7 text-gray-600 font-medium text-base md:text-lg leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = React.forwardRef<HTMLDivElement, { 
  onPlan1Click: () => void, 
  onPlan3Click: () => void 
}>(({ onPlan1Click, onPlan3Click }, ref) => (
  <section id="pricing" ref={ref} className="bg-gray-50 py-24 px-6 relative">
    <div className="max-w-[1100px] mx-auto text-center">
      <span className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-xs font-black mb-6 uppercase tracking-widest border border-green-200">
        Condição Especial Hoje: ATÉ 60% OFF
      </span>
      <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">Escolha sua transformação</h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 font-medium">Garanta seu acesso agora e receba todos os bônus exclusivos antes que o cronômetro chegue ao zero.</p>
      
      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-[900px] mx-auto">
        {/* Plano 1 - Reset Essencial */}
        <div className="bg-white p-8 md:p-12 rounded-[48px] border border-gray-100 flex flex-col shadow-sm transition hover:shadow-xl group relative overflow-hidden">
          <div className="mb-10 text-left">
            <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Reset Essencial</h3>
            <p className="text-gray-400 font-bold text-sm tracking-wide">O ponto de partida</p>
          </div>
          
          <div className="mb-10 text-left">
            <p className="text-gray-400 line-through font-bold text-sm mb-1 uppercase tracking-widest">De R$ 67,90</p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-gray-900">Por R$</span>
              <span className="text-7xl font-black text-gray-900 tracking-tighter">12,97</span>
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-4 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" /> Acesso Digital Imediato
            </p>
          </div>

          <ul className="space-y-4 mb-10 flex-grow text-left">
            {[
              "Método Reset 20D Completo",
              "Guia de Orientação Inicial",
              "Suporte por E-mail",
              "Material 100% Digital"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 font-bold text-sm">
                <Check size={18} className="text-green-500 mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onPlan1Click(); }}
            className="w-full bg-gray-900 hover:bg-black text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-lg active:scale-95 text-lg uppercase tracking-widest"
          >
            QUERO O ESSENCIAL
          </button>
        </div>

        {/* Plano 2 - Reset Platinum */}
        <div className="bg-gray-900 p-8 md:p-12 rounded-[48px] border-4 border-green-600 flex flex-col shadow-2xl relative transform md:scale-110 z-10 transition hover:-translate-y-2 group">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-black px-8 py-2.5 rounded-full uppercase tracking-[0.2em] z-20 shadow-xl whitespace-nowrap animate-bounce">
            RECOMENDADO
          </div>

          <div className="mb-10 text-left">
            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight italic">Reset Platinum</h3>
            <p className="text-green-400 font-bold text-sm tracking-wide flex items-center gap-2">
               Acesso Total + 3 Bônus <Zap size={14} className="fill-green-400" />
            </p>
          </div>
          
          <div className="mb-10 text-left text-white">
            <p className="text-white/30 line-through font-bold text-sm mb-1 uppercase tracking-widest">De R$ 147,90</p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-green-500">Por R$</span>
              <span className="text-7xl font-black tracking-tighter">22,97</span>
            </div>
            <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mt-4">PAGAMENTO ÚNICO • ACESSO VITALÍCIO</p>
          </div>

          <ul className="space-y-4 mb-10 flex-grow text-left">
            {[
              "Projeto Reset 20D Completo",
              "Cardápio Especial 20 Dias",
              "Checklist Anti-Deslize",
              "PLANO ANTI-COMPULSÃO (Extra)",
              "GUIA DE SUBSTITUIÇÕES (Extra)",
              "LIVRO DE RECEITAS SHREDS (Extra)"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white font-black text-sm uppercase tracking-tight">
                <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0 fill-green-500/10" /> {item}
              </li>
            ))}
          </ul>

          <div className="bg-white/5 p-6 rounded-3xl mb-8 border border-white/10 text-left">
             <p className="text-green-500 font-black text-[10px] uppercase tracking-widest mb-4">Pacote de Bônus Grátis:</p>
             <div className="grid grid-cols-1 gap-2">
                <span className="text-white/70 text-xs font-bold flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Receitas Simples</span>
                <span className="text-white/70 text-xs font-bold flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Guia de Substituições</span>
                <span className="text-white/70 text-xs font-bold flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div> Rotina de Hábitos</span>
             </div>
          </div>

          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onPlan3Click(); }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-6 rounded-2xl shadow-[0_10px_40px_rgba(22,163,74,0.4)] transition-all duration-300 active:scale-95 text-xl uppercase tracking-[0.05em]"
          >
            QUERO O RESET TOTAL
          </button>
          
          <p className="mt-6 text-white/40 text-[9px] font-black uppercase tracking-[0.2em]">ÚLTIMAS UNIDADES COM DESCONTO</p>
        </div>
      </div>
    </div>
  </section>
));

const Guarantee = () => (
  <section className="bg-white py-24 px-6 relative overflow-hidden">
    <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-10 md:p-16 rounded-[48px] border border-gray-100 shadow-sm">
      <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative">
        <ShieldCheck size={128} className="text-green-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
        <div className="absolute inset-0 bg-green-400/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="text-left flex-grow">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic text-balance leading-none">RISCO ZERO PARA VOCÊ</h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-8">
          Eu confio tanto no meu método que te dou <strong>7 DIAS</strong> de garantia incondicional. Entre, acesse o material e comece o desafio. Se você não gostar de qualquer detalhe, eu devolvo 100% do seu dinheiro.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-white px-6 py-4 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-3">
             <Check size={20} className="text-green-600" />
             <span className="font-black text-gray-900 uppercase tracking-widest text-[10px]">Sem Perguntas</span>
          </div>
          <div className="bg-white px-6 py-4 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-3">
             <Check size={20} className="text-green-600" />
             <span className="font-black text-gray-900 uppercase tracking-widest text-[10px]">Sem Burocracia</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-950 text-white py-16 px-6 border-t border-gray-900">
    <div className="max-w-[1100px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="text-left">
          <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">RESET 20D</h4>
          <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
            O fim do efeito sanfona e o início de uma nova fase para você e seu corpo.
          </p>
        </div>
        <div className="text-left md:text-right flex flex-col md:items-end justify-center">
           <p className="text-gray-500 font-medium text-sm mb-2">Suporte: suporte@reset20d.com</p>
           <p className="text-gray-700 text-xs italic font-bold">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-gray-700 text-[10px] font-bold uppercase tracking-widest">© 2026 Reset 20D - Todos os direitos reservados.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-bold text-gray-700 uppercase tracking-widest">
          <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition">Políticas de Privacidade</a>
          <a href="#" onClick={(e) => { e.preventDefault(); }} className="hover:text-white transition">Termos de Uso</a>
        </div>
      </div>
      
      <p className="mt-12 text-gray-800 text-[9px] text-center max-w-4xl mx-auto leading-relaxed uppercase font-bold">
        Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc. Os resultados podem variar de pessoa para pessoa.
      </p>
    </div>
  </footer>
);

const UpgradePopup = ({ isOpen, onClose, onConfirm, onDecline }: { 
  isOpen: boolean, 
  onClose: () => void, 
  onConfirm: () => void,
  onDecline: () => void
}) => (
  <AnimatePresence>
    {isOpen && (
      <div key="upgrade-popup-overlay" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
          className="absolute inset-0 bg-gray-950/90 backdrop-blur-md"
        />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-[440px] rounded-[48px] p-8 md:p-12 relative z-10 text-center shadow-2xl border border-gray-100 flex flex-col"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] text-[10px] shadow-xl">
             OFERTA ÚNICA
          </div>

          <div className="flex-grow">
            <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase italic tracking-tighter leading-none">ESPERE! JÁ QUE VOCÊ TOMOU ESSA DECISÃO...</h2>
            <p className="text-gray-500 font-bold mb-8 leading-tight">
              Libere o <span className="text-red-600 font-black">Reset Acelerado</span> e potencialize seus resultados por apenas <span className="underline italic">R$5,00 a mais</span>.
            </p>

            <div className="bg-gray-50 p-6 rounded-[32px] mb-8 text-left border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Cardápio Especial 20 Dias",
                  "Checklist Diário Anti-Deslize",
                  "Plano de Hidratação Detox",
                  "Manual de Ativação Metabólica"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-900 font-black text-xs md:text-sm uppercase tracking-tight">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); onConfirm(); }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-2xl text-lg shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-widest leading-none"
              >
                SIM! QUERO ACELERAR TUDO
              </button>
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); onDecline(); }}
                className="text-gray-400 hover:text-red-500 text-[10px] font-black uppercase tracking-widest transition-colors py-2"
              >
                Não, prefiro ir pelo caminho mais difícil
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Main App ---

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlan1Click = () => {
    setShowPopup(true);
  };

  const handlePlan2Click = () => {
    window.location.href = "https://pagamentosimples.com.br/jEXplQSv";
  };

  const handlePlan3Click = () => {
    window.location.href = "https://pagamentosimples.com.br/VpnuIjGi";
  };

  const handleConfirmUpgrade = () => {
    setShowPopup(false);
    handlePlan2Click();
  };

  const handleDeclineUpgrade = () => {
    setShowPopup(false);
    window.location.href = "https://pagamentosimples.com.br/PJCQucXZ";
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-100 selection:text-green-900 antialiased overflow-x-hidden">
      <TopBar />
      
      <main>
        <Hero onCtaClick={() => scrollToPricing()} />
        <ThePain />
        <TheMethod />
        <Benefits />
        <SocialProof onCtaClick={() => scrollToPricing()} />
        
        <section className="bg-red-600 py-16 px-6 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition duration-500"></div>
          <div className="max-w-[1100px] mx-auto relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic text-balance">PARE DE DEIXAR SUA FELICIDADE PARA DEPOIS</h3>
            <button 
              type="button"
              onClick={(e) => { e.preventDefault(); scrollToPricing(); }}
              className="bg-white text-red-600 font-black py-5 px-12 rounded-2xl text-xl md:text-2xl shadow-2xl hover:bg-gray-100 transition-all active:scale-95 uppercase tracking-widest leading-none"
            >
              QUERO PARAR DE DESISTIR
            </button>
          </div>
        </section>

        <Pricing 
          ref={pricingRef} 
          onPlan1Click={() => handlePlan1Click()}
          onPlan3Click={() => handlePlan3Click()}
        />
        
        <Guarantee />
        <FAQ />
      </main>

      <Footer />

      <UpgradePopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
        onConfirm={handleConfirmUpgrade}
        onDecline={handleDeclineUpgrade}
      />
    </div>
  );
}
