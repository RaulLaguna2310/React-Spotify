import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Main({ children, capa }) {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetch("react-spotify-dl9h.vercel.app")
      .then((res) => res.json())
      .then((res) => setArtistas(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("Acabou >) "));
  }, []);

  return (
    <>
      <div className="bg-cl_bg w-full h-full flex flex-col font-mono py-8 px-12">
        <div className="mb-10">
          <h1 className="text-white font-semibold text-xl py-8 px-10"> Rock </h1>
          <div className="grid grid-cols-4">
            {artistas
              .filter((artista) => artista.genero === "rock")
              .map((artista) => (
                <Link to={`artistas/${artista._id}`}>
                  <div className="w-32 h-32 rounded-lg ml-14 hover:shadow-md relative">
                    <img src={capa === "bg_rock.jpg"? capa : "/bg_rock.jpg"} alt="Capa do Album" className=" h-auto w-auto absolute inset-0 rounded-lg"/>
                    <div className="w-32 h-auto flex absolute items-center justify-center bottom-0">
                      <p className="text-wrap text-center text-zinc-800 font-semibold hover:underline">{artista.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
          
        <div className="mb-10">
          <h1 className="text-white  font-semibold text-xl py-8 px-10"> Rap </h1>
          <div className="grid grid-cols-4">
            {artistas
              .filter((artista) => artista.genero === "rap")
              .map((artista) => (
                <Link to={`artistas/${artista._id}`}>
                  <div className="w-32 h-32 rounded-lg ml-14 hover:shadow-md relative">
                    <img src={capa === "bg_rap.jpg"? capa : "/bg_rap.jpg"} alt="Capa do Album" className=" h-auto w-auto absolute inset-0 rounded-lg"/>
                    <div className="w-32 h-auto flex absolute items-center justify-center bottom-0">
                      <p className="text-wrap text-center text-white font-semibold hover:underline ">{artista.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="mb-10">
          <h1 className="text-white  font-semibold text-xl py-8 px-10"> Pop </h1>
          <div className="grid grid-cols-4">
            {artistas
              .filter((artista) => artista.genero === "pop")
              .map((artista) => (
                <Link to={`artistas/${artista._id}`}>
                  <div className="w-32 h-32 rounded-lg ml-14 hover:shadow-md relative">
                    <img src={capa === "bg_pop.jpg"? capa : "/bg_pop.jpg"} alt="Capa do Album" className=" h-auto w-auto absolute inset-0 rounded-lg"/>
                    <div className="w-32 h-auto flex absolute items-center justify-center bottom-0">
                      <p className="text-wrap text-center text-white font-semibold hover:underline">{artista.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </>
  );
}
