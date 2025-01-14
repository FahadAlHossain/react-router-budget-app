import { toast } from "react-toastify"
import { deleteItem, getAllMatchingItems } from "./localStorage"
import { redirect } from "react-router-dom";

const deleteBudget = ({params}) => {
   try {
    deleteItem({
        key: "budgets",
        id: params.id
    })

    const expenses = getAllMatchingItems({
        category: "expenses",
        key: "budgetId",
        value: params.id
    });

    expenses.forEach(expense => {
        deleteItem({
            key: "expenses",
            id: expense.id
        })
    });

    toast.success("Budget deleted successfully!")
   } catch (error) {
    throw new Error("There was a problem deleting your budget!",error)
   }

   return redirect("/")
}

export {deleteBudget};