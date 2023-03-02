import { Header } from '@/components/header'
import { Card, HomeContainer, Title } from './styles'

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Card>
          <div>
            <Title>
              Proteja seu veículo com os melhores alarmes automotivos do mercado
            </Title>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              culpa consectetur nam dolorem adipisci, iste, et facere beatae
            </h3>
          </div>
        </Card>
      </HomeContainer>
    </>
  )
}
