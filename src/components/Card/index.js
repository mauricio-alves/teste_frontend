import { Link } from "react-router-dom";

export function Card({ currentComic }) {
  return (
    <div className="card mb-5" style={{ width: "18rem" }}>
      <img
        src={
          currentComic.images.length > 0
            ? `${currentComic.images[0].path}.jpg`
            : "https://http.cat/404.jpg"
        }
        className="card-img-top"
        alt="comic cover"
      />
      <div className="card-body">
        <h5 className="card-title">{currentComic.title}</h5>
        <p className="card-text">
          {currentComic.description
            ? currentComic.description
            : "This comic book does not have a description."}
        </p>
        <div className="text-center">
          <Link to={`/details/${currentComic.id}`}>
            <button className="btn btn-primary text-center">Detalhes</button>
          </Link>
        </div>
      </div>
    </div>

    // <div className="rounded px-8 pb-8 flex justify-center">
    //   <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //     <img
    //       src={
    //         currentComic.images.length > 0
    //           ? `${currentComic.images[0].path}.jpg`
    //           : ""
    //       }
    //       alt="comic cover"
    //       className="h-12 w-12 ml-32 rounded-full"
    //     />
    //     <div className="pt-4 pb-2">
    //       <div className="flex justify-around">
    //         <Link
    //           to={`/details/${currentComic.id}`}
    //           id="btnDetalhes"
    //           className="h-10 mb-4 shadow bg-white  focus:shadow-outline focus:outline-none text-purple-700 font-bold py-2 px-4 rounded-full w-3/4 border-solid border-2 border-purple-700"
    //         >
    //           Detalhes
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
