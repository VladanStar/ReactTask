import React from 'react'

const Header = ({text}) => {
  return (
    <header>
      <div className="container">
        <h2>FeedBack UI</h2>
        {text}
      </div>
      </header>
  )
}

export default Header;