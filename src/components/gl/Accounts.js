import { Table, Button } from "antd";
import React, { useEffect, useState } from "react";

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [size, setSize] = useState("large"); // default is 'middle'

  useEffect(() => {
    fetchData();
  }, []);

  const url = "http://localhost:8080/farmbot/accounts";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setAccounts(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "2",
  //     name: "John",
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  // ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Base Account",
      dataIndex: "baseAccount",
      key: "baseAccount",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Ops",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            href={`accounts/${record.id}`}
            size={size}
            onClick={() => console.log(record)}
          >
            {"Update"}
          </Button>
          <Button
            danger
            href="https://ant.design/index-cn"
            onClick={() => console.log(record)}
          >
            {"Delete"}
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="accounts">
      {/* {accounts &&
        accounts.map((account) => (
          <div key={account.id} className="item-container">
            Id:{account.id} <div className="title">Title:{account.note}</div>
          </div>
        ))} */}
      <Table dataSource={accounts} columns={columns} />;
    </div>
  );

  // <div>{{ accounts }}</div>;
}

export default Accounts;
