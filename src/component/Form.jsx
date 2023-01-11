import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { submitTodoList } from "../slice/createrSlice";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../localStore/LocalStorage";

const Form = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    industry: "",
    amount: "",
    importPrice: "",
    price: "",
  });
  const [error, setError] = useState({
    id: "",
    name: "",
    industry: "",
    amount: "",
    importPrice: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id === "") {
      setError({
        ...error,
        id: "vui long nhap id!!!!!",
      });
    }
    if (formData.name === "") {
      setError({
        ...error,
        id: "vui long nhap id!!!!!",
        name: "vui long nhap name!!!!!",
      });
    }
    if (formData.amount === "") {
      setError({
        ...error,
        id: "vui long nhap id!!!!!",
        name: "vui long nhap name!!!!!",
        amount: "vui long nhap amount!!!!!",
      });
    } else {
      setError({
        ...error,
        id: "",
        name: "",
        amount: "",
      });
      dispatch(submitTodoList(formData));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label>Mã hàng</label>
          <input name="id" type="text" onChange={handleChange} />
          {error.id !== "" && <div className="err">{error.id}</div>}
        </div>
        <div className="item">
          <label>Tên</label>
          <input name="name" type="text" onChange={handleChange} />
          {error.name !== "" && <div className="err">{error.name}</div>}
        </div>
        <div className="item">
          <label>Loại ngành hàng</label>
          <select name="industry" id="cars" onChange={handleChange}>
            <option value="toys">toys</option>
            <option value="food">food</option>
            <option value="education">education</option>
            <option value="book">book</option>
          </select>
        </div>
        <div className="item">
          <label>Số lượng</label>
          <input name="amount" type="number" onChange={handleChange} />
          {error.amount !== "" && <div className="err">{error.amount}</div>}
        </div>
        <div className="item">
          <label>Giá nhập</label>
          <input name="importPrice" type="number" onChange={handleChange} />
          {error.importPrice !== "" && (
            <div className="err">{error.importPrice}</div>
          )}
        </div>
        <div className="item">
          <label>Giá bán</label>
          <input name="price" type="number" onChange={handleChange} />
          {error.price !== "" && <div className="err">{error.price}</div>}
        </div>
        <div className="submit">
          <button className="btn-submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
