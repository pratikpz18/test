import React from 'react';
import DataTable from "react-data-table-component";

const columns = [
    {
      name: "name",
      selector: "name"
    },
    {
      name: "mobile",
      selector: "mobile"
    },
    {
        name: "email",
        selector: "email"
    },
    {
        name: "active",
        selector: "active"
    },
];

const Table = (data) => {
    console.log(data.data)
    return(
        <DataTable
            title="Users"
            data={data.data}
            columns={columns}
            defaultSortFieldId={1}
            pagination
            selectableRows
            ></DataTable>
    )
}

export default Table;