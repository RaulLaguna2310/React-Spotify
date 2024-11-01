import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Artista(children) {
  const { id } = useParams();

  const [artista, setArtista] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/artistas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtista(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="bg-cl_bg text-white h-full w-full flex flex-row p-10">
        <img src={artista.imagem} alt="" className="w-96 h-64" />
        <div className="flex flex-col px-10">
          <h1 className="font-bold font-mono text-3xl">
            {artista.name}
          </h1>
          <p>{artista.descricao}</p>
        </div>
      </div>
    </>
  );
}
