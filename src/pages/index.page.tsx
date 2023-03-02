import { Header } from '@/components/header'
import Image from 'next/image'
import { Card, HomeContainer, Subtitle, Title } from './styles'
import CoffeeImage from '@/assets/cafe.png'

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Card>
          <div>
            <Title>
              Proteja seu veículo com os melhores alarmes automotivos do
              mercado!
            </Title>
            <Subtitle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              culpa consectetur nam dolorem adipisci, iste, et facere beatae
            </Subtitle>
          </div>
          <Image
            src={CoffeeImage}
            alt="Imagem de café"
            width={500}
            height={350}
          />
        </Card>
      </HomeContainer>
    </>
  )
}
