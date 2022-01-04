import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.deezer.com/",
});
// export const api = {
//   getAllAlbuns: async () => {
//     let response = await http.get("/album/302127");
//     return response.data;
//   },
// };
export default http;
