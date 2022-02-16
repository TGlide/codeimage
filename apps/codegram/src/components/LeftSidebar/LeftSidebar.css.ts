import {createTheme, style} from '@vanilla-extract/css';
import {themeVars} from '../../theme/global.css';

export const [sidebarTheme, sidebarVars] = createTheme({
  gap: themeVars.spacing['4'],
});

export const sidebar = style([
  sidebarTheme,
  {
    padding: `0px ${sidebarVars.gap} ${sidebarVars.gap}`,
  },
]);

export const panelHeader = style([
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    flexShrink: 0,
    width: '100%',
  },
]);

export const panelRow = style([
  {
    position: 'relative',
    display: 'grid',
    width: '100%',
    paddingTop: themeVars.spacing['1'],
    paddingBottom: themeVars.spacing['1'],
    columnGap: themeVars.spacing['2'],
    gridTemplateColumns: 'minmax(0,1.25fr) repeat(2,minmax(0,1fr))',
    gridTemplateRows: 'auto',
  },
]);

export const titleWrapper = style([
  {
    selectors: {
      [`${panelRow} &`]: {
        height: '26px',
        display: 'flex',
        position: 'relative',
        paddingLeft: '15px',
        alignItems: 'center',
        userSelect: 'none',
      },
    },
  },
]);