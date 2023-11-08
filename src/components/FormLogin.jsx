import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStore from "../hooks/useStore"

export default function FormLogin() {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()
  const { setIsLoggedIn } = useStore()
  const navigate = useNavigate()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const adminAccount = {
      user: "user123",
      password: 12345678
    }
    if (user === adminAccount.user && +password === adminAccount.password) {
      alert("Success")
      setIsLoggedIn(true)
      navigate("/items")
    } else {
      alert("Error")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="login">
      <div>
        <div>
          <label htmlFor="user">User</label>
          <input type="text" name="user" id="user" value={user} onChange={(ev) => setUser(ev.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
        </div>
      </div>
      <button>Submit</button>
    </form>
  )
}