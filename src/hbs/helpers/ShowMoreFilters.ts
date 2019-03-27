const ShowMoreFilters = (): string => {
    return `<div class="gui no-wrap m-l-2">
                <a
                    tabindex="0"
                    data-attr-value="Show More"
                    aria-label="Press enter to show more values"
                    class="gui caps gui-body-2 simple show-more-filters-link cursor-pointer p-0 m-t-3"
                >
                    Show More
                </a>
                <a
                    tabindex="0"
                    data-attr-value="Show Less"
                    aria-label="Press enter to show less values"
                    class="gui caps gui-hidden gui-body-2 simple show-less-filters-link cursor-pointer p-0 m-t-3"
                >
                    Show Less
                </a>
            </div>`;
};

export default ShowMoreFilters;
