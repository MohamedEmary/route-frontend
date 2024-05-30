var addBtn = document.getElementById("addBtn");

var bookmarks = [];
var index = 0;

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

// Add bookmark
function addBookmark() {
  var siteName = document.getElementById("siteName");
  var siteUrl = document.getElementById("siteUrl");
  var tableBody = document.getElementById("tbody");

  if (
    siteName.value !== "" &&
    siteUrl.value !== "" &&
    validateURL(siteUrl.value)
  ) {
    var bookmark = {
      index: index,
      name: siteName.value,
      url: siteUrl.value,
    };
    bookmarks.push(bookmark);
    tableBody.innerHTML += `
    <tr id="bookmark${index}">
      <td class="indexTd">${bookmarks.length}</td>
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
        <button id="deleteBtn" onclick="deleteBookmark(${bookmark.index})" class="btn btn-danger">
          <i class="fa-regular fa-trash-can"></i> Delete
        </button>
      </td>
    </tr>`;
    index += 1;
    siteName.value = "";
    siteUrl.value = "";
  }
}

function deleteBookmark(index) {
  var bookmarkTableRow = document.getElementById(`bookmark${index}`);
  bookmarkTableRow.remove();
  bookmarks.splice(index, 1);
  var indexTdArr = document.getElementsByClassName("indexTd");
  for (let i = 0; i < indexTdArr.length; i++) {
    indexTdArr[i].innerText = i + 1;
  }
  index -= 1;
}

addBtn.onclick = addBookmark;
