import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../features/users/usersSlice";

export default function Registration() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPasswordVerify, setUserPasswordVerify] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (userPassword === userPasswordVerify) {
      dispatch(
        addNewUser({ name: userName, email: userEmail, password: userPassword })
      );
    } else console.log("Error");
    e.preventDefault();
  };
  return (
    <form className=" col" onSubmit={handleSubmit}>
      <h3 className="title   pt-5 pb-3">
        Пройти швидку реєстрацію
        <p className="desription mt-2">Для нових клієнтів</p>
      </h3>
      <div className="mb-3">
        <label className="form-label">Ім'я</label>
        <input
          type="name"
          className="form-control"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email адреса</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
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
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Повторно введіть пароль</label>
        <input
          type="password"
          className="form-control"
          placeholder="Verify Password"
          value={userPasswordVerify}
          onChange={(e) => setUserPasswordVerify(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-warning">
        Зареєструватись
      </button>
    </form>
  );
}
