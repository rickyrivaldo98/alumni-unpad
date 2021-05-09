import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import images from "../../../assets/images/team-1-800x800.jpg";
import { removeUserSession } from "../../utils/common";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // handle click event of logout button
  let history = useHistory();
  const alert = useAlert();
  const handleLogout = () => {
    removeUserSession();
    alert.show("Berhasil Logout");
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={images}
            />
          </span>
          <p className="text-white ml-2">Hallo, Admin</p>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          onClick={handleLogout}
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Logout
        </Link>
      </div>
    </>
  );
};

export default UserDropdown;
