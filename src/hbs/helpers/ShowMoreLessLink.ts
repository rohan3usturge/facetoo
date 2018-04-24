const ShowMoreLessLink = (index, v2, options): string => {
    if (index.length > v2) {
        return "<div class=\"gui m-t-10\">"
              + "<a tabindex=\"0\" class=\"gui caps simple show-more-link cursor-pointer p-0 m-t-3\">"
              + (index.length - v2)
              + " More </a>"
              + "<a tabindex=\"0\" class=\"gui caps simple show-less-link cursor-pointer gui-hidden p-0 m-t-3\">"
              + "Show Less</a></div>";
    } else {
        return "";
    }
};

export default ShowMoreLessLink;
