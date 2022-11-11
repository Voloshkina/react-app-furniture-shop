import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList";

export default function Footer() {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-warning border-bottom pb-3 border-light logo">
              Furniture store
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                123 Consectetur at ligula 10660
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:010-020-0340">
                  010-020-0340
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a
                  className="text-decoration-none"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Категорії
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <CategoriesList />
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Додаткова інформація
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li className="pb-3">
                <Link className="  text-decoration-none" to="/">
                  Головна
                </Link>
              </li>
              <li className="pb-3">
                <Link className=" text-decoration-none" to="/about-us">
                  Про нас
                </Link>
              </li>

              <li className="pb-3">
                <Link className="text-decoration-none" to="/shop">
                  Магазин
                </Link>
              </li>
              <li className="pb-3">
                <Link className="text-decoration-none" to="/contact">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="http://facebook.com/"
                >
                  <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  <i className="fab fa-instagram fa-lg fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="subscribeEmail">
              Email address
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control bg-dark border-light"
                id="subscribeEmail"
                placeholder="Email address"
              />
              <div className="input-group-text btn-warning text-light">
                Відправити
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left text-light">
                Copyright &copy; 2022 Furniture store | Designed by
                {" Olena Voloshyna"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
