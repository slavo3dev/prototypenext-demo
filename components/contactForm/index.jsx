import React, { useState, useCallback } from "react";

export const ContactForm = () => {
  const [payload, setPayload] = useState();

  console.log("Payload: ", payload);
  return (
    <>
      <div
        className="mb-4 text-sm wow animate__animated animate__fadeIn animated"
        data-wow-delay=".1s"
      >
        <span className="mr-4 font-semibold">Departament:</span>
        <label className="mr-4">
          <input
            className="mr-1"
            type="radio"
            name="department"
            value="Mentor"
            onChange={(e) =>
              setPayload({ department: e.target.value })
            }
          />
          <span>Mentor</span>
        </label>
        <label>
          <input
            className="mr-1"
            type="radio"
            name="department"
            value="Support"
            onChange={(e) =>
              setPayload({ department: e.target.value })
            }
          />
          <span>Support</span>
        </label>
      </div>
      <div
        className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated"
        data-wow-delay=".3s"
      >
        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
          <div className="mb-4">
            <input
              className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
              type="text"
              placeholder="Subject"
              onChange={(e) =>
                setPayload((prevState) => ({
                  ...prevState,
                  subject: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setPayload((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
              type="email"
              placeholder="name@example.com"
              onChange={(e) =>
                setPayload((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </div>
          {/* <div>
            <label className="flex px-2 bg-blueGray-50 rounded">
              <input
                className="hidden"
                type="file"
                name="Choose file"
              />
              <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                {" "}
                Browse
              </span>
            </label>
          </div> */}
        </div>
        <div className="w-full lg:w-1/2 px-3">
          <textarea
            className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
            placeholder="Message..."
            onChange={(e) =>
              setPayload((prevState) => ({
                ...prevState,
                message: e.target.value,
              }))
            }
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <label>
          <input
            className="mr-1"
            type="checkbox"
            name="terms"
            value="accept"
            onChange={(e) =>
              setPayload((prevState) => ({
                ...prevState,
                terms: e.target.value,
              }))
            }
          />
          <span className="text-sm font-semibold">
            I agree to terms and conditions.
          </span>
        </label>
        <button
          className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
          // type="submit"
          onClick={() => alert("Payload: ", console.log(payload))}
        >
          Submit
        </button>
      </div>
    </>
  );
};
