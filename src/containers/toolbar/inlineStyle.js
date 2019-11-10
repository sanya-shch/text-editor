import React from "react";
import { RichUtils } from "draft-js";
import { inlineStyles } from "./constants";
import { ToolbarItem, Container } from "./toolbar.style";

export const RenderInlineStyles = ({ editorState, updateEditorState }) => {
    const applyStyle = (e, style) => {
        e.preventDefault();
        updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    const isActive = style => {
        const currentStyle = editorState.getCurrentInlineStyle();
        return currentStyle.has(style);
    };

    return (
        <Container>
            {inlineStyles.map((item, idx) => {
                return (
                    <ToolbarItem
                        isActive={isActive(item.style)}
                        key={`${item.label}-${idx}`}
                        onClick={e => applyStyle(e, item.style)}
                    >
                        {item.icon || item.label}
                    </ToolbarItem>
                );
            })}
        </Container>
    );
};