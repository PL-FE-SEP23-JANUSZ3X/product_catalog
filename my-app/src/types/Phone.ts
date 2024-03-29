type DescriptionItem = {
  text: string[];
  title: string;
};

export type Phone = {
  camera: string;
  capacity: string;
  capacityAvailable: string[];
  cell: string[];
  color: string;
  colorsAvailable: string[];
  createdAt: string;
  description: DescriptionItem[];
  id: string;
  images: string[];
  name: string;
  namespaceId: string;
  priceDiscount: number;
  priceRegular: number;
  processor: string;
  ram: string;
  resolution: string;
  screen: string;
  updatedAt: string;
  zoom: string;
};
