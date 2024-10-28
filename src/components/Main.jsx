import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Main({ children }) {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/artistas")
      .then((res) => res.json())
      .then((res) => setArtistas(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("Acabou >) "));
  }, []);
  return (
    <>
      <div className="bg-slate-100 w-full h-full flex flex-col justify-around">
        <div>
          <h1 className="font-bold text-xl py-8 px-10"> Rock </h1>
          <div className="grid grid-cols-4 gap-10">
            {artistas
              .filter((artista) => artista.genero === "rock")
              .map((artista) => (
                <Link to={`artistas/${artista._id}`}>
                  <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center rounded-lg ml-14">
                    <p>{artista.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
          
        <div>
          <h1 className="font-bold text-xl pt-10 pb-8 px-10"> Rap </h1>
          <div className="grid grid-cols-4 gap-10">
            {artistas
              .filter((artista) => artista.genero === "rap")
              .map((artista) => (
                <Link to={`artistas/${artista._id}`}>
                  <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center rounded-lg ml-14">
                    <p>{artista.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl py-8 px-10"> Pop </h1>
          <div className="grid grid-cols-4 gap-10">
            {artistas
              .filter((artista) => artista.genero === "pop")
              .map((artista) => (
                <Link to={`artistas/${artista._id}`}>
                  <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center rounded-lg ml-14">
                    <p>{artista.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </>
  );
}
