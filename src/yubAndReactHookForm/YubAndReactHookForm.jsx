//  copy từ thằng form

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitTodoList } from "../slice/createrSlice";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

let schema = yup.object().shape({
  code: yup.string().required(),
  name: yup.string().required(),
});

const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit ,formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const onSubmit = (data) => {
    console.log(data);
    // e.preventDefault();
      // dispatch(submitTodoList(formData));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="item">
          <label>Mã hàng</label>
          <input {...register("code")} />
          {errors.code && <div className="err">{errors.code.message}</div>} 
        </div>
        <div className="item">
          <label>Tên</label>
          <input {...register("name")} />
          {errors.name !== "" && <div className="err">{errors.name}</div>} 
        </div>
        <div className="item">
          <label>Loại ngành hàng</label>
          <select {...register("type")} >
            <option value="toys">toys</option>
            <option value="food">food</option>
            <option value="education">education</option>
            <option value="book">book</option>
          </select>
        </div>
        <div className="item">
          <label>Số lượng</label>
          <input name="amount" type="number"  />
          {errors.amount !== "" && <div className="err">{errors.amount}</div>} 
        </div>
        <div className="item">
          <label>Giá nhập</label>
          <input name="importPrice" type="number"  />
          {errors.importPrice !== "" && <div className="err">{errors.importPrice}</div>} 
        </div>
        <div className="item">
          <label>Giá bán</label>
          <input name="price" type="number"  />
          {errors.price !== "" && <div className="err">{errors.price}</div>} 
        </div>
        <div className="submit">
          <input type={'submit'} className="btn-submit" />
        </div>
      </form>
    </>
  );
};

export default Form;
