import praMotoImage from '@/assets/pramotocard.png'
import proCarImage from '@/assets/procarcard.png'
import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import * as Pin from '@/components/Pin'
import * as Separator from '@radix-ui/react-separator/dist'
import Image, { StaticImageData } from 'next/image'
import {
  BannerContainer,
  CardsContainer,
  HomeContainer,
  PinsContainer,
} from './styles'
import { WhatsappButton } from '@/components/WhatsappButton'

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

interface Product {
  image: string | StaticImageData
  name: string
  description: string
}

const products: Product[] = [
  {
    name: 'Protecar',
    description:
      'O Protecar é o dispositivo definitivo para garantir a segurança do seu carro!',
    image: proCarImage,
  },
  {
    name: 'Pramoto',
    description:
      'O Pramoto é o dispositivo definitivo para garantir a segurança do sua moto!',
    image: praMotoImage,
  },
]

export default function Home() {
  const firstArray = pins.slice(0, 4)
  const secondArray = pins.slice(4)
  return (
    <>
      <Header />
      <BannerContainer>
        <Image
          src="/bannersite.png"
          quality={100}
          alt="Logo protecarmoto"
          fill
        />
      </BannerContainer>
      <HomeContainer>
        <PinsContainer>
          <div>
            <div className="firstContainer">
              {firstArray.map((pin, i) => (
                <Pin.PinRoot time={i + 1} key={pin.text}>
                  <Pin.PinIcon icon={pin.icon} />
                  <Pin.PinText text={pin.text} />
                </Pin.PinRoot>
              ))}
            </div>
            <div className="secondContainer">
              {secondArray.map((pin, i) => (
                <Pin.PinRoot time={i + 5} key={pin.text}>
                  <Pin.PinIcon icon={pin.icon} />
                  <Pin.PinText text={pin.text} />
                </Pin.PinRoot>
              ))}
            </div>
          </div>
        </PinsContainer>
        <Separator.Root className="SeparatorRoot" />
        <CardsContainer>
          {products.map((product) => (
            <Card key={product.name} product={product} />
          ))}
        </CardsContainer>
      </HomeContainer>
      <WhatsappButton />
      <Footer />
    </>
  )
}
