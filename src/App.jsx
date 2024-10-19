import "./App.css";

function App() {
  return (
    <>
      <div className="font-pop grid grid-cols-4 grid-rows-2 gap-4">
        {/* card-1-quicker*/}
        <div className="rounded-xl pl-6 flex flex-col text-left bg-[#faeee2] row-span-2">
          <h2 className="dark:text-black leading-8 pt-[80px] font-medium text-4xl pb-[10px] tracking-[-3px]">
            Create and <br />
            schedule <br />
            content <br />
            <i className="text-[#7651dc]">quicker.</i>
          </h2>
          <img
            // src="./public/card-1-illustration-create-post.webp"
            src="/assets/card-1-illustration-create-post.webp"
            alt=""
            className="w-48 pt-4 pr-6"
          />
        </div>
        {/* card-2-Social Media */}
        <div className="rounded-xl flex flex-col items-center bg-[#7651dc] col-span-2 px-[24px]">
          <div className="">
            <p className="pt-[38px] text-5xl font-medium text-white tracking-[-1px]">
              Social Media
              <span className="text-[#ffcc69]"> 10x </span>
              <br /> <i>Faster </i>
              with AI
            </p>
          </div>
          <div>
            <img
              // src="./public/card-purple-illustration-five-stars.webp"
              src="/assets/card-purple-illustration-five-stars.webp"
              alt=""
              className="pt-[16px] w-44 "
            />
          </div>
          <div>
            <p className="pt-[6px] pb-[35px] text-sm text-white tracking-wide">
              Over 4,000 5-star reviews
            </p>
          </div>
        </div>
        {/* card-3-Schedule */}
        <div className="rounded-xl flex flex-col justify-between pl-[15px] bg-[#dcd1fc] relative overflow-hidden row-span-2">
          <h3 className="dark:text-black pt-[30px] pl-4 font-medium text-3xl text-left tracking-tighter leading-6 pb-0">
            Schedule to <br />
            social media.
          </h3>
          <div className="w-80 absolute left-[90px] top-[100px]">
            <img
              // src="./public/card-lavender-illustration-schedule-posts.webp"
              src="/assets/card-lavender-illustration-schedule-posts.webp"
              alt=""
              className=""
            />
          </div>
          <p className="dark:text-black text-sm font-medium text-left pl-5 pb-[30px] leading-4 tracking-wide">
            Optimize post timings <br />
            to publish content at <br />
            the perfect time for
            <br />
            your audience.
          </p>
        </div>
        {/* card-4-Manage Multiple */}
        <div className="rounded-xl bg-[#ffffff] relative overflow-hidden shadow-boxBg ">
          <div className="">
            <div className="flex w-72">
              <img
                // src="./public/card-white-illustration-multiple-platforms.webp "
                src="/assets/card-white-illustration-multiple-platforms.webp"
                alt=""
                className="rounded-full pt-6 pl-8"
              />
            </div>
          </div>
          <h2 className="dark:text-black pt-6 text-3xl font-medium text-left pl-6 pb-[14px] leading-7 tracking-tighter">
            Manage <br /> multiple <br /> accounts and <br /> platforms.
          </h2>
          {/*card-Maintain a  */}
        </div>
        {/*card-5-maintain */}
        <div className="rounded-xl bg-[#ffcc69] relative overflow-hidden text-left">
          <h2 className="dark:text-black p-[20px] text-3xl font-medium leading-6 tracking-tighter">
            Maintain a <br /> consistent <br /> posting <br /> schedule.
            <div className="absolute left-8 top-40 w-48">
              <img
                // src="./public/card-yellow-2-illustration-consistent-schedule.webp"
                src="/assets/card-yellow-2-illustration-consistent-schedule.webp"
                alt=""
                className="w-55"
              />
            </div>
          </h2>
        </div>
        {/* card-6-Write your */}
        <div className="rounded-xl bg-[#ffcc69] pl-6">
          <h2 className="dark:text-black leading-6 font-medium text-3xl text-left pt-6 tracking-tighter">
            Write your <br /> content <br /> using AI.
          </h2>
          <div className="w-full">
            <img
              // src="./public/card-2-illustration-ai-content.webp"
              src="/assets/card-2-illustration-ai-content.webp"
              alt=""
              className="w-56 pt-[32px] pb-[25px] pl-6"
            />
          </div>
        </div>
        {/* card-7-56% */}
        <div className="rounded-xl bg-[#ffffff] flex flex-col items-start shadow-boxBg pl-7">
          <h2 className="dark:text-black text-5xl font-medium pt-6">
            <span>&#62;</span>56%
          </h2>
          <p className="pt-3 dark:text-black ">faster audience growth</p>
          <img
            // src="./public/card-white-2-illustration-audience-growth.webp"
            src="/assets/card-white-2-illustration-audience-growth.webp"
            alt=""
            className="w-48 pt-7"
          />
        </div>
        {/* card-8-Grow Followers */}
        <div className=" rounded-xl flex  bg-[#7651dc] col-span-2 p-2">
          <div className="w-72">
            <img
              // src="./public/card-purple-2-illustration-grow-followers.webp"
              src="/assets/card-purple-2-illustration-grow-followers.webp"
              alt=""
              className="pl-[10px] pt-[10px]"
            />
          </div>
          <div className="flex pt-20 ">
            <h3 className="leading-8 text-4xl font-medium text-white text-left pt-2 tracking-tight">
              Grow followers <br /> with non-stop
              <br />
              content.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
