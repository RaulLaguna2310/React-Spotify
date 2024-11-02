import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CardSideBar({ capa }){

    const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetch("https://react-spotify-dl9h-k8be8azut-raul-s-projects-4b98cd39.vercel.app/artistas")
      .then((res) => res.json())
      .then((res) => setArtistas(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("Acabou >) "));
  }, []);

    return(

        <div className="flex flex-col gap-20">
            {artistas
              .filter((artista) => artista.genero === "rock")
              .map((artista) => (
                <Link to={`artistas/${artista._id}`}>
                  <div className="w-32 h-32 rounded-lg hover:shadow-md relative">
                    <img src={capa === "bg_rock.jpg"? capa : "/bg_rock.jpg"} alt="Capa do Album" className=" h-auto w-auto absolute inset-0 rounded-lg"/>
                    <div className="w-32 h-auto flex absolute items-center justify-center bottom-0">
                      <p className="text-wrap text-center text-zinc-800 font-semibold hover:underline">{artista.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
    )
}