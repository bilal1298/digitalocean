import React from 'react'
import Link from 'next/link'

const Button = ({href, position, children}) => {
  return (
    <Link href={href} className={`my-button ${position === 'center' ? 'my-button-center' : undefined}`}>{children}</Link>
  )
}

export default Button