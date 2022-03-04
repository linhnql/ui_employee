import "antd/dist/antd.css";
import { Table, Button, Input, Drawer, Popconfirm, Pagination } from "antd";
import "./list-container.css";
import { useEffect, useState } from "react";

const ListContainer = (props) => {
  let columns = Object.keys(props.header).map((key, index) => ({
    title: props.header[key],
    dataIndex: key,
    sorter: true,
  }));

  columns = [
    ...columns,
    {
      title: "",
      dataIndex: "action",
      render: (_, record) => (
        <a onClick={() => {props.onOpenUpdateForm(record.id)}}>Update</a>
      ),
    },
  ];

  console.log(props.data);

  const [visibleUpdateForm, setVisibleUpdateForm] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const showDrawerUpdateForm = (homeId) => {
    setVisibleUpdateForm(true);
  };

  const onCloseUpdateForm = () => {
    setVisibleUpdateForm(false);
  };

  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
    }
  };

  return (
    <div>
      <div className="action">
        <Button
          type="primary"
          className="action__btn"
          onClick={props.onOpenAddForm}
        >
          Add employee
        </Button>
        <Popconfirm
          onConfirm={() => props.onClickHandleDelete(selectedRowKeys)}
          okText="Yes"
          cancelText="No"
          title="Are you sure to delete this item?"
        >
          <Button type="primary" className="action__btn">
            Delete Employee
          </Button>
        </Popconfirm>
      </div>

      <div className="search">
        <Input.Search
          className="search__input"
          allowClear
          onChange={(e) => props.onChangeHandleSearch(e.target.value)}
        />
      </div>

      <Table
        rowSelection={{ ...rowSelection }}
        columns={columns}
        dataSource={props?.data}
        onChange={props?.onChangeTable}
        pagination={{ total: props?.totalCount, pageSize: props?.pageSize }}
        loading={props?.loading}
        rowKey={props?.rowKey}
      />
    </div>
  );
};

export default ListContainer;
