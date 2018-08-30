import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

const modifiedMoragaTheme = {
  ...moragaTheme,
  bodyWeight: 200,
  headerWeight: 350
}

const typography = new Typography(modifiedMoragaTheme);

export default typography;