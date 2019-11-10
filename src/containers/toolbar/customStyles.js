import React from "react";
import createStyles from "draft-js-custom-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { Container, ToolbarItem } from "./toolbar.style";

const { styles, customStyleFn } = createStyles(
    ["font-size", "color"],
    "CUSTOM_"
);

export { customStyleFn };

export const customStyles = [
    {
        label: "red-color",
        icon: <FontAwesomeIcon icon={faAnchor} />,
        styler: editorState => {
            return styles.color.toggle(editorState, "red");
        }
    }
];

export const RenderCustomStyles = ({ editorState, updateEditorState }) => {
    const applyCustomStyle = item => {
        if (item) {
            const newEditorState = item.styler(editorState);
            updateEditorState(newEditorState);
        }
    };

    return (
        <Container>
            {customStyles.map((item, idx) => {
                return (
                    <ToolbarItem
                        key={`${item.label}-${idx}`}
                        onClick={() => applyCustomStyle(item)}
                    >
                        {item.icon || item.label}
                    </ToolbarItem>
                );
            })}
        </Container>
    );
};