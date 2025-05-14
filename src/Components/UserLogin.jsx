import React, { useState } from 'react';
import { loginUser } from '../Services/UserService'; // Make sure the path is correct

function UserLogin() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submit

    const response = await loginUser(userName, password);

    if (response.isSuccess) {
      // Store login data in localStorage or state if needed
      // Redirect to dashboard, for example:
      window.location.href = "/dashboard";
    } else {
      // Show error message
      setMessage(response.message || 'Login failed.');
    }
  };

  return (
    <div className="auth-page-content">
      <div className="container">
        {/* UI Content */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card mt-4">
              <div className="card-body p-4">
                <div className="text-center mt-2">
                  <h5 className="text-primary">Welcome Back !</h5>
                  <p className="text-muted">Sign in to continue.</p>
                </div>
                <div className="p-2 mt-4">
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter username"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="password-input">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="mt-4">
                      <button className="btn btn-success w-100" type="submit">Sign In</button>
                    </div>

                    {message && (
                      <div className="mt-3 alert alert-danger text-center">
                        {message}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="mb-0">Don't have an account? <a href="#" className="fw-semibold text-primary text-decoration-underline"> Signup </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
