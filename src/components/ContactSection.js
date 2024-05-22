import React from 'react';

const ContactSection = () => {
  return (
    <div style={styles.container}>

      <img
        loading="lazy"
        width="20"
        height="20"
        src="https://web.furrl.in/_next/static/media/question.535ae6b0.svg"
        style={styles.icon}
        alt="question icon"
      />

      <div style={styles.textContainer}>
        <p style={styles.questionText}>Have a question?</p>
        <p style={styles.descriptionText}>Drop us a line and we'll steer you in the right direction.</p>
      </div>
      <div style={styles.iconsContainer}>
        <a
          href="whatsapp://send?text=Hey! I have an enquiry about the product Red Rose Bedhseet Set from COTTON CURIO that I found on the Furrl website.&phone=+918296842487"
          style={styles.iconWrapper}
        >
          <img
            width="40"
            height="40"
            src="https://web.furrl.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhatsapp.7b6c6b21.gif&w=96&q=75"
            style={styles.icon}
            alt="whatsapp icon"
          />
        </a>
        <a
          href="mailto:care@furrl.in?subject=Furrl website Product Enquiry - Red Rose Bedhseet Set | COTTON CURIO&body=Hi Team Furrl, I have an enquiry about the product Red Rose Bedhseet Set from COTTON CURIO that I found on the Furrl website."
          style={styles.iconWrapper}
        >
          <img
            width="28"
            height="28"
            src="https://web.furrl.in/_next/static/media/gmail.51f2dfde.svg"
            style={styles.icon}
            alt="gmail icon"
          />
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat, sans-serif',
    padding: '20px 8px 0',
    flexWrap: 'wrap',
    maxWidth: '400px', 
    margin: '0 auto', 
  },
  icon: {
    color: 'transparent',
  },
  textContainer: {
    flex: 1,
    marginLeft: '10px',
    marginRight: '10px',
    maxWidth: '100%', 
    textAlign: 'center', 
  },
  questionText: {
    fontSize: '14px',
    fontWeight: '600',
    marginTop:'0',
    padding:'0',
    textAlign:'left'
  },
  descriptionText: {
    color: 'rgb(100, 116, 139)',
    marginTop:'0',
    padding:'0',
    textAlign:'left'
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center', 
    marginTop: '10px', 
  },
  iconWrapper: {
    height: '52px',
    width: '52px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid rgba(100, 116, 139, 0.2)',
    borderRadius: '4px',
    marginLeft: '5px',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    textContainer: {
      marginLeft: '0',
      marginRight: '0',
    },
    iconsContainer: {
      justifyContent: 'center',
      marginTop: '20px', 
    },
  },
};

export default ContactSection;
