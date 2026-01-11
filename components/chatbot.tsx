'use client';
import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  type Message = { id: string; sender: 'bot' | 'user'; text: string | React.ReactNode };
  const [messages, setMessages] = useState<Message[]>([
    { id: crypto.randomUUID(), sender: 'bot', text: 'Olá! Digite o que quiser saber sobre mim!' }
  ]);
  const [input, setInput] = useState('');

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function normalizeText(text: string) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/gi, '')
      .trim();
  }

const respostas = [
  {
    keywords: ['oi', 'ola', 'eai', 'eae', 'hello', 'hi', 'hey', 'boa tarde', 'bom dia', 'boa noite', 'saudações'],
    resposta: 'Olá! Como posso te ajudar hoje?',
  },
  {
    keywords: ['tudo bem', 'como voce esta', 'como você está', 'como vc ta', 'como vc esta', 'como vai', 'como voce vai', 'como você vai', 'tudo ótimo', 'tudo otimo', 'tudo legal', 'tudo certo'],
    resposta: 'Tudo ótimo! E você? Se tiver alguma pergunta, estou aqui para ajudar!',
  },
    {
    keywords: ['como funciona', 'funciona como', 'como voce funciona', 'isso funciona como'],
    resposta: 'Eu sou um chatbot programado para responder perguntas sobre mim e meu trabalho. Você pode me perguntar sobre minha experiência, projetos, tecnologias que uso e muito mais!',
  },
    {
    keywords: ['qual seu nome', 'seu nome', 'quem voce é', 'quem é voce', 'qual é seu nome', 'qual é o seu nome', 'nome'],
    resposta: 'Meu nome é Sarah, prazer em te conhecer! XD',
  },
    {
    keywords: ['quem é voce', 'quem voce é', 'quem é', 'o que voce faz', 'quem é a sarah',  'sarah é quem', 'gostaria de saber sobre você', 'gostaria de saber sobre voce', 'gostaria de saber quem é você', 'gostaria de saber quem é voce', 'me fale sobre você', 'me fale sobre voce', 'fale sobre você', 'fale sobre voce'],
    resposta: 'Eu sou a Sarah e sou uma Front-End Web Developer. Você pode saber mais sobre mim na seção "Sobre" do meu site.',
  },
    {
    keywords: ['qual sua profissão', 'qual a sua profissão', 'qual a profissão da sarah', 'o que a sarah faz', 'profissão', 'o que voce faz', 'faz o que', 'a sarah faz o que', 'sarah faz o que'],
    resposta: 'Sou uma Front-End Web Developer. Você pode conferir meus projetos na seção "Projetos" do site.',
  },
   {
    keywords: ['como posso ver seus projetos', 'projetos', 'projetos da sarah', 'onde estão seus projetos', 'onde posso ver seus projetos', 'onde vejo os projetos', 'ver seus projetos', 'ver projetos', 'ver projetos da sarah', 'onde estão os projetos da sarah'],
    resposta: 'Você pode conferir meus projetos na seção "Projetos" do site.',
  },
   {
    keywords: ['entrar em contacto', 'como posso entrar em contacto', 'falar com você', 'falar com a sarah', 'contato', 'contacto', 'como falar com você', 'como falar com a sarah'],
    resposta: 'Você pode enviar um E-mail para mim indo na seção "Contato" do meu site.',
  },
   {
    keywords: ['você trabalha com qual linguagem', 'linguagem que você usa', 'linguagem que a sarah usa', 'linguagens que a sarah usa', 'qual linguagem você usa', 'sarah usa qual linguagem', 'sarah trabalha com qual linguagem', 'trabalha com qual linguagem', 'linguagem'],
    resposta: 'Trabalho com JavaScript, React, Next.js, Node.js e mais.',
  },
   {
    keywords: ['quais tecnologias usa', 'techsnologias que usa', 'tecnologias que a sarah usa', 'quais tecnologias a sarah usa', 'quais tecnologias você usa', 'quais tecnologias que você usa', 'tecnologias', 'techs', 'quais techs'],
    resposta: 'Uso React, Next.js, Tailwind CSS, Node.js e outras tecnologias modernas.',
  },
  {
    keywords: ['o que é programação', 'o que é programacao', 'me explique o que é programação', 'me explique o que é programacao', 'diga o que é programação', 'diga o que é programacao', 'programação', 'programacao', 'programaçao é o que', 'programação?'],
    resposta: 'Programação é a forma de dar instruções para o computador realizar tarefas. Com ela, podemos criar sites, aplicativos, jogos e muito mais.',
  },
  {
    keywords: ['o que é um portfólio', 'portfólio', 'me explique o que é um portfólio', 'diga o que é um portfólio', 'portfólio é o que'],
    resposta: 'Um portfólio é uma coleção dos seus melhores trabalhos, projetos e habilidades para mostrar para outras pessoas, como empregadores ou clientes.',
  },
  {
    keywords: ['para o que serve um portfólio', 'para que serve um portfólio', 'me explique para o que serve um portfólio', 'diga para que serve um portfólio', 'portfólio serve para o que'],
    resposta: 'Um portfólio serve para apresentar seu trabalho, destacar suas competências e ajudar a conseguir empregos ou oportunidades.',
  },
  {
    keywords: ['o que é front end', 'me explique o que é front end', 'diga o que é front end', 'front end é o que', 'front end', 'front-end', 'front-end é o que', 'o que é Front-End', 'me explique o que é Front-End', 'diga o que é Front-End'],
    resposta: 'Front end é a parte do site que o usuário vê e com a qual interage, como botões, textos e imagens.',
  },
  {
    keywords: ['o que é back end', 'me explique o que é back end', 'diga o que é back end', 'back end é o que', 'back end', 'back-end', 'back-end é o que', 'o que é back-end', 'me explique o que é back-end', 'diga o que é back-end'],
    resposta: 'Back end é a parte do site ou aplicativo que roda no servidor, responsável por processar dados, controlar o que acontece “por trás das cenas” e armazenar informações.',
  },
  {
    keywords: ['o que é um full stack', 'o que é um full-stack', 'o que é full stack', 'me explique o que é full stack', 'full stack', 'full-stack'],
    resposta: 'Full stack é o profissional que sabe trabalhar tanto na parte visual do site (front end) quanto na parte que roda no servidor e banco de dados (back end).',
  },
    {
    keywords: ['o que é bootcamp', 'me explique o que é bootcamp', 'diga o que é bootcamp', 'bootcamp é o que', 'bootcamp', 'bootcamp o que é'],
    resposta: 'Um bootcamp é um curso intensivo e prático que ensina habilidades específicas, geralmente na área de tecnologia, em pouco tempo, preparando rápido para o mercado de trabalho.',
  },
    {
    keywords: ['onde posso baixar seu currículo', 'baixar currículo', 'baixar curriculo', 'onde ver seu currículo', 'onde ver curriculo', 'currículo', 'cv', 'download currículo', 'ver o currículo da sarah', 'baixar o currículo da sarah'],
    resposta: 'Você pode baixar meu currículo na seção "Início" do portfólio.',
  },
  {
    keywords: ['o que te incentivou a ser desenvolvedora', 'o que te incentivou a ser programadora', 'por que você virou desenvolvedora', 'por que voce virou programadora', 'por que você se tornou desenvolvedora', 'por que voce se tornou programadora', 'o que te motivou a ser desenvolvedora', 'o que te motivou a virar desenvolvedora', 'o que te motivou a se tornar desenvolvedora', ' o que motivou a sarah a ser desenvolvedora', 'o que motivou a sarah a virar desenvolvedora', 'o que motivou a sarah a se tornar desenvolvedora'],
    resposta: 'Minha paixão por tecnologia e criatividade me motivou a seguir a carreira de desenvolvedora Front-End.',
  },
    {
    keywords: ['tchau', 'byebye', 'bye', 'flw', 'adeus', 'até logo', 'até mais', 'falou', 'tchau, obrigada', 'tchau, obrigado', 'adeus, obrigada', 'adeus, obrigado', 'até logo, obrigada', 'até logo, obrigado', 'até mais, obrigada', 'até mais, obrigado', 'falou, obrigada', 'falou, obrigado'],
    resposta: 'Adeus! Espero ter ajudado. Se precisar, estarei por aqui. XD',
  },
    {
    keywords: ['obrigada', 'obrigado', 'obgd', 'obg', 'muito obrigada', 'muito obrigado', 'mto obg', 'mt obg', 'valeu', 'vlw','brigado', 'brigada', 'grata', 'grato'],
    resposta: 'De nada! Estou aqui para ajudar. Se precisar de mais alguma coisa, é só chamar. XD',
  },
];

