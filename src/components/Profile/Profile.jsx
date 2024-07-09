import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={s.container}>
      <div className={s.userInfo}>
        <img src={image} alt="User avatar" />
        <p className={s.userName}>{name}</p>
        <p className={s.userTag}>@{tag}</p>
        <p className={s.userLocation}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsData}>
          <span className={s.statsLabel}>Followers</span>
          <span className={s.statsValue}>{followers}</span>
        </li>
        <li className={s.statsData}>
          <span className={s.statsLabel}>Views</span>
          <span className={s.statsValue}>{views}</span>
        </li>
        <li className={s.statsData}>
          <span className={s.statsLabel}>Likes</span>
          <span className={s.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
