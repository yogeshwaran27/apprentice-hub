import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Search,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

// ─── Hero Section ─────────────────────────────────────────────
export function HeroSection() {
  return (
    <section style={hero.section}>
      <div style={hero.inner}>
        {/* Left */}
        <div style={hero.left}>
          <h1 style={hero.heading}>
            Your <br/>apprenticeship{" "}
            <em style={hero.accent}>Journey</em>{" "}
            starts here
          </h1>
          <p style={hero.subtext}>
            Find and track Level 6 &amp; 7 apprenticeships at the UK&apos;s most
            selective employers — with structured preparation resources to compete
            confidently against thousands of applicants.
          </p>
          <div style={hero.buttons}>
            <Link href="/apprenticeships" style={hero.primaryBtn}>
              Browse open roles →
            </Link>
            <Link href="/resources" style={hero.secondaryBtn}>
              View resources
            </Link>
          </div>
        </div>

        {/* Right — preview card */}
        <div style={hero.right}>
          <div style={hero.card}>
            <JobPreviewRow label="Software Engineering Degree Apprentice" company="Google • London" tag="Technology" tagColor="#e8f5e9" tagText="#2e7d32" dimmed />
            <JobPreviewRowFeatured />
            <JobPreviewRow label="Data Analyst Apprentice" company="bp • London" tag="Data & Analytics" tagColor="#e3f2fd" tagText="#1565c0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function JobPreviewRow({
  label,
  company,
  tag,
  tagColor,
  tagText,
  dimmed,
}: {
  label: string;
  company: string;
  tag: string;
  tagColor: string;
  tagText: string;
  dimmed?: boolean;
}) {
  return (
    <div style={{ ...hero.jobRow, opacity: dimmed ? 0.55 : 1 }}>
      <div style={hero.jobIcon}>🎓</div>
      <div style={hero.jobInfo}>
        <p style={hero.jobTitle}>{label}</p>
        <p style={hero.jobCompany}>{company}</p>
      </div>
      <span style={{ ...hero.tag, backgroundColor: tagColor, color: tagText }}>{tag}</span>
    </div>
  );
}

