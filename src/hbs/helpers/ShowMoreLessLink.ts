const ShowMoreLessLink = (index, v2, options): string => {
    if (index.length > v2) {
        return "<a tabindex=\"0\" class=\"gui simple show-more-link cursor-pointer p-0 m-t-3\">Show "
              + (index.length - v2)
              + " More </a>"
              + "<a tabindex=\"0\" class=\"gui simple show-less-link cursor-pointer gui-hidden p-0 m-t-3\">"
              + "Show Less</a>";
    } else {
        return "";
    }
};

export default ShowMoreLessLink;
