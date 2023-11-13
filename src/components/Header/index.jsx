import { Link } from 'react-router-dom'
import style from './style.module.css'
import useStore from "../../hooks/useStore";
import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const { IsLoggedIn } = useStore()


  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link to={"/"}><h1 className={style.logo}>Logo</h1></Link>
        <div>
          <Link to={"/"}><p className={style.title}>FootWear</p></Link>
        </div>
        <div>
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <AiOutlineMenu />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><Link to={"/login"} style={{ color: 'black' }} className={style.login}>LOGIN</Link></Dropdown.Item>
              <Dropdown.Item><Link to={"/cart"} style={{ color: 'black' }} className={style.cart}>CART</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </header >
  )
}