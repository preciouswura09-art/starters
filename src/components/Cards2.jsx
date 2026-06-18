import React from 'react'

const Cards2 = ({Card2Details}) => {
  return (
    <div className='card2'>
       <Card2Details.Icon />
       <h2>{Card2Details.head} </h2>
       <p>{Card2Details.info} </p>
    </div>
  )
}

export default Cards2;