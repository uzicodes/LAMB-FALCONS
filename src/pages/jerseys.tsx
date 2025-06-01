import React, { useState, CSSProperties } from 'react';
import { useRouter } from 'next/router';

// Product data (dummy data)
const jerseyProducts = [
  {
    id: 1,
    name: 'Falcons Home Jersey',
    price: 89.99,
    image: '/falcons_home.png',
    description: 'Official LAMB Falcons home jersey for the 2023/24 season',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    name: 'Falcons Away Jersey',
    price: 89.99,
    image: '/falcons_away.png',
    description: 'Official LAMB Falcons away jersey for the 2023/24 season',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    name: 'Exodus Home Jersey',
    price: 79.99,
    image: '/exodus_home.png',
    description: 'Limited edition Exodus home jersey collaboration',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Exodus Away Jersey',
    price: 79.99,
    image: '/exodus_away.png',
    description: 'Limited edition Exodus away jersey collaboration',
    sizes: ['S', 'M', 'L', 'XL'],
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
    fontSize: '34px',
    fontWeight: 'bold',
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
    fontSize: '36px',
    fontWeight: 'bold',
    fontFamily: "'Lilita One', cursive",
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
  },
  productPrice: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: '15px',
  },
  productDescription: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '15px',
  },
  sizeContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
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
  addToCartButton: {
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
  addToCartButtonHover: {
    backgroundColor: '#2563eb',
  },
};

const Jerseys = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{[key: number]: string}>({});

  const handleSizeSelect = (productId: number, size: string) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  };

  const handleAddToCart = (productId: number) => {
    // Add to cart logic would go here
    console.log(`Added product ${productId} to cart with size ${selectedSizes[productId] || 'not selected'}`);
  };

  return (
    <div style={styles.container}>
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
            <a href="/#about" style={styles.navLink}>About Us</a>
            <a href="/#members" style={styles.navLink}>Members</a>
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
                <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
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
                    ...styles.addToCartButton,
                    ...(hoveredCard === product.id ? styles.addToCartButtonHover : {})
                  }}
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jerseys;