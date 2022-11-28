import { CategoryCardContainer } from "../styles"

interface CategoryCardProps {
  category?: string
  image?: string
  link: string
}

export function CategoryCard({ category, image, link }: CategoryCardProps) {
  return (
    <CategoryCardContainer to={link}>
      <h3>{category}</h3>
      <img src={image} alt="" width="100%" height="85%" />
    </CategoryCardContainer>
  )
}
