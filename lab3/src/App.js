import logo from './logo.svg';
import './base.css';
import './editor.css';
import './notecard.css';


function App() {
  return (
    <body>

    <div id="container">
      <header>
        <img id="logo-img" src="assets/pen-to-square-solid.svg" />
        <h1> PUI-NOTE </h1>
      </header>
      <div id="notecard-list">
        <NoteCard title="Card 1" body="Body 1" date="foo"/>
        <NoteCard title="Card 2" body="Body 1" date="23df"/>
        <NoteCard title="Card 3" body="Body 1" date="ergwre"/>
      </div>


      <div id="note-editor">
        
        <div id="btn-new-note">
          EDIT NOTE
        </div>

        <div className="note-editor-contents">

          <div className="note-editor-left">

            <form>
              <input id="note-editor-title" placeholder="Title of Your Note..."
                name="dummy" maxlength="50"></input>
              <textarea id="note-editor-body" placeholder="Body of Your Note..."
                rows="15" maxlength="1000"></textarea>
            </form>

          </div>

          <div className="note-editor-right">
            <div className="material-symbols-outlined icon icon-done">
              done
            </div>
          </div>

        </div> 

      </div> 


    </div> 


  </body>
  );
}

export default App;

const NoteCard = ({props}) => (
  <div className="notecard" id="notecard-one">
          <div className="notecard-left">
            <div className="notecard-main-content">
              <img className="notecard-thumbnail" src="assets/warhol-zebra.png"/>
              <div className="notecard-text">
                <div className="note-title-container">
                  <div className="note-title">
                    {props.title}
                  </div>
                </div>
                <div className="note-body">
                  {props.body}
                </div>
              </div>
            </div>

            <div className="notecard-footer">
              {props.date}
            </div>

          </div> 
          <div className="notecard-right">

            <div className="icon icon-expand material-symbols-outlined">
              expand_more
            </div>
            <div className="icon icon-collapse material-symbols-outlined">
              expand_less
            </div>

            <div className="toolbar">
              <div className="material-symbols-outlined icon icon-edit">
                edit
              </div>
              <div className="material-symbols-outlined icon icon-delete">
                delete
              </div>
            </div>
          </div> 
  </div>
)
