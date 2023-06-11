var members = document.getElementById('members')

var member = 5;

for (var i = 0; i < member; i++) {
  var listItem = document.createElement("li")
  var div = document.createElement('div')
  div.classList.add('profile')
  listItem.appendChild(div)
  listItem.classList.add("member")
  members.appendChild(listItem)
}

console.log(members);