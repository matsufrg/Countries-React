let colors = {
    light: {
        name: 'Light',
        primary: "hsl(0, 0%, 100%)",
        text: "hsl(200, 15%, 8%)",
        input: "hsl(0, 0%, 52%),",
        background: "hsl(0, 0%, 98%)",
    },
    dark: {
        name: 'Dark',
        primary: "hsl(207, 26%, 17%)",
        text: "hsl(0, 0%, 100%)",
        input: "hsl(209, 23%, 22%)",
        background: "hsl(200, 15%, 8%)"
    }
}

let colorScheme = colors.light;

export function switchTheme() {
    if (colorScheme === colors.light) {
        colorScheme = colors.dark;
    } else {
        colorScheme = colors.light;
    }
}
  

export { 
    colorScheme,
}