import React from "react";
import Layout from "../../components/Layout";

const Checkout = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto">
          <div>
            <img
              src="/img/checkout.png"
              className="absolute w-fit -mt-10 h-[55%] lg:h-[100%] md:h-[70%]"
            />
            <div>
              <div className="relative lg:ml-32 md:ml-7 sm:ml-12">
                <h1 className="font-extrabold text-base text-white md:w-3/6 w-4/6 lg:w-5/12 lg:leading-snug mt-10 mb-6 ml-5 lg:ml-0 lg:text-4xl md:text-2xl md:mb-10">
                  Checkout your <b />
                  product now
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
