import React, { CSSProperties, useState } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '34px',
    fontWeight: 'bold',
    color: '#d0ece7',
    fontFamily: "'Lilita One', cursive",
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.7)',
  },
  jerseyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  jerseyCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  jerseyImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  jerseyInfo: {
    padding: '20px',
  },
  jerseyName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#ffffff',
  },
  jerseyPrice: {
    fontSize: '24px',
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  jerseyDescription: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    marginTop: '10px',
  },
};

// Dummy data for jerseys
const dummyJerseys = [
  {
    id: 1,
    name: 'Falcons Home Jersey',
    price: 89.99,
    description: 'Official home jersey with team colors and sponsor logo',
    imageUrl: '/falcons_home.jpg',
  },
  {
    id: 2,
    name: 'Falcons Away Jersey',
    price: 89.99,
    description: 'Official away jersey with alternative team colors',
    imageUrl: '/falcons_away.jpg',
  },
  {
    id: 3,
    name: 'Exodus Home Jersey',
    price: 89.99,
    description: 'Official home jersey with team colors',
    imageUrl: '/exodus_home.jpg',
  },
  {
    id: 4,
    name: 'Exodus Away Jersey',
    price: 89.99,
    description: 'Official away jersey with alternative design',
    imageUrl: '/exodus_away.jpg',
  }
];

const Jerseys = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>LAMB FALCONS JERSEYS</h1>
        <p style={styles.subtitle}>Official team merchandise and fan gear</p>
      </div>

      <div style={styles.jerseyGrid}>
        {dummyJerseys.map((jersey) => (
          <div 
            key={jersey.id} 
            style={{
              ...styles.jerseyCard,
              transform: hoveredId === jersey.id ? 'translateY(-5px)' : 'none'
            }}
            onMouseEnter={() => setHoveredId(jersey.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={jersey.imageUrl}
              alt={jersey.name}
              style={{
                ...styles.jerseyImage,
                objectFit: 'contain',
                backgroundColor: '#ffffff',
                padding: '20px',
                transform: 'scale(0.9)'
              }}
            />
            <div style={styles.jerseyInfo}>
              <h3 style={styles.jerseyName}>{jersey.name}</h3>
              <div style={styles.jerseyPrice}>${jersey.price}</div>
              <p style={styles.jerseyDescription}>{jersey.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jerseys; 