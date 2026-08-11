document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".mvp-tab");
  const panels = document.querySelectorAll(".mvp-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;

      tabs.forEach((item) => item.classList.remove("is-active"));
      panels.forEach((panel) => panel.classList.remove("is-active"));

      tab.classList.add("is-active");
      document.getElementById(targetId).classList.add("is-active");
    });
  });
});
