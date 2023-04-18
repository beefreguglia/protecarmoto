import Image from 'next/image'
import logoImage from '../../assets/logo.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Image
          src={logoImage}
          width={240}
          quality={100}
          alt="Logo protecarmoto"
        />
      </div>
    </HeaderContainer>
  )
}
