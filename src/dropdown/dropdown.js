for (let i = 1; i <= 3; i++) {
  const dropdown = document.getElementById(`dropdown-${i}`);
  const toggle = document.getElementById(`dropdownToggle-${i}`);
  const menu = document.getElementById(`dropdownMenu-${i}`);
  const options = menu.querySelectorAll("div");

  toggle.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((o) => o.classList.remove("selected"));
      option.classList.add("selected");
      toggle.textContent = option.textContent;
      toggle.classList.add("selected");
      dropdown.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
}