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
  if (storedItem.includes(id)) {
    return;
  } else {
    storedItem.push(id);
    localStorage.setItem("bookId", JSON.stringify(storedItem));
  }
};

const removeFromDB = (id) => {
  const storedItem = getFromDB();
  const resItem = storedItem.filter((item) => item != id);
  localStorage.setItem("bookId", JSON.stringify(resItem));
};

export { getFromDB, removeFromDB, saveToDB };
