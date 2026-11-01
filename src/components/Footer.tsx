import { GitBranch, Link2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      padding: '40px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 20,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Outfit', fontWeight: 900, fontSize: '0.9rem', color: 'white',
            }}>V</div>
            <span style={{ fontFamily: 'Outfit', fontWeight: 700, color: '#94a3b8', fontSize: '0.9rem' }}>
              Vignesh S.
            </span>
          </div>

          {/* Center text */}
          <p style={{ color: '#334155', fontSize: '0.8rem', textAlign: 'center' }}>
            © 2026 Vignesh S. · AI Designer Portfolio · Chennai, India
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { icon: <Mail size={16} />, href: 'mailto:vigneshvasan21@gmail.com', label: 'Email' },
              { icon: <Link2 size={16} />, href: 'https://linkedin.com/in/vignesh_vasan/', label: 'LinkedIn' },
              { icon: <GitBranch size={16} />, href: 'https://github.com/vignesh_vasan', label: 'GitHub' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', transition: 'all 0.3s ease', textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#a78bfa';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#64748b';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
