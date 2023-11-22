import axios from "axios";
export const getQuestion = async (data) => {
  try {
    var res = await axios.post("https://intelligent-ai.onrender.com", data);
    return res.data;
  } catch (error) {
    console.log("error");
  }
};
