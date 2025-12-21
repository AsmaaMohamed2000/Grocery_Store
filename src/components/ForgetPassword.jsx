import { React, useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!emailRef.current.value) {
      setError("please enter email");
      return;
    }

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("invalid-email");
    }

    setLoading(false);
  }
  return (
    <>
      <div className="h-[100vh] bg-[linear-gradient(to_bottom_right,#F7F1EDE5,#F5CDAAD6)] flex justify-center items-center ">
        <div className="">
          <div className="flex-col shadow-[6px_5px_14px_#D2A38B8A] rounded-2xl px-7 py-9   bg-[#F9F5F4FF]/60 backdrop-blur-xl flex justify-center h-[90%] ">
            <h2 className="mb-7 text-orange-600 font-bold text-lg sm:text-2xl">
              Reset Password
            </h2>
            {error && (
              <p className="my-4 text-red-700 text-md" variant="danger">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  className="block mb-3 text-md sm:text-xl"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  placeholder="Enter Email"
                  className="block mb-7 px-3 py-3 w-full rounded-lg outline-orange-200"
                  id="email"
                  type="email"
                  ref={emailRef}
                />
              </div>

              <button
                disabled={loading}
                className="cursor-pointer mt-4  bg-[linear-gradient(to_bottom_right,#F4D8CEFF,#CD3F0CFF)] text-white text-sm sm:text-md px-4 py-2 rounded-2xl outline-none border-0"
                type="submit"
              >
                Reset Password
              </button>
              <div className=" text-sm sm:text-lg text-green-600  my-5">
                {message}
                <div className="text-md sm:text-xl mt-4">
                  {" "}
                  Go To{" "}
                  <Link
                    className="sm:text-xl text-lg  ms-2 text-[#022BCDFF]"
                    to="/login"
                  >
                    Log In{" "}
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
