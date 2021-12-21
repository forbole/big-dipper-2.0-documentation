---
title: Themes
sidebar_position: 1
---

By default we offer `light`, `dark`, `deuteranopia` and `tritanopia` themes to make our explorer more accessible.

All themes are located inside `src/styles/themes`. If the default theme doesn't match the look you're going for feel free to check out these other [themes](https://github.com/forbole/big-dipper-2.0-cosmos/tree/base/.misc/themes) we are currently using.

## Updating `light` / `dark` theme
`src/styles/theme/index.ts` will hold all themes in which `light` and `dark` have in common. If you would like to override anything in common just add the key value pair inside `light.ts / dark.ts`. All theme files will have higher priority than the colors inside `index.ts`.

<details>

<summary>Default Common</summary>

```
/** Common themes that don't change across light and dark theme */
export const common = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
  mixins: {
    toolbar: {
      '@media (min-width: 1280px)': {
        height: '160px',
        overflow: 'hidden',
      },
    },
    layout: {
      padding: '16px',
      '@media (min-width: 1280px)': {
        padding: '16px 24px',
      },
    },
    tableCell: {
      height: '50px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        width: '100%',
      },
      '& .MuiTypography-body1': {
        whiteSpace: 'nowrap',
      },
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: '#999999', // same as custom /general /icons
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    fontFamily: '"Hind Madurai", sans-serif',
    h1: {
      fontSize: '2rem',
      letterSpacing: 0.25,
    },
    h2: {
      fontSize: '1.5rem',
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.25rem',
      letterSpacing: 0.15,
    },
    h4: {
      fontSize: '1rem',
      letterSpacing: 0.15,
    },
    h5: {
      fontSize: '0.875rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.75rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0.25,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: 0.4,
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: 1.25,
      textTransform: 'none',
    },
  },
  palette: {
    custom: {
      general: {
        icon: '#999999',
      },
      tags: {
        zero: '#E8E8E8',
        one: '#2460FA',
        two: '#2BA891',
        three: '#E79720',
        four: '#F17047',
        five: '#DA4B4B',
        six: '#9438DC',
        seven: '#1A869D',
        eight: '#2C9944',
        nine: '#B49F31',
        ten: '#E9A846',
        eleven: '#E94681',
        twelve: '#C15EC4',
        thirteen: '#C388D9',
        fourteen: '#46AEE9',
        fifteen: '#58BC91',
        sixteen: '#90BC58',
        seventeen: '#E99E8E',
        eighteen: '#F0A479',
        nineteen: '#D37763',
        twenty: '#D9C788',
      },
      fonts: {
        fontFive: '#FFFFFF',
        highlight: '#1D86FF', // links
        // highlight: '#56B4E9', // links
      },
      condition: {
        zero: '#E8E8E8',
        one: '#1EC490',
        two: '#FF961B',
        three: '#FC6A8A',
      },
      tokenomics: {
        one: '#1EC490',
        two: '#497BFF',
        three: '#9F46EC',
      },
      charts: {
        zero: '#E8E8E8',
        one: '#EB3AA4',
        two: '#497BFF',
        three: '#FF961B',
        four: '#1EC490',
        five: '#9F46EC',
      },
    },
  },
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: 'initial',
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: 'transparent',
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
        padding: '0 16px',
        height: '50px',
        fontSize: '1rem',
      },
    },
    MuiTabs: {
      root: {
        // '& .MuiTabs-fixed': {
        //   overflow: 'auto',
        // },
        '&.MuiTabs-root, & .MuiTab-root': {
          minHeight: '40px',
        },
        '& .MuiTab-textColorInherit': {
          opacity: 1,
          fontSize: '1rem',
        },
      },
    },
  },
};
```

</details>

<details>

<summary>Default Light Theme</summary>

```
const backgroundDefault = '#F8F8F8';
const surfaceOne = '#FFFFFF';
const surfaceTwo = '#F8F8F8';
const fontOne = '#000000';
const fontTwo = '#414141';
const fontThree = '#777777';

/** Custom theme overrides for light mode */
export const lightThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#FD3B4C',
      contrastText: '#fff',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#E8E8E8',
    text: {
      primary: '#000000',
      secondary: '#414141',
    },
    custom: {
      general: {
        background: backgroundDefault, // same as background default
        surfaceOne, // same as background paper
        surfaceTwo, // striped tables
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#999999',
      },
      primaryData: {
        one: '#FA3A39',
        two: '#FD5E1F',
        three: '#FD5D4E',
        four: '#FD9526',
      },
      results: {
        pass: '#1EC490',
        fail: '#FD3B4C',
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: surfaceTwo, // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: fontTwo, // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree, // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne, // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: fontOne, // font one
        },
      },
    },
  },
};
```

</details>

## Overriding Common (Example)
For example, if we decided `palette.custom.tags.one` should not be in common because we wanted dark and light mode to have separate colors we can easily copy and paste the key value inside `light.ts` and `dark.ts`. Common will then be overriden by the value inside `light.ts` and `dark.ts`.

```
index.ts
{
  ...
  palette: {
    custom: {
      tags: {
        one: '#2460FA' // will be overriden
      }
      ...
    }
  }
}

light.ts

{
  ...
  palette: {
    custom: {
      tags: {
        one: 'blue' // higher priority
      }
      ...
    }
  }
}

----

dark.ts

{
  ...
  palette: {
    custom: {
      tags: {
        one: 'ornage' // higher priority
      }
    }
    ...
  }
}
```
