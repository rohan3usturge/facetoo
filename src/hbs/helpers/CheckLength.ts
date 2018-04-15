const checkLength = (index, v2): string => {
    if (index !== undefined && index > v2) {
        return "gui-hidden extra-filter";
    }
    return "";
};

export default checkLength;
