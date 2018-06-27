const BooleanValue = (bool: boolean, negate: boolean): string => {
    if ( negate ) {
        bool = !bool;
    }
    return bool ? "true" : "false";
};

export default BooleanValue;
