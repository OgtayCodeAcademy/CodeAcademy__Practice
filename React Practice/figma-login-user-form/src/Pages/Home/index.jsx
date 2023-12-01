import HomeNavbar from "../../Components/HomeNavbar";
import { Button, Table } from "antd";
import { GetAllCategories } from "../../Services/API/Categories";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Services/Context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Home() {
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  let [categories, setCategories] = useState([])
  useEffect(()=>{
    GetAllCategories().then((result)=>{
      setCategories(result)
    })
  }, [])
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
      title: 'Basket',
      key: 'key',
      dataIndex: 'key',
      render: (text, record) => (
       <Button  onClick={()=>{
        if (user.name == '') {
          toast((t) => (
            <span>
              You need <b>login</b> or <b>register</b>
              <button style={{padding: '5px', marginLeft: '10px'}} onClick={() => toast.dismiss(t.id)}>
                <Link style={{color: 'black', textDecoration: 'none'}} to={'/login'}>Login</Link>
              </button>
              <button style={{padding: '5px', marginLeft: '10px'}} onClick={() => toast.dismiss(t.id)}>
                <Link style={{color: 'black', textDecoration: 'none'}} to={'/register'}>Register</Link>
              </button>
            </span>
          ));
        }else{
          if (user.basket.find((element)=> element.id == record.id)) {
            toast.error("Already in your basket")
          }else{
            setUser({...user, basket: [...user.basket, {id: record.id, name: record.name, description: record.description}]})
          }
        }
       }}>
         {"ADD BASKET"}
       </Button>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <HomeNavbar></HomeNavbar>
      <h1>Home Page</h1>
      <Table columns={columns} dataSource={categories} onChange={onChange} />;
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}
