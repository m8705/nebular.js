# nebular.js
Nebular UI in JavaScript

## usage
```javascript
let class = 'primary'
let status = 'active'
console.log( neo.color[class][status].color )
```

## struct
```javascript
neo = {
  color, background, border, text, outline, scrollbar, shadow, divider, font
}

color = {
  primary: {},
  success: {},
  info:    {},
  warning: {},
  danger:  {},
  basic:   {},
  control: {},
}

background = {
  basic:{},
  primary:{},
  alternative:{},
}

border = {
  basic:{},
  primary:{},
  alternative:{},
}

text = {

  primary: {},
  success: {},
  info:    {},
  warning: {},
  danger:  {},
  basic:   {},

  hint:      '',
  control:   '',
  disabled:  '',
  alternate: '',

  heading:   {},
  subtitle:  {},
  paragraph: {},
  label:     {},
  caption:   {},
  button:    {},

}

font = {
  family:{},
}

outline   = {}
scrollbar = {}
divider   = {}

shadow = {
  default:{},
  hover:{},
}

```
