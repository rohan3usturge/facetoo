const ShowMoreLessLink = (index, v2, options): string => {
    if (index.length > v2) {
        return "<li class=\"gui m-b-5 m-t-5\">"
                + "<a tabindex=\"0\" role=\"treeitem\" "
                +       "data-attr-id=\"{{id}}\" "
                +       "data-attr-value=\"Show More\" "
                +       "aria-label=\"Press enter to show " + (index.length - v2) + " more values\" "
                +       "class=\"gui caps gui-body-2 simple show-more-link cursor-pointer p-0 m-t-3\">"
                +       (index.length - v2) + " More"
                + "</a>"
             + "</li>"
             + "<li class=\"gui m-b-5 m-t-5 gui-hidden\">"
                + "<a tabindex=\"0\" role=\"treeitem\" "
                +       "data-attr-value=\"Show Less\" "
                +       "aria-label=\"Press enter to show less values\" "
                +       "class=\"gui caps gui-body-2 simple show-less-link cursor-pointer p-0 m-t-3\">"
                    + "Show Less" +
                  "</a>"
             + "</li>";
    } else {
        return "";
    }
};

export default ShowMoreLessLink;
