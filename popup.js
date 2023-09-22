/*function hello() {
    click();
}

document.getElementById('clickme').addEventListener('click', hello);

function hi() {
    console.log('foo');
    onFileUpload();
}*/

function hello() {
  const phoneNumbers = document.getElementById("phone_numbers").value;
  const message = document.getElementById("message").value;
  chrome.runtime.sendMessage({ phoneNumbers, message }, (response) => {
    console.log(response);
  });
}

document.getElementById("clickme").addEventListener("click", hello);
