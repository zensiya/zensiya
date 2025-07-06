function sendToAI() {
  const input = document.getElementById("input").value;

  fetch("https://api-inference.huggingface.co/models/google/flan-t5-large", {
    method: "POST",
    headers: {
      "Authorization": "Bearer hf_sKfXz...yourHuggingFaceToken",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: input })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText = data[0].generated_text || "Try again!";
  });
}
