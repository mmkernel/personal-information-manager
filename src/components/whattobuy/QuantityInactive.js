const QuantityInactive = ({ quantity, handleChange }) => {

    return (
        <div 
           className={"text-right w-14"}
           onClick={handleChange}
        >
            {quantity}
        </div>
    );
}

export default QuantityInactive;