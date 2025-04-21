import React from 'react'
interface Ilayout {
    children:React.ReactNode
}
function Layout({children}:Ilayout) {
  return (
    <div className='body'>{children}</div>
  )
}

export default Layout