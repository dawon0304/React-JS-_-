
import {  useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

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
    <div >
      {loading ? (<h1>Loading...</h1>
      ) : (
        <div className={styles.detail}>
          <h1 className={styles.detail__title}>
            {detail.title_long}
          </h1>
          <h3 className={styles.detail__rating}>
            👍Rating: {detail.rating}
          </h3>
          <img className={styles.detail__img} 
                src={detail.large_cover_image} 
          />
          <div className={styles.detail__text}>
            <p className={styles.detail__runtime}>
            ⏰Runtime: {detail.runtime} minutes
          </p>
          <p className={styles.detail__scrip}>
            {detail.description_full}
          </p>
          </div>
          
          
        </div>

      )}
    </div>
  );

}

export default Detail;