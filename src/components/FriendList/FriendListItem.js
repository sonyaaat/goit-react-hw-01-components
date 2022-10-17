import css from  "../FriendList/FriendList.module.css"
import PropTypes from 'prop-types';
 const FriendListItem=({avatar,name,isOnline,id})=>(
    <li className={css.item} >
      {isOnline ? (<span className={css.online}></span>): <span className={css.offline}></span>}
    
    <img className={css.avatar} alt="User avatar" width="48" src={avatar} />
    <p className={css.name}>{name}</p>
    </li>)

FriendListItem.propTypes={
    avatar:PropTypes.string,
    name:PropTypes.string,
    isOnline:PropTypes.bool,
    id:PropTypes.number
}
    export default FriendListItem