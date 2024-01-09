import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 bg-fixed">
  
        <SectionTitle
          subHeading="Check it out"
          heading="Featured Item"
        ></SectionTitle>
      

      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-700 bg-opacity-40">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 20023</p>
          <p className="uppercase"> where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ullam
            est sapiente ex, eligendi quam laboriosam rerum provident quis
            inventore obcaecati, debitis in ipsum unde amet sint veritatis! Modi
            expedita, cupiditate asperiores quae ab amet vero totam excepturi
            facere? Consectetur, dolores nihil atque quia facilis ipsa
            exercitationem consequuntur odit tempora.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
