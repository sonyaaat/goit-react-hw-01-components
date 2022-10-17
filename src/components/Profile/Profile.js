import css from "../Profile/Profile.module.css"
import PropTypes from 'prop-types';
 const Product=({username,tag,location,avatar,stats})=>(
<div className={css.profile}>
<div className="description">
  <img
    src={avatar}
    alt="User avatar"
    className={css.avatar}
    width={150}
  />
  <p className={css.name}>{username}</p>
  <p className={css.tag}>@{tag}</p>
  <p className={css.location}>{location}</p>
</div>

<ul className={css.stats}>
  <li className={css.stat}>
    <b className="label">Followers</b>
    <span className={css.quantity}>{stats.followers}</span>
  </li>
  <li className={css.stat}>
    <b className="label">Views</b>
    <span className="quantity">{stats.views}</span>
  </li>
  <li className={css.stat}>
    <b className="label">Likes</b>
    <span className="quantity">{stats.likes}</span>
  </li>
</ul>
</div>)
Product.propTypes={
  username:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.objectOf(PropTypes.number),
  followers:PropTypes.number,
  views:PropTypes.number,
  likes:PropTypes.number
}
export default Product;