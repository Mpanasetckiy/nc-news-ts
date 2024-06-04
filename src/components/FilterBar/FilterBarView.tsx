import { Flex, Space, Select, Collapse, Button } from "antd";

import { UpOutlined, DownOutlined } from "@ant-design/icons";

import "./FilterBarView.css";

interface SortingOptions {
  sort_by: string | null;
  order: string | null;
}

interface FilterBarViewProps {
  sortingOptions: SortingOptions;
  handleSortChange: (value: string) => void;
  handleOrderChange: () => void;
}

const FilterBarView: React.FC<FilterBarViewProps> = (props) => {
  const { order } = props.sortingOptions;

  return (
    <>
      <Collapse
        items={[
          {
            key: "1",
            label: "Sort articles",
            children: (
              <Flex gap="middle" vertical>
                <Space.Compact>
                  <Select
                    style={{ width: "100%" }}
                    defaultValue={props.sortingOptions.sort_by}
                    options={[
                      { value: "author", label: "Sort by: Author" },
                      { value: "created_at", label: "Sort by: Date" },
                      { value: "title", label: "Sort by: Title" },
                      { value: "topic", label: "Sort by: Topic" },
                      { value: "votes", label: "Sort by: Votes" },
                    ]}
                    onChange={props.handleSortChange}
                  />
                  <Button shape="circle" onClick={props.handleOrderChange}>
                    {order === "asc" ? <UpOutlined /> : <DownOutlined />}
                  </Button>
                </Space.Compact>
              </Flex>
            ),
          },
        ]}
        defaultActiveKey={["1"]}
      />
    </>
  );
};

export default FilterBarView;
