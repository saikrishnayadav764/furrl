import React from "react";

const CopyrightInfo = () => {
  return (
    <div className="copyright-info-wrapper">
      <div className="copyright-info">
        <a href="/" style={{ textDecoration: "none", cursor: "pointer" }}>
          <img
            id="footer-furrl-logo"
            alt="Furrl Footer Logo"
            loading="lazy"
            width="84"
            height="47"
            decoding="async"
            src="https://web.furrl.in/_next/static/media/furrl-logo.623c4604.svg"
            style={{ color: "transparent" }}
          />
        </a>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "24px",
            color: "#667085",
            textAlign: "left",
            marginTop: "12px",
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          © 2024 Furrl. Kleosa Retail Private Limited
        </p>
      </div>
    </div>
  );
};

export default CopyrightInfo;
