document.addEventListener("DOMContentLoaded", () => {
  // Initialisation des blocs de code
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightElement(block);
  });

  // Fonction pour changer de thème
  const setTheme = (theme) => {
    const themeLink = document.querySelector("#hljs-theme");
    themeLink.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${theme}.min.css`;
  };

  // Exemple d'utilisation : Ajoute des boutons dynamiques pour changer de thème
  const themeSwitcher = document.createElement("div");
  themeSwitcher.classList.add("theme-switcher");
  themeSwitcher.innerHTML = `
      <button data-theme="default">Default</button>
      <button data-theme="solarized-dark">Solarized Dark</button>
      <button data-theme="monokai">Monokai</button>
    `;

  document.body.appendChild(themeSwitcher);

  // Ajout d'événements aux boutons
  document.querySelectorAll(".theme-switcher button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      setTheme(theme);
    });
  });
});
