var bookmarks = [];
var index = 1;

// validateURL using Regex
function validateURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%_.~+]*)*" + // path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function addBookmark() {
  var siteName = document.getElementById("siteName");
  var siteUrl = document.getElementById("siteUrl");
  var addBtn = document.getElementById("addBtn");
  var visitBtn = document.getElementById("visitBtn");
  var deleteBtn = document.getElementById("deleteBtn");
  var tableBody = document.getElementById("tbody");

  if (
    siteName.value !== "" &&
    siteUrl.value !== "" &&
    validateURL(siteUrl.value)
  ) {
    index += 1;
    var bookmark = {
      index: index,
      name: siteName.value,
      url: siteName.value,
    };
    bookmarks.push(bookmark);
    tableBody.innerHTML += `
    <tr>
      <td>${bookmark.index}</td>
      <td>${bookmark.name}</td>
      <td>
        <a
          href="${bookmark.url}"
          target="_blank"
          rel="noopener noreferrer">
          <button id="visitBtn" class="btn btn-success">
            <i class="fa-regular fa-eye"></i> Visit
          </button>
        </a>
      </td>
      <td>
        <button id="deleteBtn" class="btn btn-danger">
          <i class="fa-regular fa-trash-can"></i> Delete
        </button>
      </td>
    </tr>
  `;
    siteName.value = "";
    siteUrl.value = "";
  }
}

addBtn.onclick = addBookmark;
