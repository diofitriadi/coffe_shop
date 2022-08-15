import Footer from '../../components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { AuthRegister } from '../../../redux/action/Register'
import Swal from 'sweetalert2'

const Register = () => {
  const {loading, data, error, isRegister} = useSelector(state => state.register)
    const navigate = useRouter()
    const dispatch = useDispatch()
    const [formAddRegister, setFormAddRegister] = useState({
        email: '',
        password: '',
        phone_number: ''
    })
    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(AuthRegister(formAddRegister))
        // tambah kondisi loading, data, error 
        if(isRegister === true) {
          Swal.fire({
            icon: 'success',
            title: 'Register Success',
          })
            navigate.push('/')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'Please Try Again'
          })
            navigate.push('/registration')
          }
    }
  return (
    <>
      <div>
        <div className="flex flex-row">
          <img className="h-[900px] w-3/5" src="img/loginPage.png" />
          <div className="p-5 w-full">
            <div className="flex">
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col">
                  <div className="h-8 flex items-center">
                    <img
                      className="hidden mt-2 mr-4 sm:inline-block"
                      src="icons/coffeLogo.svg"
                    />
                    Coffee Shop
                  </div>
                </div>
                <div className="flex mt-5">
                  <Link href='/login'><button className="hover:bg-amber-700 bg-yellow-500 border-amber-700 border-2 text-white hover:yellow-500 font-bold py-2  rounded-xl transition ease-out w-28">
                    Login
                  </button></Link>
                </div>
              </div>
            </div>
            <form action="sign-up" onSubmit={(e)=> handleRegister(e)}>
            <div className="flex flex-col justify-center mx-20 mt-12">
              <h1 className="text-center text-3xl mb-8 text-amber-800">
                Sign Up
              </h1>
              <div className="flex ">
                <div className="w-full px-3 mb-5">
                  <label for="" className="text-lg font-semibold px-1">
                    Email :{" "}
                  </label>
                  <div className="flex mt-2">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-5 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-amber-800"
                      placeholder="Enter your Email Adress"
                      required onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            email: e.target.value
                        }))
                    }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex ">
                <div className="w-full px-3 mb-5">
                  <label for="" className="text-lg font-semibold px-1">
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
                      required onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            password: e.target.value
                        }))
                    }}/>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-full px-3 mb-5">
                  <label for="" className="text-lg font-semibold px-1">
                    Phone Number:
                  </label>
                  <div className="flex mt-2">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className=" text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-5 pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-amber-800"
                      placeholder="Enter Your Phone Number"
                      required onChange={(e) => {
                        setFormAddRegister((prevData) => ({
                            ...prevData,
                            phone_number: e.target.value
                        }))
                    }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-full px-3 mb-5 mt-10">
                  <button className="hover:bg-amber-700 bg-yellow-500 border-amber-700 border-2 text-white hover:yellow-500 font-bold py-4 rounded-xl transition ease-out w-full">
                    Sign-Up
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-full px-3 mb-5 mt-2">
                  <button className="flex justify-center bg-white border-amber-700 border-2 hover:bg-slate-100 text-black font-bold py-4 rounded-xl transition ease-out w-full">
                    <img className="mr-4" src="icons/google.svg" />
                    Sign Up With google
                  </button>
                </div>
              </div>
            </div>
            </form>
            <div className="absolute bg-white right-52 hover:border-yellow-800 transition border-2 p-8 mx-auto w-4/6 mt-12 rounded-2xl">
              <div className="flex">
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col">
                    <h1 className="mr-12 text-2xl mb-4">
                      Get Your member
                      <br />
                      card now
                    </h1>
                    <p className="opacity-80">
                      Let's join with our member and enjoy the deals.
                    </p>
                  </div>
                  <div className="flex">
                    <button className="hover:bg-yellow-500 border-amber-700 border-2 bg-white text-yellow-500 hover:text-white font-bold py-4 px-4 rounded-xl transition ease-out w-52">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Register