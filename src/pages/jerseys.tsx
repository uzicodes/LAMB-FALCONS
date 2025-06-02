import React, { useState, CSSProperties } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Product data (dummy data)
const jerseyProducts = [
  {
    id: 1,
    name: 'FALCONS HOME JERSEY',
    price: '350 - 600',
    image: '/falcons_home.png',
    description: 'Official Jersey for the 2021/22 season',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    name: 'FALCONS AWAY JERSEY',
    price: '400 - 700',
    image: '/falcons_away.png',
    description: 'Official Jersey for the 2023/24 season',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    name: 'EXODUS HOME JERSEY',
    price: '350 - 600',
    image: '/exodus_home.png',
    description: 'Limited Edition Collaboration with Exodus',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    name: 'EXODUS AWAY JERSEY',
    price: '350 - 600',
    image: '/exodus_away.png',
    description: 'Limited Edition Collaboration with Exodus',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    paddingTop: '100px', // Space for navbar
    paddingBottom: '50px',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    backgroundColor: '#032f3c',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
    width: '100%',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: '0 0 auto',
  },
  logoText: {
    fontSize: '25px',
    color: 'white',
    fontFamily: "'Lilita One', cursive",
  },
  navMenuGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    flex: '0 0 auto',
  },
  navLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    fontFamily: "'Merriweather', serif",
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '42px',
    fontWeight: 'bold',
    fontFamily: "'Cinzel', serif",
    color: '#f0846d',
  },
  productsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '20px',
    // Remove overflowX: 'auto' to eliminate the scrollbar
  },
  productCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)',
    width: 'calc(25% - 15px)', // Make each card take up exactly 25% of space minus gap
    flex: '1 1 0', // Allow cards to grow and shrink as needed
  },
  productCardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  },
  productImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  productInfo: {
    padding: '20px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontFamily: "'PT Serif', serif",
    textAlign: 'center',
    color: '#e8df2a',
  },
  productPrice: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: '15px',
    textAlign: 'center',
  },
  productDescription: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '15px',
    textAlign: 'center',
  },
  sizeContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
    justifyContent: 'center',
  },
  sizeButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    border: '1px solid rgba(255,255,255,0.3)',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  sizeButtonSelected: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  orderButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  orderButtonHover: {
    backgroundColor: '#2563eb',
  },
  sizeChartSection: {
    marginTop: '60px',
    padding: '40px 20px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '15px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '38px',
    fontWeight: 'bold',
    marginBottom: '40px',
    fontFamily: "'Cinzel', serif",
    color: '#f0846d',
  },
  chartsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  chartImage: {
    width: 'calc(33.33% - 14px)',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    objectFit: 'cover',
  },
  noteSection: {
    textAlign: 'center',
    margin: '40px auto',
    padding: '20px',
    maxWidth: '800px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  noteText: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.9)',
    lineHeight: '1.6',
  },
};

const Jerseys = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const handleOrder = (productId: number) => {
    // Order logic would go here
    console.log(`Ordering product ${productId} with size ${selectedSizes[productId] || 'not selected'}`);
  };

  return (
    <div style={styles.container}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navContent}>
          <div style={styles.logoGroup}>
            <img 
              src="/falcons_logo.png" 
              alt="LAMB FALCONS Logo" 
              style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
            />
            <div style={styles.logoText}>LAMB FALCONS</div>
          </div>
          <div style={styles.navMenuGroup}>
            <a href="/" style={styles.navLink}>Home</a>
            <a href="/about" style={styles.navLink}>About Us</a>
            <a href="/members" style={styles.navLink}>Members</a>
            <a href="/jerseys" style={{...styles.navLink, color: '#ffffff', fontWeight: 'bold'}}>Jerseys</a>
            <a href="/login" className="button"><span>Log In</span></a>
            <a href="/register" className="button"><span>Register</span></a>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <h1 style={styles.pageTitle}>Jersey Collection</h1>
        
        <div style={styles.productsContainer}>
          {jerseyProducts.map((product) => (
            <div 
              key={product.id} 
              style={{
                ...styles.productCard,
                ...(hoveredCard === product.id ? styles.productCardHover : {})
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                style={{
                  ...styles.productImage,
                  ...(product.id === 1 ? { objectFit: 'contain', padding: '20px' } : {})
                }} 
              />
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productPrice}>
                  ৳{product.price}
                </p>
                <p style={styles.productDescription}>{product.description}</p>
                
                <div style={styles.sizeContainer}>
                  {product.sizes.map((size) => (
                    <button 
                      key={size} 
                      style={{
                        ...styles.sizeButton,
                        ...(selectedSizes[product.id] === size ? styles.sizeButtonSelected : {})
                      }}
                      onClick={() => handleSizeSelect(product.id, size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                <button 
                  style={{
                    ...styles.orderButton,
                    ...(hoveredCard === product.id ? styles.orderButtonHover : {})
                  }}
                  onClick={() => handleOrder(product.id)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div style={styles.noteSection}>
          <p style={styles.noteText}>
            <span style={{ color: '#ff0000' }}>Note:</span> The final price of each jersey will vary depending on the fabric material selected. 
            We offer different material options to suit your preferences and requirements.
          </p>
        </div>

        {/* Size Chart & Pricing Section */}
        <div style={styles.sizeChartSection}>
          <h2 style={styles.sectionTitle}>Size Chart & Pricing</h2>
          <div style={styles.chartsContainer}>
            <img 
              src="/sizechart.png" 
              alt="Size Chart" 
              style={{
                ...styles.chartImage,
                transform: hoveredImage === 'sizechart' ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => setHoveredImage('sizechart')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img 
              src="/pricing1.jpg" 
              alt="Pricing Information 1" 
              style={{
                ...styles.chartImage,
                transform: hoveredImage === 'pricing1' ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => setHoveredImage('pricing1')}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img 
              src="/pricing2.jpg" 
              alt="Pricing Information 2" 
              style={{
                ...styles.chartImage,
                transform: hoveredImage === 'pricing2' ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => setHoveredImage('pricing2')}
              onMouseLeave={() => setHoveredImage(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jerseys;