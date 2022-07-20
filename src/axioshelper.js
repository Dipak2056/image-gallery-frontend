import axios from "axios";

export const getImage = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/image-upload");
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const postImage = async (formData) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/image-upload",
      formData
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
