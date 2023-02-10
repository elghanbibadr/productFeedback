import React from 'react'

const Container = (props) => {
  return (
    <div className="md:container lg:grid grid-cols-3  lg:pt-20 ">
        {props.children}
    </div>
  )
}

export default Container