import React, { useState, useContext } from "react"
import Layout from "../components/layout"
import { FirebaseContext } from "../Firebase"

const Login = () => {
  const [cred, setCred] = useState({
    email: "michal.trabski@gmail.com",
    password: "123123",
  })
  const { firebase } = useContext(FirebaseContext)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(cred)

    firebase.login({ email: cred.email, password: cred.password })
  }

  const handleChange = e => {
    e.persist()
    console.log(e)

    setCred(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={cred.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={cred.password}
          onChange={handleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </section>
  )
}

export default Login
