const bot = new RiveScript();

bot.loadFile(["brain.rive"]).then(() => {
  bot.sortReplies();

  const inputBox = document.createElement("input");
  inputBox.type = "Hello, je suis l'IA DIA booster par ChatGPT";
  inputBox.placeholder = "Posez votre question ici...";
  inputBox.onkeyup = (event) => {
    if (event.key === "Enter") {
      const message = event.target.value.trim();
      event.target.value = "";

      const chatlog = document.createElement("div");
      chatlog.classList.add("chatlog");
      chatlog.innerHTML = `<b>Vous :</b> ${message}`;
      document.querySelector("#chatbot").appendChild(chatlog);

      bot.reply("local-user", message).then((reply) => {
        const chatlog = document.createElement("div");
        chatlog.classList.add("chatlog");
        chatlog.innerHTML = `<b>Bot :</b> ${reply}`;
        document.querySelector("#chatbot").appendChild(chatlog);
      });
    }
  };

  document.querySelector("#chatbot").appendChild(inputBox);
});
