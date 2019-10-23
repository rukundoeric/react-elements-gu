import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import { ManageItems } from './ManageItems'
import { styles } from './defaultStyle'

export class Selector extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    items: PropTypes.instanceOf(Array),
    onChange: PropTypes.func,
    addNewItem: PropTypes.bool,
    addNewItemCaption: PropTypes.string,
    theme: PropTypes.instanceOf(Object),
    onAddNewItem: PropTypes.func,
    onItemSelected: PropTypes.func
  };
  state = {
    isItemsOpen: false,
    value: '',
    isSearching: false,
    searchResults: []
  };

  handleOpenItems = () => {
    this.setState({ isItemsOpen: true })
  };
  handleClodeItems = () => {
    this.setState({ isItemsOpen: false })
  };
  handleSelectionItem = event => {
    this.handleClodeItems()
    this.setState({ value: event.target.getAttribute('value') })
  };
  handleTextChanges = event => {
    this.handleSearch(event)
    this.setState({ value: event.target.value })
  }

  handleSearch = (event) => {
    let searchResults = []
    const searchText = event.target.value
    const searchMatch = new RegExp(searchText, 'i')
    if (searchText !== this.state.value && searchText.length > 0) {
      searchResults = this.props.items.filter(row => searchMatch.test(row.name))
      this.setState({ isSearching: true, searchResults })
    } else {
      this.setState({ isSearching: false })
    }
  };

  render() {
    const {
      name,
      label,
      items,
      onChange,
      onItemSelected,
      onAddNewItem,
      addNewItem,
      addNewItemCaption,
      theme
    } = this.props
    const { isItemsOpen, value, isSearching, searchResults } = this.state
    return (
      <Grid item>
        <TextField
          style={styles(theme).textField}
          onChange={(e) => {
            onChange(e)
            this.handleTextChanges(e)
          }}
          onClick={this.handleOpenItems}
          type='text'
          label={label}
          name={name}
          autoComplete='off'
          value={value}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <ArrowDropDown
                  style={styles(theme).dropDownIcon}
                />
              </InputAdornment>
            )
          }}
        />

        {isItemsOpen && (
          <ManageItems
            handleAddNewItem={onAddNewItem}
            handleCustomerPopperClickAway={this.handleClodeItems}
            items={!isSearching ? items : searchResults}
            handleClodeItems={this.handleClodeItems}
            handleSelectionItem={(e) => {
              onItemSelected(e)
              this.handleSelectionItem(e)
            }}
            addNewItem={addNewItem || false}
            addNewItemCaption={addNewItemCaption}
            theme={theme}
          />
        )}
      </Grid>

    )
  }
}
export default Selector
