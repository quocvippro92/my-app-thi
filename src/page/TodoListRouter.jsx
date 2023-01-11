import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../component/Form";
import TodoItem from "../component/TodoItem";
import Home from "../home/Home";
import { useNavigate, Navigate } from "react-router-dom";

const TodoListRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to={'/page-list'}/>}/>
          <Route path="page-form" element={<Form />} />
          <Route path="page-list" element={<TodoItem />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default TodoListRouter;
