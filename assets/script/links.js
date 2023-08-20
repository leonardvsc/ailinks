  // Função para abrir um link em uma nova página
  function abrirLink(link) {
    window.open(link, "_blank")
  }

  // Observar cliques nos botões
  document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".chatgpt, .jasper, .logoai, .lovoai, .veedio, .murfai, .elevenlabs")

    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        var link = button.getAttribute("data-link")
        if (link) {
          abrirLink(link)
        }
      })
    })
  })