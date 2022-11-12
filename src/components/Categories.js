import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Categories() {
  const categories = useSelector((state) => state.categories.value);
  const currentItems = categories.filter(
    (item) => item.categoryImg && item.category
  );

  return (
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Категорії товарів</h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="row">
        {currentItems.map((item, i) => (
          <div className="col-6 col-md-3 p-5 mt-3 align-self-center">
            <a>
              <img
                key={i + 1}
                src={item.categoryImg}
                className=" img-thumbnail border"
                alt={item.category}
              />
            </a>
            <h5 className="text-center mt-3 mb-3">{item.category}</h5>
            <p className="text-center">
              <Link to="/shop" className="btn btn-warning">
                Купити
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
