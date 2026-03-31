import Link from "next/link";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        {/* Brand Column */}
        <div style={styles.brandCol}>
          <Link href="/" style={styles.logo}>
            <span style={styles.logoBox}>AH</span>
            <span style={styles.logoText}>Apprentice Hub</span>
          </Link>
          <p style={styles.tagline}>
            Transforming how students in the UK discover apprenticeships and
            build their careers.
          </p>
          <div style={styles.contactItem}>
            <span style={styles.icon}>✉</span>
            <span style={styles.contactText}>contact@apprenticehub.com</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📍</span>
            <span style={styles.contactText}>London, United Kingdom</span>
          </div>
        </div>

        {/* Links */}
        <FooterCol title="Company" links={["About us", "Contact us"]} hrefs={["/about", "/contact"]} />
        <FooterCol
          title="Resources"
          links={["Apprenticeships", "Application Tracking", "Resources"]}
          hrefs={["/apprenticeships", "/tracking", "/resources"]}
        />
        <FooterCol
          title="Legal"
          links={["Privacy policy", "Terms of privacy", "Cookies policy"]}
          hrefs={["/privacy", "/terms", "/cookies"]}
        />
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        <p style={styles.copyright}>© 2026 ApprenticeHub. All rights reserved.</p>
        <div style={styles.socials}>
          <SocialLink href="https://instagram.com" label="Instagram">
            {/* Instagram SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </SocialLink>
          <SocialLink href="https://twitter.com" label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://linkedin.com" label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  hrefs,
}: {
  title: string;
  links: string[];
  hrefs: string[];
}) {
  return (
    <div style={styles.linkCol}>
      <h4 style={styles.colTitle}>{title}</h4>
      {links.map((link, i) => (
        <Link key={link} href={hrefs[i]} style={styles.footerLink}>
          {link}
        </Link>
      ))}
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={styles.socialLink}
    >
      {children}
    </a>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: "#1a3a2e",
    color: "#ffffff",
    paddingTop: "56px",
  },
  inner: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px 48px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "48px",
  },
  brandCol: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    marginBottom: "4px",
  },
  logoBox: {
    backgroundColor: "#ffffff",
    color: "#1a3a2e",
    fontWeight: 700,
    fontSize: "13px",
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "16px",
    fontFamily: "Georgia, serif",
  },
  tagline: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "13.5px",
    lineHeight: 1.6,
    margin: 0,
    maxWidth: "260px",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "13px",
    opacity: 0.7,
  },
  contactText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "13.5px",
  },
  linkCol: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  colTitle: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    margin: 0,
    marginBottom: "4px",
  },
  footerLink: {
    color: "rgba(255,255,255,0.6)",
    textDecoration: "none",
    fontSize: "13.5px",
    transition: "color 0.2s",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  copyright: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "13px",
    margin: 0,
  },
  socials: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  socialLink: {
    color: "rgba(255,255,255,0.5)",
    display: "flex",
    alignItems: "center",
    transition: "color 0.2s",
  },
};