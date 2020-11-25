(function(){

    var color, background, border, text, outline, scrollbar, shadow, divider, font

    color = {
        primary: {},
        success: {},
        info:    {},
        warning: {},
        danger:  {},
        basic:   {},
        control: {},
    }

    /* Status colors: primary, success, info, warning, danger . for colored elements (buttons, etc) */

    color.primary = {

        c100: '#f2f6ff',
        c200: '#d9e4ff',
        c300: '#a6c1ff',
        c400: '#598bff',
        c500: '#3366ff',
        c600: '#274bdb',
        c700: '#1a34b8',
        c800: '#102694',
        c900: '#091c7a',

    }

    color.primary.transparent = {

        c100: 'rgba(51, 102, 255, 0.08)',
        c200: 'rgba(51, 102, 255, 0.16)',
        c300: 'rgba(51, 102, 255, 0.24)',
        c400: 'rgba(51, 102, 255, 0.32)',
        c500: 'rgba(51, 102, 255, 0.4)',
        c600: 'rgba(51, 102, 255, 0.48)',

    }

    color.success = {

        c100: '#f0fff5',
        c200: '#ccfce3',
        c300: '#8cfac7',
        c400: '#2ce69b',
        c500: '#00d68f',
        c600: '#00b887',
        c700: '#00997a',
        c800: '#007d6c',
        c900: '#004a45',

    }

    color.success.transparent = {

        c100: 'rgba(0, 214, 143, 0.08)',
        c200: 'rgba(0, 214, 143, 0.16)',
        c300: 'rgba(0, 214, 143, 0.24)',
        c400: 'rgba(0, 214, 143, 0.32)',
        c500: 'rgba(0, 214, 143, 0.4)',
        c600: 'rgba(0, 214, 143, 0.48)',

    }

    color.info = {

        c100: '#f2f8ff',
        c200: '#c7e2ff',
        c300: '#94cbff',
        c400: '#42aaff',
        c500: '#0095ff',
        c600: '#006fd6',
        c700: '#0057c2',
        c800: '#0041a8',
        c900: '#002885',

    }

    color.info.transparent = {

        c100: 'rgba(0, 149, 255, 0.08)',
        c200: 'rgba(0, 149, 255, 0.16)',
        c300: 'rgba(0, 149, 255, 0.24)',
        c400: 'rgba(0, 149, 255, 0.32)',
        c500: 'rgba(0, 149, 255, 0.4)',
        c600: 'rgba(0, 149, 255, 0.48)',

    }

    color.warning = {

        c100: '#fffdf2',
        c200: '#fff1c2',
        c300: '#ffe59e',
        c400: '#ffc94d',
        c500: '#ffaa00',
        c600: '#db8b00',
        c700: '#b86e00',
        c800: '#945400',
        c900: '#703c00',

    }

    color.warning.transparent = {

        c100: 'rgba(255, 170, 0, 0.08)',
        c200: 'rgba(255, 170, 0, 0.16)',
        c300: 'rgba(255, 170, 0, 0.24)',
        c400: 'rgba(255, 170, 0, 0.32)',
        c500: 'rgba(255, 170, 0, 0.4)',
        c600: 'rgba(255, 170, 0, 0.48)',

    }

    color.danger = {

        c100: '#fff2f2',
        c200: '#ffd6d9',
        c300: '#ffa8b4',
        c400: '#ff708d',
        c500: '#ff3d71',
        c600: '#db2c66',
        c700: '#b81d5b',
        c800: '#94124e',
        c900: '#700940',

    }

    color.danger.transparent = {

        c100: 'rgba(255, 61, 113, 0.08)',
        c200: 'rgba(255, 61, 113, 0.16)',
        c300: 'rgba(255, 61, 113, 0.24)',
        c400: 'rgba(255, 61, 113, 0.32)',
        c500: 'rgba(255, 61, 113, 0.4)',
        c600: 'rgba(255, 61, 113, 0.48)',

    }
  
    /* Basic colors . for backgrounds and borders and texts */

    color.basic = {

        c100: '#ffffff',
        c200: '#f7f9fc',
        c300: '#edf1f7',
        c400: '#e4e9f2',
        c500: '#c5cee0',
        c600: '#8f9bb3',
        c700: '#2e3a59',
        c800: '#222b45',
        c900: '#192038',
        c1000: '#151a30',
        c1100: '#101426',

    }

    color.basic.transparent = {

        c100: 'rgba(143, 155, 179, 0.08)',
        c200: 'rgba(143, 155, 179, 0.16)',
        c300: 'rgba(143, 155, 179, 0.24)',
        c400: 'rgba(143, 155, 179, 0.32)',
        c500: 'rgba(143, 155, 179, 0.4)',
        c600: 'rgba(143, 155, 179, 0.48)',

    }

    color.basic.control = {
        transparent: {},
    }

    color.basic.control.transparent = {

        c100: 'rgba(255, 255, 255, 0.08)',
        c200: 'rgba(255, 255, 255, 0.16)',
        c300: 'rgba(255, 255, 255, 0.24)',
        c400: 'rgba(255, 255, 255, 0.32)',
        c500: 'rgba(255, 255, 255, 0.4)',
        c600: 'rgba(255, 255, 255, 0.48)',

    }

    color.control = {
        transparent: {},
    }
  
    /* Status colors states . focus, hover, default, active, disabled  */

    /* basic */

    color.basic.focus = {
        color: '#e4e9f2',
        border: '#c5cee0',
    }
    color.basic.hover = {
        color: '#f7f9fc',
        border: '#f7f9fc',
    }
    color.basic.default = {
        color: '#edf1f7',
        border: '#edf1f7',
    }
    color.basic.active = {
        color: '#e4e9f2',
        border: '#e4e9f2',
    }
    color.basic.disabled = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: 'rgba(143, 155, 179, 0.24)',
    }

    /* basic.transparent */

    color.basic.transparent.focus = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: '#8f9bb3',
    }
    color.basic.transparent.hover = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: '#8f9bb3',
    }
    color.basic.transparent.default = {
        color: 'rgba(143, 155, 179, 0.08)',
        border: '#8f9bb3',
    }
    color.basic.transparent.active = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: '#8f9bb3',
    }
    color.basic.transparent.disabled = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: 'rgba(143, 155, 179, 0.24)',
    }

    /* primary */
  
    color.primary.focus = {
        color: '#274bdb',
        border: '#1a34b8',
    }
    color.primary.hover = {
        color: '#598bff',
        border: '#598bff',
    }
    color.primary.default = {
        color: '#3366ff',
        border: '#3366ff',
    }
    color.primary.active = {
        color: '#274bdb',
        border: '#274bdb',
    }
    color.primary.disabled = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: 'rgba(143, 155, 179, 0.24)',
    }

    /* primary.transparent */

    color.primary.transparent.focus = {
        color: 'rgba(51, 102, 255, 0.24)',
        border: '#3366ff',
    }
    color.primary.transparent.hover = {
        color: 'rgba(51, 102, 255, 0.16)',
        border: '#3366ff',
    }
    color.primary.transparent.default = {
        color: 'rgba(51, 102, 255, 0.08)',
        border: '#3366ff',
    }
    color.primary.transparent.active = {
        color: 'rgba(51, 102, 255, 0.24)',
        border: '#3366ff',
    }
    color.primary.transparent.disabled = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* success */

    color.success.focus = {
        color: '#00b887',
        border: '#00997a',
    }
    color.success.hover = {
        color: '#2ce69b',
        border: '#2ce69b',
    }
    color.success.default = {
        color: '#00d68f',
        border: '#00d68f',
    }
    color.success.active = {
        color: '#00b887',
        border: '#00b887',
    }
    color.success.disabled = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* success.transparent */

    color.success.transparent.focus = {
        color: 'rgba(0, 214, 143, 0.24)',
        border: '#00d68f',
    }
    color.success.transparent.hover = {
        color: 'rgba(0, 214, 143, 0.16)',
        border: '#00d68f',
    }
    color.success.transparent.default = {
        color: 'rgba(0, 214, 143, 0.08)',
        border: '#00d68f',
    }
    color.success.transparent.active = {
        color: 'rgba(0, 214, 143, 0.24)',
        border: '#00d68f',
    }
    color.success.transparent.disabled = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* info */

    color.info.focus = {
        color: '#006fd6',
        border: '#0057c2',
    }
    color.info.hover = {
        color: '#42aaff',
        border: '#42aaff',
    }
    color.info.default = {
        color: '#0095ff',
        border: '#0095ff',
    }
    color.info.active = {
        color: '#006fd6',
        border: '#006fd6',
    }
    color.info.disabled = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* info.transparent */

    color.info.transparent.focus = {
        color: 'rgba(0, 149, 255, 0.24)',
        border: '#0095ff',
    }
    color.info.transparent.hover = {
        color: 'rgba(0, 149, 255, 0.16)',
        border: '#0095ff',
    }
    color.info.transparent.default = {
        color: 'rgba(0, 149, 255, 0.08)',
        border: '#0095ff',
    }
    color.info.transparent.active = {
        color: 'rgba(0, 149, 255, 0.24)',
        border: '#0095ff',
    }
    color.info.transparent.disabled = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* warning */

    color.warning.focus = {
        color: '#db8b00',
        border: '#b86e00',
    }
    color.warning.hover = {
        color: '#ffc94d',
        border: '#ffc94d',
    }
    color.warning.default = {
        color: '#ffaa00',
        border: '#ffaa00',
    }
    color.warning.active = {
        color: '#db8b00',
        border: '#db8b00',
    }
    color.warning.disabled = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* warning.transparent */

    color.warning.transparent.focus = {
        color: 'rgba(255, 170, 0, 0.24)',
        border: '#ffaa00',
    }
    color.warning.transparent.hover = {
        color: 'rgba(255, 170, 0, 0.16)',
        border: '#ffaa00',
    }
    color.warning.transparent.default = {
        color: 'rgba(255, 170, 0, 0.08)',
        border: '#ffaa00',
    }
    color.warning.transparent.active = {
        color: 'rgba(255, 170, 0, 0.24)',
        border: '#ffaa00',
    }
    color.warning.transparent.disabled = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* danger */

    color.danger.focus = {
        color: '#db2c66',
        border: '',
    }
    color.danger.hover = {
        color: '#ff708d',
        border: '#ff708d',
    }
    color.danger.default = {
        color: '#ff3d71',
        border: '#ff3d71',
    }
    color.danger.active = {
        color: '#db2c66',
        border: '#db2c66',
    }
    color.danger.disabled = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* danger.transparent */

    color.danger.transparent.focus = {
        color: 'rgba(255, 61, 113, 0.24)',
        border: '#ff3d71',
    }
    color.danger.transparent.hover = {
        color: 'rgba(255, 61, 113, 0.16)',
        border: '#ff3d71',
    }
    color.danger.transparent.default = {
        color: 'rgba(255, 61, 113, 0.08)',
        border: '#ff3d71',
    }
    color.danger.transparent.active = {
        color: 'rgba(255, 61, 113, 0.24)',
        border: '#ff3d71',
    }
    color.danger.transparent.disabled = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: 'rgba(143, 155, 179, 0.24)',
    }
  
    /* control */

    color.control.focus = {
        color: '#edf1f7',
        border: '#c5cee0',
    }
    color.control.hover = {
        color: '#f7f9fc',
        border: '#f7f9fc',
    }
    color.control.default = {
        color: '#ffffff',
        border: '#ffffff',
    }
    color.control.active = {
        color: '#edf1f7',
        border: '#edf1f7',
    }
    color.control.disabled = {
        color: 'rgba(143, 155, 179, 0.24)',
        border: 'rgba(143, 155, 179, 0.24)',
    }

    /* control.transparent */

    color.control.transparent.focus = {
        color: 'rgba(255, 255, 255, 0.24)',
        border: '#ffffff',
    }
    color.control.transparent.hover = {
        color: 'rgba(255, 255, 255, 0.16)',
        border: '#ffffff',
    }
    color.control.transparent.default = {
        color: 'rgba(255, 255, 255, 0.08)',
        border: '#ffffff',
    }
    color.control.transparent.active = {
        color: 'rgba(255, 255, 255, 0.24)',
        border: '#ffffff',
    }
    color.control.transparent.disabled = {
        color: 'rgba(143, 155, 179, 0.16)',
        border: 'rgba(143, 155, 179, 0.24)',
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
  
    /* Backgrounds and borders . basic, alternative and primary  */

    background.basic = {

        c1: '#ffffff',
        c2: '#f7f9fc',
        c3: '#edf1f7',
        c4: '#e4e9f2',

    }
  
    border.basic = {

        c1: '#ffffff',
        c2: '#f7f9fc',
        c3: '#edf1f7',
        c4: '#e4e9f2',
        c5: '#c5cee0',

    }
  
    background.alternative = {

        c1: '#222b45',
        c2: '#192038',
        c3: '#151a30',
        c4: '#101426',

    }

    border.alternative = {

        c1: '#222b45',
        c2: '#192038',
        c3: '#151a30',
        c4: '#101426',
        c5: '#101426',

    }
  
    background.primary = {

        c1: '#3366ff',
        c2: '#274bdb',
        c3: '#1a34b8',
        c4: '#102694',

    }

    border.primary = {

        c1: '#c5cee0',
        c2: '#8f9bb3',
        c3: '#2e3a59',
        c4: '#222b45',
        c5: '#192038',

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

    text.heading = {
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
    }
  
    /* Text colors . general and status */
  
    text.basic.default = '#222b45'
    text.alternate = '#ffffff'
    text.control = '#ffffff'
    text.disabled = 'rgba(143, 155, 179, 0.48)'
    text.hint = '#8f9bb3'

    text.primary = {

        default : '#3366ff',
        focus : '#274bdb',
        hover : '#598bff',
        active : '#274bdb',
        disabled : '#598bff',

    }
  
    text.success = {

        default : '#00d68f',
        focus : '#00b887',
        hover : '#2ce69b',
        active : '#00b887',
        disabled : '#2ce69b',

    }
  
    text.info = {

        default : '#0095ff',
        focus : '#006fd6',
        hover : '#42aaff',
        active : '#006fd6',
        disabled : '#42aaff',

    }
  
    text.warning = {

        default : '#ffaa00',
        focus : '#db8b00',
        hover : '#ffc94d',
        active : '#db8b00',
        disabled : '#ffc94d',

    }
  
    text.danger = {

        default : '#ff3d71',
        focus : '#db2c66',
        hover : '#ff708d',
        active : '#db2c66',
        disabled : '#ff708d',

    }

    font = {
        family:{},
    }
  
    /* Fonts and text styles . headings, subtitles, paragraphs, captions, button */

    font.family = {

        primary : 'Open Sans, sans.serif',
        secondary : 'Open Sans, sans.serif',

    }
  
    text.heading.h1 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '2.25rem',
        fontWeight : '700',
        lineHeight : '3rem',

    }

    text.heading.h2 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '2rem',
        fontWeight : '700',
        lineHeight : '2.5rem',

    }

    text.heading.h3 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '1.875rem',
        fontWeight : '700',
        lineHeight : '2.5rem',

    }

    text.heading.h4 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '1.625rem',
        fontWeight : '700',
        lineHeight : '2rem',

    }

    text.heading.h5 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '1.375rem',
        fontWeight : '700',
        lineHeight : '2rem',

    }
  
    text.heading.h6 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '1.125rem',
        fontWeight : '700',
        lineHeight : '1.5rem',

    }

    text.subtitle = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '0.9375rem',
        fontWeight : '600',
        lineHeight : '1.5rem',

    }

    text.subtitle.s2 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '0.8125rem',
        fontWeight : '600',
        lineHeight : '1.5rem',

    }

    text.paragraph = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '0.9375rem',
        fontWeight : '400',
        lineHeight : '1.25rem',

    }

    text.paragraph.p2 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '0.8125rem',
        fontWeight : '400',
        lineHeight : '1.125rem',

    }
  
    text.label = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '0.75rem',
        fontWeight : '700',
        lineHeight : '1rem',

    }
  
    text.caption = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '0.75rem',
        fontWeight : '400',
        lineHeight : '1rem',

    }
  
    text.caption.c2 = {

        fontFamily : 'Open Sans, sans.serif',
        fontSize : '0.75rem',
        fontWeight : '600',
        lineHeight : '1rem',

    }

    text.button = {
        tiny:   {},
        small:  {},
        medium: {},
        large:  {},
        giant:  {},
    }
  
    text.button.fontFamily = 'Open Sans, sans.serif'
    text.button.fontWeight = '700'

    text.button.tiny = {

        fontSize : '0.625rem',
        lineHeight : '0.75rem',

    }

    text.button.small = {

        fontSize : '0.75rem',
        lineHeight : '1rem',

    }

    text.button.medium = {

        fontSize : '0.875rem',
        lineHeight : '1rem',

    }

    text.button.large = {

        fontSize : '1rem',
        lineHeight : '1.25rem',

    }

    text.button.giant = {

        fontSize : '1.125rem',
        lineHeight : '1.5rem',

    }
    

    outline   = {}
    scrollbar = {}
    divider   = {}

    scrollbar.background = {}
  
    /* Supporting variables . border radius, outline, shadow, divider */
  
    border.radius = '0.25rem'
  
    outline.width = '0.375rem'
    outline.color = 'rgba(143, 155, 179, 0.16)'
  
    scrollbar.color = '#e4e9f2'
    scrollbar.background.color = '#f7f9fc'
    scrollbar.width = '0.3125rem'

    shadow = {
        default:{},
        hover:{},
    }
  
    /* box-shadow = h-shadow v-shadow blur spread color inset; */

    
    shadow.default = {

        /* shadow : '0 0.5rem 1rem 0 rgba(44, 51, 73, 0.1)', */
        offsetX : 0,
        offsetY : 0.5,
        color : 'rgba(44, 51, 73, 0.1)',
        blur : 1,

    }

    shadow.hover = {

        /* shadow = '0 8px 20px 0 rgba(218,224,235,0.6)', */
        offsetX : 0,
        offsetY : 8,
        color : 'rgba(218,224,235,0.6)',
        blur : 20,

    }
  
    divider.color = '#edf1f7'
    divider.style = 'solid'
    divider.width = '1px'

    var neo = {color,background,border,font,text,outline,scrollbar,shadow,divider}

    window.neo = neo

})(window)