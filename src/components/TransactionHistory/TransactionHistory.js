import css from "../TransactionHistory/TransactionHistory.module.css"
import PropTypes from 'prop-types';
const TransactionHistory=({items})=>(
<table className={css.transaction__history}>
<thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(({id,type,amount,currency})=>(
  <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>))}
  </tbody>
</table>
)
TransactionHistory.propTypes=
{
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
}
export default TransactionHistory;
//id,type,amount,currency