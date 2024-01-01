const Auth = () => {
  return (
    <div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="bg-black w-full h-full lg:opacity-50">
        <nav className="px-10 py-4">
          <img className="h-10" src="images/logo.png" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-14 py-14 self-center mt-2 lg:w-2/3 lg:max-w-md "></div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
