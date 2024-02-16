const UnitInactive = ({ unit, handleChange }) => {
    return (
        <div 
        // className={"basis-1/12 text-left"}
        className={"text-left w-6"}
        onClick={handleChange}
        >{unit}</div>
    );
}

export default UnitInactive;