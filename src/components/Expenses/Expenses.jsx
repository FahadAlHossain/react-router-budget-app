import { useLoaderData } from "react-router-dom";
import { deleteItem, fetchData } from "../../utilities/localStorage";
import Table from "../Table/Table";
import { toast } from "react-toastify";

export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
};

export async function expensesAction({request}) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.", e);
    }
  }
}

const Expenses = () => {
  const { expenses } = useLoaderData();
  return <div className="grid-lg">
    <h1>All expenses</h1>
    {
        expenses && expenses.length > 0 ? (
            <div className="gird-md">
                <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
                <Table expenses={expenses}/>
            </div>
        ): <p>No expenses to show</p>
    }
  </div>;
};

export default Expenses;
