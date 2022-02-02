const liss = [];
const lp = document.querySelector("#hee");

function amit() {
  const data = document.getElementById("hello").value;

  liss.push(data);

  document.getElementById("he").innerHTML = data;
  console.log(liss);
  if (liss.length === 0) {
    amit();
  } else {
    ops();
  }
}
function ops() {
  let nodes = liss.map((pt) => {
    let li = document.createElement("li");
    li.textContent = liss;
    return li;
  });
  lp.append(...nodes);
}
// for (i = 0; i < liss.length; i++) {
//   lp.append(liss[i]);
// }
