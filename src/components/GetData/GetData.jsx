import axios from 'axios'
import React, { Component } from 'react'
import './GetData.css'

export default class GetData extends Component {
    constructor(){
        super()
        this.state = {
            holidays : []
        }
    }
    componentDidMount(){
        axios.get('https://date.nager.at/api/v3/PublicHolidays/2023/AT')
        .then(resposne => this.setState({holidays : resposne.data}))
    }
  render() {
    const {holidays} = this.state;
    console.log(this.state)
    return (
      <div >
        <div className='container'>
        <h1>List of Government Holidays</h1>
        
        {
            holidays.map(holiday => (
                <div key={holiday.date} id='holiday-box'> 
                   {holiday.date}
                <p>{holiday.name}</p>
                <p>{holiday.localName}</p>
                <p>{holiday.countryCode}</p>
                </div>
            ))
        }
        </div>
      </div>
    )
  }
}
