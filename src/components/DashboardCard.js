import React from 'react'
import "./pages/dashboard.css"
function DashboardCard(props) {
    return (
        <>

            <button className={props.className} >
                <div className="card-btn">
                    <p>{props.title}</p>
                </div>
            </button>

        </>
    )
}

export default DashboardCard
