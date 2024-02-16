import { useRef, useState } from "react";


const Header = (props) => {

    const dialogElement = useRef();
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const openModal = () => dialogElement.current.showModal();
    const closeModal = () => {
        setTitle('');
        setDescription('');
        dialogElement.current.close();
    };

  
  return (
    <>
    <header>
        <div className="pim-header">
            <h1>Things To Do</h1>
            <div className="filters">
                <span className="w3-margin-right">Filter:</span> 
                <div>
                    <button className="w3-button w3-white"><i className="fa fa-th w3-margin-right"></i>ALLE</button>
                </div>
                <div className="open_tasks">
                    <input type="checkbox" id="open_tasks" />
                    <label htmlFor="open_tasks" className="w3-margin-right"> Offene</label>
                </div>
                <div className="finished_tasks">
                    <input type="checkbox" id="finished_tasks"/>
                    <label htmlFor="finished_tasks" className="w3-margin-right"> Erledigte</label>
                </div>
                <div className="filterBtn">
                    <button className="w3-button w3-white w3-hide-small"><i className="fa fa-sort-amount-asc"></i></button>
                </div>
                <div>
                    <button onClick={openModal} className="w3-button w3-white w3-hide-small"><i className="fa fa-sticky-note-o w3-margin-right"></i>Neues 2Do</button>
                </div>
            </div>
        </div>
    </header>

    <dialog ref={dialogElement} className="my-dialog">
        <section>
          <h3>Add new 2Do</h3>
          <form onSubmit={props.handleAddToDo}>
            <input
              id="addTitle"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              id="addDesc"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          <button className="btn btn-blue" type="submit">+ Add</button>
          </form>
          <button className="close" onClick={closeModal}>Cancel</button>
        </section>
      </dialog>
    </>
  )
}

export default Header;