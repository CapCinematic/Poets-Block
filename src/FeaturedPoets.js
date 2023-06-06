import React from "react";

const FeaturedPoets = ({ poets }) => {
  return (
    <div>
    <h2>Featured Poets:</h2>
    <ul>
      {poets.map((poet) => (
        <li key={poet.id}>
          <a href={poet.link}>{poet.name}</a>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default FeaturedPoets