import React from "react";

const SignIn = () => {
  return (
    <div className="relative container  m-auto px-6 text-gray-500 md:px-12 xl:px-40">
      <div className="m-auto space-y-8 md:w-8/12 lg:w-full ">
        <div className="rounded-xl border bg-opacity-75 bg-input-card backdrop-blur-2xl  shadow-xl">
          <div className="lg:grid lg:grid-cols-2">
            <div className="rounded-lg lg:block" hidden>
              <img src="" className="rounded-l-xl object-cover" loading="lazy" height="" width="" alt="" />
            </div>
            <div className="p-6 sm:p-16">
              <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to your account</h2>
              <form action="" className="space-y-8">
                <div className="space-y-2">
                  <label for="email" className="text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
        focus:ring-2 focus:ring-sky-300 focus:outline-none
        invalid:ring-2 invalid:ring-red-400"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label for="pwd" className="text-gray-700">
                      Password
                    </label>
                    <button className="p-2 -mr-2" type="reset">
                      <span className="text-sm text-sky-500">Forgot your password ?</span>
                    </button>
                  </div>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                            focus:ring-2 focus:ring-sky-300 focus:outline-none
                                            invalid:ring-2 invalid:ring-red-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500"
                >
                  <span className="text-white">Continue</span>
                </button>

                <p className="border-t pt-6 text-sm">
                  Don't have an account ?
                  <a href="#" className="text-sky-500">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
