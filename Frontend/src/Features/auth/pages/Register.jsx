import { useState } from "react"
import FormGroup from "../components/FormGroup"
import { useAuth } from "../hooks/useAuth"
import "../style/register.scss"
import { Link, useNavigate } from "react-router"

const Register = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate()

  const { loading, handleRegister } = useAuth()  // ✅ HandleRegister -> handleRegister

  async function handleSubmit(e) {
    e.preventDefault()
    await handleRegister({ username, password, email })
    navigate("/")
  }

  return (
    <main className="wrapper">
      <div className="orb orb--pink" />
      <div className="orb orb--purple" />

      <div className="card">
        <h1 className="card__title">Register</h1>
        <p className="card__subtitle">Create Your Account To Get Started</p>

        <form onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e) => setemail(e.target.value)}
            label="Email" type="email" placeholder="Enter your email"
          />
          <FormGroup
            value={username}
            onChange={(e) => setusername(e.target.value)}
            label="Username" type="text" placeholder="Enter your username"
          />
          <FormGroup
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            label="Password" type="password" placeholder="Enter your password"
          />
          <button type="submit" className="btn">Register</button>
        </form>

        <p className="login">
          Already have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </main>
  )
}

export default Register