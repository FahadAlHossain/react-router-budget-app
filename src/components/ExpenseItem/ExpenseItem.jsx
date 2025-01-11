import PropTypes from "prop-types";
import { formatCurrency, formatDate } from "../../utilities/localStorage";


const ExpenseItem = ({expense}) => {
    const {name,amount,createdAt} = expense
    return (
        <>
            <td>{name}</td>
            <td>{formatCurrency(amount)}</td> 
            <td>{formatDate(createdAt)}</td>  
        </>
    );
};

ExpenseItem.propTypes = {
    expense: PropTypes.object
}

export default ExpenseItem;