import { useState } from "react";

export const Breakfast = () => {
  const [choose, setChoose] = useState('');
  const [isChoose, setIsChoose] = useState(false);
  const [allowNext, setAllowNext] = useState(false);

  const handleNext = () => {
    if (!allowNext) {
      return
    } else {
      window.location.href = '/mainactivity';
    }
  }

  const handleChoose = (value) => () => {
    setIsChoose(true);
    setChoose(value);
    setAllowNext(true);
    localStorage.setItem("breakfast", value);
  }
  return (
    <div className="bg-fuchsia-200 w-screen h-screen overflow-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold mb-20 px-7 py-5 mx-4 rounded-xl bg-fuchsia-700 text-white">MAU SARAPAN APAA???</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
        <div onClick={handleChoose("gadogado")} className={`${isChoose && choose !== "gadogado" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
          <img className="w-40 lg:w-72 h-32 lg:h-52 object-cover" src="/gif/gado.jpg" alt="" />
          <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Gado-gado</p>
        </div>
        <div onClick={handleChoose("pecel")} className={`${isChoose && choose !== "pecel" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
          <img className="w-40 lg:w-72 h-32 lg:h-52 object-cover" src="/gif/pecel.jpg" alt="" />
          <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Pecel</p>
        </div>
        <div onClick={handleChoose("nasikuning")} className={`${isChoose && choose !== "nasikuning" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
          <img className="w-40 lg:w-72 h-32 lg:h-52 object-cover" src="/gif/kuning.jpg" alt="" />
          <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Nasi Kuning</p>
        </div>
        <div onClick={handleChoose("nasipadang")} className={`${isChoose && choose !== "nasipadang" ? "opacity-50" : "opacity-100 scale-105"} hover:scale-105 transition-all cursor-pointer ease-in-out duration-200 relative flex flex-col justify-center items-center rounded-xl overflow-hidden`}>
          <img className="w-40 lg:w-72 h-32 lg:h-52 object-cover" src="/gif/padang.jpeg" alt="" />
          <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">Nasi Padang</p>
        </div>
      </div>
      <button onClick={handleNext} className={`${allowNext ? "block" : "hidden" } mt-16 px-5 py-2 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 hover:text-yellow-200`}>Next &raquo;</button>
    </div>
  )
}
