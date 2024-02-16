import Item from '../itemCard/ItemCard.types'

export type ArrowProps = {
  className: string;
  onClick: void;
}

export type CarouselProps = {
  title: string
  products: Item[]
}