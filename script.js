const users = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function filter(option = "ALL") {
  if (option === "D") {
    display(users.filter((user) => user.profession === "developer"));
    return;
  }
  if (option === "A") {
    display(users.filter((user) => user.profession === "admin"));
    return;
  } else {
    display(users);
    return;
  }
}
function display(arr) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  arr.map((user, index) => {
    const userItem = document.createElement("div");
    userItem.classList.add("user-list-item");
    //
    const userNumber = document.createElement("span");
    userNumber.classList.add("user-number");
    userNumber.innerHTML = `${index + 1}.`;
    //
    const userName = document.createElement("span");
    userName.classList.add("user-name");
    userName.innerHTML = `Name: ${user.name}.`;
    //
    const userProfession = document.createElement("span");
    userProfession.classList.add("user-profession");
    userProfession.innerHTML = `Profession: ${user.profession}.`;
    //
    const userAge = document.createElement("span");
    userAge.classList.add("user-age");
    userAge.innerHTML = `Age: ${user.age}.`;
    //
    userItem.appendChild(userNumber);
    userItem.appendChild(userName);
    userItem.appendChild(userProfession);
    userItem.appendChild(userAge);

    const userList = document.getElementById("user-list");
    userList.appendChild(userItem);
  });
}
display(users);

function handleFilterClick() {
  const selector = document.getElementById("profession");
  console.log(selector.value);
  if (selector.value === "D") {
    filter("D");
  }
  if (selector.value === "A") {
    filter("A");
  }
  if (selector.value === "") {
    alert("Please select an option.");
  }
}

const addUserForm = document.getElementById("user-form");
addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
function handleAddClick() {
  const user = {};
  const name = document.getElementById("name-input");
  const profession = document.getElementById("profession-input");
  if (profession.value === "developer" || profession.value === "admin") {
    const age = document.getElementById("age-input");
    user.id = users.length;
    user.name = name.value;
    user.age = age.value;
    user.profession = profession.value;
    users.push(user);
    const selector = document.getElementById("profession");
    console.log(selector.value);
    if (profession.value === "developer") {
      filter("D");
      return;
    }
    if (profession.value === "admin") {
      filter("A");
      return;
    }
  } else {
    alert(`Profession can either be "developer" or "admin"`);
  }
}
