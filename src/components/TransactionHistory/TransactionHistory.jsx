import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead>
          <tr className={s.tableLines}>
            <th className={s.tableColumn}>Type</th>
            <th className={s.tableColumn}>Amount</th>
            <th className={s.tableColumn}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className={s.tableBodyLines} key={item.id}>
              <td className={s.tableBodyColumn}>{item.type}</td>
              <td className={s.tableBodyColumn}>{item.amount}</td>
              <td className={s.tableBodyColumn}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
