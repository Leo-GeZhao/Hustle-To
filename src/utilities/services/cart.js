// const minusQty = async () => {
//     if (item.quantity <= 2) {
//       document.getElementById(idx).disabled = true;
//       console.log(document.getElementById(idx + 1));
//     }

export const changeQty = (item, idx, operation) => {
  if (operation === "-") {
    if (item.quantity <= 2) {
      document.getElementById(idx).disabled = true;
    }
  } else {
    document.getElementById(idx).disabled = false;
  }
};
