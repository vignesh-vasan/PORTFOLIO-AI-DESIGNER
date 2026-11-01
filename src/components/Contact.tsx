import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Link2, GitBranch, Download, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const PLACEHOLDER_EMAIL = '[YOUR_EMAIL@gmail.com]';
  const PLACEHOLDER_LINKEDIN = 'https://linkedin.com/in/[your-linkedin]';
  const PLACEHOLDER_GITHUB = 'https://github.com/[your-github]';
  const GithubIcon = GitBranch;

  return (
    <section
      id="contact"
      className="section"
      style={{
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        bottom: -200, right: -100,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              Get In Touch
            </div>
            <h2 style={{
              fontFamily: 'Outfit', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.02em', marginBottom: 16,
            }}>
              Have a{' '}
              <span className="text-gradient">Creative Idea?</span>
            </h2>
            <p style={{ color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7, fontSize: '1rem' }}>
              Let's explore how AI and creative thinking can bring your next visual concept to life.
            </p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              maxWidth: 760,
              margin: '0 auto',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 28,
              padding: '48px',
              textAlign: 'center',
              boxShadow: '0 24px 80px rgba(124,58,237,0.1)',
            }}
          >
            {/* Avatar */}
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Outfit', fontWeight: 900, fontSize: '2rem',
              color: 'white', margin: '0 auto 20px',
              boxShadow: '0 8px 30px rgba(124,58,237,0.4)',
            }}>V</div>

            <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.5rem', color: '#f8fafc', marginBottom: 6 }}>
              Vignesh S.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 8 }}>
              <Sparkles size={14} color="#a78bfa" />
              <span style={{ color: '#a78bfa', fontSize: '0.9rem', fontWeight: 500 }}>
                AI Designer · AI/ML Engineer
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 40, color: '#64748b', fontSize: '0.85rem' }}>
              <MapPin size={13} />
              Chennai, Tamil Nadu, India
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 40 }} />

            {/* Contact Details */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16, marginBottom: 40,
            }}
              className="contact-info-grid"
            >
              {[
                { icon: <Mail size={18} />, label: 'Email', value: PLACEHOLDER_EMAIL, note: 'Replace with your email' },
                { icon: <Link2 size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/...', note: 'Replace with your LinkedIn' },
                { icon: <GithubIcon size={18} />, label: 'GitHub', value: 'github.com/...', note: 'Replace with your GitHub' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'rgba(124,58,237,0.06)',
                    border: '1px solid rgba(124,58,237,0.12)',
                    borderRadius: 16, padding: '20px 16px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: '#a78bfa', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', wordBreak: 'break-all' }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#475569', marginTop: 4 }}>
                    ✏️ {item.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`mailto:${PLACEHOLDER_EMAIL}`}
                className="btn-primary"
                id="email-cta-btn"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href={PLACEHOLDER_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="linkedin-cta-btn"
              >
                <Link2 size={16} />
                LinkedIn
              </a>
              <a
                href={PLACEHOLDER_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="github-cta-btn"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href="/resume.pdf"
                download="Vignesh_S_AI_Designer_Resume.pdf"
                className="btn-secondary"
                id="resume-download-btn"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Notice */}
            <p style={{
              marginTop: 28, color: '#334155', fontSize: '0.75rem', lineHeight: 1.6,
              borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 24,
            }}>
              📌 Contact details are placeholders — add your actual email, LinkedIn, and GitHub profile links in{' '}
              <code style={{ color: '#7c3aed', background: 'rgba(124,58,237,0.1)', padding: '1px 6px', borderRadius: 4 }}>
                src/components/Contact.tsx
              </code>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
