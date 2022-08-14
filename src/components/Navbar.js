import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../redux/action/Auth";
import Swal from 'sweetalert2'

const Navbar = () => {
  const dispatch = useDispatch()
  const {isLogin} = useSelector((state)=> state.auth)
  const navigate = useRouter()
  // CSR
  // useEffect(()=> {
  //     if(!isLogin) {
  //         navigate('/login', {replace: true})
  //     }
  // }, [isLogin])
  return (
    <>
      <nav className="flex items-center justify-around py-4 mx-auto">
        <div className="h-8 flex items-center">
          <Link href='/'>
						<img
            className="mt-2 mr-4"
            src="icons/coffeLogo.svg"
						/>
					</Link>
          Coffee Shop
        </div>
        <div className="flex items-center">
						<div className="text-orange-900 px-3 py-2 text-md font-semibold ">
							<Link href='/'aria-current="page">Home</Link>
						</div>
            <div className="hover:text-orange-900 text-gray-700 px-3 py-2 text-md font-semibold transition ease-out">
							<Link href="/products">Product</Link>
						</div>
						<div className="hover:text-orange-900 text-gray-700 px-3 text-md font-semibold transition ease-out">
							<Link href="/" >Your Cart</Link>
						</div>
            <div className="hover:text-orange-900 text-gray-700 px-3 text-md font-semibold transition ease-out"><Link href="/">History</Link></div>
        </div>
        <div className="space-x-5 flex">
        <div className="">
          <Link href='/'>
              {isLogin ? (
                <button onClick={()=> {
                  dispatch(AuthLogout())
                  Swal.fire({
                    icon: 'success',
                    text:'Logout Success!'
                  })
                }}>Logout</button>
              ): (
                <>
                  <Link href='/login'><button className="hover:bg-yellow-500 mx-2 py-2 px-4 rounded-md transition ease-out">Login</button></Link>
                  <Link href='/registration'><button className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition ease-out">Sign-Up</button></Link>
                </>
                
              )}
            </Link>
        </div>          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
