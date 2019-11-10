import React from 'react';
import { RenderInlineStyles } from './inlineStyle';
import { RenderCustomStyles } from './customStyles';
import { ToolbarContainer } from './toolbar.style';

const Toolbar = ({ updateEditorState, editorState }) => {
    return (
        <ToolbarContainer>
            <RenderInlineStyles
                editorState={editorState}
                updateEditorState={updateEditorState}
            />
            <RenderCustomStyles
                editorState={editorState}
                updateEditorState={updateEditorState}
            />
        </ToolbarContainer>
    );
};

export default Toolbar;