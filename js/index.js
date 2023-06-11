var members = document.getElementById('members')

add('Raquel A. Soriano', 'President', 'raquel')
add('Alexa C. Miranda', 'Vice President', 'alexa')
add('Daniela O. Burzon', 'Secretary', 'daniela')

function add(Name, Position, classList) {
  var listItem = document.createElement("li")
  var div = document.createElement('div')
  var name = document.createElement('h1')
  var position = document.createElement('p')
  name.innerText = Name
  position.innerText = Position
  name.classList.add('name')
  position.classList.add('position')
  div.classList.add('profile')
  div.classList.add(classList)
  listItem.appendChild(name)
  listItem.appendChild(position)
  listItem.appendChild(div)
  listItem.classList.add("member")
  members.appendChild(listItem)
}

console.log(profile);