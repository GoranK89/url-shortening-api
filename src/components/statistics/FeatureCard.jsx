const FeatureCard = ({ icon, title, paragraph, alt }) => {
  return (
    <div className="feature-card">
      <div className="icon-wrapper">
        <img className="icon-feature" src={icon} alt={alt} />
      </div>
      <div className="feature-text-wrapper">
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
