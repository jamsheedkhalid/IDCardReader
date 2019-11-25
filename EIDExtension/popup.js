function readStudent() {
  chrome.tabs.executeScript({
    file: 'readeid.js'
  }); 
}

function readGuard1() {
  chrome.tabs.executeScript({
    file: 'readguard1.js'
  }); 
}

function readGuard2() {
  chrome.tabs.executeScript({
    file: 'readguard2.js'
  }); 
}


document.getElementById('readstudent').addEventListener('click', readStudent);
document.getElementById('readguard1').addEventListener('click', readGuard1);
document.getElementById('readguard2').addEventListener('click', readGuard2);