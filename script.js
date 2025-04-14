function openProfile() {
  document.getElementById('profile').style.display = 'block';
}

function saveProfile() {
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('user', JSON.stringify({ name, username, email }));
  alert("Profile saved!");
}

function withdraw() {
  let current = parseFloat(document.getElementById('earning').innerText);
  if (current >= 10) {
    alert("₹" + current + " transferred to your bank account.");
    document.getElementById('earning').innerText = "0.00";
  } else {
    alert("You need minimum ₹10 to withdraw.");
  }
}
