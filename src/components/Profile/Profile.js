import css from "../Profile/Profile.module.css"
import PropTypes from 'prop-types';
 const Product=({username,tag,location,avatar,stats:{followers,views,likes}})=>(
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
    <span className={css.quantity}>{followers}</span>
  </li>
  <li className={css.stat}>
    <b className="label">Views</b>
    <span className="quantity">{views}</span>
  </li>
  <li className={css.stat}>
    <b className="label">Likes</b>
    <span className="quantity">{likes}</span>
  </li>
</ul>
</div>)
Product.propTypes={
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.shape(
    {
      followers:PropTypes.number.isRequired,
      views:PropTypes.number.isRequired,
      likes:PropTypes.number.isRequired
    }
  )
}
export default Product;