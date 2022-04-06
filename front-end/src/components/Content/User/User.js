// import React from "react";
import "./style.scss";
import { API } from "../../../config/constant";
import Pagination from "@material-ui/lab/Pagination";
import React, { useState, useEffect } from "react";

export default function User() {
  const [users, setData] = useState([]);
  const [page, setPage] = useState(1);
  const token = "";

  useEffect(() => {
    async function fetchData() {
      const url = `${API.USER.GET}?page=${page}`;
      // console.log(url);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const users = await res.json();
      // console.log(users.data);
      setData(users.data);
    }

    fetchData();
  }, [page]);

  // function onChange(page) {
  //   setPage(page);
  // }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th className="checkbox-Area">
              <input type="checkbox" name="scales" />
            </th>
            <th className="title_Area">Title</th>
            <th className="username_Area">UserName</th>
            <th className="email_Area">Email</th>
            <th className="status_Area">Status</th>
            <th>Title</th>
          </tr>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td className="first_Area">
                  <input
                    type="checkbox"
                    checked={user.checkbox}
                    name="scales"
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.email_verified_at}</td>
                <td>
                  <a href="#">Publish</a>
                  <a href="#">Edit</a>
                  <a href="#">Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="test">
        <Pagination
          style={{ justifyContent: "flex-end" }}
          count={10}
          color="primary"
          onChange={(e, page) => setPage(page)}
          page={page}
        />
      </div>
    </>
  );

  // const data = [
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  //   {
  //     checkbox: false,
  //     title: "::",
  //     username: "Textline",
  //     emali: "Textline",
  //     status: "true",
  //   },
  // // ];
}
