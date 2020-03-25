# vue-date-time-picker-js
A vue plugin to select date and time

[![npm version](https://badge.fury.io/js/vue-date-time-picker-js.svg)](https://www.npmjs.com/package/vue-date-time-picker-js)

See documentation and demo at [vue-date-time-picker-js](https://mahdadghasemian.github.io/vue-date-time-picker-js)

## Installation

### npm
```bash
npm install vue-date-time-picker-js --save
```

webpack.config.js:
```javascript
/**
 * configuration for moment to ignore loading locales
 */
module.exports.plugins = [
    //...
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    //...
]
```

### Usage

main.js
```javascript
//...
import VueDatetimePickerJs from 'vue-date-time-picker-js';
Vue.component('date-picker', VueDatetimePickerJs);
//...
```
Or in component
```html
<template>
    <div>
        <date-picker v-model="date"></date-picker>
    </div>
</template>
 
<script>
    import VueDatetimePickerJs from 'vue-date-time-picker-js'
    export default {
        data(){
            return {
                date: ''
            }
        },
        components: {
            datePicker: VueDatetimePickerJs
        }
    }
</script>
```


## You can also set default values: 
main.js
```javascript
import VueDatetimePickerJs from 'vue-date-time-picker-js';
Vue.use(VueDatetimePickerJs, {
    name: 'custom-date-picker',
    props: {
        inputFormat: 'YYYY-MM-DD HH:mm',
        format: 'YYYY-MM-DD HH:mm',
        editable: false,
        inputClass: 'form-control my-custom-class-name',
        placeholder: 'Please select a date',
        altFormat: 'YYYY-MM-DD HH:mm',
        color: '#00acc1',
        autoSubmit: false,
        //...  
        //... And whatever you want to set as default 
        //... 
    }
});
```
Then use in component
```html
<custom-date-picker v-model="date"></custom-date-picker>
```


## Built With
* [Vuejs](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [vue-persian-datetime-picker](https://github.com/talkhabi/vue-persian-datetime-picker.git) - A vue plugin to select jalali date and time.


## License

This project is licensed under the MIT License

## Change log

### 1.0.1 (2020-03-25)

  * Fix for package name

### 1.0.0 (2020-03-25)

  * Fork from vue-persian-datetime-picker
