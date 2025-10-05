const getFromDB = () => {
  const storedItem = localStorage.getItem("bookId");

  if (storedItem) {
    return JSON.parse(storedItem);
  } else {
    return [];
  }
};

const saveToDB = (id) => {
  const storedItem = getFromDB();

  //   if (storedItem.includes(id)) {
  if (storedItem.includes(id)) {
    // alert("Already Added");
    return;
  } else {
    storedItem.push(id);
    // const newItem = [...storedItem, id];
    // console.log(newItem);
    localStorage.setItem("bookId", JSON.stringify(storedItem));
  }
};

export { getFromDB, saveToDB };
