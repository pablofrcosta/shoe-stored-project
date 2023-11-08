import { useEffect, useState } from "react"
import useStore from "../hooks/useStore"

export default function CartContent() {
  const { cartItems, removeItem } = useStore()
  const [itemQuantities, setItemQuantities] = useState({})

  useEffect(() => {
    const initialQuantities = {}
    cartItems.forEach((item) => {
      initialQuantities[item.id] = { quantity: 1 }
    })
    setItemQuantities(initialQuantities)
  }, [cartItems])

  const decreaseQuantity = (itemId) => {
    if (itemQuantities[itemId]?.quantity > 1) {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: {
          ...itemQuantities[itemId],
          quantity: itemQuantities[itemId].quantity - 1,
        },
      });
    }
  };

  const increaseQuantity = (itemId) => {
    setItemQuantities({
      ...itemQuantities,
      [itemId]: {
        ...itemQuantities[itemId],
        quantity: (itemQuantities[itemId]?.quantity || 1) + 1,
      },
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: {
          ...itemQuantities[itemId],
          quantity: newQuantity,
        },
      });
    }
  };

  let totalPrice = 0;

  cartItems.forEach((item) => {
    const quantity = itemQuantities[item.id]?.quantity || 0;
    const itemPrice = item.price * quantity;
    totalPrice += itemPrice;
  });

  totalPrice = totalPrice.toFixed(2)
  const totalItemsCart = cartItems.length

  return (
    <div className="cartItemsContainer">
      <div className="cart">
        {cartItems.map((item) => (
          <div key={item.id} className="cartContainer">
            <div className="cartContent">
              <img src={item.cover} alt={item.name} className="cartImg" />
              <div>
                <p className="nameCart">{item.name}</p>
                <p className="descriptionCart">{item.description}</p>
                <p className="priceCart">R${item.price * itemQuantities[item.id]?.quantity}</p>
                <hr />
                <div>
                  <label htmlFor={`quantity-${item.id}`} style={{ fontSize: "1.2vw", marginRight: "2rem" }}>Quantidade:</label>
                  <button onClick={() => decreaseQuantity(item.id)} style={{ borderRadius: "2rem" }}>-</button>
                  <input
                    type="number"
                    name={`quantity-${item.id}`}
                    id={`quantity-${item.id}`}
                    value={itemQuantities[item.id]?.quantity || 1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="inputQuantity"
                    readOnly
                  />
                  <button onClick={() => increaseQuantity(item.id)} style={{ borderRadius: "2rem" }}>+</button>
                  <button onClick={() => removeItem(item.id)}>remover</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="buyItems">

        <h1 style={{ color: "black" }}>{`Subtotal (${totalItemsCart} item)`}<p style={{ color: "black" }}>R${totalPrice}</p></h1>
        <hr style={{ backgroundColor: "black" }} />
        <h1 style={{ color: "black" }}>Cupom de desconto</h1>
        <hr style={{ backgroundColor: "black" }} />
        <h1 style={{ color: "black" }}>{`Valor total`}<p style={{ color: "black" }}>R${totalPrice}</p></h1>
        <button>Finalizar</button>
      </div>
    </div>
  )
}