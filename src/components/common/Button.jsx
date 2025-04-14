import React from 'react'

const Button = ({title,bg,border,hover}) => {
  return (
    <div>
      <div className={` rounded-[35px] ${bg} ${border}  text-sm h-16 w-44 text-center pt-5 cursor-pointer ${hover}`}>{title}</div>
    </div>
  )
}

export default Button
