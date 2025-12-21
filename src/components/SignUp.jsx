import { React, useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !passwordConfirmRef.current.value
    ) {
      return setError("All Fields required");
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login", { replace: true });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError("Failed to create account.");
      }
    }
    setLoading(false);
  }

  return (
    <>
      <div className="min-h-[100vh] bg-[linear-gradient(to_bottom_right,#F7F1EDE5,#F5CDAAD6)] flex justify-center items-center ">
        <div className="lg:w-[400px] ">
          <div className="flex-col shadow-[6px_5px_14px_#D2A38B8A] rounded-2xl px-7 lg:py-9 py-5   bg-[#F9F5F4FF]/60 backdrop-blur-xl flex justify-center h-[90%] ">
            <h2 className=" mb-5 text-orange-700 font-bold text-xl lg:text-2xl">
              Sign Up
            </h2>
            {error && (
              <p className=" mb-4 text-red-800 lg:text-md" variant="danger">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  className="block mb-2 text-md lg:text-lg"
                  htmlFor="email"
                >
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
                <label
                  className="block mb-2 text-md lg:text-lg "
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  placeholder="Enter password"
                  className="block mb-4 lg:mb-7 px-3 py-3 w-full rounded-lg outline-orange-200"
                  id="password"
                  type="password"
                  ref={passwordRef}
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-md lg:text-lg"
                  htmlFor="password-confirm"
                >
                  Password Confirmation
                </label>
                <input
                  placeholder="Confirm password"
                  className="block mb-7 px-3 py-3 w-full rounded-lg outline-orange-200"
                  id="password-confirm"
                  type="password"
                  ref={passwordConfirmRef}
                />
              </div>
              <button
                disabled={loading}
                className="cursor-pointer   bg-[linear-gradient(to_bottom_right,#F4D8CEFF,#CD3F0CFF)] text-white text-md lg:text-lg px-3 py-1 rounded-xl outline-none border-0"
                type="submit"
              >
                Sign Up
              </button>
              <div className=" text-md lg:text-lg mt-4">
                Already have an account?{" "}
                <Link
                  className="text-lg lg:text-xl ms-2 text-[#022BCDFF]"
                  to="/login"
                >
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
