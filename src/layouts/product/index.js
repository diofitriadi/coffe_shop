import Layout from "../../components/Layout";
import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = React.useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://coffee-shop-be-dio.herokuapp.com/api/v1/product`,
    })
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row md:mx-24">
          <div className="flex flex-col md:w-2/6 w-full p-5 order-2 md:order-1">
            <div className="text-xl mb-3 font-bold text-yellow-900 text-center">
              Promo Today
            </div>
            <div className="text-sm opacity-60 text-center mb-10">
              Coupons will be updated every weeks. Check them out!
            </div>
            <div className="bg-green-200 hover:border-yellow-900 border-2 mt-4 p-5 transition ease-out rounded-2xl">
              <button className="">
                <div className="flex flex-row">
                  <img className="" src="icons/hoodie.svg" />
                  <div className="mt-3">
                    <b>HAPPY MOTHER'S DAY!</b>
                    <p>Get one of our favorite menu for free!</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="bg-amber-300 hover:border-yellow-900 border-2 mt-4 p-5 transition ease-out rounded-2xl">
              <button className="">
                <div className="flex flex-row">
                  <img className="" src="icons/sombrero.svg" />
                  <p className="mt-3">
                    <b>Get a cup of coffee for free on sunday morning</b>
                    <br />
                    Only at 7 to 9 AM
                  </p>
                </div>
              </button>
            </div>
            <div className="bg-green-200 hover:border-yellow-900 border-2 mt-4 p-5 transition ease-out rounded-2xl">
              <button className="">
                <div className="flex flex-row">
                  <img className="" src="icons/hoodie.svg" />
                  <p className="mt-3">
                    <b>HAPPY MOTHER'S DAY!</b>
                    <br />
                    Get one of our favorite menu for free!
                  </p>
                </div>
              </button>
            </div>
            <div className="bg-red-400 hover:border-yellow-900 border-2 mt-4 p-5 transition ease-out rounded-2xl">
              <button className="">
                <div className="flex flex-row">
                  <img className="" src="icons/pirate.svg" />
                  <p className="mt-3">
                    <b>HAPPY HALLOWEEN!</b>
                    <br />
                    Do you like chicken wings? Get 1 free only if you buy pinky
                    promise
                  </p>
                </div>
              </button>
            </div>
            <div className="mt-5 text-center">
              <button className=" hover:bg-yellow-500 bg-yellow-800 text-white py-4 px-24 mt-5 rounded-2xl transition ease-out">
                Apply Coupon
              </button>
            </div>
            <div className="text-sm opacity-60 mx-auto mt-10">
              <p>
                Terms and Condition
                <br />
                1. You can only apply 1 coupon per day
                <br />
                2. It only for dine in
                <br />
                3. Buy 1 get 1 only for new user
                <br />
                4. Should make member card to apply coupon
                <br />
              </p>
            </div>
          </div>
          <div className="md:w-4/6 w-full p-5 order-1 md:order-2">
            <div className="flex justify-center cursor-pointer my-5 text-amber-900">
              <p className="mx-5 font-bold text-xl">View All Of Our Products</p>
            </div>
            <div className="flex text-center">
              <div className="flex flex-row mt-8 px-5 flex-wrap justify-between md:justify-evenly">
                {product.map((product, index) => {
                  return (
                    <Link href={`/product/${product.id}`}>
                      <div
                        className="md:w-1/5 w-5/12 my-12 mx-2 p-2 border-1 shadow-xl rounded-xl"
                        key={index}
                      >
                        <button>
                          <img
                            className="w-[150px] h-[130px] md:w-[190px] md:h-[110px] -mt-16 my-8 rounded-full"
                            src={`https://coffee-shop-be-dio.herokuapp.com/uploads/${product.product_image}`}
                          />
                          <div className="flex flex-col">
                            <p className="font-black ">
                              {product.product_name}
                            </p>
                            <p className="font-bold text-sm mt-2">
                              IDR. {product.product_price}
                            </p>
                          </div>
                        </button>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Products;
