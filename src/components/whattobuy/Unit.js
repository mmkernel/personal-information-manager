import { useState } from "react";
import UnitInactive from "./UnitInactive";
import UnitActive from "./UnitActive";


const Unit = (props) => {
    const [unitEditActive, setEditActive] = useState(false);
    const [unit, setUnit] = useState(props.unit);

    const handleChange = (ev) => {
        const value = ev.target.value;
        setEditActive(false);
        if (value !== 'same') {
            setUnit(value);
            if (value !== unit) props.updateData('unit', ev.target.value, props.itemIndex);
        }
    }

    const handleActivate = (ev) => {
        setEditActive(true);
    }

    return (
        <>
            {!unitEditActive
                ? <UnitInactive
                    unit={unit}
                    handleChange={handleActivate}
                />
                : <UnitActive
                    unit={unit}
                    handleChange={handleChange}
                />
            }
        </>

    );
}

export default Unit;