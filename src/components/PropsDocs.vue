<template>
  <div>
    <!-- eslint-disable -->
    <highlight-code :lang="'javascript'">
      &lbrace;
        /**
         * Default input value
         * @type Number String
         * @default []
         * @example 1988/03/09 22:45 | {unix} | 20:45
         */
        value: "1988/03/09 22:50",

        /**
         * Initial value of picker (if value is empty)
         * @type Number String
         * @default []
         * @example 1988/03/09 20:45 | {unix} | 20:45
         */
        initialValue: '1988/03/09',

        /**
         * Format for {value}
         * @type String
         * @default Null
         * @example YYYY/MM/DD HH:mm | x | unix | HH:mm
         * @if empty {inputFormat} = {format}
         * @see https://github.com/moment/moment/
         */
        inputFormat: 'YYYY/MM/DD HH:mm',

        /**
        * Format only to display the date in the field
        * @type String
        * @default Null
        * @example YYYY/MM/DD HH:mm | x | unix | HH:mm
        * @if empty {displayFormat} = {format}
        * @see https://github.com/moment/moment/
        */
        displayFormat: {type: String, 'default': ''},

        /**
         * Format for output value
         * @type String
         * @default Null
         * @example YYYY/MM/DD HH:mm | x | unix | HH:mm
         * @if empty, it will be built according to the type of picker:
         *
         * --- time:     HH:mm
         * --- datetime: YYYY/MM/DD HH:mm
         * --- date:     YYYY/MM/DD
         * --- year:     YYYY
         * --- month:    MM
         *
         * @see https://github.com/moment/moment/
         */
        format: 'YYYY/MM/DD HH:mm',

        /**
         * Step to view on startup
         * @type String
         * @default "day"
         * @supported day | month | year | time
         * @example year
         * @desc {year} will show the "year" panel at first
         */
        view: 'day',

        /**
         * The picker type
         * @type String
         * @default "date"
         * @supported date | datetime | year | month | time
         */
        type: 'datetime',

        /**
         * The minimum of selectable period
         * Based on {inputFormat}
         * @type String
         * @default Null
         * @example 1988/08/01 22:45 | 22:45
         */
        min: '1988/01/01 00:00',

        /**
         * The maximum of selectable period
         * Based on {inputFormat}
         * @type String
         * @default Null
         * @example 1988/08/01 22:45 | 22:45
         */
        max: '1988/12/31 23:00',

        /**
         * Editable input or just readonly
         * @type Boolean
         * @default False
         * @if false, the picker will shown on input focus
         * @if true, the picker will shown on label click
         * @note if use  <... :editable="true"> with <... :element="...">
         *     then you have to control the <... :show="true or false">
         */
        editable: false,

        /**
         * The specified input element ID
         * @type String
         * @default Undefined
         * @desc Sometimes you don't want to use picker default input,
         * so you can use our own input element with "id" attribute
         * and use  <... element="the_id_of_input">
         */
        element: 'my-input-element-id',

        /**
         * The form input name when not using {element}
         * @type String
         * @default Undefined
         */
        name: 'input_name',

        /**
         * The form input className when not using {element}
         * @type String
         * @default "form-control"
         */
        inputClass: 'form-control',

        /**
         * The form input placeholder when not using {element}
         * @type String
         * @default Null
         */
        placeholder: 'Select a date ...',

        /**
         * The name of hidden input element
         * @type String
         * @default Null
         * @if empty, the hidden input will not be created
         */
        altName: 'hidden_input_name',

        /**
         * Format for hidden input
         * @type String
         * @default Null
         * @example YYYY-MM-DD HH:mm:ss [GMT]ZZ
         * @if empty, it will be built according to the type of picker:
         *
         * --- time:     HH:mm:ss [GMT]ZZ
         * --- datetime: YYYY-MM-DD HH:mm:ss [GMT]ZZ
         * --- date:     YYYY-MM-DD
         * --- year:     YYYY
         * --- month:    MM
         */
        altFormat: 'YYYY-MM-DD HH:mm:ss [GMT]ZZ',

        /**
         * Show or hide the picker
         * @type Boolean
         * @default False
         */
        show: false,

        /**
         * Primary color of picker
         * @type String
         */
        color: '#417df4',

        /**
         * Auto submit and hide picker when date selected
         * @type Boolean
         * @default False
         */
        autoSubmit: false,

        /**
         * Auto submit when clicking the wrapper
         * @type Boolean
         * @default false
         */
        wrapperSubmit: false,

        /**
         * Place to append picker
         * @type String query selector
         * @default null
         * @desc If you want to append picker to another container like 'body',
         * pass the container as append-to="body",  append-to="#app",  append-to="#my-container"
         * @example 'body', '.main-container', '#app' ...
         */
        appendTo: 'body',


        /**
         * Disable or enable the datepicker
         * @type Boolean
         * @default false
         */
        disabled: false,

        /**
         * Disabling
         * @type Array, String, Function, RegExp
         * @default undefined
         * @desc disable some dates
         * @example ['1988/03/09', '1988/05/21'] - "1988/03/09" - /1988\/05\/(.*)/ ...
         */
        disable: '1988/03/09',

        /**
         * Label for display
         * @type String
         */
        label: 'Date',

        /**
         * Highlight items
         * @type Function
         * @desc This prop accepts only function that return an object of attributes.
         */
        highlight: () => ({ style: {'color: green'} }),

        /**
         * Show clear button
         * @type Boolean
         * @default false
         */
        clearable: false,

        /**
         * Inline mode
         * @type Boolean
         * @default false
         */
        inline: false,

        /**
         * Change minutes by step
         * @type Number
         * @default 1
         */
        jumpMinute: 15,

        /**
         * Round minutes when jumpMinute is grater than 1
         * @example when jumpMinute = 15 thin will result: 13:00, 13:15, 13:30, 13:45 ...
         * @type Boolean
         * @default false
         */
        roundMinute: true,


        /**
         * Locales config ("ar" for arabic and "en" for english)
         * @type String
         * @default fa
         * @example ar | en | ar,en | en,ar
         * @supported ar,en
         */
        locale: 'en',

        /**
         * Locale configuration
         * @type Object
         * @default {}
         * @example
         * {
         *  ar: {
         *      dow: 6,             --first day of week
         *      dir: 'rtl',         --language direction
         *      displayFormat: 'YYYY/MM/DD',  --or null
         *      lang: {
         *           label:     'Ar',
         *           submit:    'حسنا',
         *           cancel:    'إلغاء',
         *           now:       'الآن',
         *           nextMonth: 'الشهر القادم',
         *           prevMonth: 'الشهر السابق',
         *      }
         *  },
         *  en: { ... }
         * }
         */
        localeConfig: {},

        /**
         * Timezone configuration
         * @type String | Boolean | Function
         * @default false
         * @example true | false | -07:00 | +05:30
         * @note: Formats like "America/Los_Angeles" does not supported!
         */
        timezone: { type: [Boolean, String, Function], default: false }
      &rbrace;
    </highlight-code>
    <!-- eslint-enable -->
  </div>
</template>
