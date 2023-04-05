import React from "react";
import { useEffect, useState } from "react";
import Member from "../components/Member";
import axios from "axios";
import ManagementTableSkeleton from "../components/skeleton/ManagementTableSkeleton";
import { useNavigate } from "react-router-dom";

const Management = () => {
  const url = "/api/members/admin";
  const [members, setMembers] = useState("");
  const headers = { Authorization: localStorage.getItem("token") };
  const navigate = useNavigate();

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get(url, { headers: headers })
      .then((result) => setMembers(result.data))
      .catch((err) => {
        navigate("/");
      });
  };

  const onClick = (member_id) => {
    axios
      .delete(`${url}?member_id=${member_id}`)
      .then((res) => {
        console.log(res);
        setRefresh();
      })
      .catch((err) => console.log(err));
  };

  const setRefresh = () => {
    callApi();
    console.log("called");
  };

  return (
    <div className="mt-8 flex flex-col px-4">
      <div className="ml-2">
        <span className="text-lg font-semibold leading-6 text-slate-700 dark:text-slate-200">
          관리페이지
        </span>
      </div>
      <div className="mt-8 mb-4 shadow-sm">
        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-1/12 border-b p-4 pl-8 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                ID
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Name
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Email
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Birthday
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Nationality
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Edit
              </th>
              <th className="border-b p-4 pt-0 pb-3 text-left font-medium text-slate-400 dark:border-slate-600 dark:text-slate-200">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {members
              ? members.map((member) => (
                  <Member
                    key={member.member_id}
                    {...member}
                    onClick={onClick}
                  />
                ))
              : ["", "", ""].map(() => <ManagementTableSkeleton />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Management;
