import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navTo = useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-gray-100/50 h-[80%] md:h-2/3 w-[80%] max-w-3xl md:w-full flex sm:justify-center space-y-2 flex-col p-4 md:p-8 rounded-md">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">
          Signin to your PopX account
        </h1>

        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="text-xs sm:text-sm" onSubmit={() => navTo("/account")}>
          <div className="mb-4 relative ">
            <label
              htmlFor="email"
              className="absolute text-purple-500 -top-2.5 left-3 bg-gray-100/50 pr-4 pl-1 z-10">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full px-3 py-3 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="absolute text-purple-500 bg-gray-100/50 -top-2.5 left-3 pr-4 pl-1 z-10">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-3 py-3 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-400 text-white font-medium rounded-md hover:bg-gray-500 transition duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
