const noteContainer = document.querySelector('.note-container')
const modalContainer = document.querySelector('.modal-container')
const form = document.querySelector('form')
const titleInput = document.querySelector('#title')


// 생성자 함수로 제목과 본문을 가져와서 새 노트를 할당
class Note {
    constructor(title, body){
        this.title = title
        this.body = body
        this.id = Math.random() // 로컬스토리지에서 확인을 위한 임의의 id추가
    }
}


// Local Storage


// UI Update
function addNoteToList(note){
    const newUINote = document.createElement('div')
    newUINote.classList.add('note')
    newUINote.innerHTML = `
        <span hidden>${note.id}</span>
        <h2 class='note_title'>${note.title}</h2>
        <p class='note_body'>${note.body}</p>
        <div class='note_btns'>
            <button class='note_btn note_view'>View Detail</button>
            <button class='note_btn note_delete'>Note Delete</button>
        </div>
    `
    noteContainer.appendChild(newUINote)
}

// 경고 메시지 출력
function showAlertMessage(message, alertClass){
    const alertDiv = document.createElement('div')
    alertDiv.className = `message ${alertClass}`
    alertDiv.appendChild(document.createTextNode(message))
    form.insertAdjacentElement('beforebegin', alertDiv)
    titleInput.focus()
    setTimeout(() => alertDiv.remove(), 2000)
}


// View Detail 클릭시 모달창 생성
function activateNoteModal(title, body){
    const modalTitle = document.querySelector('.modal_title')
    const modalBody = document.querySelector('.modal_body')
    modalTitle.textContent = title;
    modalBody.textContent = body;
    modalContainer.classList.add('active')
}

// 모달창 닫기
const modalBtn = document.querySelector('.modal_btn').addEventListener('click', () => {
    modalContainer.classList.remove('active')
})

// 작성된 메모안의 버튼
noteContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('note_view')){
        const currentNote = e.target.closest('.note')
        const currentTitle = currentNote.querySelector('.note_title').textContent
        const currentBody = currentNote.querySelector('.note_body').textContent
        activateNoteModal(currentTitle, currentBody)
    }
    // Note Delete 
    if(e.target.classList.contains('note_delete')){
        const currentNote = e.target.closest('.note')
        showAlertMessage('Your note was permanently deleted', 'remove-message') 
        currentNote.remove()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const noteInput = document.querySelector('#note')

    // validate inputs
    if(titleInput.value.length > 0 && noteInput.value.length > 0){
        const newNote = new Note(titleInput.value, noteInput.value)
        addNoteToList(newNote)
        titleInput.value = ''
        noteInput.value = ''
        showAlertMessage('Note successfully added!', 'success-message')
        titleInput.focus()
    } else {
        showAlertMessage('Please add both a title and a note', 'alert-message')        
    }
})