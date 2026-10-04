var isSwitching = false;
function showPage(id) {
  var current = document.querySelector(".page.active");
  if (current && current.id === id) {
    return;
  }
  if (isSwitching) {
    return;
  }
  isSwitching = true;

  document.querySelectorAll(".page").forEach(function (p) {
    p.classList.remove("active");
  });
  var target = document.getElementById(id);
  target.classList.add("active");

  document.querySelectorAll(".navlinks a").forEach(function (a) {
    a.classList.remove("active");
  });
  var link = document.querySelector('.navlinks a[data-page="' + id + '"]');
  if (link) {
    link.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(function () {
    isSwitching = false;
  }, 350);
}

// Copy Phone Number Function
function copyPhoneNumber(event) {
  event.stopPropagation();
  const rawNumber = "+967711385206";
  navigator.clipboard.writeText(rawNumber).then(() => {
    const btnText = document.getElementById("copyTextBtn");
    btnText.textContent = "Copied!";
    setTimeout(() => {
      btnText.textContent = "Copy";
    }, 2000);
  });
}

// Modal Controls
function openContactModal(event) {
  if (event.target.closest(".copy-btn")) return;
  document.getElementById("contactModal").classList.add("active");
}

function closeContactModal(event) {
  if (event.target.id === "contactModal") {
    document.getElementById("contactModal").classList.remove("active");
  }
}

function closeContactModalDirect() {
  document.getElementById("contactModal").classList.remove("active");
}

// Action Buttons inside Modal
function openWhatsApp() {
  window.open("https://wa.me/967711385206", "_blank");
  closeContactModalDirect();
}

function addContact() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = "tel:+967711385206";
  }
  closeContactModalDirect();
}
