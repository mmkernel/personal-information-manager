import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchDataSuccess } from '../utils/functions';
import AllToDos from '../components/AllToDos';
import Header from '../components/Header';
import { toDoData } from '../utils/data';
import { getCurrentDateTime } from "../utils/functions";


const ThingsToDo = () => {
    // State variables initialization
    const [updateData, setUpdateData] = useState(toDoData);
    const [title, setTitle] = useState(toDoData.Title);
    const [editDate, setEditDate] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all'); 
    const [sortOrder, setSortOrder] = useState('asc');
    const [isAscending, setIsAscending] = useState(true);

    // Redux state and dispatch setup
    const { data, loading } = useSelector((state) => state.data); 
    const dispatch = useDispatch();

    const deleteToDo = (index) => {
        const newData = updateData.filter((_, i) => i !== index);
        console.log('deleteData:', newData);
        setUpdateData(newData);
    }
    
    const closeModal = () => {
        setTitle('');
    };

    // Function to add a new to-do item
    const addToDo = (evt) => {
        evt.preventDefault();
        const newTitle = evt.target.elements[0].value;
        const newDescription = evt.target.elements[1].value;
        console.log('Adding new to-do:', evt.target.elements[0].value);
        
        // Generating a new ID for the to-do item
        const newId = data.reduce((acc, el) => (el.id > acc) ? el.id : acc, 0);
        setUpdateData([...updateData, {
            "id": newId + 1,
            "Title": newTitle,
            "Description": newDescription,
            "Date": getCurrentDateTime(),
        }]);
        
        // Reset form fields
        setTitle('');
        closeModal();
    };

    // Function to handle filter changes
    const handleFilterChange = (value) => {
        setSelectedFilter(value);
        console.log(selectedFilter);
      };

    // Changes in the title of a to-do item
    const handleTitleChange = (evt) => {
        const newTitle = evt.target.textContent;
        if (newTitle !== title) {
          setTitle(newTitle);
        }
      };
    
    // Changes in the description of a to-do item and change the date
    const handleDescChange = (evt, index ) => {
        const newDescription = evt.target.textContent;
        setEditDate(getCurrentDateTime());
        const updatedToDo = {
            ...updateData[index],
            Description: newDescription,
            ModifyDate: editDate,
            };
        
            const newData = [...updateData];
            newData[index] = updatedToDo;
            setUpdateData(newData);

            // Set the cursor position to the end on change
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(evt.target);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
      };
    
     // Function to handle sorting by date
    const handleSort = () => {
        setIsAscending((prevIsAscending) => !prevIsAscending);
        const sortedData = [...updateData].sort((a, b) => {
            const dateA = new Date(a.Date).getTime();
            const dateB = new Date(b.Date).getTime();

            if (sortOrder === 'asc') {
            return dateA - dateB;
            } else {
            return dateB - dateA;
            }
        });

        // Update the sorting order for the next click
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

        // Update the state with the sorted data
        setUpdateData(sortedData);
    };

    // Fetching data from Redux store when component mounts
    useEffect(() => {
        dispatch(fetchData());

        const fetchDataAsync = async () => {
            try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            dispatch(fetchDataSuccess(toDoData));
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchDataAsync();
    }, [dispatch]);

    return (
        <>
        <Header
            toDoData={toDoData}
            handleAddToDo={(e) => { addToDo(e); closeModal(); }}
            handleFilterChange={handleFilterChange}
            selectedFilter={selectedFilter}
            isAscending={isAscending}
            handleSort={handleSort}
        />
        {loading ? (
            <h2>Loading...</h2>
        ) : (
            // Only render AllToDos when data is available
            data.length > 0 && <AllToDos
                                    toDoData={updateData}
                                    newData={data}
                                    handleDelete={deleteToDo}
                                    handleDescChange={handleDescChange}
                                    handleTitleChange={handleTitleChange}
                                    selectedFilter={selectedFilter}
                                />
        )}
        </>
    );
}

export default ThingsToDo;
