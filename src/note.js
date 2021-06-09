const noteContainer = document.querySelector('.note-container')
const modalContainer = document.querySelector('.modal-container')
const form = document.querySelector('form')


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

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const titleInput = document.querySelector('#title')
    const noteInput = document.querySelector('#note')

    // validate inputs
    if(titleInput.value.length > 0 && noteInput.value.length > 0){
        const newNote = new Note(titleInput.value, noteInput.value)
        addNoteToList(newNote)
        titleInput.value = ''
        noteInput.value = ''
        titleInput.focus()
    }
})