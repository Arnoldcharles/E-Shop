export type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: ProductType[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 299,
    image: '/images/headphones.jpg',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199,
    image: '/images/watch.jpg',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 149,
    image: '/images/speaker.jpg',
  },
  {
    id: '4',
    name: 'Laptop Stand',
    price: 89,
    image: '/images/laptop-stand.jpg',
  },
];
