import PropTypes from "prop-types";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {
  
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "",""].map((i, idx) => (
              <th key={idx}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}><ExpenseItem expense={expense} showBudget={false}/></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  expenses: PropTypes.array,
  showBudget: PropTypes.bool
};

export default Table;
