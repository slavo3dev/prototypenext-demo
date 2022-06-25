import React, { useState } from "react";
import axios from "axios";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setState("Loading");
    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setTimeout(() => {
        setState("idle");
      }, 900);

      setEmail("");
    } catch (e) {
      setErrorMsg(e.response.data);
      console.log(e.response);
      setState("Error");
      setTimeout(() => {
        setState("idle");
      }, 900);
    }
  };

  const emailForm = (
    <div className="flex mb-4 px-4 bg-blueGray-100 rounded">
      <input
        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
        type="email"
        placeholder="name@email.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <svg
        className="h-6 w-6 ml-4 my-auto text-blueGray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        ></path>
      </svg>
    </div>
  );

  return (
    <div className="flex flex-wrap bg-white rounded shadow wow animate__animated animate__fadeIn animated">
      <div className="w-full md:w-1/2 lg:w-2/5 px-3">
        <div className="p-8 text-center">
          <span className="text-blueGray-400">Waiting List</span>
          <h4 className="mb-6 text-2xl">Subscribe</h4>
          {state === "Success" ? (
            <p className="lg:text-xl text-blueGray-900">
              Awesome, you have been subscribed to felpApp
            </p>
          ) : (
            emailForm
          )}
          {/* <div className="flex mb-6 px-4 bg-blueGray-100 rounded">
                            <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="password" placeholder="Enter your password" />
                            <button className="ml-4">
                                 <svg className="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </button>
                         </div> */}
          {/* <div className="text-left mb-5 text-sm text-blueGray-400">
                                <label>
                                    <input type="checkbox" name="terms" value="1" />
                                    <span className="ml-1">I agree to terms and conditions.</span>
                                    </label>
                         </div> */}
          <button
            className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 lg:w-3/5 px-3 bg-blue-500 rounded-r overflow-hidden">
        <div className="max-w-sm px-12 pt-12">
          <span className="text-xs text-blue-200">
            Work & Learn & Grow
          </span>
          <h3 className="mb-4 text-4xl font-bold font-heading text-white">
            felpApp Realtime Software Project.
          </h3>
        </div>
        <div className="absolute right-0 bottom-0">
          <div className="flex items-center h-full">
            <img
              className="h-80"
              src="/assets/imgs/illustrations/online-shopping.png"
              alt="Monst"
            />
          </div>
        </div>
      </div>
      {state === "Error" &&
        alert(
          "Oops Something went WORONG \nPlease Try Again or You are already a member !!!",
        )}
    </div>
  );
};
