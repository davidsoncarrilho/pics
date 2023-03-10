import axios from "axios";

const searchImages = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID qK4LhteFARZCvNKH-3EQYRJkDLBD8t7hQHrNHwq3Tkg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
