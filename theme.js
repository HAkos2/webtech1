function toggleTheme() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  
  if (currentTheme == "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light")
  }
}

function setTheme() {
  var savedTheme = localStorage.getItem("theme")
  if (savedTheme == null || savedTheme == "") {
    localStorage.setItem("theme", "dark")
    savedTheme = localStorage.getItem("theme")
  }

  if (savedTheme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (savedTheme == "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
