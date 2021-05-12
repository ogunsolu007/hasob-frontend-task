import React from 'react'
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import MaterialTable from 'material-table'
import "./asset.css"
import { IoIosAdd } from 'react-icons/io'
import { MdSkipNext} from 'react-icons/md'

import Divider from '@material-ui/core/Divider';
function Assetmain() {
    return (
        <>
            <Topbar />
            <Sidebar />

            <div className="container-1">
                <div className="asset-head">
                    <h3>All Assets</h3>
                </div>
                
                    <form  className="search">
                        <input type="search" name="search"></input>
                        <button>Seacrh</button>
                    </form>
            
                <div style={{ width: '80%', margin: "0 auto" ,}}>
                    <MaterialTable
                        title=""
                        columns={[
                            { title: 'S/N', field: 'ID', type: "numeric" },
                            {
                                title: 'Name',
                                cellStyle: {
                                    width: "27%"
                                }, field: 'name'
                            },
                            { title: 'Category', field: 'category' },
                            { title: 'Quantity', field: 'quantity', },
                            { title: 'Location',cellStyle: {
                                width: "22%"
                            }, field: 'location' },
                            {
                                title: 'Edit',
                                cellStyle: {
                                    color: 'lightgray'
                                }, field: 'edit'
                            },
                        ]}
                        data={[{ ID: 1, name: 'Microsoft windows 10', category: 'Software', quantity: "1(Enterprise)", location: "General Office", edit: "Edit" },
                        { ID: 2, name: 'Microsoft Office Pro', category: 'Software', quantity: "1(Enterprise)", location: "General Office", edit: "Edit" },
                        { ID: 3, name: 'Kapersky Antivirus', category: 'Software', quantity: "1(Enterprise)", location: "General Office", edit: "Edit" },
                        { ID: 4, name: 'Office Workstation', category: 'Hardware', quantity: "10 units", location: "General Office", edit: "Edit" },
                        { ID: 5, name: "HP pavilion 15.5' Laptop", category: 'Hardware', quantity: "15 units", location: "General Office", edit: "Edit" },
                        { ID: 6, name: 'LG Split Unit Air Conditioner', category: 'Hardware', quantity: "10(2hp)", location: "General Office", edit: "Edit" },

                        ]}
                        options={{
                            toolbar:false,
                            paging:false,
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
                     <p>Showing 1-6 of 9 entries</p>
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

export default Assetmain
