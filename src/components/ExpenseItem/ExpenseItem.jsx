import PropTypes from "prop-types";
import {
  formatCurrency,
  formatDate,
  getAllMatchingItems,
} from "../../utilities/localStorage";
import { Link, useFetcher } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({ expense }) => {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  const { name, amount, createdAt } = expense;
  return (
    <>
      <td>{name}</td>
      <td>{formatCurrency(amount)}</td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <Link to={`/budget/${budget.id}`} style={{ "--accent": budget.color }}>
          {budget.name}
        </Link>
      </td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expense.id} expense`}
          >
            <TrashIcon width={20}></TrashIcon>
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object,
};

export default ExpenseItem;
