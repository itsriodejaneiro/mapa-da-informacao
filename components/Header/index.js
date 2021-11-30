import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import * as S from "./styled"

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menu = [
    { title: 'Home', path: '/' },
    { title: 'Sobre', path: '/sobre' },
    { title: 'Projetos', path: '/projetos' },
    { title: 'Histórias', path: '/historias' }
  ]
  return (
    <S.HeaderContainer>
      <S.HeaderMenu onClick={() => setOpen(!open)} open={open}>
        <span></span>
      </S.HeaderMenu>
      <S.HeaderNav open={open}>
        {menu.map((item, index) => {
          return (
            <Link key={index} href={item.path} passHref>
              <S.HeaderLink
                className={ router.pathname == item.path  ? 'current' : null }
                onClick={() => setOpen(!open)}
              >
                {item.title}
              </S.HeaderLink>
            </Link>
          )
        })}
      </S.HeaderNav>
    </S.HeaderContainer>
  )
}