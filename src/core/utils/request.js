import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL;

export const request = async ({ route, method = "GET", body }) => {
  try {
    const response = await axios.request({
      url: `${route}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    return response;
  } catch (error) {
    console.log("======== Error =========");
    console.log(error);
    console.log("======== // =========");

    throw error;
  }
};
