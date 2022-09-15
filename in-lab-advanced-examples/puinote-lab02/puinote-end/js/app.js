//class of notecard objects
class Notecard {
  //each new instance automatically has a url, title, body, footer, and elementID
  constructor(imageURL, title, body, footer, elementID) {//elementID will refer to the specific notecard container
    this.noteImageURL = imageURL;
    this.noteTitle = title;
    this.noteBody = body;
		this.noteFooter = footer;

    this.element = document.querySelector(elementID);//selects which notecard it is by the elementID

    const btnExpand = this.element.querySelector('.icon-expand');//finds expand icon in the notecard (1st one, but there's only one anywas)
    const btnCollapse = this.element.querySelector('.icon-collapse');//first element found that has class of .icon-collapse

    //when expand icon is clicked on, the expand note fxn will happen to THIS instance (this specific notecard)
    btnExpand.onclick = this.expandNote.bind(this); 
    //when collapse icon is clicked on, collapseNote fxn will happen to THIS instance

    btnCollapse.onclick = this.collapseNote.bind(this); //WHAT IS THE POINT OF BIND?

    const btnEdit = this.element.querySelector('.icon-edit'); //var = edit icon
    btnEdit.onclick = this.editNote.bind(this); //when edit icon clicked, editNote function happens to this notecard

    const btnDelete = this.element.querySelector('.icon-delete');
    btnDelete.onclick = this.deleteNote.bind(this);

    this.updateElement(); //calls updateElement fxn when a new notecard is created
  }

  updateElement() { 
    //assigns JS variables for all the elements inside the notecard   
	  const noteImageElement = this.element.querySelector('.notecard-thumbnail');
	  const noteTitleElement = this.element.querySelector('.note-title');
	  const noteBodyElement = this.element.querySelector('.note-body');
	  const noteFooterElement = this.element.querySelector('.notecard-footer');

	  noteImageElement.src = this.noteImageURL; //src of image element = the imageURL property of this notecard
	  noteTitleElement.innerText = this.noteTitle;
	  noteBodyElement.innerText = this.noteBody;
    noteFooterElement.innerText = this.noteFooter;
	}

  expandNote() {
    this.element.classList.add('expanded'); //this notecard now also belongs to the "expanded" class
  }

  collapseNote() {
    this.element.classList.remove('expanded'); //this notecard no longer belonds to the "expanded" class
  }

  editNote() {
    selectedNote = this; //selected Note is the current notecard object selected
    updateEditor();
  }

  deleteNote() {
    this.element.remove();
  }
}

let selectedNote = null; //unselect the current notecard.. BUT WHY HERE?
//so you only have a note selected when you're in the middle of editing?

function updateEditor() {
  const editorElement = document.querySelector('#note-editor');//refers to the entire container for the noteeditor
  editorElement.classList.add('edit-mode');//that container now has additional class of 'edit-mode'

  const editorTitleElement = document.querySelector('#note-editor-title');
	const editorBodyElement = document.querySelector('#note-editor-body');

  editorTitleElement.value = selectedNote.noteTitle;//sets value of notecard title to 
  editorBodyElement.value = selectedNote.noteBody;
}

function submitNote() {
  const editorTitleElement = document.querySelector('#note-editor-title');
	const editorBodyElement = document.querySelector('#note-editor-body');

  selectedNote.noteTitle = editorTitleElement.value;
  /*sets title property of the selected note variable to the value of the HTML
  element selected (editor titel in this case)*/
  selectedNote.noteBody = editorBodyElement.value;
  //assigns body element value in editor to the selected note's body
  selectedNote.updateElement();
  //pushes the values that were saved in the JS notecard variable into the actual notecard
  //editor values -> JS variable & properties -> actual notecard element
  
  const editorElement = document.querySelector('#note-editor');
  editorElement.classList.remove('edit-mode');
  //turn off edit mode by removing "edit-mode" class from note-editor element in HTML
}


const notecardOne = new Notecard(
  'assets/warhol-frog.png',
  'This is the First Note',
  'Here is some body text for the first note.',
  'Sep 1 2022, 10:25',
  '#notecard-one'
)

const notecardTwo = new Notecard(
  'assets/warhol-orangutan.png',
  'This is the Second Note',
  'And here is some body text for the second note! What could be next?',
  'Sep 1 2022, 10:25',
  '#notecard-two'
)

const notecardThree = new Notecard(
  'assets/warhol-eagle.png',
  'This is the Third Note',
  'Yep, you guessed it, here is some body text for the third note.',
  'Sep 1 2022, 10:25',
  '#notecard-three'
)

//sets btnSubmit to the done icon in the note editor
const btnSubmit = document.querySelector('#note-editor .icon-done');

//when btnSubmit is clicked(done icon) submitNote is called. 
//HOWEVER, submitNote is NOT called when we're just looking at it here.
btnSubmit.onclick = submitNote