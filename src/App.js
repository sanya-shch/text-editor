import React, { useState } from 'react';
import { EditorState, Editor as DraftEditor } from 'draft-js';
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
        </EditorWrapper>
    );
};

export default App;