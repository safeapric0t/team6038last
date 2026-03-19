import { useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

/* ── Team photo imports ── */
import imgMetin from "../../public/team_members/metin_men.jpg";
import imgOzgur from "../../public/team_members/ozgur_men.jpg";
import imgOguzcan from "../../public/team_members/oguzcan_men.jpg";
import imgCipil from "../../public/team_members/cipil_men.jpg";
import imgNecati from "../../public/team_members/necati_men.jpg";
import imgFurkan from "../../public/team_members/furkan_men.jpg";
import imgSaliha from "../../public/team_members/saliha_men.jpg";
import imgHamza from "../../public/team_members/hamza.jpg";
import imgYahya from "../../public/team_members/yahya_yaz.jpg";
import imgEfe from "../../public/team_members/efe_mek.jpg";
import imgSamet from "../../public/team_members/samet_mek.jpg";
import imgBurak from "../../public/team_members/burak_mek.jpg";
import imgAkin from "../../public/team_members/akin_mek.jpg";
import imgKayra from "../../public/team_members/kayra_mek.jpg";
import imgMina from "../../public/team_members/mina_pr.jpg";
import imgEcesu from "../../public/team_members/ecesu_pr.jpg";
import imgEsra from "../../public/team_members/esra_pr.jpg";
import imgSevde from "../../public/team_members/sevde_pr.jpg";
import imgKaan from "../../public/team_members/kaan_pr.jpg";
import imgZilan from "../../public/team_members/zilan_pr.jpg";
import imgZeynepG from "../../public/team_members/zeynep_g_pr.jpg";
import imgIsik from "../../public/team_members/isik_yaz.jpg";
import imgAlp from "../../public/team_members/alp_yaz.jpg";
import imgKagan from "../../public/team_members/kagan_yaz.jpg";
import imgKaanYaz from "../../public/team_members/kaan_yaz.jpeg";
import imgBartu from "../../public/team_members/bartu_mek.jpg";
import imgBora from "../../public/team_members/bora_mek.jpg";



/* ────────────────────────────────────────────
   Types
   ──────────────────────────────────────────── */
interface Member {
  name: string;
  role?: string;
  photo?: string;
}

interface TeamCategory {
  id: string;
  label: string;
  accent: string;
  members: Member[];
}

const TEAM_DATA: TeamCategory[] = [
  {
    id: "lead-mentors",
    label: "Lead Mentors",
    accent: "var(--neon-purple)",
    members: [
      { name: "Metin Kaya", role: "Head Mentor", photo: imgMetin },
      { name: "Özgür Şahin", role: "Head Mentor", photo: imgOzgur },
    ],
  },
  {
    id: "mentors",
    label: "Mentors",
    accent: "var(--neon-violet)",
    members: [
      { name: "Oğuzcan", role: "Alumni/Mentor", photo: imgOguzcan },
      { name: "Yunus", role: "Alumni/Mentor", photo: imgCipil },
      { name: "Saliha", role: "Alumni/Mentor", photo: imgSaliha },
      { name: "Alp Necati", role: "Mentor", photo: imgNecati },
      { name: "Furkan", role: "Mentor", photo: imgFurkan },
    ],
  },
  {
    id: "software",
    label: "Yazılım",
    accent: "var(--neon-cyan)",
    members: [
      { name: "Yahya", role: "Software Captain/Driver", photo: imgYahya },
      { name: "Hamza", role: "Software", photo: imgHamza },
      { name: "Işık", role: "Software", photo: imgIsik },
      { name: "Alp", role: "Software", photo: imgAlp },
      { name: "Kağan", role: "Software", photo: imgKagan },
      { name: "Kaan", role: "Software", photo: imgKaanYaz }
    ],
  },
  {
    id: "mechanic",
    label: "Mechanic",
    accent: "var(--neon-cyan)",
    members: [
      { name: "Efe", role: "Mechanic/Technician", photo: imgEfe },
      { name: "Samed", role: "Mechanic/Driver/Captain", photo: imgSamet },
      { name: "Burak", role: "Mechanic", photo: imgBurak },
      { name: "Akın", role: "Mechanic", photo: imgAkin },
      { name: "Kayra", role: "Mechanic", photo: imgKayra },
      { name: "Bartu", role: "Mechanic", photo: imgBartu },
      { name: "Bora", role: "Mechanic", photo: imgBora },
    ],
  },
  {
    id: "pr",
    label: "PR",
    accent: "var(--neon-pink)",
    members: [
      { name: "Mina", role: "PR", photo: imgMina },
      { name: "Ecesu", role: "PR", photo: imgEcesu },
      { name: "Esra", role: "PR", photo: imgEsra },
      { name: "Sevde", role: "PR", photo: imgSevde },
      { name: "Kaan", role: "PR", photo: imgKaan },
      { name: "Zilan", role: "PR", photo: imgZilan },
      { name: "Zeynep", role: "PR", photo: imgZeynepG },
    ],
  },
];

/* ────────────────────────────────────────────
   Animation Variants
   ──────────────────────────────────────────── */
const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const categoryBadgeVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

/* ────────────────────────────────────────────
   Holographic Member Card
   ──────────────────────────────────────────── */
function HoloCard({ member, accent }: { member: Member; accent: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -4, y: x * 4 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "900px",
      }}
      className="group relative"
    >
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-slate-900/90 via-slate-800/60 to-slate-900/90 backdrop-blur-xl"
        style={{
          boxShadow: isHovered
            ? `0 0 0 2px ${accent}50, 0 0 50px ${accent}30, 0 15px 40px rgba(0,0,0,0.6)`
            : "0 0 0 1px rgba(148,163,184,0.1), 0 4px 20px rgba(0,0,0,0.4)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* ── Holographic shimmer overlay ── */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(
              ${120 + tilt.y * 12}deg,
              transparent 15%,
              ${accent}25 35%,
              ${accent}35 50%,
              ${accent}25 65%,
              transparent 85%
            )`,
            mixBlendMode: "screen",
          }}
        />

        {/* ── Animated scan line ── */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-60"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(255,255,255,0.05) 3px, rgba(255,255,255,0.05) 4px)",
          }}
        />

        {/* ── Photo area ── */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-800/60">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            /* Placeholder avatar */
            <div className="flex h-full w-full items-center justify-center">
              <div
                className="relative flex h-20 w-20 items-center justify-center rounded-full md:h-24 md:w-24"
                style={{
                  background: `linear-gradient(135deg, ${accent}30, ${accent}10)`,
                  border: `1px solid ${accent}40`,
                }}
              >
                <svg
                  className="h-10 w-10 md:h-12 md:w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              {/* Decorative rings */}
              <div
                className="absolute h-28 w-28 rounded-full opacity-20 md:h-32 md:w-32"
                style={{ border: `1px solid ${accent}` }}
              />
              <div
                className="absolute h-36 w-36 rounded-full opacity-10 md:h-40 md:w-40"
                style={{ border: `1px solid ${accent}` }}
              />
            </div>
          )}

          {/* ── Bottom gradient fade ── */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
        </div>

        {/* ── Info panel ── */}
        <div className="relative px-4 pb-5 pt-3">
          {/* Accent top line */}
          <div
            className="absolute left-4 right-4 top-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}60, transparent)`,
            }}
          />

          <h3 className="section-title truncate text-sm font-semibold tracking-wide text-white md:text-base">
            {member.name}
          </h3>

          {member.role && (
            <p
              className="mt-1 truncate text-xs font-medium uppercase tracking-[0.15em] md:text-[0.7rem]"
              style={{ color: accent }}
            >
              {member.role}
            </p>
          )}

          {/* Small decorative dots */}
          <div className="mt-3 flex gap-1">
            {[0.7, 0.5, 0.3].map((op, i) => (
              <span
                key={i}
                className="block h-1 w-1 rounded-full"
                style={{ backgroundColor: accent, opacity: op }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Category Section
   ──────────────────────────────────────────── */
function CategorySection({ category }: { category: TeamCategory }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className="relative"
    >
      {/* ── Section header ── */}
      <motion.div
        variants={categoryBadgeVariants}
        className="mb-8 flex items-center gap-4"
      >
        {/* Glowing accent bar */}
        <span
          className="block h-8 w-1 rounded-full"
          style={{
            backgroundColor: category.accent,
            boxShadow: `0 0 12px ${category.accent}60`,
          }}
        />
        <div>
          <h2 className="section-title text-2xl font-bold uppercase tracking-wider text-white md:text-3xl">
            {category.label}
          </h2>
          <div
            className="mt-1 h-px w-24"
            style={{
              background: `linear-gradient(90deg, ${category.accent}, transparent)`,
            }}
          />
        </div>
        {/* Member count badge */}
        <span
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
          style={{
            backgroundColor: `${category.accent}18`,
            color: category.accent,
            border: `1px solid ${category.accent}30`,
          }}
        >
          {category.members.length}
        </span>
      </motion.div>

      {/* ── Member cards grid ── */}
      <motion.div
        variants={sectionVariants}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {category.members.map((member, idx) => (
          <HoloCard
            key={`${category.id}-${idx}`}
            member={member}
            accent={category.accent}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

/* ────────────────────────────────────────────
   Filter Pills
   ──────────────────────────────────────────── */
function FilterPills({
  categories,
  active,
  onSelect,
}: {
  categories: TeamCategory[];
  active: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${active === null
          ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.15)]"
          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
          }`}
      >
        Tümü
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className="rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          style={
            active === cat.id
              ? {
                borderColor: `${cat.accent}60`,
                backgroundColor: `${cat.accent}15`,
                color: cat.accent,
                boxShadow: `0 0 16px ${cat.accent}18`,
              }
              : {
                borderColor: "rgba(255,255,255,0.1)",
                backgroundColor: "rgba(255,255,255,0.03)",
                color: "#94a3b8",
              }
          }
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────
   Stats Bar
   ──────────────────────────────────────────── */
function StatItem({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="section-title text-3xl font-bold md:text-4xl"
        style={{ color: accent }}
      >
        {value}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
        {label}
      </span>
    </div>
  );
}

function StatsBar() {
  const totalMembers = TEAM_DATA.reduce((acc, cat) => acc + cat.members.length, 0);
  const totalDepts = TEAM_DATA.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="mx-auto mb-10 flex max-w-sm items-center justify-center gap-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
    >
      <div className="flex flex-1 items-center justify-center py-5">
        <StatItem value={String(totalMembers)} label="Members" accent="var(--neon-cyan)" />
      </div>
      <div className="h-10 w-px bg-white/[0.07]" />
      <div className="flex flex-1 items-center justify-center py-5">
        <StatItem value={String(totalDepts)} label="Departments" accent="var(--neon-purple)" />
      </div>
      <div className="h-10 w-px bg-white/[0.07]" />
      <div className="flex flex-1 items-center justify-center py-5">
        <StatItem value="2016" label="Founded" accent="var(--neon-pink)" />
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Main TeamPage
   ──────────────────────────────────────────── */
export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredCategories = activeFilter
    ? TEAM_DATA.filter((c) => c.id === activeFilter)
    : TEAM_DATA;

  return (
    <section className="relative min-h-screen overflow-hidden pb-24 pt-28">
      {/* ── Background effects ── */}
      <div className="museum-grid absolute inset-0 opacity-20" />
      <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />
      <div className="absolute right-1/4 top-60 h-[400px] w-[400px] rounded-full bg-cyan-400/8 blur-[160px]" />
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/6 blur-[140px]" />

      {/* ── Decorative vertical lines ── */}
      <div className="absolute inset-y-0 left-[10%] w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute inset-y-0 right-[10%] w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-center"
        >
          <p className="section-title text-xs font-semibold uppercase tracking-[0.5em] text-cyan-300/80">
            Exhibition Hall
          </p>
          <h1 className="section-title mt-3 text-5xl font-bold tracking-wide md:text-6xl lg:text-7xl">
            <span className="text-white">Our </span><span className="gradient-text">Team</span>
          </h1>
          <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
            Our team members. We are a family.
          </p>
        </motion.div>

        {/* ── Stats bar ── */}
        <StatsBar />

        {/* ── Filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <FilterPills
            categories={TEAM_DATA}
            active={activeFilter}
            onSelect={setActiveFilter}
          />
        </motion.div>

        {/* ── Category sections ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter ?? "all"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            {filteredCategories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom decorative element ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="h-16 w-px bg-gradient-to-b from-cyan-400/30 to-transparent" />
          <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400/40" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            ITOBOT — Team 6038
          </p>
        </motion.div>
      </div>
    </section>
  );
}
