import Image, { StaticImageData } from 'next/image'
import { CardContainer } from './styles'

interface Product {
  image: string | StaticImageData
  name: string
  description: string
}

interface CardProps {
  product: Product
}

export function Card({ product }: CardProps) {
  const { image, name, description } = product
  return (
    <CardContainer>
      <Image width={200} height={200} src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </CardContainer>
  )
}
