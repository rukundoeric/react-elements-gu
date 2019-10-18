export const defaultTextFieldStyle = {
  width: '400px',
  color: '#919191'
}
export const styles = (theme = {}) => ({
  listItems: {...{
    maxHeight: '300px',
    overflow: 'scroll'
  },
  ...theme.listItems},
  addNewItem: {...{
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: 'inset 0px 11px 8px -10px #cfcfcf'
  },
  ...theme.addNewItem},
  addNewItemIcon: {...{
    marginRight: '4px',
    marginTop: '3px',
    fontSize: '17px',
    color: '#878205'
  },
  ...theme.addNewItemIcon},
  addNewItemLabel: {...{
    color: '#878205',
    cursor: 'pointer'
  },
  ...theme.addNewItemLabel},
  listContainer: {...{
    marginTop: '5px',
    backgroundColor: '#fcfcfc',
    width: '19.5em'
  },
  ...theme.listContainer},
  textField: {...{
    width: '310px'
  },
  ...theme.textField},
  dropDownIcon: {...{
    marginRight: '-12px',
    color: '#919191'
  },
  ...theme.textField}
})
