import Quantity from "./Quantity";
import TextEdit from "./TextEdit";
import Unit from "./Unit";

const ShoppingItems = (props) => {



    const shoppingItems = props.listData.map((item, index) => (
        <li
            key={item.id}
            // key={index} // Pitfall: der index kann sich im Lebenszyklus ändern, d. h. er ist nicht stabil und somit nicht eindeutig
            title={item.information}
            // className={"text-blue-500 flex"}
            // className={"grid my-subgrid col-start-1 col-end-5"}
        >
            <Quantity 
                quantity={item.quantity}
                updateData={props.updateData}
                itemIndex={index}
            />

            <Unit 
                unit={item.unit}
                updateData={props.updateData}
                itemIndex={index}
            />
            <TextEdit
                content={item.title}
                updateData={props.updateData}
                itemIndex={index}
            />
            <button className="delete-from-list" onClick={() => props.handleDelete(index)}>🗑</button>
        </li>
    ))

    return (

        <>
            {shoppingItems}
        </>
    );
}

export default ShoppingItems;


