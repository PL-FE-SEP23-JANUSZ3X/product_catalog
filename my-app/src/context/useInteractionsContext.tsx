import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import { useSnackContext } from "./useSnackContext";
import { OrderProductType } from "../types/OrderProductType";
import { FavouriteType } from "../types/FavouriteType";

type Props = {
  children: ReactNode;
};

type InteractionsProviderType = {
  order: OrderProductType[];
  total: number;
  addToOrder: (id: string, price: number) => void;
  removeFromOrder: (id: string) => void;
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;

  favourites: FavouriteType[];
  toggleFavourites: (id: string) => void;
};

const InteractionsContext = createContext<InteractionsProviderType>({
  order: [],
  total: 0,
  addToOrder: () => [],
  removeFromOrder: () => [],
  increaseCount: () => [],
  decreaseCount: () => [],

  favourites: [],
  toggleFavourites: () => [],
})

export const InteractionsProvider: FC<Props> = ({ children }: Props) => {
  const [order, setOrder] = useLocalStorage('order', []);
  const [total, setTotal] = useState<number>(0)
  const [favourites, setFavourites] = useLocalStorage('favourites', []);

  const { setSnack } = useSnackContext();

  useEffect(() => {
    let result = 0;
    order.forEach((product: OrderProductType) => {
      result += product.price * product.count;
    });
    setTotal(result);
  }, [order])

  const addToOrder = (id: string, price: number) => {
    const found:OrderProductType = order.find((product: OrderProductType) => {
      return product.id === id;
    });
    if (found !== undefined) {
      const newCount = found.count + 1;
      setOrder(
        order.map((product: OrderProductType) =>
        product.id !== id ? product : { ...product, count: newCount, price }
        )
      );
      setSnack({
        message: 'You added the same product',
        severity: 'success',
        open: true,
        autoHideDuration: 2000,
      });
    } else {
      setOrder([
        ...order,
        {
          id,
          count: 1,
          price,
        },
      ]);
      setSnack({
        message: 'You added new product to your shopping cart',
        severity: 'success',
        open: true,
        autoHideDuration: 2000,
      });
    }
  };

  const removeFromOrder = (id: string) => {
    setOrder((prevState: OrderProductType[]) => prevState.filter((item) => item.id !== id));
    setSnack({
      message: 'You removed product from your shopping cart',
      severity: 'warning',
      open: true,
      autoHideDuration: 2000,
    });
  };

  const increaseCount = (id: string) => {
    setOrder((prevState: OrderProductType[]) => {
      return prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      );
    });
    setSnack({
      message: 'You added one more product',
      severity: 'success',
      open: true,
      autoHideDuration: 2000,
    });
  };

  const decreaseCount = (id: string) => {
    setOrder((order: OrderProductType[]) => {
      return order.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count - 1,
            }
          : item
      );
    });
    setSnack({
      message: 'You removed product',
      severity: 'warning',
      open: true,
      autoHideDuration: 2000,
    });
  };

  const toggleFavourites = (id: string) => {
    const found:FavouriteType = favourites.find((product: FavouriteType) => {
      return product.id === id;
    });

    if (found !== undefined) {
      setFavourites((prevState: FavouriteType[]) => prevState.filter((item) => item.id !== id));

      setSnack({
        message: "You don't like this product anymore",
        severity: 'success',
        open: true,
        autoHideDuration: 2000,
      });
    } else {
      setFavourites([
        ...favourites, { id },
      ]);
      setSnack({
        message: 'You have added a new product to your favourites',
        severity: 'success',
        open: true,
        autoHideDuration: 2000,
      });
    };
  };
  const value = {
    order,
    total,
    addToOrder,
    removeFromOrder,
    increaseCount,
    decreaseCount,

    favourites: favourites,
    toggleFavourites,
  }

  return (
    <InteractionsContext.Provider value={value}>
      {children}
    </InteractionsContext.Provider>
  );
}

export const useInteractionsContext = () => useContext(InteractionsContext)