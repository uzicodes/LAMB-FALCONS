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
    backgroundColor: "#032f3c",
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
    fontSize: "34px",
    fontWeight: "",
    color: "white",
    fontFamily: "'Lilita One', cursive",
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
    fontFamily: "'Merriweather', serif",
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
    fontFamily: "'Cinzel', serif",
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
    fontFamily: "'Cinzel', serif",
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
  ctaTitle: {
    fontSize: "3.5rem",
    marginBottom: "24px",
    fontFamily: "'Cinzel', serif",
    fontWeight: "bold",
    color: "white",
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
  card: {
    display: "flex",
    height: "70px",
    width: "350px",
    marginLeft: "180px",
  },
  socialLink: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    color: "whitesmoke",
    fontSize: "24px",
    textDecoration: "none",
    transition: "0.25s",
    borderRadius: "50px",
  },
  socialSvg: {
    position: "absolute",
    display: "flex",
    width: "60%",
    height: "100%",
    fontSize: "24px",
    fontWeight: 700,
    opacity: 1,
    transition: "opacity 0.25s",
    zIndex: 2,
    padding: "0.25rem",
    cursor: "pointer",
    transform: "scale(1)",
  },
};

// Add global styles for animations
const globalStyles = `
  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }
    60% {
      transform: scale(0.8);
    }
    80% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  .social-link1:hover {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    animation: bounce_613 0.4s linear;
  }

  .social-link2:hover {
    background-color: #242c34;
    animation: bounce_613 0.4s linear;
  }

  .social-link3:hover {
    background-color: #5865f2;
    animation: bounce_613 0.4s linear;
  }

  .social-link4:hover {
    background-color: #25D366;
    animation: bounce_613 0.4s linear;
  }

  .social-link5:hover {
    background-color: #ff8000;
    animation: bounce_613 0.4s linear;
  }
`;

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
      title: "WAR FOR THE BADGE",
      description: "Together we soar, together we conquer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1920&h=1080&fit=crop",
      title: "LEGACY OF EXCELLENCE",
      description: "Building tomorrow's champions today",
    },
  ];

  const stats = [
    { number: "30+", label: "Active Members" },
    { number: "25", label: "Championships" },
    { number: "2020", label: "Established" },
    
  ];

  const newsItems = [
    {
      title: "Drops the Second Kit ft. Designex",
      date: "May 25, 2025",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    },
    {
      title: "Training Facility Opens",
      date: "May 22, 2025",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    },
    {
      title: "Joins a Jersey partner Designex",
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
      <style>{globalStyles}</style>
      {/* Load Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
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
            <div style={{ ...styles.logoText, fontSize: "25px", marginRight: "20px" }}>LAMB FALCONS</div>
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
            <button className="button">
              <span>Log In</span>
            </button>
            <button className="button">
              <span>Register</span>
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
            <div className="btn-conteiner">
              <a className="btn-content">
                <span>Join The Club</span>
                <div className="icon-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                    <g fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                      <circle id="arrow-icon-one" cx="16" cy="16" r="7"></circle>
                      <circle id="arrow-icon-two" cx="16" cy="16" r="7"></circle>
                      <circle id="arrow-icon-three" cx="16" cy="16" r="7"></circle>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
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
          <h2 style={styles.sectionTitle}>Why Choose LAMB FALCONS ?</h2>
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
              <div style={{ color: "#3b82f6", fontWeight: 600 }}></div>
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
                Be part of a tight-knit community where lifelong friendships are formed & everyone
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
                Access world-class training facilities to elevate your performance
                to new heights.
              </p>
              <div style={{ color: "#3b82f6", fontWeight: 600 }}></div>
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
          <h2 style={styles.ctaTitle}>Ready to Roar?</h2>
          <p style={{ fontSize: "1.15rem", marginBottom: "32px", color: "rgba(255,255,255,0.9)" }}>
            Join the family & be part of something extraordinary !
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
          <div style={{ ...styles.logoText, fontSize: "25px" }}>LAMB FALCONS</div>
          <div style={styles.card}>
            <a href="#" style={{...styles.socialLink, ...styles.socialLink1}} className="social-link1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" style={{...styles.socialLink, ...styles.socialLink2}} className="social-link2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://discord.gg/R93pEB6G" style={{...styles.socialLink, ...styles.socialLink3}} className="social-link3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://wa.me/8801762791500" style={{...styles.socialLink, ...styles.socialLink4}} className="social-link4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#" style={{...styles.socialLink, ...styles.socialLink5}} className="social-link5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
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