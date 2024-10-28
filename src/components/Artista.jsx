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
      <div className=" bg-slate-100 h-full w-full">
        <h1 className="font-bold text-3xl p-10">{artista.name}</h1>
        <p>{artista.descricao}</p>
        <img src={artista.imagem} alt="" />
      </div>
    </>
  );
}