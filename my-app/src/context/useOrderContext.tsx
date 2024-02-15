import { FC, ReactNode, createContext, useContext } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import { useSnackContext } from "./useSnackContext";
import { OrderProductType } from "../types/OrderProductType";

type Props = {
  children: ReactNode;
};

type OrderProviderType = {
  order: OrderProductType[];
  addToOrder: (id: string) => void;
  removeFromOrder: (id: string) => void;
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
};

const OrderContext = createContext<OrderProviderType>({
  order: [],
  addToOrder: () => [],
  removeFromOrder: () => [],
  increaseCount: () => [],
  decreaseCount: () => [],
})

export const OrderProvider: FC<Props> = ({ children }: Props) => {
  const [order, setOrder] = useLocalStorage('order', []);

  const { setSnack } = useSnackContext();

  const addToOrder = (id: string) => {
    const found:OrderProductType = order.find((product: OrderProductType) => {
      return product.id === id;
    });
    if (typeof found !== undefined) {
      // const newCount = found.count + orderItem.count;
      const newCount = found.count + 1;
      setOrder(
        order.map((product: OrderProductType) =>
        product.id !== id ? product : { ...product, count: newCount }
        )
      );
      setSnack({
        message: 'You added the same product',
        severity: 'warning',
        open: true,
        autoHideDuration: 2000,
      });
    } else {
      setOrder([
        ...order,
        {
          id,
          // count: orderItem.count,
          count: 1,
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
      message: 'You added product',
      severity: 'warning',
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

  const value = {
    order,
    addToOrder,
    removeFromOrder,
    increaseCount,
    decreaseCount,
  }

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrderContext = () => useContext(OrderContext)