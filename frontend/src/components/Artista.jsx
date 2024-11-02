import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Artista(children) {
  const { id } = useParams();

  const [artista, setArtista] = useState({});

  useEffect(() => {
    fetch(`https://react-spotify-dl9h-k8be8azut-raul-s-projects-4b98cd39.vercel.app/artistas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtista(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="bg-cl_bg text-white h-full w-full flex flex-row p-20 font-mono">
        <img src={artista.imagem} alt="" className="w-96 h-64 rounded-lg shadow-lg"/>
        <div className="flex flex-col px-10 h-64">
          <h1 className="font-bold text-3xl">
            {artista.name}
          </h1>
          <div className="p-4 w-8/12 text-wrap text-justify">
            <p className="font-medium leading-5">{artista.descricao}</p>
            <p className="font-semibold underline decoration-indigo-600 underline-offset-4 mt-4">Gênero musical: {artista.genero}</p>
          </div>
        </div>
      </div>
    </>
  );
}
