import { MouseEventHandler } from 'react';
import { Product } from '../../types/Product';

export type ArrowProps = {
  className: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export type CarouselProps = {
  title: string
  products: Product[]
}