import { useState } from 'react';
import ButtonCopy from './ButtonCopy';

const ShortenedLink = ({ apiData }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiData?.full_short_link3);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(isCopied);

  return (
    <div className="links-wrapper">
      <div className="short-link_container">
        <p className="original-link">{apiData?.original_link}</p>
        <div className="short-link_button-wrapper">
          <a
            href={apiData?.full_short_link3}
            target="_blank"
            className="shortened-link"
          >
            {apiData?.full_short_link3}
          </a>
          {!isCopied && (
            <ButtonCopy className="btn btn-copy" onClick={handleCopy}>
              Copy
            </ButtonCopy>
          )}
          {isCopied && (
            <ButtonCopy className="btn btn-copied">Copied!</ButtonCopy>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortenedLink;
