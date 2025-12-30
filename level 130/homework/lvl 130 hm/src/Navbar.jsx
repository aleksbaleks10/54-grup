import logoImage from "../assets/images/logo.png";

const Navbar = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <nav className="h-[5vh] pt-6 px-[5%] w-screen flex items-center justify-between">
      <div className="w-[20%]">
        <img
          src={logoImage}
          alt="page logo"
          className="w-18.75 cursor-pointer"
          onClick={handleClick}
        />
      </div>

      <div className="w-[60%] flex justify-center items-center gap-12 font-bold">
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">How it works</p>
        <p className="cursor-pointer">Features</p>
        <p className="cursor-pointer">Blog</p>
      </div>

      <div className="w-[20%] flex items-center justify-end font-bold gap-x-6">
        <p className="py-2 px-4 border border-black rounded-sm cursor-pointer">
          Sign up
        </p>
        <p className="py-2 px-4 border border-black rounded-sm bg-black text-white cursor-pointer">
          Log in
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
