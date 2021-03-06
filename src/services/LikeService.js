import Axios from "../helpers/setupAxios";
export async function likePostService(payload) {
    try {
      return await (
        await Axios.post(`/api/Like/likePost`,  payload , {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        })
        ).data;
    } catch (error) {
      console.log("err: ", error);
    }
  };
  export async function removePostLikeService(payload) {
    try {
      return await (
        await Axios.post(`/api/Like/removePostLike`,  payload , {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        })
        ).data;
    } catch (error) {
      return error;
    }
  };