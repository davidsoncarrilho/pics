import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

export type Image = {
  id: string;
  urls: { small: string };
  alt_description: string;
};

function App() {
  const [images, setImages] = useState<Image[]>([]);

  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
