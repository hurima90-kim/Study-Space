import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { tableIcons } from "./tableIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  requestedFetchList,
  updateTableColumns,
  getFiltering,
  showModal,
} from "../../Modules/Actions/Actions";
import "antd/dist/antd.css";
import { Select } from "antd";
import Button from "../../Components/Button/Button";
import styled from "styled-components";

const BeerList = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columnsReducer.columns);
  const beerList = useSelector((state) => state.columnsReducer.beerList);
  const filterBeerList = useSelector(
    (state) => state.columnsReducer.filterBeerList
  );

  const { Option } = Select;

  const children = [];
  for (let i = 1; i < 55; i++) {
    children.push(<Option key={i}>{`${i}-${i + 1}`}</Option>);
  }

  const handleChangeSelect = (value) => {
    dispatch(getFiltering(value));
  };

  const changeTableColumn = (sourceIndex, destinationIndex, columns) => {
    let value = columns.splice(sourceIndex, 1)[0];
    columns.splice(destinationIndex, 0, value);
    dispatch(updateTableColumns(columns));
  };

  useEffect(() => {
    dispatch(requestedFetchList());
  }, []);

  return (
    <>
      <ButtonContainer>
        <Button link="/home" text="뒤로가기" />
        <Button link="/cart" text="장바구니" />
      </ButtonContainer>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="맥주의 알콜 도수를 선택하세요."
        onChange={(value) => handleChangeSelect(value)}
      >
        {children}
      </Select>
      <MaterialTable
        title="Tradir Beer List"
        columns={columns}
        data={filterBeerList.length ? filterBeerList : beerList}
        icons={tableIcons}
        style={{ padding: "20px" }}
        options={{ actionsColumnIndex: 1 }}
        onColumnDragged={(sourceIndex, destinationIndex) =>
          changeTableColumn(sourceIndex, destinationIndex, columns)
        }
        onRowClick={(rowData) => dispatch(showModal(rowData))}
      />
    </>
  );
};

export default BeerList;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
