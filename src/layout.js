import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = ({v,log}) => {

    console.log(v);
    console.log(log);

    
    return (
        <div>
            <Navbar i={v} k={log} />
            <Outlet />
        </div>
    );
};

export default Layout;