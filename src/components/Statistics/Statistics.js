import css from "../Statistics/Statistics.module.css"
import PropTypes from 'prop-types';
const Statistics=({title,stats})=>(
    <section className={css.statistics}>
      { title &&  <h2 className={css.title}>{title}</h2>}
 

  <ul className={css.stat__list}>
    <li className={css.item} key={stats[0].id}>
      <span className={css.label}>{stats[0].label}</span>
      <span className={css.percentage}>{stats[0].percentage}%</span>
    </li>
    <li className={css.item} key={stats[1].id}>
      <span className={css.label}>{stats[1].label}</span>
      <span className={css.percentage}>{stats[1].percentage}%</span>
    </li>
    <li className={css.item} key={stats[2].id}>
      <span className={css.label}>{stats[2].label}</span>
      <span className={css.percentage}>{stats[2].percentage}%</span>
    </li>
    <li className={css.item} key={stats[3].id}>
      <span className={css.label}>{stats[3].label}</span>
      <span className={css.percentage}>{stats[3].percentage}%</span>
    </li>
  </ul>
</section>
)
Statistics.propTypes={
  title:PropTypes.string,
  stats:PropTypes.array
}
export default Statistics;