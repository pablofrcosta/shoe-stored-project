import { Link, Outlet } from "react-router-dom";
import useStore from "../hooks/useStore";
import FooterInfo from "../components/FooterInfo";


export default function RootLayout() {
  const { IsLoggedIn } = useStore()


  return (
    <div className="homeContainer">
      <header>
        <nav>
          <Link to={"/"}><h1>Logo</h1></Link>
          <div>
            <Link to={"/"}><p>FootWear</p></Link>
          </div>
          <div>
            <Link to={"/login"} style={{ color: 'white' }}>LOGIN</Link>
            <Link to={"/cart"} style={{ color: 'white' }}>CART</Link>
            {IsLoggedIn && (
              <Link to={"/items"}>items</Link>
            )}
          </div>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <h1>PALAVRAS MAIS BUSCADAS</h1>
        <hr style={{ color: "white" }} />
        <div className="footerInfo">
          <FooterInfo />
        </div>
      </footer>
    </div>
  )
}