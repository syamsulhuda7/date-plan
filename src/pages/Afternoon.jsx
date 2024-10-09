import { useState } from "react";

export const Afternoon = () => {
    const [choose, setChoose] = useState('');
    const [isChoose, setIsChoose] = useState(false);
    const [allowNext, setAllowNext] = useState(false);

    const handleNext = () => {
        window.location.href = '/suggestion'
    }
    const handleBack = () => {
      const movie = localStorage.getItem("movie");
      if (movie) {
        window.location.href = '/movie';
      } else {
        window.location.href = '/mainactivity';
      }
    }

    const handleChoose = (value) => () => {
      setIsChoose(true);
      setChoose(value);
      setAllowNext(true);
      localStorage.setItem("afternoon", value);
    }

    return (
      <div className="bg-fuchsia-200 fadein w-screen h-screen overflow-auto flex flex-col justify-center items-center">
        <i onClick={handleBack} className="absolute top-5 left-5 cursor-pointer text-3xl fa-solid fa-arrow-left"></i>
        <h1 className="text-3xl text-center font-bold mb-20 px-7 py-5 mx-4 rounded-xl bg-fuchsia-700 text-white">TERUS NGAPAIN LAGIII???</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-10">
          <div onClick={handleChoose("gacoan")} className={`${isChoose && choose !== "gacoan" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-md shadow-slate-500`}>
            <img className="w-40 lg:w-72 h-32 lg:h-52 object-cover" src="gif/gacoan.jpg" alt="" />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Gacoan</p>
          </div>
          <div onClick={handleChoose("indoorcafe")} className={`${isChoose && choose !== "indoorcafe" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-md shadow-slate-500`}>
            <img className="w-40 lg:w-72 h-32 lg:h-52 object-cover" src="gif/indoorcafe.jpg" alt="" />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Indoor Cafe</p>
          </div>
          <div onClick={handleChoose("outdoorcafe")} className={`${isChoose && choose !== "outdoorcafe" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-md shadow-slate-500`}>
            <img className="w-40 lg:w-72 h-32 lg:h-52 object-cover" src="gif/outdoorcafe.webp" alt="" />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Outdoor Cafe</p>
          </div>
        </div>
        <div className="flex gap-3">
            <button onClick={handleNext} className={`${allowNext ? "block" : "hidden" } mt-16 px-5 py-2 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 hover:text-yellow-200`}>Next &raquo;</button>
        </div>
      </div>
  )
}
