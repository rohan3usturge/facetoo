const ShowMoreLessLink = (index, v2, options): string => {
    if (index.length > v2) {
        return "<div class=\"gui m-b-5 m-t-5\">"
        + "<a tabindex=\"0\" aria-label=\"Press enter to show " + (index.length - v2) + " more values\" "
        + "class=\"gui caps gui-body-2 simple show-more-link cursor-pointer p-0 m-t-3\">"
        + (index.length - v2)
        + " More </a>"
        + "<a tabindex=\"0\" aria-label=\"Press enter to show less values\" "
        + "class=\"gui caps gui-body-2 simple show-less-link cursor-pointer gui-hidden p-0 m-t-3\">"
        + "Show Less</a></div>";
    } else {
        return "";
    }
};

export default ShowMoreLessLink;
