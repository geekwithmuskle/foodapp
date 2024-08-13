import React from 'react'
import ChiefsCard from './ChiefsCard'

const Chiefs = () => {

  const chiefs = [
    {
      name: "Juan Carlos",
      imag: '/img/top-chefs/img_1.jpg',
      recipesCount: "10",
      cuisine: "Mexican",
  },
  {
      name: "John Doe",
      imag: "/img/top-chefs/img_2.jpg",
      recipesCount: "05",
      cuisine: "Japanese",
  },
  {
      name: "Erich Maria",
      imag: "/img/top-chefs/img_3.jpg",
      recipesCount: "13",
      cuisine: "Italian",
  },
  {
      name: "Chris Brown",
      imag: "/img/top-chefs/img_4.jpg",
      recipesCount: "08",
      cuisine: "American"
  },
  {
      name: "Blake Lively",
      imag: "/img/top-chefs/img_5.jpg",
      recipesCount: "09",
      cuisine: "French"
  },
  {
      name: "Ben Affleck",
      imag: "/img/top-chefs/img_6.jpg",
      recipesCount: "04",
      cuisine: "Indian"
  }
  ]
  return (
    <div className="section chiefs">
        <h1 className="title"> Our Top Chiefs </h1>

        <div className="top-chiefs-container">
          {chiefs.map((chief, i) => (
            <ChiefsCard key={i} chief={chief}/>
          ))}
        </div>
    </div>
  )
}

export default Chiefs