const CtaBanner = ({ title }) => {
  return (
    <div className="cta-banner-wrapper">
      <div className="cta-content">
        <h3>{title}</h3>
        <button className="btn btn-hero">Get started</button>
      </div>
    </div>
  );
};

export default CtaBanner;
