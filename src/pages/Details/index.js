import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Details() {
  const { id } = useParams();
  const [comic, setComic] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${process.env.REACT_APP_APIKEY}`
        );
        setComic(response.data.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);
  console.log(comic);

  return loading ? (
    <div className="spinner-border text-danger" role="status"></div>
  ) : (
    <>
      <Header />
      <h1>{comic.title}</h1>
      <Footer />
    </>
  );
}
