import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Input, Button, DatePicker } from "antd";
import {
  SyncOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  SwapOutlined,
  RetweetOutlined,
  FormOutlined,
} from "@ant-design/icons";

import "./CategoryHeader.css";
import { btnClickTabListContract } from "../../redux/slices/tabListContractSlice/tabListContractSlice";

const CategoryHeader = ({
  setIsOpenModalAddSubject,
  setIsOpenModalAddReading,
  setIsOpenModalDelete,
  setIsOpenModalTransfer,
}) => {
  const dispatch = useDispatch();
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const sidebarMenu = useSelector((state) => state.sidebarSlice.data);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const handleOpenModalAdd = (e, isEdit) => {
    e.preventDefault();
    if (sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_SUBJECT") {
      setIsOpenModalAddSubject(true);
    }
    if (sidebarMenu === "CATEGORY_MANAGEMENT_READING") {
      setIsOpenModalAddReading(true);
    }
    if (!isEdit) {
      dispatch(btnClickTabListContract(null));
    }
  };
  const handleOpenModalTransfer = (e) => {
    e.preventDefault();
    if (sidebarMenu === "CATEGORY_MANAGEMENT_READING") {
      setIsOpenModalTransfer(true);
    }
  };

  return (
    <div className="category-header-wrapper">
      <div className="category-header-actions">
        <div className="button-refresh">
          <Button
            className="button"
            type="primary"
            icon={<SyncOutlined />}
            // onClick={() => setIsOpenModalBill(true)}
            size="small"
          >
            Làm mới
          </Button>
        </div>
        <div className="button-add">
          <Button
            className="button"
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={(e) => handleOpenModalAdd(e, false)}
            size="small"
          >
            Thêm mới
          </Button>
        </div>
        {sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_LIST" && (
          <div className="button-watch">
            <Button
              className="button"
              type="primary"
              icon={<FormOutlined />}
              // onClick={() => setIsOpenModalBill(true)}
              disable
              size="small"
            >
              Xem
            </Button>
          </div>
        )}
        <div className="button-update">
          <Button
            className="button"
            type="primary"
            icon={<EditOutlined />}
            onClick={(e) => handleOpenModalAdd(e, true)}
            size="small"
            disabled={!tabList}
          >
            Sửa
          </Button>
        </div>
        <div className="button-delete">
          <Button
            className="button"
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => setIsOpenModalDelete(true)}
            size="small"
            disabled={!tabList}
          >
            Xóa
          </Button>
        </div>
        {sidebarMenu === "CATEGORY_MANAGEMENT_READING" && (
          <>
            <div className="button-transfer-managers">
              <Button
                className="button"
                type="primary"
                icon={<SwapOutlined />}
                onClick={(e) => handleOpenModalTransfer(e)}
                size="small"
              >
                Chuyển cán bộ quản lý
              </Button>
            </div>
            <div className="button-transfer-bill-collectors">
              <Button
                className="button"
                type="primary"
                icon={<RetweetOutlined />}
                onClick={(e) => handleOpenModalTransfer(e)}
                size="small"
              >
                Chuyển cán bộ thu
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="category-header-filter">
        <div className="filter-input">
          <Input placeholder="Nhập và Enter để tìm kiếm" />
        </div>
        {sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_LIST" && (
          <div className="filter-datetime">
            <DatePicker format={dateFormatList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;
