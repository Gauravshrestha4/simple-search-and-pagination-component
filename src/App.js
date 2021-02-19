import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import {campaigns} from './mockData/mock'
import CampaignList from './components/CampaignList';
import Pagination from './components/Pagination';
function App() {
  const [ campaignData, setCampaignData ] = useState(campaigns);
  const [ filteredData, setFilteredData ] = useState(campaigns);
  const [ pageNo, setPageNo ] = useState(1);
  const handleFilter = (companyName) => {
    let searchedResults = campaignData.filter(({ company }) => company?.toLowerCase().includes(companyName?.toLowerCase()));
    setFilteredData(searchedResults);
    setPageNo(1);
  }
  let pages = [];
  for (let i = 1; i <= (filteredData.length/ 10); i++){
    pages.push(i)
  }
  return (
    <div className="App">
      <Search handleFilter={handleFilter} />
      <CampaignList filteredData={filteredData.slice(pageNo-1,pageNo+9)} />
      <Pagination setPageNo={setPageNo} pages={pages} pageNo={pageNo}/>
    </div>
  );
}

export default App;
