import { Link, useParams } from "react-router-dom"
import useStore from "../../../hooks/useStore"
import style from "./style.module.css"
export default function ShowItem() {
  const { getItem, addCart, removeItemMenu } = useStore()
  const { id } = useParams()

  const item = getItem(id)

  return (
    <div>
      <div className={style.itemContent}>
        <img src={item.cover} alt={item.name} className={style.itemImg} />
        <div className={style.infoContent}>
          <p className={style.name}>{item.name}</p>
          <p className={style.description}>{item.description}</p>
          <p className={style.price}>R${item.price}</p>
          <button onClick={() => addCart(item)} className={style.buttonBuy}>comprar</button>
          <Link to={"/"}><button onClick={() => removeItemMenu(item.id)} className={style.remove}>Remover</button></Link>
        </div>
      </div>

    </div>
  )
}