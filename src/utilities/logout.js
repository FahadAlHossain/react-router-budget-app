import { redirect } from "react-router-dom";
import { deleteItem } from "./localStorage";

export async function logoutAction (){
    deleteItem({
        key: "userName",
    })

    return redirect("/")
}