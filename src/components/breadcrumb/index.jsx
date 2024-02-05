import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ link, text }) => {
  return (
    <div className="container">
      <Breadcrumbs className="mt-11">
        <Link to="/" className="">
          HOME
        </Link>
        <Link to={`/products/${link}`}>{text}</Link>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
