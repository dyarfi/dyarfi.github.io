/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'content/**/**.md',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxlmin: '1351px',
      xxlmax: { max: '1350px' },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Quicksand', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      colors: {
        /* 
          $primary:       $blue !default; #0d6efd
          $secondary:     $gray-600 !default; #6c757d
          $success:       $green !default; #198754
          $info:          $cyan !default; #0dcaf0
          $warning:       $yellow !default; #ffc107
          $danger:        $red !default; #dc3545
          $light:         $gray-100 !default; #f8f9fa
          $dark:          $gray-900 !default; #212529
        */
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: '#198754',
        info: '#0dcaf0',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#212529',
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      },
      height: {
        84: '22rem',
      },
      width: {
        '3/2': '150%',
        '4/2': '200%',
        '1/2-screen': '50vw',
      },
      margin: {
        '-fullh': '-100vh',
      },
    },
    inset: {
      0: 0,
      16: '16px',
      32: '32px',
      64: '64px',
      '2rem': '2rem',
      '3rem': '3rem',
    },
    button: {
      default: {
        color: '#990000',
      },
      primary: { color: '#99ff00' },
      secondary: { color: '#ff9900' },
    },
  },
  variants: {},
  plugins: [require('postcss')],
}
