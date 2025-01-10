import { redirect } from "react-router-dom";
import { deleteItem } from "./localStorage";
import { toast } from "react-toastify";

export async function logoutAction (){
    deleteItem({
        key: "userName",
    })
    toast.success("You've successfully deleted the account!")

    return redirect("/")
}