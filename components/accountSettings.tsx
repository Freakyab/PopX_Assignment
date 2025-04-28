export default function AccountSettings() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-[80%] max-w-lg bg-gray-100/80 shadow-sm rounded-md overflow-hidden">
        <div className="p-6 bg-white/80">
          <h1 className="text-xl text-gray-700 font-medium">
            Account Settings
          </h1>
        </div>

        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                {/* <img
                  src="/image.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Marry Doe</h2>
              <p className="text-gray-600">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="border-t border-gray-600/30 border-dashed "></div>
      </div>
    </div>
  );
}
