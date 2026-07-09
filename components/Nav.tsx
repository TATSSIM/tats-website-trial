'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { withBasePath } from '@/lib/basePath';

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const pathname    = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const hoverTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); setProgramsOpen(false); }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setProgramsOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openDropdown  = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setProgramsOpen(true); };
  const closeDropdown = () => { hoverTimer.current = setTimeout(() => setProgramsOpen(false), 140); };

  const navLinks = [
    { href: '/',         label: 'Home'    },
    { href: '/about',    label: 'About'   },
    { href: '/why-tats', label: 'Why TATS'},
    { href: '/results',  label: 'Results' },
    { href: '/gallery',  label: 'Gallery' },
    { href: '/blog',     label: 'Blog'    },
    { href: '/contact',  label: 'Contact' },
  ];

  const programs = [
    { href: '/programs/tats-120',        label: 'TATS 120'                  },
    { href: '/programs/atpl-integrated', label: 'TATS 120 ATPL Integrated', badge: 'NEW' },
    { href: '/programs/fly-direct',      label: 'Fly Direct'                },
    { href: '/programs/tapp-50',         label: 'TAPP 50'                   },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── Floating Pill Island ── */}
      <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none"
        style={{ paddingTop: '20px' }}>
        <nav
          className="pointer-events-auto flex items-center px-3 h-[52px] rounded-full transition-all"
          style={{
            background: scrolled ? 'rgba(5,8,15,0.92)' : 'rgba(5,8,15,0.55)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: scrolled
              ? '0 4px 32px rgba(0,0,0,.55), 0 0 0 0.5px rgba(212,175,55,.09), inset 0 1px 0 rgba(255,255,255,0.05)'
              : '0 2px 16px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,0.04)',
            transition: 'all 600ms cubic-bezier(0.32,0.72,0,1)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline mr-3 flex-shrink-0">
            <Image
              src={withBasePath("/images/logo-full.png")}
              alt="The Aviator Training School"
              width={100} height={44}
              className="object-contain"
              style={{ height: 34, width: 'auto', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,.7))' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0 list-none">
            {navLinks.map(link => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="px-[9px] py-[5px] text-[.66rem] font-medium tracking-[0.8px] uppercase no-underline transition-colors block rounded-full"
                  style={{
                    color: isActive(link.href) ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
                    transition: 'color 300ms cubic-bezier(0.32,0.72,0,1)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Programs dropdown */}
            <li className="relative" ref={dropdownRef} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <button
                onClick={() => setProgramsOpen(p => !p)}
                className="px-[9px] py-[5px] text-[.66rem] font-medium tracking-[0.8px] uppercase flex items-center gap-1 bg-transparent border-none cursor-pointer rounded-full"
                style={{
                  color: pathname.startsWith('/programs') ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
                  transition: 'color 300ms cubic-bezier(0.32,0.72,0,1)',
                }}
                aria-expanded={programsOpen}
              >
                Programs
                <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"
                  style={{ transform: programsOpen ? 'rotate(180deg)' : '', transition: 'transform 300ms cubic-bezier(0.32,0.72,0,1)' }}>
                  <path d="M5 7L1 3h8z" />
                </svg>
              </button>

              {/* Dropdown — double-bezel */}
              <div
                className="absolute top-full left-1/2 mt-3 min-w-[220px]"
                style={{
                  transform: `translateX(-50%) translateY(${programsOpen ? '0' : '-6px'})`,
                  opacity: programsOpen ? 1 : 0,
                  pointerEvents: programsOpen ? 'all' : 'none',
                  transition: 'opacity 250ms cubic-bezier(0.32,0.72,0,1), transform 250ms cubic-bezier(0.32,0.72,0,1)',
                  padding: '3px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  boxShadow: '0 20px 60px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div style={{
                  background: 'rgba(6,9,18,0.98)',
                  backdropFilter: 'blur(24px)',
                  borderRadius: '11px',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                }}>
                  {programs.map(p => (
                    <Link
                      key={p.href} href={p.href}
                      className="flex items-center gap-2 px-4 py-[11px] text-[.7rem] no-underline"
                      style={{
                        color: pathname === p.href ? 'var(--gold)' : 'rgba(255,255,255,0.55)',
                        transition: 'all 200ms cubic-bezier(0.32,0.72,0,1)',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.05)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = pathname === p.href ? 'var(--gold)' : 'rgba(255,255,255,0.55)'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: pathname === p.href ? 'var(--gold)' : 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                      {p.label}
                      {p.badge && (
                        <span className="ml-auto text-[.44rem] font-bold tracking-wider px-1.5 py-0.5 rounded"
                          style={{ background: 'var(--sky)', color: '#05080f' }}>
                          {p.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center ml-2">
            <a
              href="https://forms.gle/sNmtSNYHzvG5PXxu7"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '.64rem', padding: '7px 7px 7px 14px' }}
            >
              Book Webinar
              <span className="btn-icon" style={{ width: 24, height: 24, fontSize: '.6rem' }}>↗</span>
            </a>
          </div>

          {/* Hamburger — morphs to × */}
          <button
            className="md:hidden flex flex-col justify-center bg-transparent border-none cursor-pointer ml-2 z-[1001]"
            style={{ width: 32, height: 32, gap: 0, position: 'relative' }}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span style={{
              display: 'block', width: 18, height: 1.5,
              background: 'var(--gold)',
              position: 'absolute', top: '50%', left: '50%',
              transformOrigin: 'center',
              transform: mobileOpen
                ? 'translate(-50%, -50%) rotate(45deg)'
                : 'translate(-50%, calc(-50% - 4px))',
              transition: 'transform 400ms cubic-bezier(0.32,0.72,0,1)',
            }} />
            <span style={{
              display: 'block', width: 18, height: 1.5,
              background: 'var(--gold)',
              position: 'absolute', top: '50%', left: '50%',
              transformOrigin: 'center',
              transform: mobileOpen
                ? 'translate(-50%, -50%) rotate(-45deg)'
                : 'translate(-50%, calc(-50% + 4px))',
              transition: 'transform 400ms cubic-bezier(0.32,0.72,0,1)',
            }} />
          </button>
        </nav>
      </div>

      {/* ── Full-screen mobile overlay ── */}
      <div
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center md:hidden"
        style={{
          background: 'rgba(3,5,10,0.97)',
          backdropFilter: mobileOpen ? 'blur(32px)' : 'blur(0px)',
          WebkitBackdropFilter: mobileOpen ? 'blur(32px)' : 'blur(0px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transition: 'opacity 450ms cubic-bezier(0.32,0.72,0,1), backdrop-filter 450ms',
        }}
      >
        <nav className="flex flex-col items-center gap-1">
          {[...navLinks, { href: '/programs', label: 'Programs' }].map((link, i) => (
            <Link
              key={link.href} href={link.href}
              className="text-[1.6rem] font-light tracking-wider uppercase no-underline px-8 py-3 rounded-full"
              style={{
                color: isActive(link.href) ? 'var(--gold)' : 'rgba(255,255,255,0.65)',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
                transition: `transform 550ms cubic-bezier(0.32,0.72,0,1) ${i * 50 + 100}ms, opacity 550ms cubic-bezier(0.32,0.72,0,1) ${i * 50 + 100}ms`,
                fontFamily: 'var(--font-cormorant), Georgia, serif',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{
          marginTop: 40,
          display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
          opacity: mobileOpen ? 1 : 0,
          transition: 'transform 550ms cubic-bezier(0.32,0.72,0,1) 500ms, opacity 550ms cubic-bezier(0.32,0.72,0,1) 500ms',
        }}>
          <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Free Webinar
            <span className="btn-icon">↗</span>
          </a>
          <a
            href="https://wa.me/916282995979?text=Hi%2C%20I%27m%20interested%20in%20TATS%20programmes"
            target="_blank" rel="noopener noreferrer"
            className="btn-ghost"
            style={{ borderColor: 'rgba(37,211,102,.35)', color: 'rgba(37,211,102,.82)' }}
          >
            WhatsApp Us ↗
          </a>
        </div>

        <p style={{
          position: 'absolute', bottom: 40,
          fontSize: '.6rem', color: 'rgba(255,255,255,.18)',
          letterSpacing: '2px', textTransform: 'uppercase',
          fontFamily: 'var(--font-share-mono), monospace',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
          opacity: mobileOpen ? 1 : 0,
          transition: 'transform 550ms cubic-bezier(0.32,0.72,0,1) 600ms, opacity 550ms cubic-bezier(0.32,0.72,0,1) 600ms',
        }}>
          +91 62829 95979
        </p>
      </div>
    </>
  );
}
