import styles from "./details.module.css";
const Details = (props) => {
  // console.log("sanny");
  let { detailsData } = props;
  return (
    // <div className={styles.container}>
    <div className={styles.cards}>
      <div className={styles.thumbnail}>
        <img className={styles.img} src={detailsData.thumbnail_Url} />
      </div>
      <div>
        <p>{detailsData.title}</p>
      </div>
      <div className={styles.channel}>
        <img src={detailsData.channel_Logo_Url} />
        <p>{detailsData.channelName}</p>
      </div>

      <div className={styles.reactions}>
        <p>Likes:{detailsData.likes / 1000}k</p>
        <p>Views:{detailsData.views / 1000}k</p>
      </div>
    </div>
    // </div>
  );
};

export default Details;
