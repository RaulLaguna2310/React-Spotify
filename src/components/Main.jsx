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
      <div className="bg-gray-400 w-full h-full">
        <h1 className="font-bold text-xl p-10"> Rock </h1>
        <div className="grid grid-cols-4 gap-10">
          {artistas
             .filter(artista => artista.genero === "rock")
            .map((artista) => (
              <Link to={`artistas/${artista._id}`}>
                <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                  <p>{artista.name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
