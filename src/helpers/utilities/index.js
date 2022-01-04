export const filterSongsData = (data) => {
  let songs = data.map((song) => {
    return {
      id: song.id,
      title: song.title,
      album: {
        id: song.album.id,
        img: song.album.cover_medium,
        title: song.album.title,
      },

      artist: {
        id: song.artist.id,
        name: song.artist.name,
      },

      link: song.link,
      preview: song.preview,
    };
  });

  return songs;
};
