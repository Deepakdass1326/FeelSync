import FormGroup from "../components/FormGroup"
import "../style/login.scss"
import { Link, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"
import { useState } from "react"

const Login = () => {
  const { loading, handleLogin } = useAuth()  // ✅ HandleLogin -> handleLogin

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handlesubmit(e) {
    e.preventDefault()
    await handleLogin({ email, password })
    navigate("/")
  }

  return (
    <main className="wrapper">
      <div className="orb orb--pink" />
      <div className="orb orb--purple" />

      <div className="card">
        <h1 className="card__title">Login</h1>
        <p className="card__subtitle">Welcome Back Please Login To Your Account</p>

        <form onSubmit={handlesubmit}>
          <FormGroup
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email" type="text" placeholder="Enter your email"
          />
          <FormGroup
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password" type="password" placeholder="Enter your password"
          />
          <button type="submit" className="btn">Login</button>
        </form>

        <p className="signup">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </main>
  )
}

export default Login