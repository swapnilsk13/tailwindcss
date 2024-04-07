function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* navbar goes here */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4  items-center">
        <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
        <ul className="md:flex hidden font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About Us</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block py-2 px-2 bg-indigo-700 text-white font-bold cursor-pointer rounded-lg">
          Login/Signup
        </div>
        <div className="md:hidden">
          {/* <a className="" href="#">&#8801;</a> */}
          <button className="text-4xl">&#8801;</button>
        </div>
      </nav>
      {/* navbar ends here */}
      {/* image section starts here */}
      <header className="w-full h-auto">
        <img
          className="w-full hidden md:block"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt=""
        />
        <img
          className="w-full md:hidden"
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt=""
        />
      </header>
      {/* image section ends here */}
      {/* our students section */}
      <div className="h-auto w-100 flex flex-wrap text-center flex-col items-center p-10">
        <div className="w-full h-auto flex flex-col flex-wrap items-center">
          <p className="text-indigo-800 font-bold text-2xl md:text-4xl">
            "Pure hardwork no shortcuts!"
          </p>
          <div className="h-1 w-36 border-b-4 border-yellow-400 rounded-2xl mt-2 md:mt-4 mb-12"></div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly">
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="h-44 w-44 pr-3"
            src="https://cdn-icons-png.flaticon.com/256/6347/6347299.png"
            alt=""
          />
          <p className="text-3xl font-bold text-white">600+</p>
          <p className="text-3xl text-gray-500 font-bold">Different Courses</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="h-44 w-44 mr-20"
            src="https://cdn-icons-png.flaticon.com/256/9472/9472986.png"
            alt=""
          />
          <p className="text-3xl font-bold text-white">700,000+</p>
          <p className="text-3xl text-gray-500 font-bold">Students Enrolled</p>
        </div>{" "}
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="h-44 w-44 mr-10"
            src="https://cdn-icons-png.flaticon.com/256/10830/10830608.png"
            alt=""
          />
          <p className="text-3xl font-bold text-white">10,000+</p>
          <p className="text-3xl text-gray-500 font-bold">
            Successfull Transition
          </p>
        </div>
      </div>
      {/* Our Student Section Ends Here */}

      {/* Our Product Section  */}
      <div className="w-100 flex flex-wrap text-center flex-col items-center p-10">
        <div className="w-full h-auto flex flex-col flex-wrap items-center">
          <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
            "Our Products"
          </p>
          <div className="h-1 w-36 border-b-4 border-yellow-400 rounded-2xl mt-2 md:mt-4 mb-12"></div>
        </div>
        <div className="w-[90%] h-auto flex flex-wrap justify-around">
          <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2">
            <img
              className="h-[150px] w-30"
              src="https://cdn-icons-png.flaticon.com/256/8545/8545310.png"
              alt=""
            />
            <p className="text-3xl text-white font-bold">PW Skillsk</p>
            <p className="text-xl text-gray-500 font-bold">
              Supercharge your project development with our robust lab
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12 p-2">
            <img
              className="h-[140px] w-30"
              src="https://cdn-icons-png.flaticon.com/128/9291/9291935.png"
              alt=""
            />
            <p className="text-3xl text-white font-bold">Job Portal</p>
            <p className="text-xl text-gray-500 font-bold">
              Use exceptional templates for a stand-out resume minus the signup
              process
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12 p-2">
            <img
              className="h-[150px] w-30"
              src="https://cdn-icons-png.flaticon.com/256/7603/7603281.png"
              alt=""
            />
            <p className="text-3xl text-white font-bold">Experience</p>
            <p className="text-xl text-gray-500 font-bold">
              PW Skill's self paced experience portal prioritise hands-on
              training with 570+ plus internship projects
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12 p-2">
            <img
              className="h-[150px] w-30"
              src="https://cdn-icons-png.flaticon.com/256/6299/6299421.png"
              alt=""
            />
            <p className="text-3xl text-white font-bold">Affiliate</p>
            <p className="text-xl text-gray-500 font-bold">
              Explore affiliate marketing opportunities with pw skills and
              attain financial freedom
            </p>
          </div>
          <div className="w-64 flex flex-col items-center mb-12  p-2">
            <img
              className="h-[150px] w-30"
              src="https://cdn-icons-png.flaticon.com/256/9080/9080722.png"
              alt=""
            />
            <p className="text-3xl text-white font-bold">Hall of Fame</p>
            <p className="text-xl text-gray-500 font-bold">
              Our student placements and a 100K+ career transitions speak
              volumes about our courses
            </p>
          </div>
        </div>
      </div>
      {/* Our Product Section Ends Here */}

      {/* Our Footer starts Here */}
      <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div>
          <img
            className="w-40 h-30 "
            src="https://cdn-icons-png.flaticon.com/256/6183/6183100.png"
            alt=""
          />
          <p className="my-4 ">Email Us: support@gmail.com</p>
          <img
            className="w-32 h-32"
            src="https://cdn-icons-png.flaticon.com/128/5261/5261314.png"
            alt=""
          />
        </div>
        <div className="">
          <h2 className="font-bold text-xl mt-4">PW Skills</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>PW Skills lab</p>
            <p>Job portal</p>
            <p>Experience portal</p>
            <p>Become an affiliate</p>
            <p>Hall of Fame</p>
          </div>
        </div>{" "}
        <div className="">
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>Discord Channel</p>
            <p>PW Youtube</p>
            <p>Careers</p>
          </div>
        </div>
      </footer>
      {/* Our footer ends here */}
    </div>
  );
}

export default App;
