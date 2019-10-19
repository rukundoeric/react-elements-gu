# react-elements-gu

> 

[![NPM](https://img.shields.io/npm/v/react-elements-gu.svg)](https://www.npmjs.com/package/react-elements-gu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Image](https://firebasestorage.googleapis.com/v0/b/moodsapp-ad905.appspot.com/o/Images%2Fezgif.com-video-to-gif.gif?alt=media&token=48b72ad9-2170-4001-bc8f-54062adf39ff)

## Install

```bash
npm install --save react-elements-gu
```

## Usage

```jsx
import React, { Component } from 'react'

import { Selector } from 'react-elements-gu'

export default class App extends Component {
  render () {
    const theme = {
      palette: {
        primary: {
          main: '#FAF33E'
        }
      },
      listItems: {
        ...
      },
      addNewItem: {
        ...
      },
      addNewItemIcon: {
        ...
      },
      listContainer: {
        ...
      },
      textField: {
        ...
      },
      dropDownIcon: {
        ...
      },
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
      }
    ]
    const handleTextChange = (e) => {
      console.log("InText",e.target.value)
       // Do something here
    }
    const handleAddNewItem = () => {
      console.log("Hello there");
      // Do something here
    }
    const onItemSelected = (e) => {
      console.log(e.target..getAttribute('value'));
      // Do something here
    }
    return (
      <div>
        <Selector
            onChange={handleTextChange}
            name="Name"
            label="Name"
            items={items}
            addNewItem={true}
            addNewItemCaption={"Add new Category"}
            theme={theme}
            onAddNewItem={handleAddNewItem}
            onItemSelected={onItemSelected}
        />
      </div>
    )
  }
}

```

## License

MIT © [Rukundo eric prestein](https://github.com/Rukundo eric prestein)
