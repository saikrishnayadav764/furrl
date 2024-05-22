
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/lefnav.css";

const LeftNavBar = ({ isOpen,setIsLeftNavOpen }) => {
  const [navLinks, setNavLinks] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [close, setClose] = useState(false)

  useEffect(() => {
    const fetchNavLinks = async () => {
      try {
        const response = await axios.get(
          "https://api.furrl.in/api/v1/uiConfig/navigation"
        );
        if (response.status === 200) {
          setNavLinks(response.data);
        } else {
          console.error("Failed to fetch nav links");
        }
      } catch (error) {
        console.error("Error fetching nav links:", error);
      }
    };

    fetchNavLinks();
  },[]);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  

  const renderNavItems = (items) => {
    return items.map((navItem, index) => (
      <li
        key={index}
        className={`nav-item ${openDropdown === index ? "open" : ""}`}
      >
        <div onClick={() => handleDropdownToggle(index)} className="nav-link">
          {navItem.navItem.icon && (
            <div className="topoff">
            <img  src={navItem.navItem.icon} alt={navItem.navItem.title} />
            <span>{navItem.navItem.title}</span>
            </div>
          )}

          {index>0 && <span>{navItem.navItem.title}</span>}
          {navItem.children.length > 0 && (
            <img
              src="https://web.furrl.in/_next/static/media/arrows-down-black.0ecc54a7.svg"
              alt="Dropdown"
              className="dropdown-icon"
            />
          )}
          {index === 0 && (
            <div>
              <img className="topd" src="https://web.furrl.in/_next/static/media/ArrowsRightPurple.90b97b4d.svg" />
            </div>
          )}
        </div>
        {navItem.children.length > 0 && (
          <ul className="dropdown">
            {navItem.children.map((child, childIndex) => (
              <li className="childli" key={childIndex}>
                <a className="childnav" href={child.navItem.cta}>
                  {child.navItem.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <>
<div className={`leftnavC ${isOpen ? "open" : ""}`}>
    <div className="close-btn" onClick={() => setIsLeftNavOpen(false)}>
        <img src="https://web.furrl.in/_next/static/media/MenuClose.b09d5583.svg" alt="Close" />
    </div>
</div>

    <div className={`left-navbar ${isOpen ? 'open' :  ''}`}>
      {/* <ul> */}
      {renderNavItems(navLinks)}
      {/* </ul> */}
    </div>
    </>

  );
};

export default LeftNavBar;
