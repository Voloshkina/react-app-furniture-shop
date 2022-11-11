import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/account/accountSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const users = useSelector((state) => state.users.value);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showWrongUser, setShowWrongUser] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUserExist = users.find((el) => el.email === userEmail);

    if (isUserExist) {
      if (isUserExist.password === userPassword) {
        dispatch(login(isUserExist));
        navigate("/shop");
      }
      setShowWrongUser(true);
    } else setShowWrongUser(false);
  };
  return (
    <form className=" col" onSubmit={handleSubmit}>
      <h3 className="title  pt-5 pb-3">
        Увійти в обліковий запис
        <p className="desription mt-2">Для зареєстрованих клієнтів</p>
      </h3>
      <div className="mb-3">
        <label className="form-label">Email адреса</label>
        {!showWrongUser && (
          <div classNameName="text-danger">Невірний Email</div>
        )}
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          data-name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Пароль</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          data-name="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-warning">
        Авторизуватись
      </button>
    </form>
  );
}
