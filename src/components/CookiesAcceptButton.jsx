
const CookiesAcceptButton = ({ isAccepted, setIsAccepted }) => {
    return (
      <button onClick={() => setIsAccepted(!isAccepted)} 
      className="cookie-consent-popup-cta pointer">
        I like Cookies
      </button>
    );
}
 
export default CookiesAcceptButton;