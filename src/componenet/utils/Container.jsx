import React from 'react'

const Container = (props) => {
  return (
    <div className={`${props.className}  md:container   lg:pt-20`}>
        {props.children}
    </div>
  )
}

export default Container