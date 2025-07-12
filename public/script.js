async function submitFeedback() {
  const feedback = document.getElementById("feedback").value.trim();
  if (feedback.length < 10) {
    alert("Please write at least 10 characters.");
    return;
  }

  const res = await fetch("/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: feedback })
  });

  if (res.ok) {
    alert("✅ Feedback submitted!");
    location.reload();
  } else {
    alert("❌ Failed to submit feedback.");
  }
}

window.onload = async () => {
  const res = await fetch("/feedback.json");
  const data = await res.json();
  const list = document.getElementById("feedbackList");
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `🕒 ${item.submitted_at} — “${item.message}”`;
    list.appendChild(li);
  });
};
