import React from "react";

const LoginForm = () => {
  return (
    <div class="row mt-5">
      <div class="col-md-6 m-auto">
        <div class="card card-body">
          <h1 class="text-center mb-3">
            <i class="fas fa-sign-in-alt"></i> Login
          </h1>
          <form action="http://localhost:5000/users/login" method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Login
            </button>
          </form>

          <div className="options">
            <a
              href="http://localhost:5000/users/google"
              class="btn btn-primary btn-block"
            >
              Login with Google
            </a>
          </div>
          <div className="options">
            <a
              href="http://localhost:5000/users/facebook"
              class="btn btn-primary btn-block"
            >
              Login with Facebook
            </a>
          </div>

          <p class="lead mt-4">
            No Account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
