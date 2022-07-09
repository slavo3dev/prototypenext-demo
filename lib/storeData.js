import axios from "axios";

export const storeData = async (data) => {
  try {
    const response = await axios.post("/api/contact", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw new Error(data.message || "Something went wrong!!");
  }
};
