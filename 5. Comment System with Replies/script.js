const commentInput = document.querySelector("#comment");
const commentDiv = document.querySelector(".add-comment");
const button = document.querySelector("#btn");

let id = 1;

const createFlexDiv = (flag) => {
  const div = document.createElement("div");
  if (flag) {
    div.className = "flex flex-col gap-2 bg-white p-4 rounded-md shadow";
  } else {
    div.className = "flex items-center gap-3";
  }
  return div;
};

const createPara = (text, content) => {
  const para = document.createElement("p");
  para.textContent = text + content;
  para.className = "text-gray-800";
  return para;
};

const renderer = (div, arr) => {
  arr.forEach((value) => {
    div.append(value);
  });
};

button.onclick = () => {
  const div = createFlexDiv(true);
  const div1 = createFlexDiv(false);
  const div2 = createFlexDiv(true);
  const para1 = createPara("person", id);
  const para2 = createPara("", commentInput.value);

  const replyButton = document.createElement("button");
  replyButton.textContent = "Reply";
  replyButton.className = "text-sm text-blue-600 hover:underline ml-2";

  replyButton.onclick = () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a reply...";
    input.className = "px-3 py-1 border border-gray-300 rounded w-full";

    const replyButton1 = document.createElement("button");
    replyButton1.textContent = "Comment";
    replyButton1.className =
      "px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mt-1";

    replyButton1.onclick = () => {
      const div3 = createFlexDiv(false);
      const para1 = createPara("person", Math.floor(Math.random() * 100));
      const para2 = createPara("", input.value);
      renderer(div3, [para1, para2]);
      renderer(div2, [div3]);
    };

    renderer(div1, [input, replyButton1]);
  };

  renderer(div1, [para1, para2, replyButton]);
  id++;
  renderer(div, [div1, div2]);
  renderer(commentDiv, [div]);
};
