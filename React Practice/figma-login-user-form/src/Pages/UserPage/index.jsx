import React from 'react'
import { Button, Table } from "antd";
import { useContext } from "react";
import { UserContext } from "../../Services/Context/UserContext";
import UserNavbar from '../../Components/UserNavbar';

export default function UserPage() {
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: 'Remove',
      key: 'key',
      dataIndex: 'key',
      render: (text, record) => (
       <Button  onClick={()=>{
        let filtred_basket = user.basket.filter((element)=> element.id !== record.id)
        setUser({...user, basket: [...filtred_basket]})
       }}>
         {"Remove"}
       </Button>
      ),
    } 
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
        <UserNavbar></UserNavbar>
        <h1>User page</h1>
        <Table columns={columns} dataSource={user.basket} onChange={onChange} />;
    </>
  )
}
