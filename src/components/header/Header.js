import React, { useEffect, useState } from 'react'
import { StyledHeader } from '../../styles/styledHeader'
import { StyledNav } from '../../styles/styledNav'

export default function Header() {

  const [scrolled, setScrolledTo] = useState(false)

  function handleScrollChange() {
    if (window.scrollY > 0) {
      setScrolledTo(true)
    } else {
      setScrolledTo(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange)

    return () => {
      window.removeEventListener("scroll")
    }
  }, [])


  return (
    <StyledHeader scrolled={scrolled}>
      <div className="logo">Logo</div>
      <StyledNav scrolled={scrolled}>
        <li>Pocetna</li>
        <li>Proizvodi</li>
        <li>O nama</li>
        <li>Kontakt</li>
      </StyledNav>
    </StyledHeader>
  )
}