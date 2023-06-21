function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver dark mode add a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
