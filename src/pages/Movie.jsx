import { useState } from "react";

export const Movie = () => {
    const [choose, setChoose] = useState('');
    const [isChoose, setIsChoose] = useState(false);
    const [allowNext, setAllowNext] = useState(false);

    const handleNext = () => {
        window.location.href = '/afternoon'
    }
    const handleBack = () => {
        window.location.href = '/mainactivity';
    }

    const handleChoose = (value) => () => {
      setIsChoose(true);
      setChoose(value);
      setAllowNext(true);
      localStorage.setItem("movie", value);
    }

    return (
      <div className="bg-fuchsia-200 w-screen h-screen overflow-auto flex flex-col justify-center items-center">
        <i onClick={handleBack} className="absolute top-5 left-5 cursor-pointer text-3xl fa-solid fa-arrow-left"></i>
        <h1 className="text-3xl text-center font-bold mb-20 px-7 py-5 mx-4 rounded-xl  bg-fuchsia-700 text-white">MAU NONTON APAAA???</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-10">
          <div onClick={handleChoose("lembayung")} className={`${isChoose && choose !== "lembayung" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
            <img className="w-36 lg:w-48 h-48 lg:h-72 object-cover" src="/gif/lembayung.webp" alt="" />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Lembayung</p>
          </div>
          <div onClick={handleChoose("homesweetloan")} className={`${isChoose && choose !== "homesweetloan" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
            <img className="w-36 lg:w-48 h-48 lg:h-72 object-cover" src="/gif/homesweet.webp" alt="" />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Home Sweet Loan</p>
          </div>
          <div onClick={handleChoose("kuasagelap")} className={`${isChoose && choose !== "kuasagelap" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
            <img className="w-36 lg:w-48 h-48 lg:h-72 object-cover" src="/gif/kuasagelap.jpg" alt="" />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Kuasa Gelap</p>
          </div>
          <div onClick={handleChoose("lauttengah")} className={`${isChoose && choose !== "lauttengah" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
            <img className="w-36 lg:w-48 h-48 lg:h-72 object-cover" src="/gif/filmlauttengah.jpg" alt="" />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Laut Tengah</p>
          </div>
        </div>
        <div className="flex gap-3 mt-7">
        <button onClick={handleNext} className={`${allowNext ? "block" : "hidden" } px-5 py-2 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 hover:text-yellow-200`}>Next &raquo;</button>
        </div>
      </div>
  )
}
