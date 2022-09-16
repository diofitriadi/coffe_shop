import React from "react";
import Layout from "../../components/Layout";

const Checkout = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto bg-slate-200">
          <div className="pt-6 pb-14">
            <img
              src="/img/checkout.png"
              className="hidden md:absolute w-fit -mt-10 h-[55%] lg:h-[100%] md:h-[70%]"
            />
            <div className="flex flex-col">
              <div className="relative lg:ml-32 md:ml-7 sm:ml-12">
                <h1 className="font-extrabold text-base text-white md:w-full w-4/6 lg:leading-snug mt-0 mb-6 lg:ml-0 lg:text-2xl md:text-xl md:mb-5 text-black ml-10 md:ml-0">
                  Checkout your <b />
                  product now
                </h1>
              </div>
              <div className="flex md:flex-row flex-col w-[80%] mx-auto  md:items-center md:justify-around">
              <div className="bg-white rounded-lg px-12 py-10 shadow-lg h-fit md:h-[470px] text-[#6A4029] text-bold text-base md:text-lg md:w-[30%]">
                <p className="mb-6 text-xl font-black text-center text-[#362115]">
                  ORDER SUMMARY
                </p>
                <div className="flex justify-center">
                  <img
                    src="/img/hazelnut.png"
                    className="rounded-full w-[150px] h-[150px]"
                  />
                </div>
                <div className="flex flex-row mt-10 justify-between text-base items-center text-black">
                  <div>
                    <h2>Hazelnut Latte</h2>
                    <p>X 1</p>
                    <p>Regular</p>
                  </div>
                  <div>
                    <p>Rp. 30000</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:w-[40%]">
              <div className="bg-white rounded-lg px-6 py-5 shadow-lg h-fit text-black text-bold text-sm md:text-base mt-10">
                <div className="mb-5 flex flex-row justify-between">
                  <p>Adress Details</p>
                  <p className="cursor-pointer font-bold">Edit</p>
                </div>
                <div className="text-sm">
                  <h4 className="leading-8">
                    <span className="font-bold">Delivery </span>to Iskandar
                    Street
                  </h4>
                  <hr />
                  <h4 className="">
                    Km 5 refinery road oppsite re public road, effurun, Jakarta
                  </h4>
                  <hr />
                  <h4 className="leading-8">+62 81348287878</h4>
                </div>
              </div>
              <div className="bg-white rounded-lg px-6 py-5 shadow-lg h-fit text-black text-bold text-sm md:text-base mt-10">
                <div className="mb-5">
                  <p>Payment Method</p>
                </div>
                <div>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 mb-2"
                  />
                  <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium">
                    Card
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-sm font-medium"
                    >
                      Bank Account
                    </label>
                  </div>
                  <div>
                  <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-sm font-medium"
                    >
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </div>
              <button className="bg-[#6A4029] rounded-3xl md:p-5 p-3 shadow-2xl font-bold text-lg w-full mt-10 text-white">
                Confirm and Pay
              </button>      
            </div>
            </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
