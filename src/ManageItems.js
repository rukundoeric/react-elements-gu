/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Paper,
  Typography,
  Popper,
  Fade,
  ClickAwayListener,
  MenuItem,
  MenuList
} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { styles } from './defaultStyle'

export class ManageItems extends Component {
  hashCode = (s) => {
    let h = 0; let l = s.length; let i = 0
    if (l > 0) {
      while (i < l) { h = (h << 5) - h + s.charCodeAt(i++) | 0 }
    }
    return h
  };
  render() {
    const {
      handleAddNewItem,
      handleCustomerPopperClickAway,
      items,
      handleSelectionItem,
      addNewItem,
      addNewItemCaption,
      theme
    } = this.props
    return (
      <Popper
        open
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleCustomerPopperClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper style={styles(theme).listContainer}>
                {items.length !== 0 && (
                  <Grid container style={styles(theme).listItems}>
                    <Grid
                      item
                      xs={12}
                      style={{ paddingBottom: 0 }}
                    >
                      <MenuList>
                        {
                          items.map(item => (
                            <MenuItem key={this.hashCode(item.name)} value={item.name} onClick={handleSelectionItem}>{item.name}</MenuItem>
                          ))
                        }
                      </MenuList>
                    </Grid>
                  </Grid>
                )}
                {
                  (addNewItem === true) && (
                    <Grid container style={styles(theme).addNewItem}>
                      <AddCircle style={styles(theme).addNewItemIcon} />
                      <Typography
                        variant='subtitle2'
                        onClick={handleAddNewItem}
                        style={styles(theme).addNewItemLabel}
                      >
                        {addNewItemCaption}
                      </Typography>
                    </Grid>
                  )
                }
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    )
  }
}

ManageItems.propTypes = {
  handleCustomerPopperClickAway: PropTypes.func.isRequired,
  handleAddNewItem: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  addNewItemCaption: PropTypes.string,
  theme: PropTypes.instanceOf(Object)
}

export default ManageItems
