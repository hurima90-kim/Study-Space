import axios from "axios";
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { tableIcons } from "./tableIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  requestedFetchList,
  updateTableColumns,
} from "../../Modules/Actions/Actions";

const BeerList = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columnsReducer.columns);
  const beerList = useSelector((state) => state.columnsReducer.beerList);

  useEffect(() => {
    dispatch(requestedFetchList());
  }, []);

  const changeTableColumn = (sourceIndex, destinationIndex, columns) => {
    let value = columns.splice(sourceIndex, 1);
    columns.splice(destinationIndex, 0, value[0]);
    dispatch(updateTableColumns(columns));
  };

  return (
    <MaterialTable
      title="Beer List"
      columns={columns}
      data={beerList}
      icons={tableIcons}
      options={{ draggable: true }}
      style={{ padding: "20px" }}
      onColumnDragged={(sourceIndex, destinationIndex) =>
        changeTableColumn(sourceIndex, destinationIndex, columns)
      }
    />
  );
};

export default BeerList;
