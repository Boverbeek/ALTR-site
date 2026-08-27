const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6GAIL67rERWnkjfbsNe5rXEEM64dXk_B40mPACnqUun6mKiaby18Q-cQfI4wGw5rD/exec";

export function initPrayerForm() {
  const form = document.querySelector("#prayer-form");
  if (!form) return; // guard so this can be safely imported on every page

  const formWrap = document.querySelector("#form-wrap");
  const confirmation = document.querySelector("#confirmation");
  const errorMsg = document.querySelector("#form-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type=submit]");
    errorMsg.classList.add("hidden");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") || "",
      email: formData.get("email"),
      request: formData.get("request"),
      anonymous: formData.get("anonymous") === "on",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      formWrap.classList.add("hidden");
      confirmation.classList.remove("hidden");
    } catch (err) {
      errorMsg.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = "Send prayer request";
    }
  });
}

initPrayerForm();