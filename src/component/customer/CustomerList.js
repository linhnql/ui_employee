import { message, Form, Typography } from "antd";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { loadCustomersStart, deleteCustomerStart } from "../../redux/actions/customer/actions";

import ListContainer from "../common/list-container/list-container";

const { Title } = Typography;

const CustomerList = () => {
  const [pageSize, setPageSize] = useState(5);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState();

  let formattedData = []

  const { data, loading, error, customer } = useSelector(
    (state) => state.customerReducer
  );

  const [header] = useState({
    name: "Tên khách hàng",
    email: "Email",
    paymentStatus: "Trạng thái",
    contractSigningDate: "Ngày kí hợp đồng",
    paymentStartDate: "Ngày bắt đầu tính tiền",
    contractTerm: "Thời hạn",
  });

  const sortType = {
    ascend: "asc",
    descend: "desc",
  };

  const dispatch = useDispatch();

  const loadCustomerData = () => {
    let params = { page, pageSize, sort };
    params = search === "" ? params : { ...params, search };
    dispatch(loadCustomersStart(params));
  };

  const convertDate = (date) => {
    const d = new Date(date);

    const [day, month, year] = [d.getDay(), d.getMonth()+1, d.getFullYear()]

    return `${(day/10)>=1 ? day: `0${day}`}/${(month/10)>=1 ? month: `0${month}`}/${year}`
  }

  const onChangeTable = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra);
    if (sorter.order !== undefined && sorter != null) {
      setSort(`${sorter.field}:${sortType[sorter.order]}`);
    } else {
      setSort(null);
    }
    setPage(pagination.current);
  };

  const onClickHandleDelete = (selectedKeys) => {
    console.log(selectedKeys);
    if (!selectedKeys) {
      message.error("Vui lòng chọn  cần xóa");
    } else {
      selectedKeys.forEach((key) => {
        dispatch(deleteCustomerStart(key));
      });
      setTimeout(() => {
        if (loading !== true) {
          loadCustomerData();
        }
        setTimeout(message.success("Xóa thành công"), 1500);
      }, selectedKeys.length * 700);
    }
  };

  const onChangeHandleSearch = (value) => {
    console.log(value);
    setSearch(value);
  };

  const convertPaymentStatus = (status) => {
    return status === "pending" ? "Chưa thanh toán" : "Đã thanh toán"
  }

  const convertContractTerm = (term) => {
    return term < 12 ? `${term} tháng` : `${term/12} năm`
  }

  const formatData = () => {
    formattedData = data?.items?.map((item, index) => (
      {
        ...item, 
        contractTerm: convertContractTerm(item.contractTerm),
        paymentStatus: convertPaymentStatus(item.paymentStatus),
        contractSigningDate: convertDate(item.contractSigningDate), 
        paymentStartDate: convertDate(item.paymentStartDate)
      }
    ))
  }

  useEffect(() => {
    loadCustomerData();
  }, [page, search, sort]);


  return (

    <section>
      {formatData()}
      <Title level={3} style={{ marginBottom: "30px" }}>
        Danh sách đăng ký sử dụng
      </Title>

      <ListContainer
        loading={loading}
        rowKey={"customerId"}
        data={formattedData}
        totalCount={data.totalCount}
        pageSize={pageSize}
        header={header}
        onChangeTable={onChangeTable}
        onChangeHandleSearch={onChangeHandleSearch}
        onClickHandleDelete={onClickHandleDelete}
        // onOpenAddForm={onOpenAddForm}
        // onOpenUpdateForm={onOpenUpdateForm}
      />
    </section>
  );
};

export default CustomerList;
