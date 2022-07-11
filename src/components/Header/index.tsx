import { memo } from 'react'
import './styles.scss'

function HeaderComponent(){
  return (
    <header>
      <h1>UserDash</h1>
      <h1>Novo Título</h1>
    </header>
  )
}

export const Header = memo(HeaderComponent)