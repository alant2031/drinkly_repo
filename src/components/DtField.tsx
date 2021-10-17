import React from 'react'


interface DtFieldProps {
  children: any
  title: string
}
export default function DtField(props: DtFieldProps) {
  const { children, title } = props
  return (
    <div className="shadow-sm border border-primary border-2 rounded p-2 mb-1">
      <span className="h3 text-olive">{title} {" "}</span>
      {children}
    </div>
  )
}
