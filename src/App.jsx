import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  homeSections,
  navigation,
  pageContent,
  photography,
  seoPages,
  siteMeta
} from "./data/siteData";

function useTypingEffect(text) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const step = () => {
      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        return;
      }

      timeoutId = window.setTimeout(step, 36);
    };

    setDisplayedText("");
    timeoutId = window.setTimeout(step, 320);

    return () => window.clearTimeout(timeoutId);
  }, [text]);

  return displayedText;
}

function useRevealOnScroll(pathname) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    elements.forEach((element) => {
      element.classList.remove("is-visible");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);
}

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useRevealOnScroll(location.pathname);

  return null;
}

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = seoPages[location.pathname] ?? seoPages["/"];
    const canonicalUrl = `${siteMeta.siteUrl}${location.pathname}`;

    document.title = seo.title;

    const upsertMeta = (name, content, attribute = "name") => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    upsertMeta("description", seo.description);
    upsertMeta("robots", "index, follow, max-image-preview:large");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:title", seo.title, "property");
    upsertMeta("og:description", seo.description, "property");
    upsertMeta("og:url", canonicalUrl, "property");
    upsertMeta("og:site_name", siteMeta.name, "property");
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", seo.title);
    upsertMeta("twitter:description", seo.description);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <SEOManager />
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/personal-story-blogs"
            element={<EditorialPage content={pageContent.personal} />}
          />
          <Route
            path="/recent-stories"
            element={<EditorialPage content={pageContent.recent} />}
          />
          <Route
            path="/published-books"
            element={<EditorialPage content={pageContent.books} />}
          />
          <Route
            path="/investigations"
            element={<EditorialPage content={pageContent.investigations} />}
          />
          <Route
            path="/video-stories"
            element={<EditorialPage content={pageContent.video} />}
          />
          <Route
            path="/awards-and-fellowships"
            element={<EditorialPage content={pageContent.awards} />}
          />
          <Route
            path="/climate-reporting"
            element={<EditorialPage content={pageContent.climate} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Shell>
    </>
  );
}

