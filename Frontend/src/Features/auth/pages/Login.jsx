import FormGroup from "../components/FormGroup"
import "../style/login.scss"
import { Link } from "react-router"

const Login = () => {
  return (
  <main className="wrapper">
      <div className="orb orb--pink" />
      <div className="orb orb--purple" />

      <div className="card">
        <h1 className="card__title">Login</h1>
        <p className="card__subtitle">Welcome Back Please Login To Your Account</p>

        <FormGroup label="Name"     type="text"     placeholder="Enter your name"     />
        <FormGroup label="Password" type="password" placeholder="Enter your password" />

        <div className="row">
          <label className="remember">
            <input type="checkbox" defaultUnChecked />
            Remember Me
          </label>
          <a href="#" className="forgot">Forgot Password?</a>
        </div>

        <button className="btn">Login</button>

        <p className="signup">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </main>
  )
}

export default Login
