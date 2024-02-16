import { Fragment } from "react";

const UnitActive = ({ unit, handleChange }) => {
    const units = ['l', 'g', 'kg', 'St.', 'Pk.'];

    return (
        // <div className={"basis-1/12 text-left"}>
        <div className={"text-left w-6"}>
            <select
                defaultValue={unit}
                className={"w-full"}
                onChange={handleChange}
            >
                {units.map((el, index) => (
                    <Fragment key={index}>
                        {el === unit
                            ? (<>
                                <option
                                    // key={index}
                                    style={{ display: 'none' }}
                                    value={el}
                                > {el}
                                </option>
                                <option
                                    // key={'same'}
                                    value={'same'}
                                > {el}
                                </option>
                            </>
                            )
                            : (
                                <option
                                    // key={index}
                                    value={el}
                                > {el}
                                </option>
                            )
                        }
                    </Fragment>
                ))
                }
            </select>
        </div>
    );
}

export default UnitActive;