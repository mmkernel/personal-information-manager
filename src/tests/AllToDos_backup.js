import { useState } from "react";

const AllToDos = (props) => {
    const [title, setTitle] = useState(props.Title);
    const [description, setDescription] = useState(props.Description);
    const [editDate, setEditDate] = useState('')
    const [data, setData] = useState(props.toDoData);


    const handleTitleChange = (evt, index) => {
        const newTitle = evt.target.textContent;
        if (newTitle !== title) {
            setTitle(newTitle);
        }
    }

    const handleDescChange = (evt) => {
        setDescription(evt.target.textContent);
    }

    const finished = (evt) => {
        
    }

    return (
        <section className="allToDos">
        {props.toDoData.map((toDoItem, index) => (
            <article className="toDo" key={toDoItem.id}>
                <div className="titleToDo">
                    <p contentEditable suppressContentEditableWarning onBlur={handleTitleChange}>{toDoItem.Title}</p>
                    <input onClick={finished} type="checkbox" />
                </div>
                <div className="textToDo" contentEditable suppressContentEditableWarning onChange={handleDescChange}>
                    {toDoItem.Description}
                </div>
                <div className="toDoDates">
                    <div className="createdDate">
                        <i className="fa fa-calendar w3-margin-right"></i>{toDoItem.Date}
                    </div>
                    <div className="modifiedDate">
                        <button>
                            <i className="fa fa-edit w3-margin-right"></i>{toDoItem.modifiedDate}
                        </button>
                    </div>
                    <div><button
                            className="deleteToDo"
                            onClick={() => props.handleDelete(index)}
                            ><i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </article>
        ))}
        </section>
    )
}

export default AllToDos;
