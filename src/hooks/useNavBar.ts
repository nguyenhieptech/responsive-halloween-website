import { useState } from 'react';

export interface NavBarItem {
  index: number;
  title: string;
  path: string;
  isActive: boolean;
}

export function useNavBar(toggleMenu: any) {
  const [navBarData, setNavBarData] = useState([
    { index: 1, title: 'Home', path: '#home', isActive: true },
    { index: 2, title: 'About', path: '#about', isActive: false },
    { index: 3, title: 'Candy', path: '#candy', isActive: false },
    { index: 4, title: 'Arrivals', path: '#arrivals', isActive: false },
  ]);

  function handleClickOnNavLink(item: NavBarItem) {
    const newNavBarData = navBarData.map((navLink) => {
      return navLink.index !== item.index
        ? {
            ...navLink,
            isActive: false,
          }
        : {
            ...navLink,
            isActive: true,
          };
    });

    setNavBarData(newNavBarData);
    toggleMenu(); // Close the menu after clicking a link
  }

  return { navBarData, handleClickOnNavLink };
}
