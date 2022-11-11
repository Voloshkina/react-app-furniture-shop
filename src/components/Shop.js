import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToBasket } from "../features/account/accountSlice";
import CategoriesList from "./CategoriesList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Shop() {
  const products = useSelector((state) => state.products.value);
  const userStatus = useSelector((state) => state.account.value.status);
  const [currentItems, setCurrentItems] = useState(products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (category) => {
    category === "Всі"
      ? setCurrentItems(products)
      : setCurrentItems(products.filter((el) => el.category === category));
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Категорії товарів</h1>
          <ul className="list-unstyled templatemo-accordion">
            <CategoriesList handleClick={handleClick} />
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {currentItems.map((product, i) => (
              <div key={i + 1} className="col-md-4 ">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      src={product.img}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <Link
                            className="btn btn-warning text-white mt-2"
                            to={"/product-details/" + product.id}
                          >
                            <i className="far fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              if (userStatus) {
                                dispatch(addToBasket(product.id));
                              } else {
                                navigate("/account");
                              }
                            }}
                            className="btn btn-warning text-white mt-2"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>{product.title}</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning  fa fa-star"></i>
                        <i className="text-warning  fa fa-star"></i>
                      </li>
                    </ul>
                    <p className="text-center mb-0">{product.price} UAH</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
