import React from 'react'

const Icon = (props) => {
  const types = new Map([['bin','icons/bin.png'],['checked','icons/checked.png'],
                         ['add','icons/add.png'],['return','icons/return.png']])

  return(
    <img src={types.get(props.type)} alt='' title={props.type} onClick={props.onClick}/>
  )
}

export default Icon