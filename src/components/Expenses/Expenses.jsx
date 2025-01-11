import { useLoaderData } from "react-router-dom";
import { fetchData } from "../../utilities/localStorage";
import Table from "../Table/Table";

const expensesLoader = () => {
  const expenses = fetchData("expenses");
  return { expenses };
};
export { expensesLoader };

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
