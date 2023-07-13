const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-end items-center">
        <div
          className="w-[calc(100%-256px)] transition-all duration-300
           md:w-full bg-white p-5 text-center
      text-sm shadow-lg shadow-indigo-800 dark:bg-dark md:py-4"
        >
          <p className="text-zinc-700 dark:text-zinc-400">
            Copyright 2023 © Cuba theme by Robnsiov
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
