import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../features/account/accountSlice";
import { Link } from "react-router-dom";

export default function Basket() {
  const products = useSelector((state) => state.products.value);
  const userSelectedProducts = useSelector(
    (state) => state.account.value.basket
  );
  const dispatch = useDispatch();

  const listOfSelected = userSelectedProducts.map((idSelected) => {
    const result = products.find((item) => item.id === parseInt(idSelected));
    return result;
  });

  const totalPrice = listOfSelected.reduce(
    (acc, product) => (acc += product.price),
    0
  );

  return (
    <div className="container">
      {listOfSelected.length > 0 ? (
        <div className="">
          <div className="mt-5 ">
            <table className="table align-middle  ">
              <thead>
                <tr className="p-5">
                  <th scope="col">Продукт</th>
                  <th scope="col">Ціна</th>
                  <th scope="col"></th>
                  <th scope="col">Всього:</th>
                  <th scope="col">{totalPrice} UAH</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {listOfSelected.map((item, i) => (
                  <tr>
                    <th scope="row">
                      <div className="item__info">
                        <img
                          src={item.img}
                          alt={item.title}
                          height="100"
                          width="150"
                        />
                      </div>
                      <p>{item.title}</p>
                    </th>
                    <td>{item.price} UAH</td>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <td>
                      <button
                        onClick={() => {
                          dispatch(removeFromBasket(item.id));
                        }}
                        className="btn btn-warning"
                      >
                        Видалити
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div class="form-row text-center p-5">
          <Link to="/shop">
            <button className="btn btn-warning  m-5 ">
              Перейти до вибору товару{" "}
            </button>
          </Link>{" "}
        </div>
      )}
    </div>
  );
}
