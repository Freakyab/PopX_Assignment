import { useNavigate } from "react-router-dom";

function Home() {
  const navTo = useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-100/50 h-[80%] md:h-2/3 w-[80%] max-w-3xl md:w-full flex justify-end sm:justify-center space-y-2 flex-col p-4 md:p-8 rounded-md shadow-sm ">
        <h1 className="font-semibold text-lg sm:text-3xl">Welcome To PopX</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex flex-col gap-2 mt-4 text-xs sm:text-sm transition-colors duration-200 ease-in-out">
          <button
            className="bg-purple-700 text-white p-2 rounded-md cursor-pointer hover:bg-purple-800 "
            onClick={() => {
              navTo("/signup");
            }}>
            Create Account
          </button>
          <button
            onClick={() => {
              navTo("/login");
            }}
            className="bg-purple-300 hover:bg-purple-400 cursor-pointer
          text-black p-2 rounded-md 
          ">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
