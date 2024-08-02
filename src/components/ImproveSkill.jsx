import React from 'react'

const ImproveSkill = () => {

    const list = [
        "Learn new receipes",
        "Experiment with food",
        "Write your own recipes",
        "Know your nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

  return (
    <div className='section improve-skills'>

          <div className="col img">

            <img src="./img/gallery/img_10.jpg" alt="" />
          </div>
        
        <div className="col typography">
            <h1 className="title"> Improve Your Culinary Skills </h1>

            {list.map((item, i) => (
                <p key={i} className='skill-item'>{item}</p>
            ))}
            <button className='btn'> SIGNUP NOW </button>
        </div>

    </div>
  )
}

export default ImproveSkill