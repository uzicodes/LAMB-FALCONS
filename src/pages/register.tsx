import React, { useState } from 'react';
import { useRouter } from 'next/router';

const styles = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  registerBox: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  logoText: {
    fontSize: '34px',
    fontWeight: 'bold',
    color: '#d0ece7',
    fontFamily: "'Lilita One', cursive",
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center' as const,
    color: '#ffffff',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: 'rgba(255,255,255,0.8)',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#ffffff',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  inputFocus: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 2px rgba(59,130,246,0.2)',
  },
  button: {
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
  buttonHover: {
    backgroundColor: '#2563eb',
    transform: 'scale(1.02)',
  },
  loginLink: {
    textAlign: 'center' as const,
    marginTop: '20px',
    color: 'rgba(255,255,255,0.6)',
  },
  loginLinkText: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  nameGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
  },
  nameInput: {
    flex: 1,
  },
};

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration attempt with:', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.registerBox}>
        <div style={styles.logoGroup}>
          <img 
            src="/falcons_logo.png" 
            alt="LAMB FALCONS Logo" 
            style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
          />
        </div>
        
        <h1 style={styles.title}>Create Account</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.nameGroup}>
            <div style={styles.nameInput}>
              <label style={styles.label}>First Name</label>
              <input
                type="text"
                name="firstName"
                style={styles.input}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.nameInput}>
              <label style={styles.label}>Last Name</label>
              <input
                type="text"
                name="lastName"
                style={styles.input}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              style={styles.input}
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+880"
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              style={styles.input}
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              style={styles.input}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isHovered ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Register
          </button>
        </form>
        
        <div style={styles.loginLink}>
          Already have an account?{' '}
          <a href="/login" style={styles.loginLinkText}>
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register; 