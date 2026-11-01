import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { tools } from '../data/portfolioData';

const categoryConfig = {
  AI: { label: 'AI Tools', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.2)' },
  Design: { label: 'Design Tools', color: '#0ea5e9', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)' },
  Technical: { label: 'Technical Skills', color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)' },
};

const categories = ['AI', 'Design', 'Technical'] as const;

export default function ToolsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tools" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Creative Toolkit
          </div>
          <h2 style={{
            fontFamily: 'Outfit', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            letterSpacing: '-0.02em', marginBottom: 16,
          }}>
            My{' '}
            <span className="text-gradient-purple">Creative Toolkit</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            A carefully curated set of AI, design, and technical tools I use to bring creative visions to life.
          </p>
        </motion.div>

        {categories.map((cat, catIndex) => {
          const config = categoryConfig[cat];
          const catTools = tools.filter((t) => t.category === cat);
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              style={{ marginBottom: 48 }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: config.color,
                  boxShadow: `0 0 12px ${config.color}`,
                }} />
                <span style={{
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: config.color,
                }}>{config.label}</span>
                <div style={{ flex: 1, height: 1, background: `${config.color}20` }} />
              </div>

              {/* Tools Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: 16,
              }}>
                {catTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + i * 0.06 }}
                    className="tool-card"
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  >
                    <div
                      className="tool-icon"
                      style={{
                        background: config.bg,
                        border: `1px solid ${config.border}`,
                      }}
                    >
                      {tool.emoji}
                    </div>
                    <span style={{
                      fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8',
                      textAlign: 'center', lineHeight: 1.3,
                    }}>{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
