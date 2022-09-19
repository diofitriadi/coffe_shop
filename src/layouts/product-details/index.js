import Layout from "../../components/Layout";
import React, { useState } from "react";
import Link from "next/link";


const ProductsDetail = ({ productsDetail }) => {
  const productDetail = productsDetail.data[0];
  const [count, setCount] = useState(1);
  const increment = () => {
    if (count >= 10) {
      setCount(10);
    } else {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <Layout>
      <div className="bg-slate-200 ">
        <div className="w-full mx-auto pt-10 pb-24 md:px-20">
          <div className="text-sm">
            <p className="ml-7">
              Favorite and Promo {">"}
              <span className="text-[#6A4029] font-bold">
                {productDetail.product_name}
              </span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row  mt-5 w-full justify-around">
            <div className="flex flex-col justify-center items-center">
              <img
                src={`${process.env.NEXT_PUBLIC_URL_BE}/uploads/${productDetail.product_image}`}
                className="rounded-full w-[200px] h-[200px] md:w-[330px] md:h-[330px] my-8"
              />
              <h1 className="text-3xl font-extrabold"></h1>
              <h3 className="text-xl my-5">
                Rp. {productDetail.product_price}
              </h3>
              <button className="bg-[#6A4029] p-3 w-4/5 my-7 rounded-xl text-white font-extrabold">
                Add to cart
              </button>
              <button className="bg-[#FFBA33] p-3 w-4/5 rounded-xl text-[#6A4029] font-extrabold">
                Ask a staff
              </button>
            </div>
            <div className="flex flex-col md:w-5/12 w-[80%] mx-auto md:mx-0 mt-14 md:mt-0">
              <div className="bg-white rounded-lg px-12 py-10 shadow-lg h-fit text-[#6A4029] text-bold text-base md:text-xl">
                <p className="md:mb-16 mb-10 md:text-3xl text-xl font-extrabold text-center">
                  {productDetail.product_name}
                </p>
                <p className="md:mb-16 mb-10 ">
                  Delivery only on <b>Monday to Friday at 1 - 7 pm</b>
                </p>
                <p>{productDetail.product_desc}</p>
                <div className="md:mt-16 mt-10">
                  <p className="text-center text-black font-bold">
                    Choose a size
                  </p>
                  <div className="flex justify-center">
                    <h1 className="bg-[#FFBA33] hover:border-[#6A4029] font-semibold w-11 text-center text-lg p-2 my-5 mx-5 rounded-full">
                      <button>R</button>
                    </h1>
                    <h1 className="bg-[#FFBA33] font-semibold w-11 text-center text-lg p-2 my-5 mx-5 rounded-full">
                      <button>L</button>
                    </h1>
                    <h1 className="bg-[#FFBA33] font-semibold w-11 text-center text-lg p-2 my-5 mx-5 rounded-full">
                      <button>XL</button>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-12 md:px-12">
                <h4 className="font-bold text-center mb-1">
                  Choose the delivery method
                </h4>
                <div className="flex justify-between my-4">
                  <button className="bg-[#6A4029] text-white px-5 py-1 rounded-xl">
                    <p>Dine-In</p>
                  </button>
                  <button className="bg-[#F4F4F8] text-[#9F9F9F] px-5 py-1 rounded-xl">
                    <p>Door Delivery</p>
                  </button>
                  <button className="bg-[#F4F4F8] text-[#9F9F9F] px-5 py-1 rounded-xl">
                    <p>Pick-Up</p>
                  </button>
                </div>
                <div className="flex justify-evenly items-center mt-1">
                  <p className="font-bold">Set time : </p>
                  <input className="px-4 py-2 rounded-lg" placeholder="Enter the time arrived" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center md:flex-row">
          <div className="bg-white shadow-2xl rounded-3xl flex flex-row w-9/12 md:w-5/12 p-4 justify-around -mt-16 md:mx-8 mx-auto py-7">
            <img
              src={`${process.env.NEXT_PUBLIC_URL_BE}/uploads/${productDetail.product_image}`}
              className="rounded-full w-[100px] h-[100px]"
            />
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col justify-evenly md:items-center leading-6">
                <p className="font-xl font-semibold flex-start">
                  {productDetail.product_name}
                </p>
                <p>1x (Large)</p>
                <p>1x (Regular)</p>
              </div>
              <div className="flex md:justify-evenly items-center md:ml-24 font-semibold">
                <button
                  onClick={decrement}
                  className="bg-[#E7AA3685] px-3 rounded-full text-[#6A4029]"
                >
                  -
                </button>
                <p className="mx-4">{count}</p>
                <button
                  onClick={increment}
                  className="bg-[#E7AA3685] px-3 rounded-full text-[#6A4029]"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-3/12 justify-center items-center flex md:-mt-20">
            <Link href='/checkout'>
              <button className="bg-[#FFBA33] rounded-3xl md:p-10 p-4 shadow-2xl font-bold text-xl w-[60%] mt-5">
                CHECKOUT
              </button>            
            </Link>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsDetail;
