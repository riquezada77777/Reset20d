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
const PRIMARY_COLOR = "text-blue-700";
const BUTTON_BG = "bg-blue-700 hover:bg-blue-800";

// --- Components ---

const TopBar = () => (
  <div className="bg-blue-700 text-white py-2 px-4 text-center text-xs md:text-sm font-black sticky top-0 z-[60] shadow-md animate-pulse">
    🚨 ATENÇÃO: ÚLTIMAS VAGAS COM VALOR PROMOCIONAL DISPONÍVEIS 🚨
  </div>
);

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="bg-white pt-6 pb-12 px-6 md:pt-12 md:pb-20 overflow-hidden relative border-b border-gray-100">
    <div className="max-w-[1100px] mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-[9px] font-black mb-4 uppercase tracking-[0.2em] shadow-lg animate-pulse">
          VALOR PROMOCIONAL DISPONÍVEL HOJE
        </span>
        <h1 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight mb-4 text-balance tracking-tighter uppercase italic">
          Cansada de começar na segunda e <span className="text-blue-700">desistir na quarta?</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed font-bold max-w-2xl uppercase tracking-tight">
          O Protocolo Prático para eliminar entre <span className="text-gray-900 font-black border-b-2 border-blue-600">4 a 6kg em 20 dias</span> sem sacrifícios impossíveis.
        </p>
        
        <div className="w-full max-w-[380px] md:max-w-xl mb-8 relative">
          <div className="relative z-10 bg-gray-950 rounded-[32px] p-0.5 shadow-2xl overflow-hidden border-2 border-white">
            <img 
              src="https://i.ibb.co/1fxsKWJH/Chat-GPT-Image-Mar-31-2026-07-16-01-PM.png" 
              alt="Protocolo Reset 20D" 
              className="w-full h-auto rounded-[30px] object-cover px-1"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <button 
          type="button"
          onClick={(e) => { e.preventDefault(); onCtaClick(); }}
          className={`w-full md:w-auto ${BUTTON_BG} text-white font-black py-5 px-12 rounded-2xl text-lg md:text-xl shadow-[0_15px_40px_rgba(29,78,216,0.3)] transform transition hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-3 group uppercase tracking-widest leading-none`}
        >
          COMEÇAR MEU RESET HOJE
          <ArrowRight size={22} className="group-hover:translate-x-1 transition" />
        </button>
      </motion.div>
    </div>
  </section>
);

const ThePain = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="bg-[#f8f9fa] py-20 px-6 border-b border-gray-100 relative overflow-hidden">
    <div className="max-w-[700px] mx-auto text-center relative z-10">
      <h2 className="text-sm font-black text-blue-700 uppercase tracking-widest mb-4">Sinceridade absoluta...</h2>
      <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 leading-tight tracking-tighter uppercase italic">
        A verdade sobre por que você <span className="text-blue-700">sempre falha</span> na primeira semana
      </h3>
      
      <div className="space-y-3 text-left mb-12">
        {[
          "Você começa animada na segunda jantando salada e jurando foco total.",
          "Na quarta o dia é estressante e você desconta no primeiro doce que vê.",
          "Vem aquela sensação de culpa, fracasso e o terrível efeito sanfona.",
          "O erro não é seu: você só tentou seguir planos que não cabem na rotina real."
        ].map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 rounded-2xl border border-gray-200 flex items-start gap-4"
          >
            <X className="text-blue-700 mt-1 flex-shrink-0" size={16} strokeWidth={4} />
            <p className="text-gray-700 text-base md:text-lg font-bold leading-tight">{text}</p>
          </motion.div>
        ))}
      </div>

      <button 
        type="button"
        onClick={(e) => { e.preventDefault(); onCtaClick(); }}
        className="text-blue-700 font-black text-sm uppercase tracking-widest hover:underline mb-12 block mx-auto underline-offset-4"
      >
        VER O MÉTODO AGORA
      </button>
      
      <div className="bg-gray-900 p-8 rounded-[32px] border border-gray-800 shadow-2xl relative text-white">
        <p className="font-black text-lg md:text-xl italic leading-tight uppercase tracking-tight mb-4">
          "Emagrecer não é sobre sofrer. É sobre ter decisões reduzidas e uma rotina prática que você consegue manter."
        </p>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">A base do Protocolo Reset 20D</span>
      </div>
    </div>
  </section>
);

