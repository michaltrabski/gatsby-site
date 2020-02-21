import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from "../Firebase"

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext)
  // console.log("user", user)
  const handleLogOut = () => {
    firebase.logout().then(() => {
      console.log("logout success")
      navigate("/login")
    })
  }
  return (
    <header
      style={{
        background: `coral`,
        marginBottom: `0.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p>
          {user && user.email && `Hello, ${user.email}`}{" "}
          <span onClick={handleLogOut}>LogOut</span>
        </p>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
