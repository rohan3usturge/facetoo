import * as moment from "moment";
const formatLabelByType = (type: string, value: string) => {
    if (moment && type === "Edm.DateTimeOffset") {
        return moment.utc(value).format("DD-MMM-YYYY hh:mm a");
    } else {
        if ( value === "Assigned" ) {
            return "Committed";
        }
        if ( value === "Complete" ) {
            return "Assigned";
        }
        return value;
    }
};

export default formatLabelByType;
