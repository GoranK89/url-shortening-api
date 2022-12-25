import Error from './Error';
import { useState, useRef } from 'react';

const Form = ({ fetch }) => {
  const refInput = useRef();
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!refInput.current.value || !isValidHttpUrl(refInput.current.value)) {
      setError('Please add a link');
    } else {
      fetch(refInput.current.value);
      setError('');
      refInput.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-shorten-form">
      <input
        className={error && 'input-error'}
        type="text"
        placeholder="Shorten a link here..."
        ref={refInput}
      />
      <Error error={error} />
      <button type="submit" className="btn btn-form">
        Shorten it!
      </button>
    </form>
  );
};

export default Form;

function isValidHttpUrl(string) {
  try {
    const newUrl = new URL(string);
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
  } catch (err) {
    return false;
  }
}
