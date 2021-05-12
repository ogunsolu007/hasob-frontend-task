import React from 'react'
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import MaterialTable from 'material-table'
import "./asset.css"
import { IoIosAdd } from 'react-icons/io'
import { MdSkipNext } from 'react-icons/md'

import Divider from '@material-ui/core/Divider';

function Users() {
    return (
        <>
            <Topbar />
            <Sidebar />

            <div className="container-1">
                <div className="asset-head">
                    <h3>Users</h3>
                </div>

                <form className="search">
                    <input type="search" name="search"></input>
                    <button>Seacrh</button>
                </form>

                <div style={{ width: '80%', margin: "0 auto", }}>
                    <MaterialTable
                        title=""
                        columns={[
                            { title: 'S/N', field: 'ID', type: "numeric" },
                            {
                                title: 'Name',
                                cellStyle: {
                                    width: "100%"
                                }, field: 'name'
                            },
                            {
                                title: 'Location', cellStyle: {
                                    width: "22%"
                                }, field: 'location'
                            },
                            { title: 'Status', field: 'status', },
                            {
                                title: 'Edit',
                                cellStyle: {
                                    color: 'lightgray'
                                }, field: 'edit'
                            },
                            { title: 'Delete', field: 'delete' },
                            { title: 'Disable', field: 'disable' },
                            { title: 'Change Password', field: 'changepassword', },
                        ]}
                        data={[
                            { ID: 1, name: 'Chukwuma A Obiazor', location: "General Office 1", status: "Assigned", edit: "Edit", delete: "delete", disable: "disable", changepassword: "Change Password" },
                            { ID: 2, name: 'Chukwuma A Obiazor', location: "General Office 1", status: "Unassigned", edit: "Edit", delete: "delete", disable: "disable", changepassword: "Change Password" },
                            { ID: 3, name: 'Chukwuma A Obiazor', location: "General Office 1", status: "Assigned", edit: "Edit", delete: "delete", disable: "disable", changepassword: "Change Password" },
                            { ID: 4, name: 'Chukwuma A Obiazor', location: "General Office 1", status: "Assigned", edit: "Edit", delete: "delete", disable: "disable", changepassword: "Change Password" },
                            { ID: 5, name: 'Chukwuma A Obiazor', location: "General Office 1", status: "Unassigned", edit: "Edit", delete: "delete", disable: "disable", changepassword: "Change Password" },
                            { ID: 6, name: 'Chukwuma A Obiazor', location: "General Office 1", status: "Assigned", edit: "Edit", delete: "delete", disable: "disable", changepassword: "Change Password" }

                        ]}
                        options={{
                            toolbar: false,
                            paging: false,
                            search: false,
                            headerStyle: {
                                backgroundColor: 'lightgray',
                                color: 'black',

                            },
                        }}
                    />
                </div>
                <div className="footer">
                    <div>
                        <p>Showing 1-6 of 4 entries</p>
                    </div>
                    <div className="footer-in">
                        <button>
                            <p><IoIosAdd />Add</p>
                        </button>
                    
                        <button>
                            <p>Export</p>
                        </button>
              
                        <button>
                            <p>Next <MdSkipNext /></p>
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Users
