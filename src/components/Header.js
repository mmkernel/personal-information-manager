import { useRef, useState } from "react";

const Header = (props) => {
    const dialogElement = useRef();
    // State for new title and description in the modal
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const openModal = () => dialogElement.current.showModal();
    const closeModal = () => {
        setNewTitle('');
        setNewDescription('');
        dialogElement.current.close();
    };

    return (
    <>
    <header>
        <div className="pim-header">
            <h1>Things To Do</h1>
            {/* Filters section */}
            <div className="filters" aria-label="Filters">
                <span className="w3-margin-right">Filter:</span>
                {/* Radio buttons for different filters */}
                <div>
                    <input
                        type="radio"
                        id="filter_all"
                        name="filter"
                        value="all"
                        onChange={() => props.handleFilterChange('all')}
                        checked={props.selectedFilter === 'all'}
                        aria-label="Show all tasks"
                    />
                    <label htmlFor="filter_all">
                        ALLE
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="filter_open"
                        name="filter"
                        value="open"
                        onChange={() => props.handleFilterChange('open')}
                        checked={props.selectedFilter === 'open'}
                        aria-label="Show open tasks"
                    />
                    <label htmlFor="filter_open" >
                        Offene
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="filter_finished"
                        name="filter"
                        value="finished"
                        onChange={() => props.handleFilterChange('finished')}
                        checked={props.selectedFilter === 'finished'}
                        aria-label="Show finished tasks"
                    />
                    <label htmlFor="filter_finished">
                        Erledigte
                    </label>
                </div>
                {/* Sort by date button */}
                <div className="filterBtn">
                    <button
                        aria-label="Sort tasks"
                        onClick={props.handleSort}
                    >
                    <i className={`fa ${props.isAscending ? 'fa-sort-amount-asc' : 'fa-sort-amount-desc'}`}></i>
                </button>

                </div>
                {/* Button to add a new task */}
                <div>
                    <button className="new-todo" onClick={openModal} aria-label="Add new task">
                        <i className="fa fa-sticky-note-o w3-margin-right"></i>Neues 2Do
                    </button>
                </div>
            </div>
        </div>
    </header>

    <dialog ref={dialogElement} className="addToDoDialog">
        <section>
            <h3>Add new 2Do</h3>
            <form onSubmit={(e) => {
            props.handleAddToDo(e);
            closeModal();
            }}>
            <input
                required
                id="addTitle"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
                required
                id="addDesc"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
            <button className="btn btn-blue" type="submit">+ Add</button>
            <button className="close" onClick={closeModal}>Cancel</button>
            </form>
        </section>
        </dialog>
    </>
    )
}

export default Header;