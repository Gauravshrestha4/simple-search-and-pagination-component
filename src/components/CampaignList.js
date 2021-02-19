import React from 'react';

const CampaignList = function ({ filteredData }) {
    const filteredJsx=filteredData.map(({ company, type,date },k) => {
        return (
            <tbody>
                <tr className="listContainer_row" key={k}>
                    <td><input type="checkbox"/></td>
                <td className="companyName">{company}</td>
                <td>{type}</td>
                <td>{Date("Feb 13, 2014 11:13:00")}</td>
                <td><i class='far fa-edit'></i> <i class='far fa-trash-alt'></i></td>
            </tr>
            </tbody>
        )
    })
    return (
        <table className="listContainer">
            <thead className="listContainer_header">
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>Company Name</td>
                    <td>Type</td>
                    <td>Last Saved</td>
                    <td>Actions</td>
                </tr>
            </thead>
            {filteredJsx}
        </table>
    )
}
export default CampaignList;