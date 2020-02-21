import React, { useState } from "react"
import Layout from "../components/layout"
import { useAuth } from "../Firebase"

const Login = () => {
  const [cred, setCred] = useState({
    email: "michal.trabski@gmail.com",
    password: "123123",
  })
  const { firebase } = useAuth()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(cred)

    firebase.login({ email: cred.email, password: cred.password })
  }

  const handleChange = e => {
    e.persist()
    // console.log(cred)

    setCred(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={cred.email}
          onChange={e => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={cred.password}
          onChange={e => handleChange(e)}
        />
        <button type="submit">Log in</button>
      </form>
    </Layout>
  )
}

export default Login
