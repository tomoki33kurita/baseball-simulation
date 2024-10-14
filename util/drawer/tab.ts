export const tabStyle = (tabIndex: number, selectedIndex: number) => {
  const isForcused = selectedIndex === tabIndex
  return {
    fontWeight: `${isForcused ? 'bold' : 'normal'}`,
    color: `${isForcused ? 'white' : '#ccc'}`
  } as React.CSSProperties
}

export const a11yProps = (index: number): { id: string; 'aria-controls': string } => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`
})
