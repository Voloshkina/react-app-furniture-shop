import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoriesList({ handleClick }) {
  const categories = useSelector((state) => state.categories.value);

  return (
    <>
      {categories.map((item, i) => (
        <li
          key={i + 1}
          onClick={() => handleClick(item.category)}
          className="pb-3"
        >
          <Link to="/shop" className="text-decoration-none ">
            {item.category}
          </Link>
        </li>
      ))}
    </>
  );
}
