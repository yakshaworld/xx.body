// auth.js

function getUserData() {
  return JSON.parse(localStorage.getItem("usuario")) || null;
}

function setUserData(data) {
  localStorage.setItem("usuario", JSON.stringify(data));
}

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const user = getUserData();

  if (user && user.email === email && user.senha === senha) {
    alert("Login bem-sucedido!");
    window.location.href = "perfil.html";
  } else {
    alert("Email ou senha inválidos!");
  }
}

function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const user = {
    email,
    senha,
    nome: "",
    foto: ""
  };

  setUserData(user);
  alert("Conta criada com sucesso!");
}

function salvarPerfil() {
  const nome = document.getElementById("nome").value;
  const foto = document.getElementById("foto").value;
  const user = getUserData();

  if (user) {
    user.nome = nome;
    user.foto = foto;
    setUserData(user);
    alert("Perfil salvo com sucesso!");
    document.getElementById("fotoPreview").src = foto;
  }
}

function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}

window.onload = function () {
  const user = getUserData();
  if (window.location.pathname.includes("perfil") && user) {
    document.getElementById("nome").value = user.nome || "";
    document.getElementById("foto").value = user.foto || "";
    document.getElementById("fotoPreview").src = user.foto || "https://via.placeholder.com/120";
  }
};
