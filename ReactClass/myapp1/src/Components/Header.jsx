import React from 'react'

const Header = React.memo(({ title = "My App" }) => {
  console.log("Header rendered")

  return (
    <header style={styles.header}>
      <h1>{title}</h1>
    </header>
  )
})

const styles = {
  header: {
    padding: "10px",
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center"
  }
}

export default Header