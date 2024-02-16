import { useRef, useState } from "react";
import ShoppingItems from "../components/whattobuy/ShoppingItems";
import { faker } from "@faker-js/faker";
import "../assets/css/ShoppingList.css";

const WhatDoIHavetoBuy = ({ listData }) => {

    const [data, setData] = useState(listData);
    const dialogElement = useRef();

    const deleteData = (index) => {
        data.splice(index, 1);
        const newData = data.slice(0);
        console.log('deleteData:', newData);
        setData(newData);

    }

    // const updateData = (key, data, index) => {
    const updateData = (key, value, index) => {
        // console.log('ShoppingList', data);
        // 2do - data ist state-Variable => darf nicht verändert werden
        data[index] = {
            ...data[index],
            // [key]: data,
            [key]: value,
        }
        const newData = data.slice(0);
        console.log('updateData:', newData);
        setData(newData);
    }

    const addData = () => {
        const newId = data.reduce((acc, el) => (el.id > acc) ? el.id : acc, 0);
        setData([...data, {
            "id": newId + 1,
            "quantity": document.getElementById('addQt').value,
            "unit": document.getElementById('addUt').value,
            "title": document.getElementById('addAr').value,
            "information": faker.commerce.productDescription(),
            "category": faker.helpers.arrayElement(['food', 'non food', 'conviniece']),
        }]);
        dialogElement.current.close();
    }

    const openModal = () => {
        console.log(dialogElement.current);
        dialogElement.current.showModal();
    }
    
    const closeModal = () => {
        dialogElement.current.close();
    }

    return (
        <>
            <h1>What Do I Have to Buy</h1>
            <section id="notebook-paper">
                <ul>
                    <ShoppingItems
                        listData={data}
                        updateData={updateData}
                        handleDelete={deleteData}
                    />
                </ul>
                {/* <button onClick={addData}>neuer Eintrag</button> */}
                <button onClick={openModal}>+ Artikel</button>
                <dialog ref={dialogElement} className="my-dialog">
                    <section>
                        <h2>Neuen Artikel anlegen</h2>
                        <button className="close" onClick={closeModal}>x</button>
                        <div>
                            <div><input id="addQt" placeholder="Qt." type="number"/></div>
                            <div><select id="addUt">
                                <option value='l'>l</option>
                                <option value='g'>g</option>
                                <option value='kg'>kg</option>
                                <option value='St.'>St.</option>
                                <option value='Pk.'>Pk.</option>
                            </select></div>
                            <div><input id="addAr" type="text" placeholder="Artikel" /></div>
                            <div><button onClick={addData} className="btn btn-blue">+ Add</button></div>
                        </div>
                    </section>
                </dialog>
            </section>
        </>
    )
}

export default WhatDoIHavetoBuy;