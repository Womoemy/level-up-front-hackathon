// Nothing here yet
const notification_dropdown = document.querySelector(".notification-dropdown");
const notification_dropdown_content = document.querySelector(
  ".notification-dropdown-content"
);
const store_dropdown = document.querySelector(".store-dropdown");
const store_dropdown_content = document.querySelector(
  ".store-dropdown-content"
);

notification_dropdown.addEventListener("click", () => {
  notification_dropdown_content.style.display =
    notification_dropdown_content.style.display === "flex" ? "none" : "flex";
});

store_dropdown.addEventListener("click", () => {
  store_dropdown_content.style.display =
    store_dropdown_content.style.display === "flex" ? "none" : "flex";
});
