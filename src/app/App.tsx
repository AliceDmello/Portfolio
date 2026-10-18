
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  MapPin,
  Phone,
  ChevronRight,
  Menu,
  X,
  Trophy,
  Award,
  Users,
  Code2,
  Star,
  Send,
  FileText,
  GraduationCap,
  Zap,
} from "lucide-react";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "extra", label: "Certificates & Activities" },
  { id: "contact", label: "Contact" },
];

const SKILLS = {
  "Design & Web": [
    { name: "Figma (Basic)" },
    { name: "Canva" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Bootstrap" },
    { name: "Responsive UI" },
  ],
  "Development": [
    { name: "React" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "Java (Basic)" },
    { name: "MERN" },
    { name: "TypeScript" },
  ],
  "Tools & Data": [
    { name: "Visual Studio Code" },
    { name: "Git & GitHub" },
    { name: "Google Colab" },
    { name: "Google Earth Engine" },
    { name: "MySQL" },
    { name: "MongoDB" },
  ],
};

const PROJECTS = [
  {
    title: "Campus Connect — Student Learning Platform",
    desc: "A peer-to-peer learning platform for XIE students to ask questions and share knowledge. The project includes a responsive interface, student profiles, request and answer management, deadlines, and a points-based leaderboard.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
    live: "#contact",
    highlight: true,
  },
  {
    title: "Trip Expense Management System",
    desc: "A Django-based group expense management application for tracking expenses, managing bills, and settling shared payments, with a responsive interface built using Bootstrap.",
    tags: ["Python", "Django", "Bootstrap", "MySQL"],
    live: "#contact",
    highlight: false,
  },
  {
    title: "Krishi Mitra — Smart Farming Assistant",
    desc: "An AI-based agriculture concept combining soil classification, nutrient deficiency detection, and crop recommendations to support farming decisions.",
    tags: ["Machine Learning", "CNN", "Random Forest", "Agriculture"],
    live: "#contact",
    highlight: false,
  },
  {
    title: "Mumbai LULC & Urban Heat Island Analysis",
    desc: "A geospatial analysis project studying land-use changes in Mumbai using satellite imagery and indices including NDVI, NDBI, NDWI, and land surface temperature.",
    tags: ["Satellite Imagery", "Google Earth Engine", "Random Forest", "Data Analysis"],
    live: "#contact",
    highlight: false,
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Mumbai University",
    duration: "July 2023 – Present",
    grade: "CGPA 7.5 (up to Semester VI)",
    details: "Information Technology undergraduate with interests across software development, AI and data projects, and user-centred digital design.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    duration: "June 2021 – May 2023",
    grade: "61.17%",
    details: "Higher Secondary School Certificate.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    duration: "March 2021",
    grade: "85.20%",
    details: "Secondary School Certificate.",
  },
];

const EXTRAS = {
  Certificates: [
    {
      title: "IBM SkillsBuild — Big Data & Business Management",
      desc: "Certificate listed in the resume.",
      icon: Award,
    },
    {
      title: "Mastering Engineering Documentation with LaTeX",
      desc: "Certificate listed in the resume.",
      icon: Award,
    },
  ],
  Activities: [
    {
      title: "Sports Admin",
      desc: "Coordinated and managed college sports events and tournaments, demonstrating teamwork and event management.",
      icon: Users,
    },
    {
      title: "HackX 2.0 Hackathon",
      desc: "Participated in the 24-hour HackX 2.0 Hackathon.",
      icon: Trophy,
    },
  ],
};

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("Design & Web");
  const [activeExtraTab, setActiveExtraTab] = useState("Certificates");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-accent">A</span>lice Dmello
          </span>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  activeSection === id
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-3 flex items-center gap-1.5 px-4 py-1.5 rounded bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
          </nav>

          {/* mobile menu button */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 w-fit px-4 py-2 rounded bg-primary text-primary-foreground text-sm font-medium mt-1"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        )}
      </header>

      <main className="pt-16">

        {/* ── HERO / ABOUT ── */}
        <section
          id="about"
          className="min-h-screen flex items-center relative overflow-hidden"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#818cf8 1px, transparent 1px), linear-gradient(90deg, #818cf8 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Purple side glows */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Wide About card */}
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 relative">
            <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10">
              {/* Decorative corner glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                <div className="max-w-4xl space-y-7">
                  {/* Intro label */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/40 text-xs sm:text-sm text-muted-foreground font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    IT Portfolio · Development · UI/UX Design · Full Stack Web Development
                  </div>

                  {/* Name and role */}
                  <div>
                    <p className="text-muted-foreground text-sm sm:text-base font-mono tracking-widest mb-4">
                      Hello, I am
                    </p>
                    <h1
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Alice <span className="text-accent">Dmello</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mt-5 font-light leading-relaxed">
                      IT Student · Software Developer · UI/Visual Design · Full Stack Web Development
                    </p>
                  </div>

                  {/* About description */}
                  <p className="text-muted-foreground text-base sm:text-lg leading-8 max-w-3xl">
                    I am an Information Technology undergraduate with project experience across full-stack web development, Python applications, machine learning, geospatial data analysis, and responsive interface design. I enjoy solving practical problems by combining software, data, and thoughtful user experiences.
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-accent" />
                    Bandra West, Mumbai
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4 flex-wrap pt-2">
                    <button
                      onClick={() => scrollTo("contact")}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
                    >
                      <Mail size={16} />
                      Get in touch
                    </button>
                    <button
                      onClick={() => scrollTo("projects")}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-accent/50 hover:bg-primary/5 transition-all"
                    >
                      View My Work
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-3 pt-2">
                    {[
                      { icon: Github, href: "https://github.com/AliceDmello", label: "GitHub" },
                      { icon: Linkedin, href: "https://linkedin.com/in/alicedmello21", label: "LinkedIn" },
                      { icon: Mail, href: "mailto:alicedmello21@gmail.com", label: "Email" },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-11 h-11 rounded-lg flex items-center justify-center border border-border bg-background/50 text-muted-foreground hover:text-accent hover:border-accent/50 transition-all"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Skills strip */}
                <div className="mt-12 pt-7 border-t border-border">
                  <p className="text-xs font-mono tracking-widest text-muted-foreground mb-4">
                    AREAS I WORK WITH
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "TypeScript",
                      "Python",
                      "Machine Learning",
                      "UI/UX Design",
                      "MongoDB",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full text-sm bg-background/60 border border-border text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="py-24 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader icon={GraduationCap} label="EDUCATION" title="Academic Background" />
            <div className="mt-12 space-y-6">
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="relative bg-card border border-border rounded-xl p-7 hover:border-accent/30 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-accent mt-1 text-sm font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mt-2">{edu.details}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                      <span className="text-sm text-muted-foreground font-mono">{edu.duration}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-accent text-xs font-mono border border-primary/20">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-24 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader icon={Code2} label="SELECTED PROJECTS" title="Selected Projects" />
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              {PROJECTS.map((proj, i) => (
                <div
                  key={i}
                  className={`relative bg-card border rounded-xl p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors group ${
                    proj.highlight ? "border-accent/30" : "border-border"
                  }`}
                >
                  {proj.highlight && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/15 text-accent border border-primary/20">
                      FEATURED
                    </span>
                  )}
                  <div>
                    <h3
                      className="text-base font-semibold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{proj.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-1 border-t border-border">
                    <a
                      href="https://github.com/AliceDmello"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={13} />
                      GitHub Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-24 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader icon={Zap} label="SKILLS" title="Design & Technical Skills" />

            {/* tab switcher */}
            <div className="mt-10 flex gap-2 flex-wrap">
              {Object.keys(SKILLS).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeSkillTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-8 bg-card border border-border rounded-xl p-6">
              <p className="text-xs font-mono text-muted-foreground mb-4 tracking-widest">{activeSkillTab.toUpperCase()}</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS[activeSkillTab as keyof typeof SKILLS].map((skill) => (
                  <span key={skill.name} className="text-sm px-3 py-2 rounded-lg bg-secondary border border-border text-foreground">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXTRACURRICULAR ── */}
        <section id="extra" className="py-24 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader icon={Star} label="CERTIFICATES & ACTIVITIES" title="Learning Beyond the Classroom" />

            <div className="mt-10 flex gap-2 flex-wrap">
              {Object.keys(EXTRAS).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveExtraTab(tab)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                    activeExtraTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {EXTRAS[activeExtraTab as keyof typeof EXTRAS].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors flex flex-col gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── RESUME ── */}
        <section className="py-16 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-card border border-border rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <FileText size={22} className="text-accent" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Download My Resume
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Resume PDF with education, projects, skills, certificates, and activities.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  <Download size={15} />
                  Download PDF
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded border border-border text-foreground text-sm hover:border-accent/40 transition-colors whitespace-nowrap"
                >
                  <ExternalLink size={15} />
                  View Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader icon={Mail} label="CONTACT" title="Let's Work Together" />

            <div className="mt-12 grid md:grid-cols-2 gap-10">
              {/* info */}
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I am interested in opportunities where I can apply my skills across software development, data and AI projects, and user-centred digital experiences while continuing to learn and build useful products.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "alicedmello21@gmail.com", href: "mailto:alicedmello21@gmail.com" },
                    { icon: Phone, label: "Phone", value: "9049976658", href: "tel:+919049976658" },
                    { icon: MapPin, label: "Location", value: "Bandra West, Mumbai", href: "#contact" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">{label}</p>
                        <p className="text-sm font-medium group-hover:text-accent transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {[
                    { icon: Github, href: "https://github.com/AliceDmello", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/alicedmello21", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:alicedmello21@gmail.com", label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors bg-card"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>

              {/* form */}
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-7 space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground tracking-widest">NAME</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground tracking-widest">EMAIL</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground tracking-widest">MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  {formSent ? (
                    <>Message sent!</>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
                {formSent && (
                  <p className="text-center text-xs text-emerald-400 font-mono">
                    I will get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-border py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground font-mono">
              © 2026 Alice Dmello — Personal Portfolio
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Mumbai, India
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  label,
  title,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-accent" />
        <span className="text-xs font-mono text-muted-foreground tracking-widest">{label}</span>
      </div>
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
    </div>
  );
}
