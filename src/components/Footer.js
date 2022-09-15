const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-5 md:my-20 md:mx-auto my-6 mx-4 w-11/12 md:w-10/12 text-[#4F5665] font-medium">
        <div className="md:w-8/12 w-10/12">
          <div className="flex flex-row mb-7">
            <img className="mr-4" src="/icons/coffeLogo.svg" />
            <div className="flex flex-row w-full items-center ">
              <h1 className="font-bold text-[#0B132A]">Coffee Shop</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              Coffee Shop is a store that sells some
              <br className="hidden md:block" /> good meals, and especially
              coffee. We provide
              <br className="hidden md:block" /> high quality beans
            </div>
            <div className="flex flex-row mt-5 -ml-5 md:ml-0">
              <img className="mt-1" src="/icons/facebook.svg" />
              <img className="mt-1" src="/icons/twitter.svg" />
              <img className="mt-1" src="/icons/instagram.svg" />
            </div>
            <div>©2020 Coffee Store</div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-full mt-5 md:mt-0">
            <div className="flex flex-row md:mr-32">
              <p className="font-bold text-[#0B132A]">Product</p>
            </div>
            <div className="flex flex-col leading-7 mt-2 md:mt-9">
              <div>
                <p className="">Download</p>
                <p>Pricing</p>
                <p>Locations</p>
                <p>Countries</p>
                <p>Blog</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0">
            <div className="flex flex-row">
              <p className="font-bold text-[#0B132A]">Engage</p>
            </div>
            <div className="flex flex-col leading-7 mt-2 md:mt-9">
              <div>
                <p className="">Coffee Shop ?</p>
                <p className="">FAQ</p>
                <p className="">About Us</p>
                <p className="">Privacy Policy</p>
                <p className="">Terms of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
