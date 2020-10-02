import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../hooks/use-request';

const SignInUpForm = ({ url, type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest();

  const onSubmit = async (event) => {
    event.preventDefault();

    doRequest({
      url: url,
      method: 'post',
      body: {
        email,
        password,
      },
      onSuccess: () => Router.push('/'),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{type}</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary">{type}</button>
    </form>
  );
};

export default SignInUpForm;
