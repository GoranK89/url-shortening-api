const Error = ({ error }) => {
  return <span className="error-msg">{error ? error : ''}</span>;
};

export default Error;
