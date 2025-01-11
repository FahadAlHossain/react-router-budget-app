import PropTypes from "prop-types";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Table = ({ expenses }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((i, idx) => (
              <th key={idx}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}><ExpenseItem expense={expense}/></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  expenses: PropTypes.array,
};

export default Table;
