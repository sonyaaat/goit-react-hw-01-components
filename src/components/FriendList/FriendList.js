import css from  "../FriendList/FriendList.module.css"
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem"

const FriendList=({friends})=>(
<ul className={css.friend__list}>
 {friends.map(({avatar,name,isOnline,id})=>(
    <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} id={id}/>
 ))}
</ul>
)
FriendList.propypes={
  friends:PropTypes.array
}
export default FriendList;
