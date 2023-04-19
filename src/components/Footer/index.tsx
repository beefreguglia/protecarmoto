import {
  FacebookLogo,
  IconContext,
  InstagramLogo,
  WhatsappLogo,
} from 'phosphor-react'
import { FooterContainer, SocialMedias } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>Desenvolvido por Bernardo Freguglia</p>
        <SocialMedias>
          <IconContext.Provider
            value={{
              size: 28,
              mirrored: false,
              weight: 'fill',
            }}
          >
            <WhatsappLogo />
            <InstagramLogo />
            <FacebookLogo />
          </IconContext.Provider>
        </SocialMedias>
      </div>
    </FooterContainer>
  )
}
