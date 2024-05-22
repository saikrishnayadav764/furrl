
import React from 'react';

const FurrlInNewsSection = () => {
  return (
    <div style={styles.container}>
      <p style={styles.title}>Furrl in the news</p>
      <div style={styles.imageContainer}>
        <img
          id="furrl-in-news-img"
          alt="Furrl in news"
          loading="lazy"
          width="1029"
          height="389"
          decoding="async"
          data-nimg="1"
          src="https://web.furrl.in/_next/static/media/furrl-in-news.27032dbf.webp"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  imageContainer: {
    maxWidth: '1029px',
    margin: '0 auto',
  },
  image: {
    color: 'transparent',
    width: '100%',
    height: 'auto',
  },
  '@media (max-width: 768px)': {
    container: {
      marginTop: '10px',
    },
  }
};

export default FurrlInNewsSection;
