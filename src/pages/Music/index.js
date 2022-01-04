import React, { useEffect } from "react";
import { useState, UseEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { conversionTrack } from "../../helpers/conversionTrack";

import * as C from "./styled";
import { http } from "../../helpers/Api";
import { AiFillPauseCircle } from "react-icons/ai";

export const Music = () => {
  const [tracks, setTracks] = useState([]);

  const [search, setSearch] = useState([]);
  const [text, setText] = useState("");

  const [idAlbum, setIdAlbum] = useState([]);
  const [loading, setLoading] = useState(false);

  // const getAlbum = async () => {
  //   setLoading(true);

  //   let json = await api.getAllAlbuns();
  //   setLoading(false);
  //   setAlbum(json);

  //   console.log("resultado", json);
  // };

  // useEffect(() => {
  //   getAlbum();
  // }, []);

  const searchH = async () => {
    http
      .get("/chart?index=0&limit=7")
      .then((response) => {
        setTracks(response.data.tracks.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    searchH();
  }, []);

  return (
    <>
      <C.Container>
        <C.TrackArea>
          {tracks.map((track) => (
            <div key={track.title}>
              <Card sx={{ maxWidth: 220 }}>
                <CardMedia>
                  <img src={track.album.cover_medium}></img>
                </CardMedia>

                <Typography gutterBottom variant="h5" component="div">
                  {track.album.title}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  {track.music}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  {track.artist.name}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  {conversionTrack(track.duration)}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  <audio controls>
                    <source src={track.preview} type="audio/mpeg" />
                  </audio>
                </Typography>

                <IconButton aria-label="add to favorites">
                  <FavoriteBorderIcon />
                </IconButton>

                <Typography gutterBottom variant="h5" component="div">
                  <a href={track.link} target="_blank" rel="noreferrer">
                    Música Completa
                  </a>
                </Typography>
              </Card>
            </div>
          ))}
        </C.TrackArea>
      </C.Container>
    </>
  );
};
