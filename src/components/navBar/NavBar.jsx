import React from 'react'
import {Link} from 'react-scroll'
import styled from 'styled-components'

const NavBar = () => {

  const StyledUl = styled.ul`
      display: flex;
      list-style: none;
      justify-content: space-evenly;
      height: 50px;
      li {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      li:hover{
        border-bottom: 5px solid #BE0E0E;
        transition-duration: 0.2s;
      }
  `

  return (
    <StyledUl>
        <li><Link activeClass='active' to='description' spy={true} smooth={true} duration={500}>Detalle</Link></li>
        <li><Link activeClass='active' to='pictures' spy={true} smooth={true} duration={500}>Fotos</Link></li>
        <li><Link activeClass='active' to='rooms' spy={true} smooth={true} duration={500}>Habitaciones</Link></li>
        <li><Link  activeClass='active' to='maps' spy={true} smooth={true} duration={500}>Mapa</Link></li>
        <li><Link activeClass='active' to='services' spy={true} smooth={true} duration={500}>Servicios</Link></li>
    </StyledUl>
  )
}

export default NavBar