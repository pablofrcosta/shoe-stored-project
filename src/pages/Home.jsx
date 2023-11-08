import { Link } from "react-router-dom";
import DarkVariantExample from "../components/DarkVariantExample";
import useStore from "../hooks/useStore";
import banner from "../img/banner.jpg"


export default function Home() {
  const { items, addCart } = useStore()

  return (
    <div className="home m-0">
      <div className="mainContainer">
        <div className="carrossel">
          <DarkVariantExample />
        </div>
        <div className="carrossel">
          <DarkVariantExample />
        </div>
        <div className="carrossel">
          <DarkVariantExample />
        </div>
      </div>
      <div className="titleSection">
        <img src={banner} alt="image" className="bannerImage" />
      </div>
      <section>
        {items.map((item) => (
          <div key={item.id} className="itemsContainer">
            <div className="itemContent">
              <Link to={`/${item.id}`}><img src={item.cover} alt={item.name} className="itemImg" /></Link>
              <hr style={{ color: "black" }} />
              <p className="name">{item.name}</p>
              <p className="description">{item.description}</p>
              <p className="price">R${item.price}</p>
              <button onClick={() => addCart(item)} style={{ fontSize: "1.5vw" }}>comprar</button>
            </div>
          </div>
        ))}
      </section>

    </div>

  )
}