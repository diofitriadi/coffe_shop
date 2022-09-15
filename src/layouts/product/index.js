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
        <div className="flex mx-24 ">
          <div className="flex flex-col w-2/6 p-5">
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
          <div className="w-4/6 p-5">
            <div className="flex justify-center cursor-pointer my-5 text-amber-900">
              <p className="mx-5">All Products</p>
              <p className="mx-5">Coffee</p>
              <p className="mx-5">Non-Coffee</p>
              <p className="mx-5">Foods</p>
              <p className="mx-5">Add-Ons</p>
            </div>
            <div className="flex text-center">
              <div className="flex mt-8 px-5 flex-wrap justify-evenly">
                {product.map((product, index) => {
                  return (
                    <Link href={`/product/${product.id}`}>
                      <div
                        className="w-1/5 my-12 mx-2 p-2 border-1 shadow-xl rounded-xl"
                        key={index}
                      >
                        <button>
                          <img
                            className="-mt-16 my-8 rounded-full"
                            src={`https://coffee-shop-be-dio.herokuapp.com/uploads/${product.product_image}`}
                            style={{
                              width: "190px",
                              height: "110px",
                            }}
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
