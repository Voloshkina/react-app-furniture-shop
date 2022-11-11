import Login from "./Login";
import Registration from "./Registration";

export default function Account() {
  return (
    <div className="container">
      <div className="row  py-5 ">
        <Login />
        <Registration />
      </div>
    </div>
  );
}
