import s from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <div className={s.friendContent}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.friendName}>{name}</p>
      <p className={clsx(s.friendStatus, isOnline && s.colorOnline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
