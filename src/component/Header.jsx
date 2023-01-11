import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const Header = ({ content }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-title">
      <Link to={"page-list"} >
          
          QUẢN-LÝ-LIST-HÀNG-HÓA
      </Link>
      <Link to={"/page-form"}>
        <h3> Form-Nhập</h3>
      </Link>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Header;
