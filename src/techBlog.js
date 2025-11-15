id = new URLSearchParams(window.location.search).get("id");
fetch(`article/test${id}.md`)
  .then((response) => response.text())
  .then((md) => {
    document.getElementById("content").innerHTML = marked.parse(md);
  });