const TheMethod = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="bg-white py-20 px-6 relative overflow-hidden">
    <div className="max-w-[1100px] mx-auto text-center relative z-10">
      <span className="inline-block text-blue-700 font-black uppercase tracking-[0.3em] mb-4 text-[10px]">Caminho Simples</span>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 leading-tight tracking-tighter uppercase italic text-balance">
        Emagrecer pode ser simples (se você tiver um plano):
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            step: "01",
            title: "Limpeza Inicial",
            desc: "Um cardápio simples para desinchar e reduzir aquela vontade louca por doces já nos primeiros 2 dias.",
            icon: <Zap className="text-blue-700" />
          },
          {
            step: "02",
            title: "Rotina Vida Real",
            desc: "Você aprende a comer o que gosta com substituições inteligentes. Sem gastar horas na cozinha.",
            icon: <CheckCircle2 className="text-blue-700" />
          },
          {
            step: "03",
            title: "Resultados em 20 dias",
            desc: "Seu corpo se adapta ao novo ritmo e você começa a ver a diferença no espelho de forma natural.",
            icon: <TrendingDown className="text-blue-700" />
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 p-8 rounded-[40px] text-left relative overflow-hidden hover:bg-white hover:shadow-xl transition duration-500"
          >
            <div className="text-5xl font-black text-gray-100 absolute -right-3 -top-3 tracking-tighter">{item.step}</div>
            <div className="bg-white p-3 rounded-2xl w-fit mb-6 shadow-sm">
               {item.icon}
            </div>
            <h4 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">{item.title}</h4>
            <p className="text-gray-500 font-bold leading-snug text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <button 
        type="button"
        onClick={(e) => { e.preventDefault(); onCtaClick(); }}
        className="text-gray-950 font-black text-sm uppercase tracking-[0.2em] hover:opacity-70 transition flex items-center gap-2 mx-auto"
      >
        VER O MÉTODO COMPLETO <ArrowRight size={16} />
      </button>
    </div>
  </section>
);

