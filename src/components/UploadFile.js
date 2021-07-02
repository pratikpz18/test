import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as XLSX from "xlsx";
import { uploadFile,getUser } from '../apis/realmfunct';
import Table from './Table';
import { exportfile } from '../apis/filemanp';

const UploadFile = () => {

    const [items, setItems] = useState([]);
    const [dbdata, setDbData] = useState([])

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
          uploadFile(data)
    
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
  
      promise.then((d) => {
        setItems(d);
        // console.log(d);
      });
      
    }

    const getallusers = async () => {
      try {
          const arr = await getUser();
          // console.log(arr);
          setDbData(arr);
      } catch (error) {
          console.log(error);
      }
    }

    useEffect(()=>{
      getallusers();
    },[])

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
            {/* <DataTable
            title="Users"
            data={items}
            columns={columns}
            defaultSortFieldId={1}
            pagination
            selectableRows
            ></DataTable> */} 
            <Table data={items}></Table> 
            <br></br> 
            <button onClick={(e) => exportfile(dbdata)}>Download</button>
            <br></br> 
            <Link to="/">Get All User</Link> 
        </div>
    )
}

export default UploadFile;