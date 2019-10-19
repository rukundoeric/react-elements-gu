import React, { Component } from 'react'

import { Selector } from 'react-elements-gu'

export default class App extends Component {
  render () {
    const theme = {
      palette: {
        primary: {
          main: '#FAF33E'
        }
      }
    }
    
    const items = [
      {
        key: '2',
        name: 'HJD'
      },
      {
        key: '3',
        name: 'JJD'
      },
      {
        key: '4',
        name: 'OPD'
      },
      {
        key: '5',
        name: 'OKLPD'
      },
      {
        key: '6',
        name: 'ODJKPD'
      },
      {
        key: '7',
        name: 'OPWQDD'
      },
      {
        key: '8',
        name: 'FFVD'
      },
      {
        key: '9',
        name: 'FFGDVD'
      },
      {
        key: '10',
        name: 'FDCFVD'
      },
      {
        key: '11',
        name: 'FFVLPD'
      },
      {
        key: '12',
        name: 'FFVPO0D'
      },
      {
        key: '13',
        name: 'FFFPIVD'
      },
      {
        key: '14',
        name: 'FFXPLVD'
      },
      {
        key: '15',
        name: 'FFSQWXVD'
      },
      {
        key: '16',
        name: 'FFRPFVD'
      },
    ]
    const handleTextChange = (e) => {
      console.log("InText",e.target.value)
    }
    const handleAddNewItem = () => {
      console.log("Hello there");
      // Do something here
    }
    const onItemSelected = (e) => {
      console.log(e);
      // do something
    }
    return (
      <div>
        <Selector
            onChange={handleTextChange}
            name="Name"
            label="Name"
            items={items}
            addNewItem
            addNewItemCaption={"Add new Category"}
            theme={theme}
            onAddNewItem={handleAddNewItem}
            onItemSelected={onItemSelected}
        />
      </div>
    )
  }
}
