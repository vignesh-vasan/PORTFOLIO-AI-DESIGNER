import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ExternalLink } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 72,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Orbs */}
      <div aria-hidden="true">
        <div
          className="hero-glow animate-pulse-glow"
          style={{
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
            right: -100, top: -100,
            position: 'absolute',
          }}
        />
        <div
          className="hero-glow animate-float"
          style={{
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
            left: '5%', bottom: '10%',
            position: 'absolute',
          }}
        />
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(124,58,237,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
          minHeight: 'calc(100vh - 72px)',
          padding: '60px 0',
        }}
          className="hero-grid"
        >
          {/* Left — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: 50, padding: '6px 16px', marginBottom: 24,
              }}>
                <Sparkles size={14} color="#a78bfa" />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: '#a78bfa', textTransform: 'uppercase' }}>
                  AI Designer Portfolio
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
                letterSpacing: '-0.02em',
              }}
            >
              Turning Artificial{' '}
              <span className="text-gradient">Intelligence</span>
              {' '}Into Creative Visual Experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7,
                marginBottom: 36, maxWidth: 480,
              }}
            >
              I combine AI technology, creative thinking, and visual storytelling to develop next-generation product visuals, brand campaigns, and digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              <button
                onClick={() => scrollTo('work')}
                className="btn-primary"
              >
                Explore My Work
                <ExternalLink size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Identity Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                marginTop: 48, paddingTop: 36,
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', alignItems: 'center', gap: 16,
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 50,
                background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Outfit', fontWeight: 900, fontSize: '1.2rem', color: 'white',
                flexShrink: 0, boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
              }}>V</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: '#f8fafc' }}>Vignesh S.</div>
                <div style={{ fontSize: '0.8rem', color: '#a78bfa', marginTop: 2 }}>
                  AI Designer · AI/ML Engineer · Creative Visual Content Creator
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
            className="hero-visual-col"
          >
            {/* Main image */}
            <div style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid rgba(124,58,237,0.25)',
              boxShadow: '0 32px 80px rgba(124,58,237,0.2), 0 0 0 1px rgba(124,58,237,0.1)',
            }}>
              <img
                src="/assets/hero_visual.png"
                alt="AI-generated creative artwork showcasing futuristic neural network visualization"
                style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(10,10,15,0.8) 100%)',
              }} />
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: -20, right: -20,
                background: 'rgba(13,13,25,0.9)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: 16, padding: '14px 18px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 30px rgba(124,58,237,0.2)',
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>⚡</div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', color: '#f8fafc' }}>8+</div>
              <div style={{ fontSize: '0.7rem', color: '#a78bfa', fontWeight: 500 }}>Creative Projects</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute', bottom: -20, left: -20,
                background: 'rgba(13,13,25,0.9)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: 16, padding: '14px 18px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 30px rgba(124,58,237,0.2)',
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>🎓</div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', color: '#f8fafc' }}>93%</div>
              <div style={{ fontSize: '0.7rem', color: '#a78bfa', fontWeight: 500 }}>Academic Score</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              style={{
                position: 'absolute', bottom: 80, right: -30,
                background: 'rgba(13,13,25,0.9)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: 16, padding: '14px 18px',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 30px rgba(124,58,237,0.2)',
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>🤖</div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.85rem', color: '#f8fafc' }}>AI/ML</div>
              <div style={{ fontSize: '0.7rem', color: '#a78bfa', fontWeight: 500 }}>Engineer</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          }}
        >
          <span style={{ fontSize: '0.7rem', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} color="#7c3aed" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-visual-col { display: none !important; }
          .hero-grid > div:first-child p { max-width: 100% !important; }
          .hero-grid > div:first-child > div:last-child { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
