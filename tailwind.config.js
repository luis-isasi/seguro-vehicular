module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        19: '4.75rem',
        21: '5.25rem',
        23: '5.75rem',
        25: '6.25rem',
        27: '6.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        42: '10.5rem',
        45: '11.25rem',
        46: '11.5rem',
        47: '11.75rem',
        49: '12.25rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        76: '19rem',
        82: '20.5rem',
        84: '21rem',
        86: '21.5rem',
        88: '22rem',
        90: '22.5rem',
        92: '23rem',
        94: '23.5rem',
        98: '27rem',
        100: '30rem',
        102: '32rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '2/4': '50%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        xl: '38rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '85rem',
        '9xl': '90rem',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('height'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      colors: {
        gray: {
          light: '#ECF0FF',
          lighter: '#F7F8FC',
        },
        red: {
          rimac: '#EF3340',
        },
      },
      borderRadius: {
        circle: '50%',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        6: '6px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
      },
      flexGrow: {
        DEFAULT: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
      },
      zIndex: {
        '-2': '-2',
        '-4': '-4',
        '-6': '-6',
        '-8': '-8',
        '-10': '-10',
        '-12': '-12',
        2: '2',
        4: '4',
        6: '6',
        8: '8',
        12: '12',
        14: '14',
        16: '16',
        18: '18',
      },
      scale: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        80: '.8',
        85: '.85',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
