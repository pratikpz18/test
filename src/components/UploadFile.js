import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";


const UploadFile = () => {

    const [items, setItems] = useState([]);

    const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
  
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
  
          const wb = XLSX.read(bufferArray, { type: "buffer" });
  
          const wsname = wb.SheetNames[0];
  
          const ws = wb.Sheets[wsname];
  
          const data = XLSX.utils.sheet_to_json(ws);
  
          resolve(data);
          console.log(data)
          setItems(data);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });

    }

    console.log(items)
    
    const columns = [
        {
          name: "Username",
          selector: "Username"
        },
        {
          name: "Mobile",
          selector: "Mobile"
        },
        {
            name: "Email",
            selector: "Email"
        },
        {
            name: "Active",
            selector: "Active"
        }
      ];
    
    
    return(
        <div>
            <h2>Upload Excel File</h2>
            <input 
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
            ></input>
            <DataTable
            title="Users"
            data={items}
            columns={columns}
            defaultSortFieldId={1}
            pagination
            selectableRows
            ></DataTable>
            <Link to="/">Get All User</Link>
        </div>
    )
}

export default UploadFile;