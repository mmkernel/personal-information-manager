import { useState } from "react";

const TextEdit = (props) => {

    const [content, setContent] = useState(props.content);

    const handleChange = (ev) => {
        const newContent = ev.target.textContent;
        if (newContent !== content) {
            setContent(newContent)
            props.updateData('title', newContent, props.itemIndex);
        }
    }

    return (
        <div
            className={"basis-10/12"}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onBlur={handleChange}
        >
            {content}
        </div>
    );
}

export default TextEdit;