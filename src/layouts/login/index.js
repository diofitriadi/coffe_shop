import Footer from "../../components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../../redux/action/Auth";
import Swal from "sweetalert2";

const Login = () => {
  const { loading, data, error, isLogin } = useSelector((state) => state.auth);
  const [disable, setDisable] = useState(false);
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [formAddData, setFormAddData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(AuthLogin(formAddData));
  };
  // tambah kondisi loading, data, error
  useEffect(() => {
    if (loading === true) {
      setDisable(true);
    }
    if (isLogin === true) {
      Swal.fire({
        icon: "success",
        text: "Login Success!",
      });
      setDisable(false);
      navigate.push("/", { replace: true });
    } else if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Username or Password is Wrong",
      });
      setDisable(false);
    }
  }, [data, loading, error]);
  return (
    <>
      <div>
        <div className="flex flex-row">
          <img
            className="hidden md:block h-[900px] w-3/5"
            src="img/loginPage.png"
          />
          <div className="p-5 w-full">
            <div className="flex">
              <div className="flex justify-between lg:mx-20 w-full items-center">
                <div className="flex flex-col">
                  <div className="flex items-center justify-center">
                    <img
                      className="md:block mt-2 mr-4 sm:inline-block"
                      src="icons/coffeLogo.svg"
                    />
                    <p className="font-bold text-[#0B132A] mt-3">
                      Coffee Shop{" "}
                    </p>
                  </div>
                </div>
                <div className="flex mt-5">
                  <Link href="/registration">
                    <button className="hover:bg-amber-700 bg-yellow-500 border-amber-700 border-2 text-white hover:yellow-500 font-bold py-2  rounded-xl transition ease-out w-28">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="flex flex-col justify-center md:mx-20 lg:mx-32 mt-12">
                <h1 className="text-center text-3xl font-bold mb-8 text-amber-800">
                  Login
                </h1>
                <div className="flex ">
                  <div className="w-full px-3 mb-8">
                    <label htmlFor="" className="text-md font-semibold px-1">
                      Email :{" "}
                    </label>
                    <div className="flex mt-2">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="text-md w-full -ml-10 pl-5 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-amber-800"
                        placeholder="Enter your Email Adress"
                        required
                        onChange={(e) => {
                          setFormAddData((prevData) => ({
                            ...prevData,
                            email: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-md font-semibold px-1">
                      Password
                    </label>
                    <div className="flex mt-2">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className=" text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-5 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-amber-800"
                        placeholder="Enter Your Password"
                        onChange={(e) => {
                          setFormAddData((prevData) => ({
                            ...prevData,
                            password: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full px-3 mb-5 mt-10">
                    {disable ? (
                      <button
                        className="hover:bg-amber-700 bg-yellow-500 border-amber-700 border-2 text-white hover:yellow-500 font-bold py-4 rounded-xl transition ease-out w-full opacity-50"
                        onSubmit={(e) => handleLogin(e)}
                      >
                        Sign In now
                      </button>
                    ) : (
                      <button
                        className="hover:bg-amber-700 bg-yellow-500 border-amber-700 border-2 text-white hover:yellow-500 font-bold py-4 rounded-xl transition ease-out w-full"
                        onSubmit={(e) => handleLogin(e)}
                      >
                        Sign In now
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-full px-3 mb-5 mt-2">
                    <button className="flex justify-center bg-white border-amber-700 border-2 hover:bg-slate-100 text-black font-bold py-4 rounded-xl transition ease-out w-full">
                      <img className="mr-4" src="icons/google.svg" />
                      Sign In With google
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="md:absolute bg-white md:right-52 md:mt-36 hover:border-yellow-800 transition border-2 p-8  md:mx-0 mx-auto md:w-4/6 w-5/6 mt-10 rounded-2xl">
              <div className="flex">
                <div className="flex md:flex-row flex-col justify-between w-full items-center">
                  <div className="flex flex-col text-center">
                    <h1 className="text-2xl mb-4 md:mb-4">
                      Get your member
                      <br />
                      card now
                    </h1>
                    <p className="opacity-80">
                      Let's join with our member and enjoy the deals.
                    </p>
                  </div>
                  <div className="flex">
                    <button className="hover:bg-yellow-500 border-amber-700 border-2 bg-white text-yellow-500 hover:text-white font-bold py-4 px-4 rounded-xl transition ease-out w-52 mt-10">
                      Create Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
