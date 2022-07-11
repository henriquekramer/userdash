import { memo } from 'react'
import './styles.scss'

function HeaderComponent(){
  return (
    <header>
      <h1>UserDash</h1>
      <h1>Novo Título</h1>
      <h3>SubTitle Header</h3>
    </header>
  )
}

export const Header = memo(HeaderComponent)