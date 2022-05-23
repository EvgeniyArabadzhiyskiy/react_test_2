import stl from "./Profile.module.css";
import PropTypes from "prop-types";

function Profile({
  username,
  tag,
  avatar,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={stl.profile}>
      <div className={stl.description}>
        <img src={avatar} alt="User avatar" className={stl.avatar} />
        <p className={stl.name}>{username}</p>
        <p className={stl.tag}>{tag}</p>
        <p className={stl.location}>{location}</p>
      </div>

      <ul className={stl.stats}>
        <li className={stl.item}>
          <span className={stl.label}>Followers</span>
          <span className={stl.quantity}>{followers}</span>
        </li>
        <li className={stl.item}>
          <span className={stl.label}>Views</span>
          <span className={stl.quantity}>{views}</span>
        </li>
        <li className={stl.item}>
          <span className={stl.label}>Likes</span>
          <span className={stl.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

{
  /* <Profile
username={user.username}
tag={user.tag}
avatar={user.avatar}
location={user.location}
stats={user.stats}
/> */
}
