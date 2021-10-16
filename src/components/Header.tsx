import React from 'react'

interface HeaderProps {
  title: string,
  subtitle: string,
}

export default function Header(props: HeaderProps) {
  const { title, subtitle } = props
  return (
    <header className="shadow-sm px-3">
      <h2 className="p-1">
        
        <span className="text-kombu">{title}</span> {'>'} <span className="fs-4 text-olive">{subtitle}</span>
      </h2>

    </header>
  )
}
