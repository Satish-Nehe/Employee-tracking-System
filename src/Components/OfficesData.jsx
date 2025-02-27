import React, { use, useMemo } from "react";
import { useParams } from "react-router";
import EMPLOYEE_DATA from "../Employee_data.json";
import COLUMNS from "../COLUMNS";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import "./OfficesData.css";
import GlobalFilter from "./GlobalFilter";

export default function OfficesData() {
  const { office_city } = useParams();

  const filterData = EMPLOYEE_DATA.filter((item) =>
    item.employee_work_location.includes(office_city)
  );

  const data = useMemo((data) => filterData, []);
  const columns = useMemo((columns) => COLUMNS, []);
  const tableInstance = useTable(
    {
      data,
      columns,
    },
    useGlobalFilter, usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage, 
    canPreviousPage,
    pageOptions,
    gotoPage, 
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = tableInstance;

  const { globalFilter , pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
        allColumns={allColumns}
        getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
      />

      <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {...headerGroup.headers.map((columns) => (
                  <th {...columns.getHeaderProps()}>
                    {columns.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{width:"100dvw", display:"flex", justifyContent:"center"}}>
        <div className="pagination-part">
          {/**For to specify the page number */}
           <span>
            Page :{" "}
            <strong>{pageIndex} Of {pageOptions.length}</strong>
           </span>
          

           {/**for go to next page, previous page, last page and first page */}
           <div>
            <button onClick={()=>{gotoPage(0)}} style={{width:"4dvw"}}>{"<<"}</button>
            <button onClick={()=> previousPage()} disabled ={!canPreviousPage}>Previous</button>
            <button onClick={()=> nextPage()} disabled ={!canNextPage}>Next</button>
            <button onClick={()=> {gotoPage(pageCount - 1 )}} style={{width:"4dvw"}}>{">>"}</button>
            </div>
          
          {/**for to specify the page Size */}
          <div className="page-buttons">
            <span><strong>Pagesize: </strong></span>
           <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            {
                [10, 25, 50].map((pageSize)=>(
                    <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                ))
            }
           </select>
           </div>

           </div>
        </div>
    </>
  );
}
