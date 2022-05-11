import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を習得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  // li生成
  const li = document.createElement("li");
  li.className = "incomplete";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;
  // console.log(li);

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  li.appendChild(div);

  //未完了のリストに追加
  document.getElementById("incomplete").appendChild(li);
  console.log(li);

  // li.appendChild(div);
  // console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
