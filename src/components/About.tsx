import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Lightbulb, Eye } from 'lucide-react';

const highlights = [
  {
    icon: <Brain size={24} color="#a78bfa" />,
    title: 'AI & Technology',
    description: 'Deep understanding of AI/ML concepts, generative models, and how AI tools produce visual outputs.',
  },
  {
    icon: <Lightbulb size={24} color="#a78bfa" />,
    title: 'Creative Thinking',
    description: 'Translating abstract ideas into clear visual direction through strategic prompt engineering and concept development.',
  },
  {
    icon: <Eye size={24} color="#a78bfa" />,
    title: 'Visual Storytelling',
    description: 'Crafting cohesive visual narratives that communicate brand identity and evoke the right emotional response.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginBottom: 80,
          }}
            className="about-grid"
          >
            {/* Left: Text */}
            <div>
              <motion.div variants={itemVariants}>
                <div className="section-label">About Me</div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: 24,
                }}
              >
                Creativity Meets{' '}
                <span className="text-gradient-purple">Intelligence</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 20, fontSize: '1rem' }}
              >
                I am an Artificial Intelligence and Data Science graduate passionate about combining technology with creative design. My interests include generative AI, image generation, prompt engineering, product visualization, and creative advertising.
              </motion.p>

              <motion.p
                variants={itemVariants}
                style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 20, fontSize: '1rem' }}
              >
                Through my personal creative explorations and ecommerce initiative, <strong style={{ color: '#a78bfa' }}>VETRIO GLOBAL</strong>, I explore how AI can transform product presentation, brand storytelling, and digital marketing.
              </motion.p>

              <motion.p
                variants={itemVariants}
                style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1rem' }}
              >
                I enjoy experimenting with different AI tools, developing creative concepts, and turning ideas into visually engaging experiences.
              </motion.p>

              {/* Education Badge */}
              <motion.div
                variants={itemVariants}
                style={{
                  marginTop: 36,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 16,
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: 16,
                  padding: '16px 24px',
                }}
              >
                <div style={{ fontSize: '2rem' }}>🎓</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.9rem' }}>
                    B.Tech — Artificial Intelligence & Data Science
                  </div>
                  <div style={{ color: '#a78bfa', fontSize: '0.8rem', marginTop: 2 }}>
                    Class of 2026 &nbsp;·&nbsp; 93% Academic Performance
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Visual */}
            <motion.div
              variants={itemVariants}
              style={{ position: 'relative' }}
              className="about-visual"
            >
              {/* Stats Grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 20,
              }}>
                {[
                  { label: 'Academic Score', value: '93%', icon: '🎓' },
                  { label: 'AI Tools Mastered', value: '12+', icon: '🔧' },
                  { label: 'Creative Projects', value: '8+', icon: '🎨' },
                  { label: 'Years Learning AI', value: '3+', icon: '🧠' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                      padding: '28px 24px',
                      textAlign: 'center',
                    }}
                    whileHover={{ scale: 1.03, borderColor: 'rgba(124,58,237,0.4)' }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: 8 }}>{stat.icon}</div>
                    <div style={{
                      fontFamily: 'Outfit', fontWeight: 800, fontSize: '2rem',
                      color: '#a78bfa', lineHeight: 1,
                    }}>{stat.value}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem', marginTop: 6, fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Highlight Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
            className="about-cards-grid"
          >
            {highlights.map((card, i) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                custom={i}
                className="glass-card"
                style={{ padding: '36px 28px' }}
                whileHover={{ y: -6 }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem',
                  color: '#f8fafc', marginBottom: 12,
                }}>{card.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-visual { display: none !important; }
          .about-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .about-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
