import React from 'react';

const JoinTheTribeInstagram = () => {
  return (
    <div style={styles.container}>
      <div style={styles.linkWrapper}>
        <a
          data-id="footer-instagram-link"
          href="https://www.instagram.com/furrl.in"
          style={styles.link}
        >
          <img
            id="join-tribe-img"
            alt="Join Tribe"
            loading="lazy"
            width="1029"
            height="376"
            decoding="async"
            data-nimg="1"
            src="https://web.furrl.in/_next/static/media/join-tribe-3x.96589bf4.webp"
            style={styles.image}
          />
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
  },
  linkWrapper: {
    width: '100%',
    maxWidth: '1029px',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  image: {
    color: 'transparent',
    width: '100%',
    height: 'auto',
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '10px 0',
    },
    linkWrapper: {
      maxWidth: '100%',
      padding: '0 10px',
    },
  }
};

export default JoinTheTribeInstagram;
