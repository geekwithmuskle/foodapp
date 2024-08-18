import React from 'react'

const Recipes = () => {
  const searches = ["pizza", "burger", "cookies", "juice", "salad", "ice-cream", "lasagna", "Hamburger", "chips", "pudding", "soup"]
  return (
    <div>

      <div className="previous-searches">

        <h2>Previous Searches</h2>
        <div className="previous-searches-container section">
          {searches.map((search, i) => (
            <div key={i} className='search-items' style={{animationDelay: i * .2 + "s"}}>
              {search}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recipes