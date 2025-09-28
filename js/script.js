document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".works li");
  const hoverContent = document.querySelector(".hover-content");
  const previewImg = document.getElementById("preview-img");
  const previewDesc = document.getElementById("preview-desc");
  const previewTitle = document.getElementById("preview-title");

  items.forEach(item => {
    item.addEventListener("mouseover", () => {
      const img = item.getAttribute("data-img");
      const title = item.getAttribute("data-title");
      const desc = item.getAttribute("data-desc");

      previewImg.src = img;
      previewTitle.textContent = title;
      previewDesc.textContent = desc;

      hoverContent.style.display = "block"; // ホバーしたら表示
    });

    item.addEventListener("mouseout", () => {
      hoverContent.style.display = "none"; // ホバー外れたら非表示
    });
  });
});
