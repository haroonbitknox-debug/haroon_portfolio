// Single source of truth for the AI work shown on Home and on the AI Projects page.
export const openChat = () => window.dispatchEvent(new Event("open-chat"));

export const AI_PROJECTS = [
  {
    id: "portfolio-assistant",
    title: "Portfolio AI Assistant",
    tagline: "A RAG chatbot that answers questions about me",
    description:
      "Visitors can ask about my projects, skills and experience. The assistant retrieves the relevant parts of my own notes, answers only from them, streams the reply token by token and shows its sources.",
    tags: [
      "FastAPI",
      "LangChain",
      "FAISS",
      "Gemini API",
      "SSE streaming",
      "React",
    ],
    links: [
      { label: "Try it now", action: "chat" },
      {
        label: "Backend code",
        href: "https://github.com/haroonbitknox-debug/haroon-portfolio-chatbot",
      },
    ],
    featured: true,
  },
  {
    id: "rag-scanner",
    title: "RAG Document Scanner Chatbot",
    tagline: "Ask questions about your own documents",
    description:
      "Upload a document and ask about it. The app splits it into chunks, creates embeddings, finds the most relevant parts and answers from them instead of guessing.",
    tags: ["LangChain", "Streamlit", "Embeddings", "Vector search", "Python"],
    links: [
      {
        label: "Live demo",
        href: "https://haroonbitknox-debug-rag-based-document-scanner-chatb-app-ntl8fg.streamlit.app/",
      },
    ],
  },
  {
    id: "zara",
    title: "Zara: AI Blogging Assistant",
    tagline: "A Gemini-powered content writing chatbot",
    description:
      "Drafts blog posts from a topic, suggests titles and outlines, and polishes paragraphs. I built it while teaching and used it as the base for my students' own chatbots.",
    tags: ["Flask", "Gemini API", "Python", "Vercel"],
    links: [
      { label: "Live demo", href: "https://haroons-chatbot.vercel.app/" },
    ],
  },
];

export const STUDENT_BOTS = [
  { name: "Gamer Chatbot", href: "https://gamer-chatbot.vercel.app/" },
  { name: "PDF Reaader AI", href: "https://edify-by-sohani.vercel.app/" },
  { name: "Movie Recommender AI", href: "https://cinematechatbot.vercel.app/" },
  {
    name: "Career Guide AI",
    href: "https://career-guide-ai-lemon.vercel.app/",
  },
];

export const AI_TOPICS = [
  "RAG pipelines",
  "LangChain",
  "FastAPI",
  "Chunking",
  "Embeddings",
  "Vector databases",
  "LLMs",
  "Generative AI",
  "Agentic AI",
  "Hugging Face",
  "NLP",
  "Sentiment analysis",
  "Computer vision",
  "Label Studio",
  "Machine learning",
  "Deep learning",
  "Model training",
  "Text-to-speech",
  "Speech-to-speech",
  "Docker",
  "Cloud deployment",
];
