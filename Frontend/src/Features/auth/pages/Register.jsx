import FormGroup from "../components/FormGroup"
import "../style/register.scss"
import { Link } from "react-router"

const Register = () => {
  return (
       <main className="wrapper">
      <div className="orb orb--pink" />
      <div className="orb orb--purple" />

      <div className="card">
        <h1 className="card__title">Register</h1>
        <p className="card__subtitle">Create Your Account To Get Started</p>

        <FormGroup label="Email"    type="email"    placeholder="Enter your email"    />
        <FormGroup label="Username" type="text"     placeholder="Enter your username" />
        <FormGroup label="Password" type="password" placeholder="Enter your password" />

        <button className="btn">Register</button>

        <p className="login">
          Already have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </main>

  )
}

export default Register
