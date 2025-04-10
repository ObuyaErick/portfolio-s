import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [focusedEmail, setFocusedEmail] = useState(false);

  const handleEmailFocus = () => {
    setFocusedEmail(true);
  };

  const handleEmailBlur = () => {
    if (email.trim() === "") {
      setFocusedEmail(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-8 bg-white border border-gray-200  rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Erick ni fala
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-#1040c1 focus:border-#1040c1 focus:shadow-[0_0_8px_2px_rgba(59,130,246,0.5)] text-gray-900 pt-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              required
              placeholder=" "
            />
            <label
              htmlFor="email"
              className={`absolute left-4 text-gray-500 text-sm transition-all duration-200 ${
                focusedEmail || email
                  ? "top-2 text-blue-500 text-xs"
                  : "top-1/2 transform -translate-y-1/2 text-gray-500"
              }`}
            >
              Email or mobile number
            </label>
          </div>
          <div className="flex justify-start">
            <a href="#" className="font-bold text-blue-500 text-sm">
              Forgot email?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="w-1/3 h-px bg-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="w-full text-center border border-black text-black  text-sm font-medium py-2 rounded-full hover:text-blue-800"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
