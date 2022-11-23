import 'antd/dist/antd.css';
import './App.css'
import {Select,Table,Input} from 'antd'

import {data} from './Data'
import { useState } from 'react';

function App() {
  const {Search} = Input
  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Tên thiết bị',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Serial',
      dataIndex: 'serial',
      key: 'serial',
    },
    {
      title: 'Tỉnh thành',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Cơ sở',
      dataIndex: 'placement',
      key: 'placement',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Hành Động',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  
  const [Data,setData] = useState(data)
  const categories =['Gateway 1', 'Gateway 2']
  const status = ['Kích hoạt','Chưa kích hoạt']
  

  return (
    <>
      <h2 >Quản Lý Gateway</h2>
      <div className= 'hihi'>
        <Select placeholder='Nhập tên hoặc serial thiết bị'onSelect={(value:string) => {
          console.log(value)
          setData(data);
          setData(prev => prev.filter(child => child.name=== value))}} >
        {categories.map((category,index) => <option key={index} value={category} >{category}</option>)}
        </Select>
        <Select placeholder='Lọc theo trạng thái' onSelect={(value:string) => {
          setData(data);
          setData(prev => prev.filter(child => child.status=== value))}}>
        {status.map((status,index) => <option key={index} value={status}>{status}</option>)}
        </Select>
        <Search ></Search>
      </div>
      <Table  dataSource={Data} columns={columns} />
    </>
  );
}

export default App;
