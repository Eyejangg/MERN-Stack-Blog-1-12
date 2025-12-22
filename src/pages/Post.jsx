import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { title,author,summary,cover,createAt, _id , index = 0}) => {
    const isEven = index % 2 === 0;
  }
  return (
    <div className={`card card-side bg-base-100 shadow-xl mb-4
    ${isEven ? "flex-row" : "flex-row-reverse"}`}>
      

    <figure>
      <img src={cover} alt="Movie" />>
    </figure>
    <div className="card-body">
      <h2 className=" card-title"> {title} </h2><
       <p>
        {author.username} | {createdAt}
       </p>
       <p>{summary}</p><div className="card-actions justify-end">
        </div>
        <a href={"post/" + _id} className="btn btn-primary">
        More </a>
    </div>
