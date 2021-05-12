import React from 'react'
import "./dashboard.css"
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import DashboardCard from '../DashboardCard';
import chart1 from "../../assets/asset-chart-diagram.jpeg"
import chart2 from "../../assets/asset-pie-chart.jpeg"
import chart3 from "../../assets/asset-chart.jpeg"

function Dashboard() {
    return (
        <>
            <Topbar />
            <Sidebar />
            <div className="container dash">
                <div className="dash-heading">
                    <h3>Dashboard</h3>
                </div>
                <div className="dashcard">
                    <DashboardCard title=" Assets" className="btn-card  card1"/>
                    <DashboardCard title="Assigned Assets" className="btn-card  card2 "/>
                    <DashboardCard title="Unassigned Assets" className="btn-card card3"/>
                    <DashboardCard title="Vendors" className="btn-card card4"/>
                    <DashboardCard title="Locations" className="btn-card card5"/>
                    <DashboardCard title="Users" className="btn-card card6" />
                    <DashboardCard title="Notifications" className="btn-card card7"/>
                </div>
                <div className="dash-heading">
                    <h3>Visualisation</h3>
                </div>
                <div className="chart">
                    <img src={chart1} alt="" />
                    <img src={chart2} alt="" />
                    <img src={chart3} alt="" />
                </div>
            </div>

        </>
    )
}

export default Dashboard
