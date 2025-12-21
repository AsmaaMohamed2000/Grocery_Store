
import { React, useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!emailRef.current.value || !passwordRef.current.value) {
      setError("Email and Password required");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true });
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Email or password is incorrect");
          break;
        default:
          setError("Failed to log in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="h-[100vh] bg-[linear-gradient(to_bottom_right,#F7F1EDE5,#F5CDAAD6)] flex justify-center items-center ">
        <div className="lg:w-[400px]">
          <div className="flex-col shadow-[6px_5px_14px_#D2A38B8A] rounded-2xl px-7 py-9   bg-[#F9F5F4FF]/60 backdrop-blur-xl flex justify-center h-[90%] ">
            <h2 className="lg:mb-7 mb-2 text-orange-700 font-bold text-xl lg:text-2xl">
              Log In
            </h2>
            {error && (
              <p className="mt-2 mb-4 text-red-800 text-md" variant="danger">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block mb-3 text-lg" htmlFor="email">
                  Email
                </label>
                <input
                  placeholder="Enter Email"
                  className="block mb-4 lg:mb-7 px-3 py-3 w-full rounded-lg outline-orange-200"
                  id="email"
                  type="email"
                  ref={emailRef}
                />
              </div>
              <div>
                <label className="block mb-3 text-lg " htmlFor="password">
                  Password
                </label>
                <input
                  placeholder="Enter password"
                  className="block mb-7 px-3 py-3 w-full rounded-lg outline-orange-200"
                  id="password"
                  type="password"
                  ref={passwordRef}
                />
              </div>
              <div>
                <Link
                  className="lg:text-lg text-md  ms-2 text-[#022BCDFF]"
                  to="/forgetpassword"
                >
                  Forgot Password ?
                </Link>
              </div>

              <button
                disabled={loading}
                className="cursor-pointer mt-5  bg-[linear-gradient(to_bottom_right,#F4D8CEFF,#CD3F0CFF)] text-white text-md lg:text-lg px-4 py-1 rounded-xl outline-none border-0"
                type="submit"
              >
                Log In
              </button>
              <div className="  mt-4 text-lg">
                Need an account?{" "}
                <Link className="text-xl ms-2 text-[#022BCDFF]" to="/signup">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
