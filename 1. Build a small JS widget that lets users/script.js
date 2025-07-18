const input1 = document.querySelector("#input1"); 
const input2 = document.querySelector("#input2");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

function isValid(url) {
  const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
  return pattern.test(url);
}

let entries = [];

try {
  const stored = localStorage.getItem("bookmark");
  entries = stored ? JSON.parse(stored) : [];
} catch (e) {
  console.error("Failed to parse bookmarks from localStorage", e);
  entries = [];
}

if(entries)
entries.forEach(entry => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${entry.url}" target="_blank">${entry.title}</a>`;
  list.appendChild(li);
});

btn.addEventListener("click", () => {

  if (!isValid(input2.value)) {
    alert("Invalid URL");
    return;
  }

  const entry = { title: input1.value, url: input2.value };
  entries.push(entry);

  const li = document.createElement("li");
  li.innerHTML = `<a href="${entry.url}" target="_blank">${entry.title}</a>`;
  list.appendChild(li);
  
  input1.value = "";
  input2.value = "";
});

window.addEventListener("beforeunload", function () {
  localStorage.setItem("bookmark", JSON.stringify(entries || []));
});