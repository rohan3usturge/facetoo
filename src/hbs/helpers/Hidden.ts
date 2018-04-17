const hidden = (value: boolean, invert: boolean): string => {
    let hide;
    if (invert) {
        if (!value) {
            hide = true;
        } else {
            hide = false;
        }
    } else {
        if (value) {
            hide = true;
        } else {
            hide = false;
        }
    }
    return hide ? " gui-hidden " : " ";
};

export default hidden;
