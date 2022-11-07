import css from  "../FriendList/FriendList.module.css"
import PropTypes from 'prop-types';
 const FriendListItem=({avatar,name,isOnline})=>(
    <li className={css.item} >
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
    <img className={css.avatar} alt="User avatar" width="48" src={avatar} />
    <p className={css.name}>{name}</p>
    </li>)

FriendListItem.propTypes={
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}
    export default FriendListItem