import React, {useState} from 'react';
import './App.css';

function HookExample() {
    //don't need render bc it's NOT a class component
    const [title, setTitle] = useState("initial");
    const [body, setBody] = useState('intial body');

    
    return( 
    <div className="note-editor-contents">
        <div className="note-editor-left">
            <form>
                <input id="note-editor-title" placeholder="Title of Your Note..."
                //event.target.value refers to which target the event was detected on, then grabs its value
                name="dummy" maxLength="50" onChange = {(event) => setTitle(event.target.value)} value = {title}></input>
                <textarea id="note-editor-body" placeholder="Body of Your Note..."
                rows="15" maxLength="1000" onChange = {(event) => setBody(event.target.value)} value={body} ></textarea>
            </form>
        </div>
        <div className="note-editor-right">
            <p>{title}</p>
            <p>{body}</p>
        </div>
    </div>
    )
}

export default HookExample;