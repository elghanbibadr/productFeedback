import React from 'react'

const Container = (props) => {
  return (
    <div className="md:container   lg:pt-20 lg:px-60 ">
        {props.children}
    </div>
  )
}

export default Container