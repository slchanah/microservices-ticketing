import axios from 'axios';
import { useState } from 'react';

export default () => {
  const [errors, setErrors] = useState(null);

  const doRequest = async ({ url, method, body, onSuccess }) => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      onSuccess(response.data);

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
