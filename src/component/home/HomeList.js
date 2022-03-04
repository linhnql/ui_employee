import ListContainer from "../common/list-container/list-container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addHomeStart,
  loadHomesStart,
  deleteHomeStart,
  updateHomeStart,
  loadHomeStart,
} from "../../redux/actions/home/actions";
import { message, Form, Typography } from "antd";
import FormAdd from "./HomeAdd";
import FormUpdate from "./HomeUpdate";
import _default from "antd/lib/checkbox/Group";

const url = "http://localhost:8080/o/home-rest/1.0.0/homes";
const { Title } = Typography;

const sortType = {
  ascend: "asc",
  descend: "desc", 
};

const HomeList = () => {
  const dispatch = useDispatch();

  const { data, loading, error, home } = useSelector(
    (state) => state.homeReducer
  );

  const [pageSize, setPageSize] = useState(5);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState();

  const [visibleAddForm, setVisibleAddForm] = useState(false);

  const [visibleUpdateForm, setVisibleUpdateForm] = useState(false);

  const [homeId, setHomeId] = useState(null);

  const [empty, setEmpty] = useState(false);

  const [addForm] = Form.useForm();

  const onChangeEmpty = (checked) => {
    setEmpty(checked);
    console.log(checked);
  };

  const onCloseAddForm = () => {
    setVisibleAddForm(false);
    addForm.resetFields();
  };

  const onOpenAddForm = () => {
    setVisibleAddForm(true);
  };

  const onCloseUpdateForm = () => {
    setVisibleUpdateForm(false);
    setHomeId(null);
  };

  const onOpenUpdateForm = (homeId) => {
    setHomeId(homeId);
    loadHomeData(homeId);
    setVisibleUpdateForm(true);
  };

  const onSubmitHandleAddHome = (home) => {
    if (empty) addForm.resetFields();
    console.log(home);
    dispatch(addHomeStart(home));
    message.success("Add successful");
  };

  const onSubmitHandleUpdateHome = (home) => {
    console.log(home);
    dispatch(updateHomeStart(homeId, home));
    message.success("Update successful");
  };

  const [header] = useState({
    address: "Name",
    floor: "Gender",
    room: "Birthday",
    color: "Address",
    owner: "Has account?",
  });

  const loadHomesData = () => {
    let params = { page, pageSize, sort };
    params = search === "" ? params : { ...params, search };
    dispatch(loadHomesStart(params));
  };

  const loadHomeData = (homeId) => {
    dispatch(loadHomeStart(homeId));
  };

  const onChangeTable = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra);
    if (sorter.order !== undefined && sorter != null) {
      setSort(`${sorter.field}:${sortType[sorter.order]}`);
    } else {
      setSort(null);
    }
    setPage(pagination.current);
  };

  const onChangeHandleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const onClickHandleDeleteHome = (selectedKeys) => {
    console.log(selectedKeys);
    if (!selectedKeys) {
      message.error("Please select item that you need delete!");
    } else {
      selectedKeys.forEach((key) => {
        dispatch(deleteHomeStart(key));
      });
      setTimeout(() => {
        if (loading !== true) {
          loadHomesData();
        }
        setTimeout(message.success("Delete successful"), 1500);
      }, selectedKeys.length * 700);
    }
  };

  useEffect(() => {
    loadHomesData();
  }, [page, search, sort]);

  return (
    <section>
      <Title level={3} style={{marginBottom: '30px'}}>Employee information list</Title>

      <ListContainer
        loading={loading}
        rowKey={"id"}
        data={data.items}
        totalCount={data.totalCount}
        pageSize={pageSize}
        header={header}
        onChangeTable={onChangeTable}
        onChangeHandleSearch={onChangeHandleSearch}
        onClickHandleDeleteHome={onClickHandleDeleteHome}
        onOpenAddForm={onOpenAddForm}
        onOpenUpdateForm={onOpenUpdateForm}
      />

      <FormAdd
        onCloseAddForm={onCloseAddForm}
        visibleAddForm={visibleAddForm}
        onSubmitHandleAddHome={onSubmitHandleAddHome}
        empty={empty}
        onChangeEmpty={onChangeEmpty}
        addForm={addForm}
      />

      <FormUpdate
        onCloseUpdateForm={onCloseUpdateForm}
        visibleUpdateForm={visibleUpdateForm}
        onSubmitHandleUpdateHome={onSubmitHandleUpdateHome}
        homeId={homeId}
        data={home}
      />
    </section>
  );
};

export default HomeList;
