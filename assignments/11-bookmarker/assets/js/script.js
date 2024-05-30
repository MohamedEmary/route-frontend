var addBtn = document.getElementById("addBtn");
var tableBody = document.getElementById("tbody");
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var bookmarks = [];
updateIndices();

var index = bookmarks.length + 1;

// Validate site name using Regex
function validateName(str) {
  var pattern = new RegExp("^[a-zA-Z]{2,}[a-zA-Z\\d\\s]*[a-zA-Z\\d]$", "i");
  return !!pattern.test(str);
}

// Validate URL using Regex
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
    // Recreate the table rows with updated indices
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

function styleInputField(type) {
  if (type === "url") {
    var siteUrl = document.getElementById("siteUrl");
    if (validateURL(siteUrl.value)) {
      siteUrl.style.boxShadow = "0 0 0 0.25rem rgba(77, 253, 13, 0.412)";
      siteUrl.style.borderColor = "#46d939";
    } else {
      siteUrl.style.boxShadow = "0 0 0 0.25rem rgba(253, 65, 13, 0.412)";
      siteUrl.style.borderColor = "#d95639";
    }
  } else if (type === "name") {
    var siteName = document.getElementById("siteName");
    if (validateName(siteName.value)) {
      siteName.style.boxShadow = "0 0 0 0.25rem rgba(77, 253, 13, 0.412)";
      siteName.style.borderColor = "#46d939";
    } else {
      siteName.style.boxShadow = "0 0 0 0.25rem rgba(253, 65, 13, 0.412)";
      siteName.style.borderColor = "#d95639";
    }
  } else {
    return;
  }
}

addBtn.onclick = addBookmark;
siteName.onkeyup = function () {
  styleInputField("name");
};

siteUrl.onkeyup = function () {
  styleInputField("url");
};
