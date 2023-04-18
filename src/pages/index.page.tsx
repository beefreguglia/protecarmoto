import { Header } from '@/components/Header'
import * as Pin from '@/components/Pin'
import logoImage from '../assets/logo.png'

import {
  BannerContainer,
  HomeContainer,
  ImageContainer,
  PinsContainer,
  StyledImage,
  TitleContainer,
} from './styles'

interface PinData {
  icon:
    | 'Rss'
    | 'Battery'
    | 'Gear'
    | 'LightningSlash'
    | 'Lock'
    | 'Shield'
    | 'Drop'
    | 'Money'
    | 'Polygon'
  text: string
}

const pins: PinData[] = [
  { icon: 'Rss', text: 'Função presença' },
  { icon: 'Battery', text: 'Não consome bateria do veículo' },
  { icon: 'Gear', text: 'Instalação simples e rápida' },
  { icon: 'LightningSlash', text: 'Sem corte de fios para instalação' },
  { icon: 'Lock', text: '3 tipos de bloqueios' },
  { icon: 'Shield', text: 'Segurança' },
  { icon: 'Drop', text: 'Resistente à água' },
  { icon: 'Money', text: 'Custo benefício' },
  { icon: 'Polygon', text: 'Compatível com todos os modelos' },
]

export default function Home() {
  const firstArray = pins.slice(0, 4)
  const secondArray = pins.slice(4)
  return (
    <>
      <Header />
      <BannerContainer>
        <TitleContainer>
          <h2>Acelere com segurança,</h2>
          <h3>
            Proteja seu veículo com a combinação perfeita de tecnologia avançada
            e eficiência máxima.
          </h3>
        </TitleContainer>
        <ImageContainer>
          <StyledImage
            src={logoImage}
            width={400}
            quality={100}
            alt="Logo protecarmoto"
          />
        </ImageContainer>
      </BannerContainer>

      <HomeContainer>
        <PinsContainer>
          <div className="firstContainer">
            {firstArray.map((pin) => (
              <Pin.PinRoot key={pin.text}>
                <Pin.PinIcon icon={pin.icon} />
                <Pin.PinText text={pin.text} />
              </Pin.PinRoot>
            ))}
          </div>
          <div className="secondContainer">
            {secondArray.map((pin) => (
              <Pin.PinRoot key={pin.text}>
                <Pin.PinIcon icon={pin.icon} />
                <Pin.PinText text={pin.text} />
              </Pin.PinRoot>
            ))}
          </div>
        </PinsContainer>
      </HomeContainer>
    </>
  )
}
