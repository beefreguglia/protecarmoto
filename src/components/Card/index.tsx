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
      <div className="image">
        <Image width={400} height={400} src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </CardContainer>
  )
}
