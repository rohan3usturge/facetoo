import * as moment from "moment";
const formatDate = (datetime, format) => {
    if (moment) {
        return moment(datetime).format(format);
    } else {
        return datetime;
    }
};

export default formatDate;
