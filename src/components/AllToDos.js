import { useState } from "react";

const AllToDos = (props) => {
  const [finishedItems, setFinishedItems] = useState(Array(props.toDoData.length).fill(false));

  // Function to toggle the finished state of a to-do item
  const toggleFinished = (index) => {
    setFinishedItems((prevFinishedItems) => {
      const updatedFinishedItems = [...prevFinishedItems];
      updatedFinishedItems[index] = !updatedFinishedItems[index];
      console.log(finishedItems);
      return updatedFinishedItems;
    });
  };

  // Filtering to-do items based on the selected filter
  const filteredToDoData = props.toDoData.filter((toDoItem, index) => {
    if (props.selectedFilter === 'open') {
      return !finishedItems[index];
    } else if (props.selectedFilter === 'finished') {
        console.log(finishedItems);
        
      return finishedItems[index];
    }
    return true; // 'all'
  });

  return (
    <section className="allToDos" aria-label="All To-Dos">
      {filteredToDoData.map((toDoItem, index) => (
        <article
          className={`toDo ${finishedItems[index] ? 'finished' : ''}`}
          key={toDoItem.id}
          aria-label={`To-Do Item ${toDoItem.Title}`}
        >
          <div className="titleToDo" aria-label={toDoItem.Title}>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(evt) => props.handleTitleChange(evt, index)}
              aria-label={`Edit Title for To-Do Item ${toDoItem.Title}`}
            >
              {toDoItem.Title}
            </p>
            <input
              type="checkbox"
              checked={finishedItems[index]}
              onChange={() => toggleFinished(index)}
              aria-label={`Toggle Finished State for To-Do Item ${toDoItem.Title}`}
            />
          </div>
          <div
            className="textToDo"
            contentEditable
            suppressContentEditableWarning
            onInput={(evt) => props.handleDescChange(evt, index)}
            aria-label={`Edit Description for To-Do Item ${toDoItem.Title}`}
          >
            {toDoItem.Description}
          </div>
          <div className="toDoDates" aria-label="To-Do Dates and Actions">
            <div className="createdDate" aria-label="Creation Date">
              <i className="fa fa-calendar w3-margin-right"></i>
              {toDoItem.Date}
            </div>
            <div className="modifiedDate" aria-label="Modification Date">
              <i className="fa fa-edit w3-margin-right"></i>
              {toDoItem.ModifyDate}
            </div>
            <div>
              <button
                className="deleteToDo"
                onClick={() => props.handleDelete(index)}
                aria-label={`Delete To-Do Item ${toDoItem.Title}`}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default AllToDos;