const elogios = [
  {
    keywords: ['linda', 'inteligente', 'incrível', 'legal', 'ótima', 'otm', 'maravilhosa', 'sensacional', 'fantastico', 'excelente', 'show de bola', 'top', 'demais', 'fera', 'massa', 'da hora', 'boa demais', 'boa dms', 'incrivel', 'incrivel demais', 'ótima demais', 'otm dms'],
    resposta: 'Muito obrigadaaa <3 Fico feliz em ter ajudado!',
  }
];

const ofensas = [
  {
    keywords: ['burra', 'idiota', 'estúpida', 'chat burro', 'chata', 'feia', 'ruim', 'pessima', 'vsfd', 'horrível', 'vsf', 'lixo', 'noob', 'IA burra', 'AI burra', 'inutil', 'fracassada', 'burro', 'chat idiota', 'estupido', 'chato', 'feio', 'ruim demais', 'pessimo', 'pessimo dms',  'horrivel demais',  'lixo demais',  'noob demais',  'lerda',  'inútil dms',  'inutil demais',  'fracassado'],
    resposta: 'Ei, isso foi meio rude… mas tudo bem!'
  }
];

const respostasFallback = [
  'Poxa, não entendi muito bem, pode tentar perguntar de outra forma?',
  'Boa pergunta, mas ainda não aprendi isso... Tenta outra coisa!',
  'Essa eu ainda não sei responder :/ Tente perguntar de outra forma!',
  'Hmm, não tenho certeza sobre isso. Pode tentar outra pergunta?',
  'Desculpa, não entendi. Pode reformular a pergunta?',
];

