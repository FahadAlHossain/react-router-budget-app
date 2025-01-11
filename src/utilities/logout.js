import { redirect } from "react-router-dom";
import { deleteItem } from "./localStorage";
import { toast } from "react-toastify";

export async function logoutAction (){
    deleteItem({
        key: "userName",
    })
    deleteItem({
        key: "budgets",
    })
    deleteItem({
        key: "expenses",
    })
    toast.success("You've deleted the account!")

    return redirect("/")
}