import { SetStateAction, useCallback } from "react";

import FilterBarView from "./FilterBarView";

interface SortingOptions {
  sort_by: string;
  order: string;
}
interface FilterBarProps {
  sortingOptions: SortingOptions;
  setSortingOptions: (options: SetStateAction<SortingOptions>) => void;
}

const FilterBar: React.FC<FilterBarProps> = (props) => {
  const { order } = props.sortingOptions;

  const handleSortChange = useCallback((sortValue: string) => {
    if (sortValue) {
      props.setSortingOptions((prev) => {
        return { ...prev, sort_by: sortValue };
      });
    }
  }, []);

  const handleOrderChange = useCallback(() => {
    props.setSortingOptions((prev) => {
      return { ...prev, order: order === "asc" ? "desc" : "asc" };
    });
  }, [order]);

  return (
    <>
      <FilterBarView
        sortingOptions={props.sortingOptions}
        handleSortChange={handleSortChange}
        handleOrderChange={handleOrderChange}
      />
    </>
  );
};

export default FilterBar;
