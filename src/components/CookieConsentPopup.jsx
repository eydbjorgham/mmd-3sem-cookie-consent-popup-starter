"use client";
import { useState } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import CookiesAcceptButton from "./CookiesAcceptButton";

const CookieConsentPopup = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  return (
    !isAccepted && (
      <section className="cookie-consent-popup">
        <header className="cookie-consent-popup-header">
          <LiaCookieBiteSolid size={50} />
          <IoIosClose onClick={() => setIsAccepted(!isAccepted)} className="pointer" size={25} />
        </header>
        <footer className="cookie-consent-popup-footer">
          <p className="cookie-consent-popup-paragraph">We use cookies to improve your user experience!</p>
          <CookiesAcceptButton isAccepted={isAccepted} setIsAccepted={setIsAccepted} /> 
        </footer> 
      </section>
    )
  );
};

export default CookieConsentPopup;
