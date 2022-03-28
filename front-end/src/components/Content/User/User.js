// import React from "react";
import "./style.scss";
import { API } from "../../../config/constant";
import Pagination from "../../Content/Pagination/Pagination";
import React, { useState, useEffect } from "react";

export default function User() {
  const [users, setData] = useState([]);
  const [page, setPage] = useState(1);
  const token = "39|hYkEM4tObdm3unyFgY9N5gWGdz8BkiyCAzy2L0uO";

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

  function onPageChange(page) {
    setPage(page);
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th class="checkbox-Area">
              <input type="checkbox" name="scales" />
            </th>
            <th class="title_Area">Title</th>
            <th class="username_Area">UserName</th>
            <th class="email_Area">Email</th>
            <th class="status_Area">Status</th>
            <th>Title</th>
          </tr>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td class="first_Area">
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
      <Pagination page={page} onChange={onPageChange} />
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
