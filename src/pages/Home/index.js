import React, { useEffect } from "react";
import { useState, UseEffect } from "react";

import * as C from "./styled";
import { api } from "../../helpers/Api";
import { AiFillPauseCircle } from "react-icons/ai";

export const Home = () => {
  const [album, setAlbum] = useState([]);

  const [idAlbum, setIdAlbum] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAlbum = async () => {
    setLoading(true);

    let json = await api.getAllAlbuns();
    setLoading(false);
    setAlbum(json);

    console.log("resultado", json);
  };

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <>
      <C.Container>
        <C.SearchArea>
          {loading && <div>Carregando...</div>}
          <h3>{album.id}</h3>
          <h3>{album.title}</h3>
          <h3>{album.link}</h3>
          <h3>{album.artist.name}</h3>

          <img src={album.cover_medium} width="200" alt="album.name"></img>
        </C.SearchArea>
      </C.Container>
    </>
  );
};
