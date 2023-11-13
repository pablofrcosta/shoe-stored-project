import { Outlet } from "react-router-dom";
import FooterInfo from "../components/FooterInfo";
import Header from "../components/Header";


export default function RootLayout() {


  return (
    <div className="homeContainer">
      <Header />
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