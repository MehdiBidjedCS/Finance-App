import { API, handleApiError } from "./utils.js";

export const signup = async (credential) => {
  try {
    const response = await API.post("/signup", credential);
    return { error: null, data: response.data };
  } catch (err) {
    handleApiError(err);
  }
};

export const login = async (credential) => {
  try {
    const response = await API.post("/api/token/", credential, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { data: response.data, status: response.status, error: null };
  } catch (err) {
    return handleApiError(err);
  }
};
