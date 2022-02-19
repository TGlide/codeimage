import {combine, devtools} from 'zustand/middleware';
import create from 'solid-zustand';
import {themeVars} from '../theme/global.css';
import {THEMES} from '../core/theme';

export interface TerminalState {
  tabName: string | null;
  accentVisible: boolean;
  shadow: string;
  background: string;
  textColor: string;
  darkMode: boolean;
}

const initialState: TerminalState = {
  tabName: null,
  shadow: themeVars.boxShadow.lg,
  accentVisible: true,
  background: THEMES[0].properties.terminal.main,
  textColor: THEMES[0].properties.terminal.text,
  darkMode: THEMES[0].properties.darkMode,
};

const store = combine(initialState, set => ({
  setShadow: (shadow: string) => set(() => ({shadow})),
  setAccentVisible: (accentVisible: boolean) => set(() => ({accentVisible})),
  setBackground: (background: string) => set(() => ({background})),
  setTextColor: (textColor: string) => set(() => ({textColor})),
  setDarkMode: (darkMode: boolean) => set(() => ({darkMode})),
  setTabName: (tabName: string) => set(() => ({tabName})),
}));

export const useTerminalState = create(devtools(store, {name: 'terminal'}));