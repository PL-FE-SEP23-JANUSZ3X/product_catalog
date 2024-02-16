import { MouseEventHandler } from 'react';
import Item from '../itemCard/ItemCard.types'

export type ArrowProps = {
  className: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export type CarouselProps = {
  title: string
  products: Item[]
}