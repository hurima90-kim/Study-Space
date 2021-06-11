"use strict";

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", () => {
    const param = {
        name: nickname.value,
        msg: chatInput.value,
    }
    socket.emit("chatting", param);
});

// 서버에서 보낸 내용 확인
socket.on("chatting", (data) => { 
    const li = document.createElement("li");
    li.innerText = `${data.name}님이 ${data.msg}`;
    chatList.appendChild(li);
})

console.log(socket);