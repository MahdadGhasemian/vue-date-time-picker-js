<template>
  <div>
    <min-and-max />
    <with-value />
    <different-input-an-output />
    <view-prop />
    <editable-input />
    <custom-input />
    <custom-input-and-editable />
    <input-settings />
    <alt-field />
    <auto-submit />
    <picker-color />
    <append-to />
    <disable-dates />
    <with-label />
    <highlight /> <timezone />
    <simple-datetime />
    <simple-time />
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
import Sidebar from './includes/Sidebar'

export default {
  name: 'All',
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

<style scoped></style>
