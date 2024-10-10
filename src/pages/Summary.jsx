import { useEffect, useState } from "react";
import { Closing } from "../components/Closing";

export const Summary = () => {
  const [popUp, setPopUp] = useState(false);
  const [data, setData] = useState({
    breakfast: '',
    mainactivity: '',
    movie: '',
    afternoon: '',
    suggestion: '',
  });

  useEffect(() => {
    const breakfast = localStorage.getItem('breakfast');
    const mainactivity = localStorage.getItem('mainactivity');
    const movie = localStorage.getItem('movie');
    const afternoon = localStorage.getItem('afternoon');
    const suggestion = localStorage.getItem('suggestion');

    setData({
      breakfast,
      mainactivity,
      movie,
      afternoon,
      suggestion,
    });
  }, []);

  const handleBack = () => {
    window.location.href = '/suggestion';
  };

  const breakfastOptions = {
    gadogado: { label: 'Gado-gado', image: '/gif/gado.jpg' },
    pecel: { label: 'Pecel', image: '/gif/pecel.jpg' },
    nasikuning: { label: 'Nasi Kuning', image: '/gif/kuning.jpg' },
    nasipadang: { label: 'Nasi Padang', image: '/gif/padang.jpeg' },
  };
  const mainactivityOptions = {
    movie: { label: 'Movie', image: '/gif/movie.jpg' },
    indoorcafe: { label: 'Indoor Cafe', image: '/gif/indoorcafe.jpg' },
    outdoorcafe: { label: 'Outdoor Cafe', image: '/gif/outdoorcafe.webp' },
    beach: { label: 'Beach', image: '/gif/pantaigemah.jpg' },
  };
  const movieOptions = {
    lembayung: { label: 'Lembayung', image: '/gif/lembayung.webp' },
    homesweetloan: { label: 'Home Sweet Loan', image: '/gif/homesweet.webp' },
    kuasagelap: { label: 'Kuasa Gelap', image: '/gif/kuasagelap.jpg' },
    lauttengah: { label: 'Laut Tengah', image: '/gif/lauttengah.jpeg' },
  };
  const afternoonOptions = {
    gacoan: { label: 'Gacoan', image: '/gif/gacoan.jpg' },
    indoorcafe: { label: 'Indoor Cafe', image: '/gif/indoorcafe.jpg' },
    outdoorcafe: { label: 'Outdoor Cafe', image: '/gif/outdoorcafe.webp' },
  };

  const handleSubmit = () => {
    setPopUp(true);
  };

  return (
    <div className="fadein w-screen h-screen bg-fuchsia-200 overflow-auto flex flex-col justify-center items-center">
      {popUp && <Closing setClose={setPopUp} />}
      <i
        onClick={handleBack}
        className="absolute top-5 left-5 cursor-pointer text-3xl fa-solid fa-arrow-left"
      ></i>
      <h1 className="text-3xl text-center font-bold mb-20 px-7 py-5 mx-4 rounded-xl bg-fuchsia-700 text-white">
        SUMMARY
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Breakfast */}
        {data.breakfast && breakfastOptions[data.breakfast] && (
          <div className="relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-md shadow-slate-500">
            <img
              className="w-40 lg:w-72 h-32 lg:h-52 object-cover"
              src={breakfastOptions[data.breakfast].image}
              alt={breakfastOptions[data.breakfast].label}
            />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">
              {breakfastOptions[data.breakfast].label}
            </p>
          </div>
        )}

        {/* Main Activity */}
        {data.mainactivity && mainactivityOptions[data.mainactivity] && (
          <div className="relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-md shadow-slate-500">
            <img
              className="w-40 lg:w-72 h-32 lg:h-52 object-cover"
              src={mainactivityOptions[data.mainactivity].image}
              alt={mainactivityOptions[data.mainactivity].label}
            />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">
              {mainactivityOptions[data.mainactivity].label}
            </p>
          </div>
        )}

        {/* Movie */}
        {data.movie && movieOptions[data.movie] && (
          <div className="relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-md shadow-slate-500">
            <img
              className="w-36 lg:w-48 h-48 lg:h-72 object-cover"
              src={movieOptions[data.movie].image}
              alt={movieOptions[data.movie].label}
            />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">
              {movieOptions[data.movie].label}
            </p>
          </div>
        )}

        {/* Afternoon */}
        {data.afternoon && afternoonOptions[data.afternoon] && (
          <div className="relative flex flex-col justify-center items-center rounded-xl overflow-hidden shadow-md shadow-slate-500">
            <img
              className="w-40 lg:w-72 h-32 lg:h-52 object-cover"
              src={afternoonOptions[data.afternoon].image}
              alt={afternoonOptions[data.afternoon].label}
            />
            <p className="absolute bottom-0 w-full bg-slate-900 bg-opacity-30 text-center text-white">
              {afternoonOptions[data.afternoon].label}
            </p>
          </div>
        )}

      </div>
        {/* Suggestion */}
        {data.suggestion && (
          <div className="bg-fuchsia-400 px-5 py-3 mt-10 flex flex-col justify-center items-center rounded-xl shadow-md shadow-slate-500">
              Saran : {data.suggestion}
          </div>
        )}
      <button onClick={handleSubmit} className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-center mt-7">Let&apos;s go</button>
    </div>
  );
};
