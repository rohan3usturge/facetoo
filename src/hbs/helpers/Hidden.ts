const hidden = (value: boolean, invert: boolean): string => {
    if (!invert && value) {
        return " gui-hidden ";
    }
    return "";
};

export default hidden;
