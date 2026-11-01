import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { processSteps } from '../data/portfolioData';

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      className="section"
      style={{
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Creative Process
          </div>
          <h2 style={{
            fontFamily: 'Outfit', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            letterSpacing: '-0.02em', marginBottom: 16,
          }}>
            From Idea to{' '}
            <span className="text-gradient-purple">Visual Impact</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            A structured creative process ensures every AI-generated visual achieves its intended purpose and quality standard.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          position: 'relative',
        }}
          className="process-grid"
        >
          {/* Connecting line */}
          <div
            className="process-line"
            style={{
              position: 'absolute',
              top: 60, left: '12%', right: '12%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 20%, rgba(124,58,237,0.4) 80%, transparent)',
              zIndex: 0,
            }}
          />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ position: 'relative', zIndex: 1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'rgba(124,58,237,0.12)',
                border: '1px solid rgba(124,58,237,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', marginBottom: 20,
              }}>
                {step.icon}
              </div>

              {/* Number */}
              <div className="process-number">{step.number}</div>

              <h3 style={{
                fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem',
                color: '#f8fafc', marginBottom: 12,
              }}>{step.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 500px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
