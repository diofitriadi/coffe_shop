import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto">
          <img className="absolute w-full -mt-10 h-[55%] lg:h-[90%] md:h-[70%] opacity-90" src="/img/landingPics.png" />
          <div className="relative lg:ml-32 md:ml-7 sm:ml-12">
            <h1 className="font-extrabold text-base text-white md:w-3/6 w-4/6 lg:w-5/12 lg:leading-snug mt-10 mb-6 ml-5 lg:ml-0 lg:text-4xl md:text-2xl md:mb-10">
              START YOUR DAY WITH COFFEE AND GOOD MEAL
            </h1>
            <p className="sm:text-base md:text-lg md:w-3/6 font-bold text-white w-4/6 lg:w-5/12 lg:text-xl ml-5 lg:ml-0 lg:mt-12 mb-8 text-justify">
              We provide high quality beans, good taste, and healthy meals made by
              love just for you. Start your day with us for a bigger smile!
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 ml-5 lg:ml-0 px-4 rounded-md transition ease-out font-bold text-sm lg:text-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden md:absolute left-0 right-0 md:flex flex-row lg:absolute justify-around py-10 w-[80%] mx-auto my-12 h-[15%] border-2 z-20 bg-white rounded-3xl shadow-xl md:w-[60%]">
          <div className="flex items-center text-sm md:text-base">
            <img
              className="mt-2 mr-4 sm:inline-block w-10 lg:w-14"
              src="icons/userLogo.svg"
            />
            90+
            <br />
            Staff
          </div>
          <div className="flex items-center text-sm md:text-base">
            <img
              className="mt-2 mr-4 sm:inline-block w-10 lg:w-14"
              src="icons/location.svg"
            />
            30+
            <br />
            Location
          </div>
          <div className="flex items-center text-sm md:text-base">
            <img
              className="mt-2 mr-4 sm:inline-block w-10 lg:w-14"
              src="icons/newLove.svg"
            />
            800+
            <br />
            Stores
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:items-center items-center lg:mt-48">
          <img
            className="object-cover mt-10 md:mt-32 lg:mt-0 h-1/2 mx-auto md:w-[80%] lg:w-[60%] md:mx-14"
            src="img/teamWork.png"
          />
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl md:mx-10 font-semibold ">
              We Provide Good Coffee and Healthy Meals
            </h1>
            <h3 className="text-base md:text-lg opacity-60 mt-5 mb-5 md:mx-16 lg:mx-10">
              You can explore the menu that we provide with fun and have their own
              taste and make your day better.
            </h3>
            <div className="flex flex-col w-[80%] lg:mx-10 mx-auto">
              <p className="flex flex-row mb-2 text-sm md:text-base">
                <img className="mr-4 text-sm" src="icons/checklist.svg" />
                High quality beans
              </p>
              <p className="flex flex-row mb-2 text-sm md:text-base">
                <img className="mr-4" src="icons/checklist.svg" />
                Healthy meals, you can request the ingredients
              </p>
              <p className="flex flex-row mb-2 text-sm md:text-base">
                <img className="mr-4" src="icons/checklist.svg" />
                Chat with our staff to get better experience
              </p>
              <p className="flex flex-row mb-2 text-sm md:text-base">
                <img className="mr-4" src="icons/checklist.svg" />
                Free member card with purchase Rp.200.000
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-center">
          <div className="flex flex-col">
            <h1 className="text-center text-4xl font-bold mt-10 mb-6 md:mt-14">
              Here is People's Favorite
            </h1>
            <p className="mb-16 text-center opacity-60 md:text-lg">
              Let's choose and have a bit taste of people's favorite. It might be
              yours too!
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          <div className="my-5 w-[80%] mx-auto border-2 px-10 hover:border-amber-900 transition rounded-md md:w-[50%] lg:w-[25%]">
            <img
              className="mx-auto mb-12 -mt-16 rounded-full"
              src="img/hazelnut.png"
            />
            <p className="text-amber-800 text-center text-2xl mb-10 opacity-80">
              Hazelnut Latte
            </p>
            <div className="mb-12">
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Hazelnut Syrup
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Vanilla Whipped Cream
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Ice / Hot
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Sliced Banana on Top
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-center mt-20 mb-12 text-3xl opacity-70">
                IDR. 25.000
              </p>
              <button className="hover:bg-yellow-500 border-amber-700 border-2 bg-white text-yellow-500 hover:text-white font-bold py-2 px-4 rounded-lg transition ease-out mb-8">
                Order Now
              </button>
            </div>
          </div>
          <div className="my-5 mt-20 w-[80%] mx-auto border-2 px-10 hover:border-amber-900 transition rounded-md md:w-[50%] lg:w-[25%] lg:my-5">
            <img
              className="mx-auto mb-12 -mt-16 rounded-full"
              src="img/strawberry.png"
            />
            <p className="text-amber-800 text-center text-2xl mb-10 opacity-80">
              Pinky Promise
            </p>
            <div className="mb-12">
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />1 Shot Of Coffee
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Vanilla Whipped Cream
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Chocolate Biscuits
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Strawberry Syrup
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Sliced strawberry on Top
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-center mt-12 mb-12 text-3xl opacity-70">
                IDR. 25.000
              </p>
              <button className="hover:bg-yellow-500 border-amber-700 border-2 bg-white text-yellow-500 hover:text-white font-bold py-2 px-4 rounded-lg transition ease-out mb-8">
                Order Now
              </button>
            </div>
          </div>
          <div className="my-5 w-[80%] mx-auto border-2 px-10 hover:border-amber-900 transition rounded-md mt-20 md:w-[50%] lg:w-[25%] lg:my-5">
            <img
              className="mx-auto mb-12 -mt-16 rounded-full"
              src="img/chicken.png"
            />
            <p className="text-amber-800 text-center text-2xl mb-10 opacity-80">
              Chicken Wings
            </p>
            <div className="mb-12">
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Wings
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Drum Sticks
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Mayonaise and Lemon
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Hot Fried
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Secret Recipe
              </p>
              <p className="flex flex-row mb-2">
                <img className="mr-6" src="icons/check.svg" />
                Buy 1 Get 1 only Dine in
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-center mt-4 mb-12 text-3xl opacity-70">
                IDR. 25.000
              </p>
              <button className="hover:bg-yellow-500 border-amber-700 border-2 bg-white text-yellow-500 hover:text-white font-bold py-2 px-4 rounded-lg transition ease-out mb-8">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <h1 className="text-center text-4xl font-bold mb-6 md:mx-10">
            Visit Our Store in the Spot on the Map Below
          </h1>
          <p className="mt-5 mb-14 opacity-60 text-center mx-4">
            See our store in every city on the spot and spend your good day there.
            See you soon!
          </p>
          <img className="mx-10" src="img/worldMap.png" />
        </div>
        <div className="flex flex-col mt-14">
          <h1 className="text-center text-4xl font-bold mb-4">OUR PARTNER</h1>
          <div className="flex flex-col md:flex-row md:flex-wrap md:w-[80%] lg:w-full lg:justify-evenly justify-around align-center mx-auto my-10 w-[50%]">
            <img className="mb-8" src="icons/netflix.png" />
            <img className="mb-8" src="icons/reddit.png" />
            <img className="mb-8" src="icons/amazon.png" />
            <img className="mb-8" src="icons/discord.png" />
            <img className="mb-8" src="icons/spotify.png" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-center text-4xl font-bold mb-6">
              Loved by Thousands of Happy Customer
            </h1>
            <p className="mt-5 mb-10 opacity-60 text-center mx-4">
              These are the stories of our customers who have visited us with
              great pleasure.
            </p>
          </div>
          <div className="flex flex-col justify-around mx-4 md:mx-12 lg:flex-row lg:justify-between">
            <div className="hover:border-yellow-800 transition border-2 p-5 py-8 w-full rounded-2xl mb-5 lg:mr-8">
              <div className="flex">
                <img className="mr-4" src="icons/viezh.svg" />
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col">
                    <h5 className="mr-12">Viezh Robert</h5>
                    <p>Warsaw, Poland</p>
                  </div>
                  <div className="flex">
                    <img className="mt-1 mr-1 h-4" src="icons/star.png" />
                    4,5
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <p>
                  “Wow... I am very happy to spend my whole day here. the Wi-fi is
                  good, and the coffee and meals tho. I like it here!! Very
                  recommended!
                </p>
              </div>
            </div>
            <div className="hover:border-yellow-800 transition border-2 p-5 py-8 w-full rounded-2xl mb-5 lg:mr-8">
              <div className="flex">
                <img className="mr-4" src="icons/yessica.png" />
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col">
                    <h5 className="mr-12">Yessica Christy</h5>
                    <p>Shanxi, China</p>
                  </div>
                  <div className="flex">
                    <img className="mt-1 mr-1 h-4" src="icons/star.png" />
                    4,5
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <p>
                  “I like it because I like to travel far and still can make my
                  day better just by drinking their Hazelnut Latte"
                </p>
              </div>
            </div>
            <div className="hover:border-yellow-800 transition border-2 p-5 py-8 w-full rounded-2xl mb-5">
              <div className="flex">
                <img className="mr-4" src="icons/kim.png" />
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col">
                    <h5 className="mr-12">Kim Young Joun</h5>
                    <p>Seoul, South Korea</p>
                  </div>
                  <div className="flex">
                    <img className="mt-1 mr-1 h-4" src="icons/star.png" />
                    4,5
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <p>
                  “This is very unusual for my taste, I haven't liked coffee
                  before but their coffee is the best! and yup, you have to order
                  the chicken wings, the best in town!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hover:border-yellow-800 transition border-2 py-12 px-2 mx-auto w-[90%] mt-12 rounded-2xl lg:w-[80%]">
          <div className="flex flex-col">
            <div className="flex flex-col justify-between w-full items-center">
              <div className="flex flex-col text-center">
                <h1 className="text-3xl">Check our promo today!</h1>
                <p className="opacity-80 my-5">Let's see the deals and pick yours!</p>
              </div>
              <div className="flex">
                <button className="hover:bg-yellow-500 border-amber-700 border-2 bg-white text-yellow-500 hover:text-white font-bold py-2 px-4 rounded-lg transition ease-out w-[100%]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
