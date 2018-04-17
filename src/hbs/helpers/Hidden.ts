const hidden = (value: boolean): string => {
    if (value) {
        return " gui-hidden ";
    }
    return "";
};

export default hidden;
