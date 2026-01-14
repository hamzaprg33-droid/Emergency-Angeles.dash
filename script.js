const API_URL = "http://DEINE_IP:3000";
const API_KEY = "5ee8e2b63631fdd61c77ad2efb6c1d4bcfb66197ef9621a36f591a44d29c6ed3";

async function send() {
  const channelId = channelId.value;
  const messageId = messageId.value;

  let fields = [];
  try {
    fields = fieldsInput.value ? JSON.parse(fieldsInput.value) : [];
  } catch {
    alert("Fields JSON ungültig");
    return;
  }

  const embed = {
    title: title.value,
    description: description.value,
    color: color.value,
    author: {
      name: authorName.value,
      icon: authorIcon.value
    },
    footer: {
      text: footerText.value,
      icon: footerIcon.value
    },
    thumbnail: thumbnail.value,
    image: image.value,
    fields
  };

  const body = {
    channelId,
    content: content.value,
    embed
  };

  if (messageId) body.messageId = messageId;

  const res = await fetch(API_URL + (messageId ? "/edit" : "/send"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": API_KEY
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  result.textContent = JSON.stringify(data, null, 2);
}
