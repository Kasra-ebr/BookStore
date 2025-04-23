import React, { ComponentProps } from 'react'
type IInput = ComponentProps<"input">
function Input( {children,className,...rest}:IInput) {

  return (
   <input {...rest}className={className}>
   {children}
   </input>
  )
}

export default Input