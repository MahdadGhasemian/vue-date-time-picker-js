<template>
  <div>
    <min-and-max></min-and-max>
    <with-value></with-value>
    <different-input-an-output></different-input-an-output>
    <view-prop></view-prop>
    <editable-input></editable-input>
    <custom-input></custom-input>
    <custom-input-and-editable></custom-input-and-editable>
    <input-settings></input-settings>
    <alt-field></alt-field>
    <auto-submit></auto-submit>
    <picker-color></picker-color>
    <append-to></append-to>
    <disable-dates></disable-dates>
    <with-label></with-label>
    <highlight></highlight>
    <timezone></timezone>
    <simple-datetime></simple-datetime>
    <simple-time></simple-time>

  </div>
</template>

<script>
  import MinAndMax from './examples/MinAndMax'
  import WithValue from './examples/WithValue'
  import DifferentInputAnOutput from './examples/DifferentInputAnOutput'
  import ViewProp from './examples/ViewProp'
  import EditableInput from './examples/EditableInput'
  import CustomInput from './examples/CustomInput'
  import CustomInputAndEditable from './examples/CustomInputAndEditable'
  import InputSettings from './examples/InputSettings'
  import AltField from './examples/AltField'
  import AutoSubmit from './examples/AutoSubmit'
  import PickerColor from './examples/PickerColor'
  import AppendTo from './examples/AppendTo'
  import DisableDates from './examples/DisableDates'
  import WithLabel from './examples/WithLabel'
  import Highlight from './examples/Highlight'
  import Timezone from './examples/Timezone'
  import SimpleDatetime from './examples/SimpleDatetime'
  import SimpleTime from './examples/SimpleTime'
  import Sidebar from "./includes/Sidebar";

    export default {
        name: "All",
      components: {
        Sidebar,
        MinAndMax,
        WithValue,
        DifferentInputAnOutput,
        ViewProp,
        EditableInput,
        CustomInput,
        CustomInputAndEditable,
        InputSettings,
        AltField,
        AutoSubmit,
        PickerColor,
        AppendTo,
        DisableDates,
        WithLabel,
        Highlight,
        Timezone,
        SimpleDatetime,
        SimpleTime
      }
    }
</script>

<style scoped>

</style>