function TypingDots() {
  return (
    <div className="flex gap-1">
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0ms]" />
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:150ms]" />
      <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:300ms]" />
    </div>
  );
}
function respostaAleatoria() {
    const index = Math.floor(Math.random() * respostasFallback.length);
    return respostasFallback[index];
  }

  function encontrarResposta(texto: string) {
    const normalizado = normalizeText(texto);

    const match = respostas.find(item =>
      item.keywords.some(keyword =>
        normalizado.includes(normalizeText(keyword))
      )
    );

    return match?.resposta;
  }

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');

    const botResponse = encontrarResposta(userMessage) ?? respostaAleatoria();
    const typingId = crypto.randomUUID();

    setMessages(prev => [
      ...prev,
      { id: crypto.randomUUID(), sender: 'user', text: userMessage },
      { id: typingId, sender: 'bot', text: <TypingDots /> },
    ]);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === typingId ? { ...msg, text: botResponse } : msg
        )
      );
    }, 2000);
  }

  return (
  <div className="fixed bottom-20 right-6 z-50">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#101c3d] text-white px-5 py-2 rounded-full shadow-lg 
                hover:bg-[#AA9D8D] duration-300 hover:scale-[1.15] 
                 active:scale-105 transition-all"
    >
      {isOpen ? 'Fechar Chat' : 'Chat'}
    </button>

    {isOpen && (
      <div
        className="h-96 rounded-xl p-4 mt-4 flex flex-col shadow-xl"
        style={{
          background:
            'linear-gradient(135deg, #dbd3ca6d 0%, rgba(42, 37, 37, 0.14) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
       <div className="flex-1 overflow-y-auto mb-4 space-y-3 flex flex-col chat-scroll">
       {messages.map((msg) => (
      <div
      key={msg.id}
      className={`p-3 rounded-lg text-white max-w-[80%] w-80 break-words ${
        msg.sender === 'bot'
          ? 'bg-[#101c3d] self-start'
          : 'bg-[#AA9D8D] self-end'
      }`}
    >
      {msg.text}
     </div>
  ))}


      <div ref={endRef} />
       </div>


        <div className="flex gap-2 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite aqui..."
            className="
              flex-1
              px-4 py-2
              rounded-full
              bg-white/70
              backdrop-blur-md
              text-black
              placeholder:text-gray-500
              border border-white/40
              focus:outline-none
              focus:border-[#AA9D8D]
              focus:ring-2
              focus:ring-[#AA9D8D]/40
              transition-all
            "
          />

          <button
            onClick={handleSend}
            className="
              bg-[#101c3d]
              text-white
              px-5 py-2
              rounded-full
              hover:bg-[#AA9D8D]
              active:scale-95
              transition-all
              shadow-md
            "
          >
            Enviar
          </button>
        </div>
      </div>
    )}
  </div>
);
}