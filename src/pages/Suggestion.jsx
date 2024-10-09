import { useState } from "react";

export const Suggestion = () => {
  const [suggestion, setSuggestion] = useState('');
    const handleNext = () => {
      localStorage.setItem('suggestion', suggestion);
        window.location.href = '/summary'
    }
    const handleBack = () => {
      window.location.href = '/afternoon';
    }
  return (
    <div className="bg-fuchsia-200 fadein w-screen h-screen overflow-auto flex flex-col justify-center items-center">
              <i onClick={handleBack} className="absolute top-5 left-5 cursor-pointer text-3xl fa-solid fa-arrow-left"></i>
              <h1 className="text-3xl text-center font-bold mb-20 px-7 py-5 mx-4 rounded-xl bg-fuchsia-700 text-white">ADA SARAN???</h1>
              <textarea onChange={(e) => setSuggestion(e.target.value)} className="w-3/4 lg:w-1/2 h-1/3 px-4 py-2 bg-slate-100 rounded-xl outline outline-slate-300" placeholder="Tulis saranmu disini" type="text" />
        <div className="flex gap-3">
            <button onClick={handleNext} className="mt-16 px-5 py-2 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 hover:text-yellow-200">Next &raquo;</button>
        </div>
    </div>
  )
}
