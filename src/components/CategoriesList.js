import { useSelector } from "react-redux";

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
          <a className="text-decoration-none" href="#">
            {item.category}
          </a>
        </li>
      ))}
    </>
  );
}
