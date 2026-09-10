import { ExternalLink, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const featuredProjects = [
  {
    title: "AI vs Human Content Detection",
    desc: "A machine learning-based NLP project that classifies text as AI-generated or human-written. Uses trained models and linguistic features to analyze writing patterns with high accuracy. Deployed as an interactive Streamlit web app for real-time predictions.",
    link: "https://github.com/hasaankhan175/AI-vs-Human-Content-Detection",
    tags: ["NLP", "Machine Learning", "Streamlit"],
  },
  {
    title: "NOVA AI CHATBOT",
    desc: "Built an AI-powered chatbot using FastAPI and Hugging Face.Integrated LLMs for text, code, and image-based interactions.Deployed a responsive AI application with real-time chat capabilities.",
    link: "https://nova-ai-by-hasaan.vercel.app/",
    tags: ["FastAPI", "Hugging Face", "LLMs", "AI Chatbot", "NLP"],
  },
  {
    title: "AI Resume Analyzer (RAG-Based ATS System)",
    desc: "Built a RAG-based AI Resume Analyzer using FAISS, Sentence Transformers, and Llama 3.1. Developed an ATS scoring and resume analysis system with skill matching, gap detection, and AI-generated recommendations.",
    link: "https://airesume-hasaan.streamlit.app/",
    tags: ["RAG", "LLMs", "NLP"],
  },
];

const FeaturedProjectsSection = () => (
  <section id="featured" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="text-primary" size={32} fill="currentColor" />
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Featured <span className="text-primary glow-text">Projects</span>
          </h2>
          <Star className="text-primary" size={32} fill="currentColor" />
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Handpicked projects showcasing my expertise in machine learning and data science.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 150}>
            <div className="glass rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:glow-box-strong hover:scale-105 hover:border-primary/40 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-all duration-500 group-hover:bg-primary/20" />
              <div className="flex items-start justify-between mb-4 relative z-10">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <ExternalLink className="text-primary shrink-0 ml-2 transition-transform group-hover:rotate-12 group-hover:scale-110" size={20} />
              </div>
              <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-primary hover:underline inline-flex items-center gap-1 transition-all hover:gap-2 mt-auto relative z-10"
              >
                View Project <span>→</span>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjectsSection;
