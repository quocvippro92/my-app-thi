import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoList } from "../slice/createrSlice";


const TodoItem = () => {
  const listData = useSelector((state) => state.todoListReducer.list);
  const dispatch = useDispatch()
  const handleDelete = (item)=>{
      dispatch(deleteTodoList(item))
  }
  return (
    <div className="style_listdata">
      {listData.map((todo, index) => (
        <div key={index} className="style-item">
          <p>
            <strong>Mã hàng :</strong> <span>{todo.id}</span>
          </p>
          <p>
            <strong>Tên :</strong> <span>{todo.name}</span>
          </p>
          <p>
            <strong>Loại Hàng Hóa :</strong> <span>{todo.industry}</span>
          </p>
          <p>
            <strong>Số Lượng:</strong> <span>{todo.amount}</span>
          </p>
          <p>
            <strong>Giá Nhập :</strong> <span>{todo.importPrice}</span>
          </p>
          <p>
            <strong>Giá Bán :</strong> <span>{todo.price}</span>
          </p>
          <button className="btn-submit btn-delete" onClick={handleDelete}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
