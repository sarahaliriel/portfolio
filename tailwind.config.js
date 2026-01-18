module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        salmao: "#AA9D8D",
        blue: "#101c3d",
      },

      theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      primary: "var(--primary)",
      "primary-foreground": "var(--primary-foreground)",
      muted: "var(--muted)",
      "muted-foreground": "var(--muted-foreground)",
      border: "var(--border)",
      },
    },
  },

      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #AA9D8D, #101c3d, #AA9D8D)',
        'gradient-footer': 'linear-gradient(90deg, #AA9D8D, #101c3d, #101c3d)',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },

  plugins: [],
}
