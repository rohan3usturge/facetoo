const checkLength = (index, v2): string => {
    if (index !== undefined && index + 1 > v2) {
        return "gui-hidden extra-filter";
    }
    return "";
};

export default checkLength;
