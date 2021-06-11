"use strict";

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

chatInput.addEventListener("keypress", (event) => {
    if(event.keyCode === 13){
        send()
    }
})

function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value,
    }
    socket.emit("chatting", param);
}

sendButton.addEventListener("click", send);

// 서버에서 보낸 내용 확인
socket.on("chatting", (data) => {
    const { name, msg, time } = data; // 넘어온 데이터중 필요한 부분만 변수로 저장
    const item = new LiModel(name, msg, time); // LiModel을 인스턴스화 (초기화)
    item.makeLi()
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
});

function LiModel(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;

    // makeLi 함수로 접근
    this.makeLi = () => {
        const li = document.createElement("li");
        li.classList.add(nickname.value === this.name ? "sent" : "received")
        const dom = `
            <span class="profile">
                <img class="image" src="https://placeimg.com/50/50/any" alt="">
                <span class="user">${this.name}</span>
            </span>
            <span class="message">${this.msg}</span>
            <span class="time">${this.time}</span>
        `;
        li.innerHTML = dom;
        chatList.appendChild(li);
    };
};

console.log(socket);