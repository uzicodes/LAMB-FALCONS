import React, { useState, useEffect, CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#000000",
    color: "#ffffff",
    overflowX: "hidden",
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 50,
    backgroundColor: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
    width: "100%",
  },
  logoGroup: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flex: "0 0 auto",
  },
  logoCircle: {
    width: "48px",
    height: "48px",
    background:
      "linear-gradient(135deg, #2563eb, #1d4ed8)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
    background: "linear-gradient(to right, #3b82f6, #1d4ed8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontFamily: "'Poetsen One', cursive",
  },
  navMenuGroup: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    flex: "0 0 auto",
  },
  navLink: {
    color: "rgba(255,255,255,0.8)",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  navButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "rgba(255,255,255,0.8)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  registerBtn: {
    background:
      "linear-gradient(to right, #2563eb, #1d4ed8)",
    color: "white",
    border: "none",
    padding: "8px 24px",
    borderRadius: "25px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  hero: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  heroSlide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 1s ease",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  heroContent: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    maxWidth: "800px",
    padding: "0 20px",
  },
  heroSubtitle: {
    marginBottom: "24px",
    opacity: 0.8,
    color: "#3b82f6",
    fontWeight: 600,
    letterSpacing: "2px",
  },
  heroTitle: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "24px",
    background:
      "linear-gradient(to right, #ffffff, #d1d5db)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroDescription: {
    fontSize: "1.25rem",
    marginBottom: "32px",
    color: "rgba(255,255,255,0.8)",
    maxWidth: "600px",
    margin: "0 auto 32px",
  },
  heroButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background:
      "linear-gradient(to right, #2563eb, #1d4ed8)",
    color: "white",
    border: "none",
    padding: "16px 32px",
    borderRadius: "25px",
    fontSize: "1.125rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  secondaryBtn: {
    border: "2px solid rgba(255,255,255,0.3)",
    backgroundColor: "transparent",
    color: "white",
    padding: "16px 32px",
    borderRadius: "25px",
    fontSize: "1.125rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(4px)",
  },
  section: {
    padding: "80px 20px",
  },
  statsSection: {
    background:
      "linear-gradient(to right, rgba(29, 78, 216, 0.2), #000000)",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  statItem: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "3rem",
    fontWeight: "bold",
    background:
      "linear-gradient(to right, #3b82f6, #1d4ed8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "8px",
  },
  statLabel: {
    color: "rgba(255,255,255,0.6)",
    fontWeight: 500,
  },
  featuresSection: {
    background:
      "linear-gradient(to bottom, #000000, #111827)",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "24px",
  },
  sectionSubtitle: {
    fontSize: "1.25rem",
    color: "rgba(255,255,255,0.7)",
    maxWidth: "600px",
    margin: "0 auto 64px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  featureCard: {
    padding: "32px",
    backgroundColor: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(4px)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  featureIcon: {
    width: "64px",
    height: "64px",
    background:
      "linear-gradient(135deg, #2563eb, #1d4ed8)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
    fontSize: "32px",
  },
  featureTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  featureDescription: {
    color: "rgba(255,255,255,0.7)",
    marginBottom: "24px",
    lineHeight: 1.6,
  },
  newsSection: {
    backgroundColor: "#000000",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  newsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "48px",
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
  },
  newsItem: {
    cursor: "pointer",
  },
  newsImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "16px",
    marginBottom: "16px",
  },
  newsDate: {
    color: "#3b82f6",
    fontSize: "0.875rem",
    fontWeight: 600,
    marginBottom: "8px",
  },
  newsTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "16px",
    transition: "color 0.3s ease",
  },
  ctaSection: {
    background:
      "linear-gradient(to right, #1e3a8a, #1d4ed8)",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#000000",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    padding: "48px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop",
      title: "RISE AS ONE",
      subtitle: "LAMB FALCONS",
      description: "Where champions are forged and legends are born",
    },
    {
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop",
      title: "STRENGTH IN UNITY",
      subtitle: "LAMB FALCONS",
      description: "Together we soar, together we conquer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1920&h=1080&fit=crop",
      title: "LEGACY OF EXCELLENCE",
      subtitle: "LAMB FALCONS",
      description: "Building tomorrow's champions today",
    },
  ];

  const stats = [
    { number: "150+", label: "Active Members" },
    { number: "25", label: "Championships" },
    { number: "2019", label: "Established" },
    { number: "5", label: "Teams" },
  ];

  const newsItems = [
    {
      title: "LAMB FALCONS Secure Victory in Regional Championship",
      date: "May 25, 2025",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    },
    {
      title: "New Training Facility Opens Next Month",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    },
    {
      title: "Youth Academy Registration Now Open",
      date: "May 20, 2025",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=250&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNavLinkHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hover: boolean) => {
    const target = e.currentTarget;
    target.style.color = hover ? "#3b82f6" : "rgba(255,255,255,0.8)";
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, hover: boolean) => {
    const target = e.currentTarget;
    if (hover) {
      target.style.color = "#3b82f6";
      target.style.transform = "scale(1.05)";
    } else {
      target.style.color = "rgba(255,255,255,0.8)";
      target.style.transform = "scale(1)";
    }
  };

  const handleRegisterHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, hover: boolean) => {
    const target = e.currentTarget;
    if (hover) {
      target.style.transform = "scale(1.05)";
    } else {
      target.style.transform = "scale(1)";
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          {/* Logo group on extreme left */}
          <div style={styles.logoGroup}>
            <div>
              <img 
                src="/falcons_logo.png" 
                alt="LAMB FALCONS Logo" 
                style={{ width: '55px', height: '55px', objectFit: 'contain' }} 
              />
            </div>
            <div style={styles.logoText}>LAMB FALCONS</div>
          </div>

          {/* Menu group on extreme right */}
          <div style={styles.navMenuGroup}>
            <a
              href="#about"
              style={styles.navLink}
              onMouseEnter={(e) => handleNavLinkHover(e, true)}
              onMouseLeave={(e) => handleNavLinkHover(e, false)}
            >
              About Us
            </a>
            <a
              href="#members"
              style={styles.navLink}
              onMouseEnter={(e) => handleNavLinkHover(e, true)}
              onMouseLeave={(e) => handleNavLinkHover(e, false)}
            >
              Members
            </a>
            <a
              href="#jerseys"
              style={styles.navLink}
              onMouseEnter={(e) => handleNavLinkHover(e, true)}
              onMouseLeave={(e) => handleNavLinkHover(e, false)}
            >
              Jerseys
            </a>
            <button
              style={styles.navButton}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              Login
            </button>
            <button
              style={styles.registerBtn}
              onMouseEnter={(e) => handleRegisterHover(e, true)}
              onMouseLeave={(e) => handleRegisterHover(e, false)}
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              ...styles.heroSlide,
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0,
            }}
          >
            <div style={styles.heroOverlay} />
          </div>
        ))}

        <div style={styles.heroContent}>
          <div style={styles.heroSubtitle}>{heroSlides[currentSlide]?.subtitle}</div>
          <h1 style={styles.heroTitle}>{heroSlides[currentSlide]?.title}</h1>
          <p style={styles.heroDescription}>{heroSlides[currentSlide]?.description}</p>
          <div style={styles.heroButtons}>
            <button style={styles.primaryBtn}>Join The Club →</button>
            <button style={styles.secondaryBtn}>▶ Watch Highlights</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ ...styles.section, ...styles.statsSection }}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statItem}>
            <div style={styles.statNumber}>{stat.number}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section style={{ ...styles.section, ...styles.featuresSection }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={styles.sectionTitle}>Why Choose LAMB FALCONS</h2>
          <p style={styles.sectionSubtitle}>
            Experience excellence in every aspect of club membership and athletic development
          </p>

          <div style={styles.featuresGrid}>
            <div
              style={styles.featureCard}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "rgba(59, 130, 246, 0.5)";
                target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "rgba(255,255,255,0.1)";
                target.style.transform = "scale(1)";
              }}
            >
              <div style={styles.featureIcon}>🏆</div>
              <h3 style={styles.featureTitle}>Championship Legacy</h3>
              <p style={styles.featureDescription}>
                Join a club with a proven track record of success and a commitment to excellence in
                every competition.
              </p>
              <div style={{ color: "#3b82f6", fontWeight: 600 }}>Learn More →</div>
            </div>

            <div
              style={styles.featureCard}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "rgba(59, 130, 246, 0.5)";
                target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "rgba(255,255,255,0.1)";
                target.style.transform = "scale(1)";
              }}
            >
              <div style={styles.featureIcon}>👥</div>
              <h3 style={styles.featureTitle}>Strong Community</h3>
              <p style={styles.featureDescription}>
                Be part of a tight-knit community where lifelong friendships are formed and everyone
                supports each other.
              </p>
              <div style={{ color: "#3b82f6", fontWeight: 600 }}>Join Now →</div>
            </div>

            <div
              style={styles.featureCard}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "rgba(59, 130, 246, 0.5)";
                target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.borderColor = "rgba(255,255,255,0.1)";
                target.style.transform = "scale(1)";
              }}
            >
              <div style={styles.featureIcon}>⭐</div>
              <h3 style={styles.featureTitle}>Elite Training</h3>
              <p style={styles.featureDescription}>
                Access world-class training facilities and expert coaching to elevate your performance
                to new heights.
              </p>
              <div style={{ color: "#3b82f6", fontWeight: 600 }}>Explore →</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section style={{ ...styles.section, ...styles.newsSection }}>
        <div style={styles.newsHeader}>
          <h2 style={{ ...styles.sectionTitle, fontSize: "2.5rem", marginBottom: 0 }}>Latest News</h2>
          <button
            style={{
              color: "#3b82f6",
              fontWeight: 600,
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            View All →
          </button>
        </div>

        <div style={styles.newsGrid}>
          {newsItems.map((item, index) => (
            <article key={index} style={styles.newsItem}>
              <img src={item.image} alt={item.title} style={styles.newsImage} />
              <div style={styles.newsDate}>{item.date}</div>
              <h3 style={styles.newsTitle}>{item.title}</h3>
              <div style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>Read More →</div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ ...styles.section, ...styles.ctaSection }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ ...styles.sectionTitle, fontSize: "3.5rem", marginBottom: "24px" }}>Ready to Roar?</h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "32px", color: "rgba(255,255,255,0.9)" }}>
            Join the family & become part of something extraordinary !
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "#1e3a8a",
              border: "none",
              padding: "16px 48px",
              borderRadius: "25px",
              fontSize: "1.125rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = "#f3f4f6";
              target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = "white";
              target.style.transform = "scale(1)";
            }}
          >
            Become a Falcon Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.logoGroup}>
          <div>
            <img 
              src="/falcons_logo.png" 
              alt="LAMB FALCONS Logo" 
              style={{ width: '55px', height: '55px', objectFit: 'contain' }} 
            />
          </div>
          <div style={{ ...styles.logoText, fontSize: "20px" }}>LAMB FALCONS</div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)" }}>
          <div>© 2025 LAMB FALCONS.</div> 
          <br></br>
          <div>All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
