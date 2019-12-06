import React, { useState } from 'react';
import { EditorState, Editor as DraftEditor } from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import ReactHtmlParser from 'react-html-parser';
import { EditorWrapper, EditorContainer } from './App.style';
import Toolbar from './containers/toolbar';
import { customStyleFn } from "./containers/toolbar/customStyles";

const App = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const updateEditorState = (editorState) => setEditorState(editorState);

    return (
        <EditorWrapper>
            <Toolbar
                editorState={editorState}
                updateEditorState={updateEditorState}
            />
            <EditorContainer>
                <DraftEditor
                    placeholder="Explore Your Way In..."
                    editorState={editorState}
                    onChange={updateEditorState}
                    customStyleFn={customStyleFn}
                />
            </EditorContainer>
            {stateToHTML(editorState.getCurrentContent())}
            <div>{ ReactHtmlParser(stateToHTML(editorState.getCurrentContent())) }</div>
        </EditorWrapper>
    );
};

export default App;