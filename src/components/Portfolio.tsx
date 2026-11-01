import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ArrowRight, ChevronRight, Wrench } from 'lucide-react';
import { projects, type Project } from '../data/portfolioData';

const categories = ['All', 'Product Advertising', 'Automotive Campaign', 'Brand Campaign', 'Fashion Editorial', 'Tech Branding', 'Ecommerce', 'AI Demonstration', 'Beverage Campaign'];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Image */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px 24px 0 0' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', maxHeight: 380, objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(15,15,26,0.95) 100%)',
            }} />
            <div style={{
              position: 'absolute', bottom: 24, left: 32,
            }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(124,58,237,0.9)', color: 'white',
                fontSize: '0.7rem', fontWeight: 700, padding: '4px 12px',
                borderRadius: 50, letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: 8,
              }}>{project.badge}</span>
              <div style={{ fontSize: '0.85rem', color: '#a78bfa', marginBottom: 4 }}>
                {project.number} — {project.category}
              </div>
              <h2 style={{
                fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                color: 'white', lineHeight: 1.1,
              }}>{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close project modal"
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)',
                color: 'white', borderRadius: 50, width: 36, height: 36,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', backdropFilter: 'blur(8px)',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '32px' }}>
            {/* Tabs-like info */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }} className="modal-info-grid">
              {[
                { label: 'Overview', content: project.overview },
                { label: 'Creative Objective', content: project.objective },
              ].map((item) => (
                <div key={item.label} style={{
                  background: 'rgba(124,58,237,0.05)',
                  border: '1px solid rgba(124,58,237,0.12)',
                  borderRadius: 16, padding: '20px',
                }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                    {item.label}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.content}</p>
                </div>
              ))}
            </div>

            {/* Visual Direction */}
            <div style={{
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16, padding: '20px', marginBottom: 24,
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                Visual Direction
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7 }}>{project.visualDirection}</p>
            </div>

            {/* AI Prompt */}
            <div style={{
              background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: 16, padding: '20px', marginBottom: 24,
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>⚡</span> AI Prompt
              </div>
              <p style={{ color: '#c4b5fd', fontSize: '0.85rem', fontFamily: 'monospace', lineHeight: 1.7, fontStyle: 'italic' }}>
                {project.prompt}
              </p>
            </div>

            {/* Tools */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Wrench size={12} /> Tools Used
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-chip">{tool}</span>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                Creative Process
              </div>
              {project.process.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                    paddingBottom: 14, borderBottom: i < project.process.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    marginBottom: i < project.process.length - 1 ? 14 : 0,
                  }}
                >
                  <div style={{
                    width: 24, height: 24, borderRadius: 50,
                    background: 'rgba(124,58,237,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa', flexShrink: 0,
                    marginTop: 2,
                  }}>{i + 1}</div>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <style>{`
        @media (max-width: 600px) {
          .modal-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="project-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }}
        />
        {/* Hover overlay */}
        <div className="project-overlay">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.75rem',
              fontWeight: 600, padding: '4px 12px', borderRadius: 50,
              backdropFilter: 'blur(8px)',
            }}>View Project</span>
            <ChevronRight size={16} color="white" />
          </div>
        </div>
        {/* Badge */}
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(124,58,237,0.3)',
          color: '#a78bfa', fontSize: '0.65rem', fontWeight: 700,
          padding: '4px 10px', borderRadius: 50, letterSpacing: '0.08em',
        }}>{project.badge}</div>
        {/* Number */}
        <div style={{
          position: 'absolute', top: 16, right: 16,
          fontFamily: 'Outfit', fontWeight: 900, fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.4)',
        }}>{project.number}</div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px 24px' }}>
        <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          {project.category}
        </div>
        <h3 style={{
          fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.2rem',
          color: '#f8fafc', marginBottom: 8, lineHeight: 1.2,
        }}>{project.title}</h3>
        <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 16 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} style={{
              fontSize: '0.7rem', color: '#94a3b8', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)', borderRadius: 50, padding: '2px 10px',
            }}>{tool}</span>
          ))}
        </div>
        <button
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            color: '#a78bfa', fontSize: '0.82rem', fontWeight: 600,
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          }}
        >
          View Project <ArrowRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Creative Portfolio</div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 40, gap: 20, flexWrap: 'wrap',
          }}>
            <h2 style={{
              fontFamily: 'Outfit', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>
              Selected{' '}
              <span className="text-gradient-purple">Work</span>
            </h2>
          </div>

          {/* Filter Tabs — scrollable on mobile */}
          <div style={{
            display: 'flex', gap: 8, flexWrap: 'wrap',
            marginBottom: 48,
          }}>
            {['All', 'Product Advertising', 'Brand Campaign', 'Tech Branding', 'Ecommerce', 'AI Demonstration'].map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >{cat}</button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(360px, 100%), 1fr))',
            gap: 24,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
