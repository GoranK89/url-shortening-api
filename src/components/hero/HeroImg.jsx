const HeroImg = ({ src, alt }) => {
  return <img src={src} className="hero-img" alt={alt} />;
};

HeroImg.defaultProps = {
  alt: 'A hero img of the website',
};

export default HeroImg;
