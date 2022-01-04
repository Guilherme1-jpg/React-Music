import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'

import Card from '@material-ui/core/Card'

import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import * as C from './styled'
import { http } from '../../helpers/Api'

import Input from '@material-ui/core/Input'

import SearchIcon from '@mui/icons-material/Search'
import { filterSongsData } from '../../helpers/utilities'

export const Home = () => {
    const [album, setAlbum] = useState([])
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)

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
        setLoading(true)
        let result = await http.get(`artist/${text}`)
        let json = result.data
        setLoading(false)
        setAlbum(json)

        console.log('result', json)
    }

    useEffect(() => {
        searchH()
    }, [text])

    return (
        <>
            <C.Container>
                <C.SearchArea>
                    <Input
                        sx={{ width: '25ch' }}
                        placeholder="Pesquise seu artista favorito"
                        inputProps={{ 'aria-label': 'description' }}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <SearchIcon />
                </C.SearchArea>
                {loading && <div>Carregando...</div>}

                {!loading && (
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia>
                            <img
                                src={album.picture_medium}
                                width="300"
                                alt="album.name"
                            ></img>
                        </CardMedia>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {album.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <h3>Curtidas:{album.nb_fan}</h3>
                                <h3>{album.type}</h3>
                                Musicas: {album.nb_album}
                            </Typography>

                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                <a
                                    href={album.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ouça agora !
                                </a>
                            </Typography>
                        </CardContent>
                        <CardActions></CardActions>
                    </Card>
                )}
            </C.Container>
        </>
    )
}
