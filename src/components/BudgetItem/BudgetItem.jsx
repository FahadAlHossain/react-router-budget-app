import PropTypes from "prop-types";
import { calculateBudget, formatCurrency, formatPercentage } from "../../utilities/localStorage";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateBudget(id);
  return (
  <div className="budget" style={{
    "--accent": color
  }}>
    <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
    </div>
    <progress max={amount} value={spent}>
        {
            formatPercentage(spent / amount)
        }
    </progress>
    <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount-spent)} remaining</small>
    </div>
    </div>
  );
};

BudgetItem.propTypes = {
  budget: PropTypes.object,
};

export default BudgetItem;
