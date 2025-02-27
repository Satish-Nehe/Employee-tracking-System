import React from 'react'
import "./GlobalFilter.css"
import { useNavigate } from 'react-router'
import CheckBox from './CheckBox';

export default function GlobalFilter({filter, setFilter, allColumns,getToggleHideAllColumnsProps}) {
    const navigate = useNavigate();
    function goTo(){
        navigate("/");
    }
  return (
    <div className='search-container'>
        <button className='back-button' onClick={()=>goTo()}>↩ Back</button>
        <div className='flex border p-3.5 rounded-lg shadow-md w-max gap-5 ' >
        <div>
          <CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>

        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />
              {column.Header}
            </label>
          </div>
        ))}
      </div>
        <input type="text" value={filter || ""} onChange={(e) => {setFilter(e.target.value)}} name='SearchBox' className='search-input'
         placeholder='Search'
        />
    </div>
  )
}
