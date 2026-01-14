const API_URL = "http://DEINE_IP:3000";
const API_KEY = "5ee8e2b63631fdd61c77ad2efb6c1d4bcfb66197ef9621a36f591a44d29c6ed3";

async function send() {
  const channelId = document.getElementById("channelId").value;
  const messageId = document.getElementById("messageId").value;

  const embed = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    color: document.getElementById("color").value
  };

  const endpoint = messageId ? "/edit" : "/send";
  const body = messageId
    ? { channelId, messageId, embed }
    : { channelId, embed };

  const response = await fetch(API_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": API_KEY
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  document.getElementById("result").textContent =
    JSON.stringify(data, null, 2);
}
