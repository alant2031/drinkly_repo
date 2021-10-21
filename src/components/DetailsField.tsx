import React from 'react'


interface DetailsFieldProps {
  children: any
  title: string
}
export default function DetailsField(props: DetailsFieldProps) {
  const { children, title } = props
  return (
    <div className="shadow-sm border border-dark border-2 rounded p-2 mb-1">
      <span className="h3 text-olive">{title} {" "}</span>
      {children}
    </div>
  )
}
