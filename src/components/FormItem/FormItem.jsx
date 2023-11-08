import { useState } from "react"
import useStore from "../../hooks/useStore"
import StockItems from "../../entities/StockItems"
import styles from "./style.module.css"

export default function FormItem({ ItemToUpdate }) {
  const defaultItem = {
    name: "",
    cover: "",
    price: 0,
    quantity: 0,
    textarea: ""
  }

  const { addItem } = useStore()
  const [item, setItem] = useState(ItemToUpdate ? ItemToUpdate : defaultItem)


  const handleChange = (ev) => { setItem((currentState) => ({ ...currentState, [ev.target.name]: ev.target.value })) }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    try {
      const validItem = new StockItems(item)
      addItem(validItem)
      alert("Item cadastrado")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer} >
        <div>
          <label htmlFor="name" className={styles.label}>Nome do produto:</label>
          <input type="text" name="name" id="name" value={item.name} onChange={handleChange} className={styles.input} />
        </div>
        <div>
          <label htmlFor="cover" className={styles.label}>Imagem do produto:</label>
          <input type="text" name="cover" id="cover" value={item.cover} onChange={handleChange} className={styles.input} />
        </div>
        <div>
          <label htmlFor="price" className={styles.label}>Preço:</label>
          <input type="number" name="price" id="price" min={1} value={item.price} onChange={handleChange} className={styles.input} />
        </div>
        <div>
          <label htmlFor="quantity" className={styles.label}>Quantidade:</label>
          <input type="number" name="quantity" id="quantity" min={1} value={item.quantity} onChange={handleChange} className={styles.input} />
        </div>
      </div>
      <div className={styles.textareaContainer}>
        <label htmlFor="description" className={styles.label}>Descrição</label>
        <textarea name="description" id="description" cols="30" rows="10" value={item.description} onChange={handleChange} className={styles.textarea} ></textarea>
      </div>
      <button className={styles.button}>ENVIAR</button>
    </form>

  )
}