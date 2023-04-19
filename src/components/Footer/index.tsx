import { FacebookLogo, IconContext, InstagramLogo } from 'phosphor-react'
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
            <button type="button">
              <InstagramLogo />
            </button>
            <button type="button">
              <FacebookLogo />
            </button>
          </IconContext.Provider>
        </SocialMedias>
      </div>
    </FooterContainer>
  )
}
