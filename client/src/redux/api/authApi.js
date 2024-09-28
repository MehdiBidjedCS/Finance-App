import { API, handleApiError } from "./utils";

export const signup = async (credential) => {
  try {
    const response = await API.post("/signup", credential);
    return { error: null, data: response.data };
  } catch (err) {
    handleApiError(err);
  }
};
