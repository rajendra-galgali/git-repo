import React, { useState } from 'react';
import './App.css'
import Table from './Table';
import ShowMoreButton from './ShowMoreLessData';

const lessDataSize = 2
const c = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Stars",
    accessor: "stars"
  },
  {
    Header: "Forks",
    accessor: "forks"
  },
  {
    Header: "Url",
    accessor: "url"
  }
]
const data = [{
  "name": "react",
  "stars": 69012,
  "forks": 12581,
  "url": "https://www.npmjs.com/package/react"
}, {
  "name": "react",
  "stars": 69012,
  "forks": 12581,
  "url": "https://www.npmjs.com/package/react"
}, {
  "name": "react1",
  "stars": 69012,
  "forks": 12581,
  "url": "https://www.npmjs.com/package/react"
}, {
  "name": "react2",
  "stars": 69012,
  "forks": 12581,
  "url": "https://www.npmjs.com/package/react"
}]
const App = () => {

  let [showMore, setShowMore] = useState(true);
  let [showText, setShowText] = useState(showMore ? 'Show Less' : 'Show More');
  let [tableData, setTableData] = useState(data);

  const changeTableSize = () => {
    setShowMore(previouse => !previouse);
    setShowText(showMore ? 'Show Less' : 'Show More');
    if (showMore) {
      setTableData(data);
    } else {
      setTableData(data.slice(0, lessDataSize));
    }
  }
  return (
    <div>
      <Table columns={c} data={tableData}></Table>
      <br />
      <ShowMoreButton text={showText} changeTableSize={changeTableSize}></ShowMoreButton>
    </div>
  )
}

export default App;  