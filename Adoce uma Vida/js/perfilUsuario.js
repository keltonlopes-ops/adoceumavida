const inputFile = document.getElementById("meuArquivo");
    const preview = document.getElementById("preview");

    inputFile.addEventListener("change", () => {
      preview.innerHTML = ""; // limpa as imagens anteriores

      for (const file of inputFile.files) {
        if (file.type.startsWith("image/")) {
          const img = document.createElement("img");
          img.src = URL.createObjectURL(file);
          preview.appendChild(img);
        }
      }
    });


    // função para editar o perfil

     const btnEditar = document.getElementById("btnEditar");
const btnSalvar = document.getElementById("btnSalvar");
const btnCancelar = document.getElementById("btnCancelar");

const visualizacao = document.getElementById("visualizacao-dados");
const edicao = document.getElementById("edicao-dados");

// Campos de texto
const nomeTexto = document.getElementById("nomeTexto");   // Só no "bem-vindo"
const emailTexto = document.getElementById("emailTexto");
const telefoneTexto = document.getElementById("telefoneTexto");

// Inputs
const nomeInput = document.getElementById("nomeInput");
const emailInput = document.getElementById("emailInput");
const telefoneInput = document.getElementById("telefoneInput");

// Abrir edição
btnEditar.addEventListener("click", () => {
  // Preenche inputs com os valores atuais
  nomeInput.value = nomeTexto.textContent;
  emailInput.value = emailTexto.textContent;
  telefoneInput.value = telefoneTexto.textContent;

  visualizacao.style.display = "none";
  edicao.style.display = "block";
});

// Salvar alterações
btnSalvar.addEventListener("click", () => {
  nomeTexto.textContent = nomeInput.value || "Nome";
  emailTexto.textContent = emailInput.value || "email@email.com";
  telefoneTexto.textContent = telefoneInput.value || "0000-0000";

  edicao.style.display = "none";
  visualizacao.style.display = "block";
});

// Cancelar edição
btnCancelar.addEventListener("click", () => {
  edicao.style.display = "none";
  visualizacao.style.display = "block";
});
