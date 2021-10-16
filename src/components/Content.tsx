import React from 'react'

interface ContentProps {
  children: any
}

export default function Content(props: ContentProps) {
  const { children } = props
  return (
    <div className="container-fluid bg-cornsilk">
      {children}
    </div>
  )
}
