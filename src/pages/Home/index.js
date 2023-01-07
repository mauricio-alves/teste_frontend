import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import "../../global.css";

export function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/comics?apikey=${process.env.REACT_APP_APIKEY}`
        );
        setData(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return loading ? (
    <div className="spinner-border text-danger" role="status"></div>
  ) : (
    <>
      <Header />
      <div id="homeBody">
        {data.map((currentComic) => {
          return (
            <div key={currentComic.id}>
              <Card currentComic={currentComic}></Card>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
