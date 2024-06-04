import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import FilterBarView from "./FilterBarView";

const FilterBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order: "desc",
  });
  const orderParam = searchParams.get("order");
  const sortParam = searchParams.get("sort_by");

  const handleSortChange = useCallback((sortValue: string) => {
    if (sortValue && orderParam) {
      setSearchParams({ sort_by: sortValue, order: orderParam });
    }
  }, []);

  const handleOrderChange = useCallback(() => {
    if (sortParam && orderParam) {
      setSearchParams({
        sort_by: sortParam,
        order: orderParam === "asc" ? "desc" : "asc",
      });
    }
  }, [orderParam]);

  return (
    <>
      <FilterBarView
        sortingOptions={{ sort_by: sortParam, order: orderParam }}
        handleSortChange={handleSortChange}
        handleOrderChange={handleOrderChange}
      />
    </>
  );
};

export default FilterBar;
