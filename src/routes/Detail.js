
import {  useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function Detail({title}) {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const {id} = useParams();

useEffect(() => {
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  getDetail();
}, [id]);

  return (
    <div>
      {loading ? (<h1>Loading...</h1>
      ) : (
        <div>
          <h1>{detail.title_long}</h1>
          <h3>Rating: {detail.rating}</h3>
          <img src={detail.large_cover_image} />
          <p>Runtime: {detail.runtime} minutes</p>
          <p>{detail.description_full}</p>
          
          
        </div>

      )}
    </div>
  );

}

export default Detail;