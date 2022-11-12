import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addToBasket } from "../features/account/accountSlice";

export default function ProductDetails() {
  let { productId } = useParams();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.account.value.status);
  const product = useSelector((state) =>
    state.products.value.find((el) => el.id === parseInt(productId))
  );
  const dispatch = useDispatch();

  return (
    <section className="  bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                className="card-img img-fluid"
                src={product.img}
                alt="Card"
                id="product-detail"
              />
            </div>
          </div>

          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">{product.title}</h1>
                <p className="h3 py-2">{product.price} UAH</p>
                <p className="py-2">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <span className="list-inline-item text-dark">
                    Рейтинг 4.8
                  </span>
                </p>
                <h6>Характеристика</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temp incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse. Donec condimentum elementum convallis.
                  Nunc sed orci a diam ultrices aliquet interdum quis nulla.
                </p>

                <form action="" method="GET">
                  <input
                    type="hidden"
                    name="product-title"
                    value="Activewear"
                  />
                  <div className="row">
                    <div className="col-auto"></div>
                  </div>
                  <div className="row pb-3">
                    <div className="col d-grid">
                      <a
                        href="#/"
                        onClick={() => {
                          if (userStatus) {
                            dispatch(addToBasket(product.id));
                          } else {
                            navigate("/account");
                          }
                        }}
                        className="btn btn-warning btn-lg"
                      >
                        Додати до корзини
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
