import { ArrowUpRight, BadgeCheck, Check, Factory, Gauge, Layers3, Wind } from "lucide-react";

const principals = [
  {
    name: "GERON",
    fullName: "GERON Card Clothing",
    discipline: "Carding technology",
    heritage: "Established 1965",
    image: "/images/card-clothing-wire.webp",
    icon: Layers3,
    summary: "Complete carding components backed by decades of dedicated research and manufacturing expertise.",
    products: ["Metallic card clothing", "Flat tops & stationary flats", "Opening rollers & combs"],
    link: "https://www.geron-card.com/en/company/",
    tone: "principal-card--lilac",
  },
  {
    name: "JSM",
    fullName: "Jinqiao Spinning Machinery",
    discipline: "Rotor-spinning technology",
    heritage: "Established 1996",
    image: "/images/jsm-rotor-spinning.webp",
    icon: Gauge,
    summary: "High-speed process parts engineered for reliable open-end and rotor-spinning performance.",
    products: ["Rotors & rotor bearings", "Opening rollers", "Clothing rings & transmission parts"],
    link: "https://www.jqfangji.cn/en/about.html",
    tone: "principal-card--blue",
  },
  {
    name: "ROTEX",
    fullName: "Nantong Rotex",
    discipline: "Metalworking machinery",
    heritage: "Established 1992",
    image: "/images/rotex-metalworking.webp",
    icon: Factory,
    summary: "Production machinery for precision sheet-metal forming and general metalworking operations.",
    products: ["Press brakes, shears & rolling", "Lathes & milling machines", "Drilling & grinding systems"],
    link: "https://www.rotexchina.com/",
    tone: "principal-card--navy",
  },
  {
    name: "DUMTECH",
    fullName: "Jinhua Dumtech Co., Ltd.",
    discipline: "Industrial compressed air",
    heritage: "Engineered utility systems",
    image: "/images/dumtech-compressor.webp",
    icon: Wind,
    summary: "Efficient compressed-air packages for continuous industrial production and mill utilities.",
    products: ["Two-stage screw compressors", "Dryers & air treatment", "Compressor parts & systems"],
    tone: "principal-card--silver",
  },
];

export default function GeronPartner() {
  const inquire = (principal: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      const message = document.getElementById("message") as HTMLTextAreaElement | null;
      if (message && !message.value) {
        message.value = `I would like to discuss ${principal} products and support in Pakistan.`;
        message.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, 650);
  };

  return (
    <section id="principals" className="principals-section overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="principals-intro mb-14 grid items-end gap-8 lg:grid-cols-[1fr_.78fr]">
          <div>
            <p className="section-kicker">Our authorized principals</p>
            <h2 className="section-title max-w-4xl">Four specialist manufacturers. One accountable partner in Pakistan.</h2>
          </div>
          <div className="principal-credential">
            <BadgeCheck className="h-6 w-6" />
            <div><strong>Sole-agent representation</strong><span>Direct manufacturer access, coordinated locally by Shanghai Traders.</span></div>
          </div>
        </div>

        <div className="principals-grid">
          {principals.map(({ name, fullName, discipline, heritage, image, icon: Icon, summary, products, link, tone }, index) => (
            <article key={name} className={`principal-card ${tone}`}>
              <div className="principal-media">
                <img src={image} alt={`${fullName} ${discipline}`} loading={index < 2 ? "eager" : "lazy"} decoding="async" />
                <div className="principal-media-shade" />
                <span className="principal-number">0{index + 1}</span>
                <span className="principal-status"><BadgeCheck className="h-4 w-4" /> Sole agent in Pakistan</span>
              </div>
              <div className="principal-body">
                <div className="principal-identity">
                  <span className="principal-icon"><Icon className="h-5 w-5" /></span>
                  <div><span>{discipline}</span><strong>{name}</strong></div>
                </div>
                <h3>{fullName}</h3>
                <p>{summary}</p>
                <div className="principal-heritage">{heritage}</div>
                <ul>
                  {products.map((product) => <li key={product}><Check className="h-4 w-4" />{product}</li>)}
                </ul>
                <div className="principal-actions">
                  <button onClick={() => inquire(fullName)}>Discuss solutions</button>
                  {link && <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${fullName} official website`}>Official website <ArrowUpRight className="h-4 w-4" /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="principals-assurance">
          <span>Shanghai Traders</span>
          <p>One local commercial and technical interface across carding, rotor spinning, metalworking and compressed-air systems.</p>
          <button onClick={() => inquire("our principal portfolio")}>Start a project <ArrowUpRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}