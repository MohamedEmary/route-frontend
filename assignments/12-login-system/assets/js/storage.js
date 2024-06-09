var allUsersData = [];
var currentUser;
if (sessionStorage.getItem("allUserData") != null) {
  allUsersData = JSON.parse(sessionStorage.getItem("allUserData"));
}

function saveUserData(userData) {
  allUsersData.push(userData);
  sessionStorage.setItem("allUserData", JSON.stringify(allUsersData));
}

function getUserData() {
  return allUsersData;
}

function setCurrentUser(index) {
  currentUser = allUsersData[index];
  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
}

function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem("currentUser"));
}
