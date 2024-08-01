import React from 'react'

const Offers = ({image, title="",desc="",imgStyle=""}) => {
  return (
    <div className=''>
        <img src={image} className={`h-32 w-32 ${imgStyle}`} />
       {title && <h1>{title}</h1>} 
        {desc && <div className='text-lightGray w-40'>{desc}</div>}
    </div>
  )
}

export default Offers