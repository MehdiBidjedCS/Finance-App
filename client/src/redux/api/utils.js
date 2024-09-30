import axios from "axios";

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // Access the env variable
});

export const handleApiError = async (error) => {
  try {
    const errorMessage =
      Object.values(error.response.data)[0] || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
}
