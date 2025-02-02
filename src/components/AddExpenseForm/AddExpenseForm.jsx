import { PlusCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h1 className="h3">
        Add new{" "}
        <span className="accent">
          {budgets.length == 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{" "}
        Expense
      </h1>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="expense-input">
          <div className="grid-xs">
            <label htmlFor="newExpense">Expense name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g. , Coffee"
              required
              ref={focusRef}
            />
            <div className="grid-xs">
              <label htmlFor="newExpenseAmount">Amount</label>
              <input
                type="number"
                step="0.01"
                inputMode="decimal"
                placeholder="e.g. , 3.50"
                required
                name="newExpenseAmount"
                id="newExpenseAmount"
              />
            </div>
          </div>
          <div className="grid-xs" hidden={budgets.length === 1}>
            <label htmlFor="newExpenseBudget">Budget Category</label>
            <select name="newExpenseBudget" id="newExpenseBudget" required>
              {budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budget) => {
                  return (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting....</span>
          ) : (
            <>
              <span>Add Expense</span>
              <PlusCircleIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

AddExpenseForm.propTypes = {
  budgets: PropTypes.array,
};

export default AddExpenseForm;
