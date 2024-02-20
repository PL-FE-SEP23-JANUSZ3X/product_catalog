type DescriptionItem = {
  text: string[];
  title: string;
};

export type Product = {
  capacity: string;
  color: string;
  colorsAvailable: string[];
  createdAt: string;
  description: DescriptionItem[];
  id: string;
  itemId: string;
  image: string;
  name: string;
  namespaceId: string;
  price: number;
  fullPrice: number;
  ram: string;
  screen: string;
};