function Shell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className={`site-shell${menuOpen ? " menu-open" : ""}`}>
      <header className="site-header">
        <Link className="brand" to="/">
          <span className="brand-name">{siteMeta.name}</span>
          <span className="brand-role">{siteMeta.role}</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav className="site-nav desktop-nav" aria-label="Primary navigation">
          <div className="site-nav-inner">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="nav-socials">
              {siteMeta.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="mobile-nav-panel" aria-label="Mobile navigation">
          <div className="mobile-nav-inner">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) => `nav-link mobile-nav-link${isActive ? " active" : ""}`}
                to={item.path}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="nav-socials mobile-socials">
              {siteMeta.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <main>{children}</main>

      <footer className="site-footer" data-reveal="up">
        <div>
          <p className="footer-kicker">About</p>
          <h2>{siteMeta.name}</h2>
          <p>{siteMeta.tagline}</p>
        </div>
        <div className="footer-links">
          {siteMeta.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  const typedText = useTypingEffect(siteMeta.statement);

  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy" data-reveal="up">
            <p className="section-kicker">Journalist. Reporter. Storyteller.</p>
            <h1>{siteMeta.name}</h1>
            <p className="hero-role">{siteMeta.intro}</p>
            <p className="hero-statement">
              {typedText}
              <span className="caret" aria-hidden="true" />
            </p>
            <Link className="hero-link" to={homeSections.personalStory.path}>
              Read More
            </Link>
          </div>

          <div className="hero-meta" data-reveal="left">
            <img src={photography.hero} alt="Baktygul portrait" />
          </div>
        </div>
      </section>

      <section className="home-story">
        <div className="home-story-copy" data-reveal="up">
          <p className="section-kicker">Personal Story & Blogs</p>
          <h2>{homeSections.personalStory.title}</h2>
          <p>{homeSections.personalStory.text}</p>
          <Link className="text-link" to={homeSections.personalStory.path}>
            Read More
          </Link>
        </div>
        <div className="home-story-media" data-reveal="right">
          <img src={photography.cover} alt="Baktygul reporting in the field" />
        </div>
      </section>

      <section className="home-gallery">
        <div className="gallery-lead" data-reveal="up">
          <p className="section-kicker">Photo Gallery</p>
          <h2>{homeSections.galleryTitle}</h2>
        </div>
        <div className="gallery-grid">
          {photography.gallery.map((image, index) => (
            <figure
              key={image}
              className="gallery-card"
              data-reveal="up"
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <img src={image} alt={`Event gallery ${index + 1}`} />
            </figure>
          ))}
        </div>
      </section>

      <section className="home-sections">
        <div className="home-index-copy" data-reveal="up">
          <p className="section-kicker">Explore My Stories</p>
          <h2>Original sections, rebuilt with a cleaner reading flow.</h2>
        </div>
        <div className="index-list">
          {homeSections.sectionIndex.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className="index-row"
              data-reveal="up"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="index-row-title">{item.title}</span>
              <span className="index-row-summary">{item.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-video">
        <div className="gallery-lead" data-reveal="up">
          <p className="section-kicker">Video</p>
          <h2>{homeSections.featuredVideo.title}</h2>
        </div>
        <div className="video-player-wrap" data-reveal="up">
          <iframe
            src={homeSections.featuredVideo.embed}
            title={homeSections.featuredVideo.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}

function EditorialPage({ content }) {
  const isLongform = content.layout === "longform";

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid">
          <div className="page-hero-copy" data-reveal="up">
            <p className="section-kicker">{content.kicker}</p>
            <h1>{content.title}</h1>
            <p>{content.lead}</p>
          </div>
          <div className="page-hero-media" data-reveal="left">
            <img src={content.image} alt={content.imageAlt} />
          </div>
        </div>
      </section>

      <section className={`page-sections${isLongform ? " page-sections-longform" : ""}`}>
        {content.sections.map((section, index) => (
          <article key={section.heading} className="page-section-block" data-reveal="up">
            <span className="section-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </div>
          </article>
        ))}
      </section>

      {content.entries ? (
        <section className="entry-list" data-reveal="up">
          <p className="section-kicker">From The Original Section</p>
          <div className="entry-list-inner">
            {content.entries.map((entry, index) =>
              typeof entry === "string" ? (
                <div key={entry} className="entry-row">
                  <span className="entry-number">{String(index + 1).padStart(2, "0")}</span>
                  <p>{entry}</p>
                </div>
              ) : (
                <div key={entry.title} className="entry-row">
                  <span className="entry-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    {entry.href ? (
                      <a href={entry.href} target="_blank" rel="noreferrer">
                        <h3>{entry.title}</h3>
                      </a>
                    ) : (
                      <h3>{entry.title}</h3>
                    )}
                    <p className="entry-meta">{entry.source}</p>
                    <p>{entry.note}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      ) : null}

      {content.videos ? (
        <section className="video-story-grid">
          {content.videos.map((video, index) => (
            <article
              key={video.title}
              className="video-story"
              data-reveal="up"
            >
              <div className="video-player-wrap">
                {video.stream ? (
                  <video controls preload="metadata" poster={video.poster}>
                    <source src={video.stream} type="video/mp4" />
                  </video>
                ) : (
                  <div className="video-fallback">
                    <p>No direct player available for this story.</p>
                  </div>
                )}
              </div>
              <div className="video-story-copy">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <a href={video.href} target="_blank" rel="noreferrer">
                  Open original story
                </a>
              </div>
            </article>
          ))}
        </section>
      ) : null}
    </>
  );
}

function ContactPage() {
  const content = pageContent.contact;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid contact-hero-grid">
          <div className="page-hero-copy" data-reveal="up">
            <p className="section-kicker">{content.kicker}</p>
            <h1>{content.title}</h1>
            <p>{content.lead}</p>
          </div>
          <div className="page-hero-media" data-reveal="left">
            <img src={content.image} alt={content.imageAlt} />
          </div>
        </div>
      </section>

      <section className="contact-layout">
        <form className="contact-form" data-reveal="up">
          <h2>Get in touch</h2>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Last name
            <input type="text" placeholder="Your last name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email address" />
          </label>
          <label>
            Message
            <textarea rows="6" placeholder="Tell me about the story, commission, or inquiry" />
          </label>
          <button type="button">Send message</button>
        </form>

        <div className="contact-side" data-reveal="left">
          <div className="contact-note">
            <p className="section-kicker">Newsletter</p>
            <h3>Subscribe to my blog</h3>
            <label>
              Enter your email address
              <input type="email" placeholder="Your email for updates" />
            </label>
            <button type="button">Subscribe</button>
          </div>
          <div className="contact-links">
            <p className="section-kicker">Follow</p>
            {siteMeta.socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