function JobPreviewRowFeatured() {
  return (
    <div style={hero.featuredCard}>
      <div style={hero.featuredTop}>
        <div style={hero.jobIcon}>🎓</div>
        <div style={hero.jobInfo}>
          <p style={hero.jobTitle}>Consulting Degree Apprentice</p>
          <p style={hero.jobCompany}>Deloitte • Birmingham</p>
        </div>
        <span style={{ ...hero.tag, backgroundColor: "#fce4d6", color: "#c0392b" }}>Urgent</span>
      </div>
      <div style={hero.featuredMeta}>
        <span style={hero.salary}>£28,500</span>
        <span style={hero.liveTracker}>LIVE APPLICATION TRACKER</span>
      </div>
      <div style={hero.statsGrid}>
        {[
          { icon: "🔴", label: "Closing status", value: "Early-bird applications open" },
          { icon: "↗", label: "Application tracker", value: "Short, 10-minute application" },
          { icon: "📖", label: "Expert resources", value: "Data task walkthroughs" },
          { icon: "🔴", label: "Applicants", value: "1,200+ applicants this season" },
        ].map((s) => (
          <div key={s.label} style={hero.statItem}>
            <p style={hero.statLabel}>{s.label}</p>
            <p style={hero.statValue}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const hero: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "#f5f2eb", padding: "80px 0 100px" },
  inner: { maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" },
  left: { display: "flex", flexDirection: "column", gap: "24px" },
  heading: { fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.1, color: "#1a2e1e", margin: 0, fontFamily: "Georgia, serif" },
  accent: { fontStyle: "italic", color: "#e8845c" },
  subtext: { fontSize: "15.5px", lineHeight: 1.7, color: "#4a5c4e", margin: 0, maxWidth: "480px" },
  buttons: { display: "flex", gap: "16px", flexWrap: "wrap" },
  primaryBtn: { backgroundColor: "#1a3a2e", color: "#fff", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "14px" },
  secondaryBtn: { backgroundColor: "transparent", color: "#1a3a2e", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "14px", border: "1.5px solid #1a3a2e" },
  right: {},
  card: { backgroundColor: "rgba(0,0,0,0.0)", borderRadius: "20px", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" },
  jobRow: { display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", backgroundColor: "#fafafa" },
  featuredCard: { border: "1.5px solid #e0d8cc", borderRadius: "16px", padding: "16px", backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: "12px" },
  featuredTop: { display: "flex", alignItems: "center", gap: "12px" },
  featuredMeta: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  salary: { fontWeight: 700, fontSize: "16px", color: "#1a2e1e" },
  liveTracker: { fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", color: "#888" },
  statsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" },
  statItem: { backgroundColor: "#f8f6f2", borderRadius: "10px", padding: "10px 12px" },
  statLabel: { margin: 0, fontSize: "11px", fontWeight: 600, color: "#555" },
  statValue: { margin: "2px 0 0", fontSize: "12px", color: "#333" },
  jobIcon: { fontSize: "20px", flexShrink: 0 },
  jobInfo: { flex: 1 },
  jobTitle: { margin: 0, fontSize: "13px", fontWeight: 600, color: "#1a2e1e" },
  jobCompany: { margin: 0, fontSize: "12px", color: "#888" },
  tag: { padding: "3px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, whiteSpace: "nowrap" },
};

// ─── How It Connects Section ──────────────────────────────────
export function HowItConnectsSection() {
  const left = [
    { icon: "🎓", label: "Schools" },
    { icon: "💼", label: "Job boards" },
    { icon: "📘", label: "Prep tools" },
  ];
  const right = [
    { icon: "🎯", label: "Shortlists" },
    { icon: "🕐", label: "Offers" },
    { icon: "👥", label: "Outcomes" },
  ];

  return (
    <section style={how.section}>
      <div style={how.inner}>
        <p style={how.eyebrow}>● HOW EVERYTHING CONNECTS</p>
        <h2 style={how.heading}>
          One apprenticeship hub{" "}
          <em style={how.accent}>for every moving part</em>
        </h2>
        <p style={how.subtext}>
          See how your schools, job boards, prep tools and real outcomes all route
          through a single calm workspace – instead of scattered tabs and
          spreadsheets.
        </p>

        <div style={how.diagram}>
          {/* Left items */}
          <div style={how.col}>
            {left.map((item) => (
              <div key={item.label} style={how.pill}>
                <span style={how.pillIcon}>{item.icon}</span>
                <span style={how.pillLabel}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Center hub */}
          <div style={how.hub}>
            <div style={how.hubCircle}>
              <span style={how.hubLogoBox}>AH</span>
            </div>
            <p style={how.hubLabel}>Apprentice Hub</p>
          </div>

          {/* Right items */}
          <div style={how.col}>
            {right.map((item) => (
              <div key={item.label} style={how.pill}>
                <span style={how.pillIcon}>{item.icon}</span>
                <span style={how.pillLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const how: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "#f5f2eb", padding: "80px 0" },
  inner: { maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" },
  eyebrow: { fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#e8845c", margin: 0 },
  heading: { fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#1a2e1e", margin: 0, fontFamily: "Georgia, serif" },
  accent: { fontStyle: "italic", color: "#e8845c" },
  subtext: { fontSize: "15px", lineHeight: 1.7, color: "#4a5c4e", margin: 0, maxWidth: "560px" },
  diagram: { display: "flex", alignItems: "center", justifyContent: "center", gap: "48px", marginTop: "32px", width: "100%" },
  col: { display: "flex", flexDirection: "column", gap: "16px" },
  pill: { backgroundColor: "#ffffff", border: "1.5px solid #e8e2d9", borderRadius: "12px", padding: "14px 20px", display: "flex", alignItems: "center", gap: "12px", minWidth: "160px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" },
  pillIcon: { fontSize: "20px" },
  pillLabel: { fontSize: "14px", fontWeight: 500, color: "#1a2e1e" },
  hub: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
  hubCircle: { width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "#ffffff", border: "2px solid #d0c8bd", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" },
  hubLogoBox: { backgroundColor: "#1a3a2e", color: "#fff", fontWeight: 700, fontSize: "13px", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" },
  hubLabel: { fontSize: "12px", fontWeight: 600, color: "#888", margin: 0 },
};

// ─── Start Track Prep Section ─────────────────────────────────
export function StartTrackPrepSection() {
  const cards = [
    { icon: Briefcase, title: "Browse apprenticeships", sub: "Search & filter open roles", cta: "Start browsing →" },
    { icon: BarChart, title: "Track my applications", sub: "Log in to access", cta: "Open tracker →" },
    { icon: BookOpen, title: "Preparation resources", sub: "Guides, templates & packs", cta: "Get prepared →" },
  ];

  return (
    <section style={stp.section}>
      <div style={stp.inner}>
        <h2 style={stp.heading}>
          Start, track and prep{" "}
          <em style={stp.accent}>in one place</em>
        </h2>
        <div style={stp.grid}>
          {cards.map((c) =>  {
            const Icon = c.icon;

            return (
            <div key={c.title} style={stp.card}>
              <div style={stp.iconWrap}><Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110" /></div>
              <h3 style={stp.cardTitle}>{c.title}</h3>
              <p style={stp.cardSub}>{c.sub}</p>
              <button style={stp.cardBtn}>{c.cta}</button>
            </div>
          )
	})}
        </div>
      </div>
    </section>
  );
}

const stp: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "#fdf9f4", padding: "80px 0" },
  inner: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" },
  heading: { fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#1a2e1e", margin: 0, fontFamily: "Georgia, serif", textAlign: "center" },
  accent: { fontStyle: "italic", color: "#e8845c" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", width: "100%" },
  card: { border: "1.5px solid #e4ddd3", borderRadius: "20px", padding: "36px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", backgroundColor: "#fff", textAlign: "center" },
  iconWrap: { fontSize: "32px", backgroundColor: "#fce9e0", width: "64px", height: "64px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  cardTitle: { fontWeight: 700, fontSize: "17px", color: "#1a2e1e", margin: 0, fontFamily: "Georgia, serif" },
  cardSub: { fontSize: "13.5px", color: "#888", margin: 0 },
  cardBtn: { marginTop: "12px", padding: "10px 24px", border: "1.5px solid #1a2e1e", borderRadius: "999px", background: "transparent", cursor: "pointer", fontSize: "14px", fontWeight: 600, color: "#1a2e1e" },
};

// ─── Open Roles Section ───────────────────────────────────────
export function OpenRolesSection() {
  const roles = [
    { title: "Technology Degree Apprenticeship", company: "Dyson", tag: "Engineering", salary: "£22,000", urgent: false },
    { title: "Digital & Technology Solutions Apprenticeship", company: "Goldman Sachs", tag: "Finance", salary: "£28,000", urgent: true },
    { title: "Chartered Manager Degree Apprenticeship", company: "Unilever", tag: "FMCG", salary: "£21,500", urgent: true },
  ];

  return (
    <section style={or.section}>
      <div style={or.inner}>
        <div style={or.header}>
          <div>
            <h2 style={or.heading}>Open roles</h2>
            <p style={or.sub}>Currently accepting applications</p>
          </div>
          <Link href="/apprenticeships" style={or.viewAll}>View all →</Link>
        </div>
        <div style={or.grid}>
          {roles.map((r) => (
            <div key={r.title} style={or.card}>
              {r.urgent && <span style={or.badge}>Closing soon</span>}
              <div style={or.roleIcon}>🏢</div>
              <h3 style={or.roleTitle}>{r.title}</h3>
              <p style={or.roleCompany}>{r.company}</p>
              <div style={or.roleMeta}>
                <span style={or.tag}>{r.tag}</span>
                <span style={or.salary}>{r.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const or: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "#fdf9f4", padding: "0 0 80px" },
  inner: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "28px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" },
  heading: { margin: 0, fontSize: "26px", fontWeight: 800, color: "#1a2e1e", fontFamily: "Georgia, serif" },
  sub: { margin: "4px 0 0", fontSize: "13.5px", color: "#888" },
  viewAll: { fontSize: "14px", fontWeight: 600, color: "#1a2e1e", textDecoration: "none" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" },
  card: { border: "1.5px solid #e4ddd3", borderRadius: "16px", padding: "24px", backgroundColor: "#fff", display: "flex", flexDirection: "column", gap: "8px", position: "relative" },
  badge: { position: "absolute", top: "16px", right: "16px", backgroundColor: "#e8845c", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "999px" },
  roleIcon: { fontSize: "24px" },
  roleTitle: { margin: 0, fontSize: "15px", fontWeight: 700, color: "#1a2e1e", fontFamily: "Georgia, serif" },
  roleCompany: { margin: 0, fontSize: "13px", color: "#888" },
  roleMeta: { display: "flex", gap: "10px", marginTop: "4px" },
  tag: { backgroundColor: "#e8f5e9", color: "#2e7d32", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px" },
  salary: { fontSize: "13px", color: "#555", fontWeight: 500 },
};

// ─── Closing Alert Banner ─────────────────────────────────────
export function ClosingAlertBanner() {
  return (
    <section style={ca.section}>
      <div style={ca.inner}>
        <div style={ca.alert}>
          <div style={ca.iconWrap}>⚠️</div>
          <div style={ca.text}>
            <p style={ca.title}>2 roles closing soon</p>
            <p style={ca.sub}>Don&apos;t miss out — review and apply before the deadlines pass.</p>
          </div>
          <button style={ca.btn}>⚡ View closing roles</button>
        </div>
      </div>
    </section>
  );
}

const ca: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "#fdf9f4", padding: "0 0 40px" },
  inner: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px" },
  alert: { backgroundColor: "#fde8df", border: "1.5px solid #f5c5b0", borderRadius: "16px", padding: "24px 28px", display: "flex", alignItems: "center", gap: "20px" },
  iconWrap: { fontSize: "28px", backgroundColor: "#fbd2c0", borderRadius: "50%", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  text: { flex: 1 },
  title: { margin: 0, fontWeight: 700, fontSize: "16px", color: "#8b2500" },
  sub: { margin: "4px 0 0", fontSize: "13.5px", color: "#a05040" },
  btn: { backgroundColor: "#e8845c", color: "#fff", padding: "10px 20px", borderRadius: "999px", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "14px", flexShrink: 0 },
};

// ─── Testimonials Section ─────────────────────────────────────
export function TestimonialsSection() {
  const reviews = [
    { text: "ApprenticeHub's shortlists and reminders made it so much easier to stay on top of deadlines.", name: "Tasi D.", role: "Year 13 Student • Ada College", initials: "TD" },
    { text: "I'm surprised by how underrated this website is — it finally brings everything into one place.", name: "Zain K.", role: "Software Engineer Apprentice • Global tech firm", initials: "ZK" },
    { text: "This is the tool I wish I'd had when I started out — it keeps my pipeline clear and focused.", name: "Ashini S.", role: "Data Analyst Apprentice • Major investment bank", initials: "AS" },
  ];

  return (
    <section style={test.section}>
      <div style={test.inner}>
        <p style={test.eyebrow}>● TRUSTED BY 3,000+ ASPIRING APPRENTICES</p>
        <h2 style={test.heading}>
          What students &amp;{" "}
          <em style={test.accent}>apprentices are saying</em>
        </h2>
        <p style={test.subtext}>
          See why students and apprentices are switching to ApprenticeHub to
          organise their search and feel more confident applying.
        </p>
        <div style={test.grid}>
          {reviews.map((r) => (
            <div key={r.name} style={test.card}>
              <div style={test.stars}>★★★★★</div>
              <p style={test.quote}>&ldquo;{r.text}&rdquo;</p>
              <div style={test.author}>
                <div style={test.avatar}>{r.initials}</div>
                <div>
                  <p style={test.name}>{r.name}</p>
                  <p style={test.role}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const test: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "#fdf9f4", padding: "80px 0" },
  inner: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", textAlign: "center" },
  eyebrow: { fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#e8845c", margin: 0 },
  heading: { fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, color: "#1a2e1e", margin: 0, fontFamily: "Georgia, serif" },
  accent: { fontStyle: "italic", color: "#e8845c" },
  subtext: { fontSize: "14.5px", lineHeight: 1.7, color: "#4a5c4e", margin: 0, maxWidth: "520px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", width: "100%", marginTop: "16px" },
  card: { backgroundColor: "#fff", border: "1.5px solid #e4ddd3", borderRadius: "16px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" },
  stars: { color: "#e8845c", fontSize: "16px", letterSpacing: "2px" },
  quote: { margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#333" },
  author: { display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" },
  avatar: { width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#d4e6da", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#1a3a2e", flexShrink: 0 },
  name: { margin: 0, fontWeight: 700, fontSize: "13.5px", color: "#1a2e1e" },
  role: { margin: 0, fontSize: "12px", color: "#888" },
};

// ─── CTA Section ──────────────────────────────────────────────
export function CTASection() {
  return (
    <section style={cta.section}>
      <div style={cta.inner}>
        <div style={cta.box}>
          <h2 style={cta.heading}>Ready to start your journey?</h2>
          <p style={cta.sub}>
            Create a free account to track applications, save roles, and access
            preparation resources.
          </p>
          <div style={cta.buttons}>
            <Link href="/signup" style={cta.primaryBtn}>Get started →</Link>
            <Link href="/apprenticeships" style={cta.secondaryBtn}>Browse roles</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const cta: Record<string, React.CSSProperties> = {
  section: { backgroundColor: "#fdf9f4", padding: "0 0 80px" },
  inner: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px" },
  box: { backgroundColor: "#1a3a2e", borderRadius: "24px", padding: "64px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" },
  heading: { margin: 0, fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 800, color: "#fff", fontFamily: "Georgia, serif" },
  sub: { margin: 0, fontSize: "15px", color: "rgba(255,255,255,0.7)", maxWidth: "480px", lineHeight: 1.7 },
  buttons: { display: "flex", gap: "16px", marginTop: "8px" },
  primaryBtn: { backgroundColor: "#e8845c", color: "#fff", padding: "12px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "15px" },
  secondaryBtn: { backgroundColor: "transparent", color: "#fff", padding: "12px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "15px", border: "1.5px solid rgba(255,255,255,0.4)" },
};