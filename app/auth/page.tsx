"use client";
import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [variable, setVariable] = useState("sign in");
  const toggleVariable = useCallback(() => {
    setVariable((currentValue) =>
      currentValue === "sign in" ? "register" : "sign in"
    );
  }, []);
  return (
    <div
      className="
        relative h-full absolute w-full
        bg-[url('/images/hero.jpg')]
        bg-no-repeat 
        bg-cover"
    >
      <div
        className="bg-black w-full h-full 
      md:bg-opacity-50 
      lg:bg-opacity-50"
      >
        <nav
          className="px-12 py-6 
        bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-transparent to-transparent"
        >
          <img className="h-11" src="images/logo.png" alt="logo" />
        </nav>
        <div className="flex justify-center">
          <div
            className="
          bg-black bg-opacity-70 px-14 py-14 
          self-center mt-2 
          lg:w-2/3 lg:max-w-md md:w-2/3 md:max-w-md 
           rounded-md w-full "
          >
            <h2 className="text-white text-3xl mb-7 font-semibold">
              {variable === "sign in" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variable === "register" && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email or phone number"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                type="password"
                label="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button className="text-white rounded-md w-full mt-9 h-12 bg-red-600 hover:bg-red-800 transition">
              {variable === "sign in" ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-11">
              {variable === "sign in"
                ? "New to Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariable}
                className="text-white ml-2 hover:underline cursor-pointer"
              >
                {variable == "sign in" ? "Create an account" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
