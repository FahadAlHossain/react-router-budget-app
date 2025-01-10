const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}

export { fetchData, deleteItem };
