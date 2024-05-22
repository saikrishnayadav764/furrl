
import React from 'react';

const AppLinks = () => {
  return (
    <div style={styles.container}>
      <p style={styles.title}>Better on the app</p>
      <div style={styles.buttonsContainer}>
        <div style={styles.appStoreLink}>
          <a href="https://apps.apple.com/in/app/furrl/id1640235949" style={styles.link}>
            <img
              id="footer-furrl-app-store"
              alt="Furrl App Store"
              loading="lazy"
              width="118"
              height="40"
              decoding="async"
              src="https://web.furrl.in/_next/static/media/app-store.8b8445a1.webp"
              style={styles.image}
            />
          </a>
        </div>
        <div style={styles.appStoreLink}>
          <a href="https://play.google.com/store/apps/details?id=com.furrl.flutter_app" style={styles.link}>
            <img
              id="footer-furrl-play-store"
              alt="Furrl Play Store"
              loading="lazy"
              width="118"
              height="40"
              decoding="async"
              src="https://web.furrl.in/_next/static/media/play-store.0a2ef8c6.svg"
              style={styles.image}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '10px',
    color: '#dfd5f9',
    textAlign: 'left',
    fontFamily: 'Raleway',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '24px'
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  appStoreLink: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  image: {
    color: 'transparent',
  },
  '@media (max-width: 768px)': {
    container: {
      marginTop: '10px',
    },
  }
};

export default AppLinks;
