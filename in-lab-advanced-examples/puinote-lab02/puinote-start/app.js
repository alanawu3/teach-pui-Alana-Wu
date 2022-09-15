class Notecard {
    constructor(imageURL, title, body, footer, elementID) {
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;
        this.noteFooter = footer;
        this.element = document.querySelector(elementID); //saving the element itself, not just its ID
    
        const btnExpand = document.querySelector('.icon-expand');
        const btnCollapse = document.querySelector('.icon-collapse');
        const btnEdit = document.querySelector('.icon-edit');
        const btnSubmit = document.querySelector('#note-editor .icon-done');


        //btnCollapse.onclick = this.collapseNote.bind(this);
        const btnEdit = this.element.querySelector('.icon-edit');

        this.updateElement();
    }

    updateElement() { //class fxn that 
        
    }


    expandNote() {
        this.element.classList.add('expanded')
    }

    collapseNote() {
        this.element.classList.remove('expanded')
    }

    editNote(){
        selectedNote = this;
        updateEditor();
    }
}

let selectedNote = null; //which note is selected atm, lglobal var

//initializing new class instances
const notecardOne = new Notecard (
    'assets/warhol-frog.png',
    'This is the First Note',
    "Here's some text for the body",
    'Sept. 1 2022, 10:35',
    '#notecard-one'
)

const notecardTwo = new Notecard (
    'assets/warhol-frog.png',
    'This is the Second Note',
    "Here's some text for the body",
    'Sept. 1 2022, 10:35',
    '#notecard-two'
)

const notecardThree = new Notecard (
    'assets/warhol-frog.png',
    'This is the Third Note',
    "Here's some text for the body",
    'Sept. 1 2022, 10:35',
    '#notecard-three'
)


function updateEditor() {
    const editorElement = document.querySelector('#note-editor');
    editorEelement.classList.add('edit-mode');
}

function submitNote() {
    const notecard = document.querySelector('.notecard');
    const noteTitleElement = notecard.querySelector('note-title'); //only looks w/n notecard element
    const noteBodyElement = notecard.querySelector('.note-body');

    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');

    noteTitleElement.innerText = editorTitleEelement.value;
    noteBodyEelement.innerText = editorBodyElement.value;
}


btnExpand.onclick = expandNote; //registering functions
btnCollapse.onclick = collapseNote;
btnEdit.onclick = updateEditor;
btnSubmit.onclick = submitNote;