/*global getYear*/
/*eslint no-undef: ["error", { "typeof": true }] */

import moment from 'moment'
import utils from './utils'

import ar from 'moment/locale/ar'

moment.updateLocale('ar', ar)

//=====================================
//           CONFIG
//=====================================
const localesConfig = {
  ar: {
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'Ar',
      submit: 'حسنا',
      cancel: 'إلغاء',
      now: 'الآن',
      nextMonth: 'الشهر القادم',
      prevMonth: 'الشهر السابق'
    }
  },
  en: {
    dow: 0,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: 'En',
      submit: 'Select',
      cancel: 'Cancel',
      now: 'Now',
      nextMonth: 'Next month',
      prevMonth: 'Previous month'
    }
  }
}

const Core = function(defaultLocaleName) {
  'use strict'

  const Instance = {
    moment: moment,
    locale: { name: 'en', config: {} },
    localesConfig: {},
    setLocalesConfig: null,
    changeLocale: null,
    getWeekArray: null,
    getYearsList: null,
    getMonthsList: null
  }

  //=====================================
  //           METHODS
  //=====================================

  Instance.changeLocale = function changeLocale(
    localeName = 'en',
    options = {}
  ) {
    let locale = this.locale
    let config = JSON.parse(
      JSON.stringify(localesConfig[localeName] || localesConfig.en)
    )

    options = options[localeName] || {}
    locale.name = localeName
    locale.config = utils.extend(true, config, options)

    function addMethods(date) {
      if (date === undefined) return

      date.clone = function() {
        return Instance.moment(this.toDate())
      }
    }

    this.moment = function() {
      let date = moment.apply(null, arguments)
      date.locale(locale.name)
      addMethods(date)
      return date
    }
  }

  Instance.setLocalesConfig = function(config) {
    let defaults = JSON.parse(JSON.stringify(localesConfig))
    this.localesConfig = utils.extend(true, defaults, config)
  }

  Instance.getWeekArray = function getWeekArray(d) {
    function addWeek(weekArray, week) {
      let emptyDays = 7 - week.length

      for (let i = 0; i < emptyDays; ++i) {
        week[weekArray.length ? 'push' : 'unshift'](null)
      }

      weekArray.push(week)
    }

    let moment = this.moment
    let year = moment(d).year()
    let month = moment(d).month()
    let daysInMonth = moment({ year, month }).daysInMonth()

    let dayArray = []
    for (let i = 1; i <= daysInMonth; i++) {
      dayArray.push(
        moment(d)
          .date(i)
          .toDate()
      )
    }

    let weekArray = []
    let week = []

    dayArray.forEach(day => {
      if (week.length > 0 && day.getDay() === this.locale.config.dow) {
        addWeek(weekArray, week)
        week = []
      }

      week.push(day)

      if (dayArray.indexOf(day) === dayArray.length - 1) {
        addWeek(weekArray, week)
      }
    })

    return weekArray
  }

  Instance.getYearsList = function getYearsList(from, to, range = false, date) {
    let years = []
    if (range) {
      let year = getYear(date)
      from = year - range
      to = year + range
    }
    for (let i = from; i <= to; i++) {
      years.push(i)
    }
    return years
  }

  Instance.getMonthsList = function getMonthsList(minDate, maxDate, date) {
    let list = [],
      min = minDate
        ? minDate
            .clone()
            .startOf('month')
            .unix()
        : -Infinity,
      max = maxDate
        ? maxDate
            .clone()
            .endOf('month')
            .unix()
        : Infinity
    for (let i = 0; i < 12; i++) {
      let month = date.clone().month(i)
      let start = month
        .clone()
        .startOf('month')
        .unix()
      let end = month
        .clone()
        .endOf('month')
        .unix()
      month.disabled = start < min || end > max
      list.push(month)
    }
    return list
  }

  Instance.changeLocale(defaultLocaleName)

  return Instance
}

export default Core

export { localesConfig }
