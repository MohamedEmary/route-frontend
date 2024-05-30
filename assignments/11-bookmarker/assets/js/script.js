var addBtn = document.getElementById("addBtn");
var tableBody = document.getElementById("tbody");

var bookmarks = [];
updateIndices();

var index = bookmarks.length + 1;

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
  index = bookmarks.length + 1;
  var siteName = document.getElementById("siteName");
  var siteUrl = document.getElementById("siteUrl");
  if (
    siteName.value !== "" &&
    siteUrl.value !== "" &&
    validateURL(siteUrl.value)
  ) {
    var beginWithHttp = new RegExp("^(https?:\\/\\/)", "i");
    if (!!!beginWithHttp.test(siteUrl.value)) {
      siteUrl.value = "https://" + siteUrl.value;
    }

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

function updateIndices() {
  tableBody.innerHTML = ``;
  for (let i = 0; i < bookmarks.length; i++) {
    bookmarks[i].index = i + 1;
    tableBody.innerHTML += `
    <tr id="bookmark${i + 1}">
      <td class="indexTd">${bookmarks[i].index}</td>
      <td>${bookmarks[i].name}</td>
      <td>
        <a
          href="${bookmarks[i].url}"
          target="_blank"
          rel="noopener noreferrer">
          <button id="visitBtn" class="btn btn-success">
            <i class="fa-regular fa-eye"></i> Visit
          </button>
        </a>
      </td>
      <td>
        <button id="deleteBtn" onclick="deleteBookmark(${
          bookmarks[i].index
        })" class="btn btn-danger">
          <i class="fa-regular fa-trash-can"></i> Delete
        </button>
      </td>
    </tr>`;
  }
}

function deleteBookmark(index) {
  var bookmarkTableRow = document.getElementById(`bookmark${index}`);
  bookmarkTableRow.remove();
  bookmarks.splice(index - 1, 1);
  updateIndices();
  index -= 1;
}

addBtn.onclick = addBookmark;
