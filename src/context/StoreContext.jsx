import { createContext, useState } from "react"
import initialItems from "../../data.json"



export const StoreContext = createContext()

export default function StoreContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('shoe-stored')
    if (!storedItems) return initialItems
    const items = JSON.parse(storedItems)
    return items
  })

  const [IsLoggedIn, setIsLoggedIn] = useState(false)
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cart-items');
    if (!storedCartItems) return [];
    return JSON.parse(storedCartItems);
  });

  const addCart = (item) => {
    setCartItems([...cartItems, item])
    localStorage.setItem('cart-items', JSON.stringify([...cartItems, item]));
  }

  const addItem = (item) => {
    setItems((current) => {
      const updatedItem = [item, ...current]
      localStorage.setItem('shoe-stored', JSON.stringify(updatedItem))
      return updatedItem
    })
  }

  const getItem = (itemId) => {
    return items.find(item => item.id === +itemId)
  }

  const removeItem = (itemId) => {
    localStorage.setItem('cart-items', JSON.stringify(cartItems.filter(item => item.id !== itemId)));
    setCartItems((current) => {
      return current.filter(item => item.id !== itemId);
    });
  }

  const removeItemMenu = (itemId) => {
    alert("Item removido")
    setItems((current) => {
      const updatedItems = current.filter(item => item.id !== itemId)
      localStorage.setItem('shoe-stored', JSON.stringify(updatedItems))
      return updatedItems
    })
  }


  const stockitems = {
    items,
    addItem,
    IsLoggedIn,
    setIsLoggedIn,
    addCart,
    cartItems,
    getItem,
    removeItem,
    removeItemMenu

  }

  return (
    <StoreContext.Provider value={stockitems}>
      {children}
    </StoreContext.Provider>
  )


}