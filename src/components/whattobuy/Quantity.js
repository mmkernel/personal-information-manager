import { useState } from "react";
import QuantityActive from "./QuantityActive";
import QuantityInactive from "./QuantityInactive";

const Quantity = (props) => {

    const [quantityEditActive, setQuantityEditActive] = useState(false)
    const [quantity, setQuantity] = useState(props.quantity)

    const handleChange = (ev) => {
        const value = ev.target.value;
        if(/^-?[0-9]*$/.test(value)) setQuantity(ev.target.value)
    }

    const handleBlur = (ev) => {
        setQuantityEditActive(false);
        props.updateData('quantity', ev.target.value, props.itemIndex);
    }

    const handleEnterKeyPressed = (ev) => {
        if (ev.key === 'Enter') {
            setQuantityEditActive(false);
            props.updateData('quantity', ev.target.value, props.itemIndex);
        }
    }

    const handleActivate = (ev) => {
        setQuantityEditActive(true);
    }

    return (
        <>
            {!quantityEditActive
                ? <QuantityInactive
                    quantity={quantity}
                    handleChange={handleActivate}
                />
                : <QuantityActive
                    quantity={quantity}
                    handleChange={handleChange}
                    handleEnterKeyPressed={handleEnterKeyPressed}
                    handleBlur={handleBlur}
                />
            }
        </>
    );
}

export default Quantity;