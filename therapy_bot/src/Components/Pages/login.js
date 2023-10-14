import React from 'react';
import './login.css';
import run from '../../insertMongo';
import useState from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        run(email, password);
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    );
  };

export default Login;