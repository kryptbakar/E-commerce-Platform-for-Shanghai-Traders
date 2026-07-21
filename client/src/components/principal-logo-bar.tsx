import { ArrowUpRight, BadgeCheck } from "lucide-react";

const principals = [
  {
    name: "GERON Card Clothing",
    category: "Carding technology",
    logo: "/partners/geron-logo.png",
    logoClass: "principal-logo-image--geron",
    website: "https://www.geron-card.com/en/",
  },
  {
    name: "JSM Jinqiao",
    category: "Rotor-spinning components",
    logo: "/partners/jsm-logo.jpg",
    logoClass: "principal-logo-image--jsm",
    website: "http://jqfangji.cn/en/about",
  },
  {
    name: "Nantong Rotex",
    category: "Metalworking machinery",
    logo: "/partners/rotex-logo.gif",
    logoClass: "principal-logo-image--rotex",
    website: "https://www.rotexchina.com/",
  },
  {
    name: "Jinhua Dumtech",
    category: "Industrial compressed air",
    logo: null,
    logoClass: "",
    website: null,
  },
];

export default function PrincipalLogoBar() {
  return (
    <section id="principal-logos" className="principal-logo-band" aria-labelledby="principal-logo-title">
      <div className="principal-logo-band__pattern" aria-hidden="true" />
      <div className="principal-logo-band__inner">
        <div className="principal-logo-band__heading">
          <div>
            <p className="principal-logo-band__kicker">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Sole-agent representation / Pakistan
            </p>
            <h2 id="principal-logo-title">
              Four global principals. One trusted name in Pakistan:
              <span> Shanghai Traders.</span>
            </h2>
          </div>
          <p>
            Direct factory coordination, specialist technology and accountable local support through one experienced team.
          </p>
        </div>

        <ul className="principal-logo-grid" aria-label="Manufacturers represented by Shanghai Traders in Pakistan">
          {principals.map((principal, index) => {
            const content = (
              <>
                <span className="principal-logo-card__number" aria-hidden="true">0{index + 1}</span>
                <span className="principal-logo-card__visual">
                  {principal.logo ? (
                    <img
                      src={principal.logo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={`principal-logo-image ${principal.logoClass}`}
                    />
                  ) : (
                    <span className="dumtech-wordmark" aria-hidden="true">
                      <strong>DUMTECH</strong>
                      <small>Jinhua / Compressed Air</small>
                    </span>
                  )}
                </span>
                <span className="principal-logo-card__meta">
                  <span>
                    <strong>{principal.name}</strong>
                    <small>{principal.category}</small>
                  </span>
                  {principal.website ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
                </span>
                <span className="principal-logo-card__status">
                  Represented in Pakistan by Shanghai Traders
                </span>
              </>
            );

            return (
              <li key={principal.name}>
                {principal.website ? (
                  <a
                    className="principal-logo-card"
                    href={principal.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${principal.name}, represented in Pakistan by Shanghai Traders. Visit official website (opens in a new tab).`}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="principal-logo-card">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
