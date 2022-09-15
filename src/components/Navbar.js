import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../redux/action/Auth";
import { FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="mx-3">
        <div className="flex items-center md:justify-around justify-between py-4 mx-auto">
          <div className="h-8 flex items-center">
            <Link href="/">
              <img className="mr-3" src="/icons/coffeLogo.svg" />
            </Link>
            <p className="items-center font-bold text-[#0B132A]">Coffee Shop</p>
          </div>
          <div className="hidden md:flex items-center">
            <div className="text-orange-900 px-3 py-2 text-md font-semibold ">
              <Link href="/" aria-current="page">
                Home
              </Link>
            </div>
            <div className="hover:text-orange-900 text-gray-700 px-3 py-2 text-md font-semibold transition ease-out">
              <Link href="/product">Product</Link>
            </div>
            <div className="hover:text-orange-900 text-gray-700 px-3 text-md font-semibold transition ease-out">
              <Link href="/">Your Cart</Link>
            </div>
            <div className="hover:text-orange-900 text-gray-700 px-3 text-md font-semibold transition ease-out">
              <Link href="/">History</Link>
            </div>
          </div>
          <div className="space-x-5 hidden md:flex">
            <div className="">
              <Link href="/">
                {isLogin ? (
                  <button
                    className="bg-[#FFBA33] hover:bg-[#6A4029] text-[#6A4029] hover:text-[#FFBA33] transition  px-8 py-3 rounded-3xl font-bold"
                    onClick={() => {
                      dispatch(AuthLogout());
                      Swal.fire({
                        icon: "success",
                        text: "Logout Success!",
                      });
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link href="/login">
                      <button className="hover:bg-yellow-500 font-bold text-[#0B132A] mx-6 py-2 px-4 rounded-3xl transition ease-out">
                        Login
                      </button>
                    </Link>
                    <Link href="/registration">
                      <button className="bg-yellow-500 hover:bg-yellow-700 font-bold text-white  py-2 px-4 rounded-3xl transition ease-out">
                        Sign-Up
                      </button>
                    </Link>
                  </>
                )}
              </Link>
            </div>
          </div>
          <div className="md:hidden flex" onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
