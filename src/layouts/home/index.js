import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";
import Layout from "../../components/Layout";

const HomePage = () => {
  return (
    <>
    <Layout>
      <div className="mx-auto">
        <div
          className="absolute bg-cover w-full -mt-10"
          style={{
            backgroundImage: `url('img/landingPics.png')`,
            width: "99vw",
            height: "90vh",
          }}
        ></div>
        <div className="relative mx-24 font-bold">
          <h1 className="text-3xl text-white w-96 my-10">
            START YOUR DAY WITH COFFEE AND GOOD MEAL
          </h1>
          <p className="text-xl text-white w-96 my-16 text-justify">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
          <button className=" bg-yellow-500 hover:bg-yellow-700 text-white py-2 -mt-12 px-4 rounded-md transition ease-out">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute left-20 right-20 flex justify-around p-10 mx-24 my-16 border-2 z-10 bg-white rounded-3xl shadow-xl">
        <div className="h-8 flex items-center">
          <img
            className="hidden mt-2 mr-4 sm:inline-block"
            src="icons/userLogo.svg"
          />
          90+
          <br />
          Staff
        </div>
        <div className="h-8 flex items-center">
          <img
            className="hidden mt-2 mr-4 sm:inline-block"
            src="icons/location.svg"
          />
          30+
          <br />
          Locations
        </div>
        <div className="h-8 flex items-center">
          <img
            className="hidden mt-2 mr-4 sm:inline-block"
            src="icons/newLove.svg"
          />
          800+
          <br />
          Stores
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-48">
        <img
          className="ml-14 object-cover m-w-screen h-1/2 mx-auto"
          src="img/teamWork.png"
        />
        <div className="mx-20 flex flex-col">
          <h1 className="text-3xl font-semibold ">
            We Provide Good Coffee and Healthy Meals
          </h1>
          <h3 className="text-base opacity-60 mt-5 mb-5">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </h3>
          <p className="flex flex-row mb-2 text-sm">
            <img className="mr-4 text-sm" src="icons/checklist.svg" />
            High quality beans
          </p>
          <p className="flex flex-row mb-2 text-sm">
            <img className="mr-4" src="icons/checklist.svg" />
            Healthy meals, you can request the ingredients
          </p>
          <p className="flex flex-row mb-2 text-sm">
            <img className="mr-4" src="icons/checklist.svg" />
            Chat with our staff to get better experience for ordering
          </p>
          <p className="flex flex-row mb-2 text-sm">
            <img className="mr-4" src="icons/checklist.svg" />
            Free member card with a minimum purchase of IDR 200.000.
          </p>
        </div>
      </div>
      <div className="flex justify-center align-center">
        <div className="flex flex-col">
          <h1 className="text-center text-4xl font-bold mb-8">
            Here is People's Favorite
          </h1>
          <p className="mt-5 mb-28 opacity-60">
            Let's choose and have a bit taste of people's favorite. It might be
            yours too!
          </p>
        </div>
      </div>
      <div className="flex justify-around align-center">
        <div className="border-2 px-10 hover:border-amber-900 transition rounded-md">
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
        <div className="border-2 px-10 hover:border-amber-900 transition rounded-md">
          <img
            className="mx-auto mb-12 -mt-16 rounded-full "
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
        <div className="border-2 px-10 hover:border-amber-900 transition rounded-md">
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
      <div className="flex flex-col mt-24">
        <h1 className="text-center text-4xl font-bold mb-6">
          Visit Our Store in the Spot on the Map Below
        </h1>
        <p className="mt-5 mb-32 opacity-60 text-center">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
        <img className="mx-auto" src="img/worldMap.png" />
      </div>
      <div className="flex flex-col mt-24">
        <h1 className="text-center text-4xl font-bold mb-2">OUR PARTNER</h1>
        <div className="flex justify-around align-center mx-10 my-24">
          <img className="mx-2" src="icons/netflix.png" />
          <img className="mx-2" src="icons/reddit.png" />
          <img className="mx-2" src="icons/amazon.png" />
          <img className="mx-2" src="icons/discord.png" />
          <img className="mx-2" src="icons/spotify.png" />
        </div>
        <div className="flex flex-col mt-10">
          <h1 className="text-center text-4xl font-bold mb-6">
            Loved by Thousands of Happy Customer
          </h1>
          <p className="mt-5 mb-28 opacity-60 text-center">
            These are the stories of our customers who have visited us with
            great pleasure.
          </p>
        </div>
        <div className="flex justify-around mx-16">
          <div className="hover:border-yellow-800 transition border-2 p-5 mx-3 w-full rounded-2xl">
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
            <div className="flex flex-col mt-16">
              <p>
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
          </div>
          <div className="hover:border-yellow-800 transition border-2 p-5 mx-3 w-full rounded-2xl">
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
            <div className="flex flex-col mt-16">
              <p>
                “I like it because I like to travel far and still can make my
                day better just by drinking their Hazelnut Latte
              </p>
            </div>
          </div>
          <div className="hover:border-yellow-800 transition border-2 p-5 mx-3 w-full rounded-2xl">
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
            <div className="flex flex-col mt-16">
              <p>
                “This is very unusual for my taste, I haven't liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hover:border-yellow-800 transition border-2 p-12 mx-auto w-5/6 mt-24 rounded-2xl">
        <div className="flex">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
              <h1 className="mr-12 text-4xl mb-2">Check our promo today!</h1>
              <p className="opacity-80">Let's see the deals and pick yours!</p>
            </div>
            <div className="flex">
              <button className="hover:bg-yellow-500 border-amber-700 border-2 bg-white text-yellow-500 hover:text-white font-bold py-2 px-4 rounded-lg transition ease-out w-52">
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
