import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../features/account/accountSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.account.value);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          to="/"
          className="navbar-brand text-warning logo h1 align-self-center"
          href="index.html"
        >
          Furniture store
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#templatemo_main_nav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
          id="templatemo_main_nav"
        >
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Головна
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  Про нас
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Магазин
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <Link
              className="nav-icon position-relative text-decoration-none"
              to="/basket"
            >
              <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
              <span className=" userName position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                {user.basket.length}
              </span>
            </Link>
            <Link
              className="nav-icon position-relative text-decoration-none"
              to="/account"
            >
              <i className="fa fa-fw fa-user text-dark mr-3"></i>
              <span className="userName position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                Hi, {!user.name ? "User" : user.name}
              </span>
            </Link>
            {user.name && (
              <button
                onClick={() => {
                  dispatch(logout());
                }}
                className="logout btn"
              >
                Вихід
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
