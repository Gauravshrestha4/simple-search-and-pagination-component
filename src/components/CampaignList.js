import React from 'react';

const CampaignList = function ({ filteredData }) {
    const filteredJsx=filteredData.map(({ company, type,date },k) => {
        return (
            <tbody>
            <tr className="listContainer_row" key={k}>
                <td>{company}</td>
                <td>{type}</td>
                <td>{date}</td>
            </tr>
            </tbody>
        )
    })
    console.log('filteredJsx',filteredJsx)
    return (
        <table className="listContainer">
            <thead className="listContainer_header">
                <tr>
                    <td>Company Name</td>
                    <td>Type</td>
                    <td>last Updated</td>
                    <td>Actions</td>
                </tr>
            </thead>
            {filteredJsx}
        </table>
    )
}
export default CampaignList;