const collapsed = (value: boolean): string => {
    if (value) {
        return " collapsed ";
    }
    return "";
};

export default collapsed;