const Benefits = ({ onCtaClick }: { onCtaClick: () => void }) => {
  const list = [
    {
      title: "PARE DE ADIVINHAR",
      desc: "Você recebe a lista exata. Chega de olhar para a geladeira e não saber o que fazer para emagrecer.",
      icon: <Check className="text-blue-700" size={20} />
    },
    {
      title: "GANHE TEMPO REAL",
      desc: "As refeições são rápidas. Você não vai virar escrava da cozinha para ter o corpo que deseja.",
      icon: <Timer className="text-blue-700" size={20} />
    },
    {
      title: "ROUPAS VOLTANDO A SERVIR",
      desc: "Prepare-se para ouvir: 'O que você fez?'. Os resultados aparecem rápido o suficiente para você se manter motivada.",
      icon: <Zap className="text-blue-700" size={20} />
    }
  ];

  return (
    <section className="bg-gray-950 py-20 px-6 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-[10%] w-[40%] h-[40%] bg-blue-700 rounded-full blur-[150px] opacity-10"></div>
      
      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Resultados Práticos</h2>
        <h3 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase italic">O QUE VOCÊ VAI SENTIR EM 20 DIAS:</h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {list.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[32px] text-left hover:bg-white/10 transition group">
              <div className="bg-blue-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-lg font-black mb-3 leading-tight tracking-tight text-white uppercase italic">{item.title}</h4>
              <p className="text-gray-400 font-bold leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <button 
          type="button"
          onClick={(e) => { e.preventDefault(); onCtaClick(); }}
          className="text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-2 mx-auto hover:opacity-75 transition bg-white/5 py-3 px-6 rounded-full border border-white/10"
        >
          QUERO COMEÇAR MEU RESET AGORA <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

const SocialProof = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="bg-white py-24 px-6">
    <div className="max-w-[1100px] mx-auto text-center">
      <span className="text-blue-700 font-black uppercase tracking-widest text-xs mb-4 inline-block">Provas da Transformação</span>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-16 tracking-tighter">MAIS DE <span className="text-blue-700">3.500 VIDAS</span> TRANSFORMADAS</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Ju Santos",
            res: "Eu sempre parava na metade. Achei que o problema era meu foco, mas era o método que eu usava. Com o Reset perdi 5.5kg sem nem perceber que estava em dieta.",
            lost: "-5.5kg",
            img: "https://i.ibb.co/JWmxycq1/571a308c7cb0b6a413ebe8a8e07e5421.jpg"
          },
          {
            name: "Caco Eduardo",
            res: "Finalmente algo que dá pra fazer na correria. Eu não tenho tempo de cozinhar coisas difíceis. As trocas do Reset salvaram meu ano e minhas calças voltaram a fechar.",
            lost: "-6kg",
            img: "https://i.ibb.co/FkXMnkGs/23b7dba95dd0cca0185331a6eaa31c3b.jpg"
          },
          {
            name: "Marta O.",
            res: "Parei de sentir aquela vontade louca de comer doce todo dia. Me sinto muito mais leve e com energia. Valeu cada centavo.",
            lost: "-4kg",
            img: "https://i.ibb.co/qLdzh4rm/26dce3c1ad4f4a3bf0828cc2c03c47d7.jpg"
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] text-left flex flex-col group shadow-sm hover:shadow-xl transition duration-500">
            <div className="flex gap-1 mb-4 text-gray-200">
              <Star size={14} className="fill-blue-600 text-blue-600" />
              <Star size={14} className="fill-blue-600 text-blue-600" />
              <Star size={14} className="fill-blue-600 text-blue-600" />
              <Star size={14} className="fill-blue-600 text-blue-600" />
              <Star size={14} className="fill-blue-600 text-blue-600" />
            </div>
            <p className="text-gray-600 text-base md:text-lg font-medium leading-snug mb-8 flex-grow italic">"{item.res}"</p>
            <div className="flex items-center gap-3 pt-5 border-t border-gray-50">
              <img src={item.img} alt={item.name} className="w-12 h-12 rounded-xl object-cover shadow-sm" />
              <div>
                <p className="font-extrabold text-gray-900 text-sm uppercase tracking-tight">{item.name}</p>
                <p className="text-blue-700 font-black text-[10px] uppercase tracking-widest">{item.lost} em 20 dias</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <button 
          type="button"
          onClick={(e) => { e.preventDefault(); onCtaClick(); }}
          className="text-gray-900 font-extrabold flex items-center gap-2 mx-auto hover:gap-4 transition-all duration-300 text-base group uppercase tracking-widest"
        >
          QUERO PARAR DE DESISTIR AGORA
          <ArrowRight className="text-blue-700" />
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
        <h2 className="text-sm font-black text-blue-700 text-center uppercase tracking-widest mb-4">Transparência Total</h2>
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
                <div className={`p-2 rounded-full transition-all duration-300 ${openIdx === idx ? 'bg-blue-700 text-white rotate-180' : 'bg-white text-gray-400 shadow-sm'}`}>
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
  <section id="pricing" ref={ref} className="bg-white py-24 px-6 relative border-t border-gray-100">
    <div className="max-w-[1100px] mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-[0.2em] shadow-xl animate-pulse">
        <Timer size={14} /> Oferta por tempo limitado (últimas vagas)
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">Escolha o nível ideal para o seu resultado</h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 font-medium leading-snug">
        Todos os planos incluem o método Reset 20D — a diferença está na <span className="text-gray-900 font-bold border-b-2 border-blue-500">facilidade e velocidade</span> do seu resultado.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-[900px] mx-auto">
        {/* Plano 1 - Essencial */}
        <div className="bg-gray-50 p-8 rounded-[44px] border border-gray-200 flex flex-col transition hover:border-blue-200 group relative">
          <div className="absolute top-6 right-8">
            <span className="text-[10px] font-black text-blue-700/40 uppercase tracking-widest">Para começar</span>
          </div>
          <div className="mb-8 text-left">
            <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-tight italic">Essencial</h3>
            <p className="text-gray-500 font-bold text-xs leading-tight">Comece do jeito simples e direto, sem complicação</p>
          </div>
          
          <div className="mb-8 text-left">
            <p className="text-gray-400 line-through font-bold text-[10px] mb-1 uppercase tracking-widest">De R$ 67,90</p>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-black text-gray-900">R$</span>
              <span className="text-6xl font-black text-gray-900 tracking-tighter">12,97</span>
            </div>
          </div>

          <ul className="space-y-3 mb-8 flex-grow text-left">
            {[
              "Método Reset 20D (passo a passo)",
              "Guia \"Leia Antes de Começar\"",
              "Rotina Simples diária"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 font-bold text-xs uppercase tracking-tight leading-tight">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4 italic">Perfeito para quem quer dar o primeiro passo</p>
            <button 
              type="button"
              onClick={(e) => { e.preventDefault(); onPlan1Click(); }}
              className="w-full bg-gray-900 hover:bg-black text-white font-black py-4 rounded-2xl transition-all duration-300 active:scale-95 text-base uppercase tracking-widest shadow-lg"
            >
              QUERO COMEÇAR
            </button>
          </div>
        </div>

        {/* Plano 3 - Platinum */}
        <div className="bg-gray-900 p-8 rounded-[44px] border-4 border-blue-700 flex flex-col shadow-2xl relative z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-[9px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">
            MAIS COMPLETO
          </div>

          <div className="mb-8 text-left">
            <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight italic">Platinum</h3>
            <p className="text-blue-400 font-bold text-xs tracking-wide">O plano completo para quem quer resultado sem desculpas</p>
          </div>
          
          <div className="mb-8 text-left text-white">
            <p className="text-white/30 line-through font-bold text-[10px] mb-1 uppercase tracking-widest">De R$ 147,90</p>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-black text-blue-500">R$</span>
              <span className="text-7xl font-black tracking-tighter text-white">22,97</span>
            </div>
            <div className="mt-2 text-blue-400 text-[10px] font-black uppercase tracking-widest italic group-hover:animate-bounce">
              🔥 Melhor custo-benefício (Apenas R$10+ que o Essencial)
            </div>
          </div>

          <ul className="space-y-3 mb-8 flex-grow text-left">
            {[
              "Método Reset 20D Completo",
              "Cardápio pronto para 20 dias",
              "Lista de compras inteligente",
              "Checklist Anti-Deslize",
              "Plano Anti-Compulsão Alimentar",
              "Guia de Substituições",
              "Receitas práticas"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-white font-black text-xs uppercase tracking-tight leading-tight">
                <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 italic opacity-80 decoration-blue-500 underline underline-offset-4">Você elimina recaídas e mantém consistência até o final</p>
            <button 
              type="button"
              onClick={(e) => { e.preventDefault(); onPlan3Click(); }}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black py-5 rounded-2xl shadow-[0_10px_40px_rgba(29,78,216,0.4)] transition-all duration-300 active:scale-95 text-lg uppercase tracking-[0.1em]"
            >
              QUERO O RESULTADO COMPLETO
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto p-10 bg-gray-50 rounded-[40px] border border-gray-100">
         <p className="text-gray-700 text-lg md:text-xl font-bold leading-relaxed italic text-balance">
           "Quanto mais suporte você tem, mais fácil é chegar no resultado. 
           A diferença entre tentar sozinho e seguir um plano completo é o que define quem chega até o final."
         </p>
      </div>
    </div>
  </section>
));

const Guarantee = () => (
  <section className="bg-white py-24 px-6 relative overflow-hidden">
    <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-10 md:p-16 rounded-[48px] border border-gray-100 shadow-sm">
      <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 relative">
        <ShieldCheck size={128} className="text-blue-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />
        <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="text-left flex-grow">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic text-balance leading-none">RISCO ZERO PARA VOCÊ</h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-8">
          Eu confio tanto no meu método que te dou <strong>7 DIAS</strong> de garantia incondicional. Entre, acesse o material e comece o desafio. Se você não gostar de qualquer detalhe, eu devolvo 100% do seu dinheiro.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="bg-white px-6 py-4 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-3">
             <Check size={20} className="text-blue-700" />
             <span className="font-black text-gray-900 uppercase tracking-widest text-[10px]">Sem Perguntas</span>
          </div>
          <div className="bg-white px-6 py-4 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-3">
             <Check size={20} className="text-blue-700" />
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] text-[10px] shadow-xl">
             ATENÇÃO
          </div>

          <div className="flex-grow">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter leading-none">ESPERA — NÃO COMETA ESSE ERRO</h2>
            <p className="text-gray-500 font-bold mb-6 text-sm leading-tight">
              Você pode aumentar <span className="text-blue-700 font-black">MUITO</span> suas chances de resultado por apenas <span className="underline italic">R$5,00 a mais</span>
            </p>

            <div className="mb-6 bg-blue-50 py-3 rounded-2xl border border-blue-100">
               <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-[10px]">Ative o modo acelerado do Reset 20D</span>
            </div>

            <div className="bg-gray-50 p-6 rounded-[32px] mb-8 text-left border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Cardápio pronto (você não precisa pensar)",
                  "Checklist diário (evita desistir no meio)",
                  "Plano simples de hidratação (acelera tudo)",
                  "Guia prático pra manter consistência"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-900 font-black text-xs md:text-sm uppercase tracking-tight leading-tight">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-900 font-black text-xs uppercase mb-6 tracking-tight italic">
              "Sem isso, você vai ter que fazer tudo sozinha — e é aí que a maioria desiste."
            </p>

            <div className="flex flex-col gap-4">
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); onConfirm(); }}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black py-5 rounded-2xl text-base md:text-lg shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-widest leading-none"
              >
                SIM! QUERO RESULTADO MAIS RÁPIDO
              </button>
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); onDecline(); }}
                className="text-gray-400 hover:text-red-500 text-[10px] font-black uppercase tracking-widest transition-colors py-2 opacity-60"
              >
                Não, vou tentar sozinho e correr o risco de desistir
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
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 antialiased overflow-x-hidden">
      <TopBar />
      
      <main>
        <Hero onCtaClick={() => scrollToPricing()} />
        <ThePain onCtaClick={() => scrollToPricing()} />
        <TheMethod onCtaClick={() => scrollToPricing()} />
        <Benefits onCtaClick={() => scrollToPricing()} />
        <SocialProof onCtaClick={() => scrollToPricing()} />
        
        <Pricing 
          ref={pricingRef} 
          onPlan1Click={() => handlePlan1Click()}
          onPlan3Click={() => handlePlan3Click()}
        />

        <section className="bg-gray-900 py-16 px-6 text-center text-white relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase italic text-balance">PARE DE DEIXAR SUA SAÚDE PARA DEPOIS</h3>
            <button 
              type="button"
              onClick={(e) => { e.preventDefault(); scrollToPricing(); }}
              className={`w-full md:w-auto ${BUTTON_BG} text-white font-black py-6 px-16 rounded-2xl text-xl md:text-2xl shadow-2xl transition-all active:scale-95 uppercase tracking-[0.2em] leading-none mb-6`}
            >
              QUERO PARAR DE DESISTIR
            </button>
            <div className="flex items-center gap-2 text-blue-700 text-[10px] font-black uppercase tracking-widest">
               <Zap size={14} className="fill-blue-700" /> Acesso imediato liberado
            </div>
          </div>
        </section>
        
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
