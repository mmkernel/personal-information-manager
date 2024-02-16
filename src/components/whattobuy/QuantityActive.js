const QuantityActive = ({ quantity, handleChange, handleEnterKeyPressed, handleBlur }) => {
    return (
        <div 
        //    className={"basis-1/12 text-right pr-1"}
           className={"text-right w-14"}
        >
            <input 
                type="number"
                value={quantity}
                className={"text-right w-full"}
                // size="5"
                maxLength={6}
                onChange={handleChange}
                onKeyDown={handleEnterKeyPressed}
                onBlur={handleBlur}
            />
        </div>
    );
}

export default QuantityActive;