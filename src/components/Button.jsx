function NavButton({ label }) {
  return (
    <button
      className="transition-all duration-200 font-semibold text-sm leading-snug h-8 px-4 py-2 mx-8 inline-flex justify-center items-center relative text-white cursor-pointer bg-gray-950 rounded-[2rem] hover:shadow-sm hover:shadow-indigo-300 shadow shadow-neutral-300

      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))] before:rounded-[2rem] before:-z-10 before:transition-all before:duration-200 hover:before:scale-100 hover:before:blur-md

      after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))] after:rounded-[2rem] after:-z-10 after:transition-all after:duration-200 hover:after:scale-100 hover:after:blur-md

      active:before:scale-95 active:before:blur-0 active:after:scale-90 active:after:blur-0
      "
    >
      {label}
    </button>
  );
}

function Button(props) {
     return (
        <button className=" h-10 px-12 mx-2 relative inline-flex justify-center items-center bg-amber-50 text-black rounded-3xl font-semibold text-md uppercase leading-snug 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))] before:rounded-3xl before:-z-10 before:transition-all before:duration-200 hover:before:scale-100 hover:before:blur-sm cursor-pointer

        after:content-[''] after:absolute after:inset-0 after:h-full after:w-full after:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))] after:rounded-3xl after:-z-10 after:transition-all after:duration-200 hover:after:scale-100 hover:after:blur-sm
        active:before:scale-95 active:before:blur-0 active:after:scale-75 active:after:blur-0
        ">{props.label}</button>
    );
}

export {NavButton, Button};
