<template>
  <div class="pt-5">
    <h1 class="text-center" style="margin-bottom: 50px">
      VUE DATE TIME PICKER
    </h1>
    <h5 class="text-center mb-5">A vue plugin to select date and time</h5>

    <card title="Simple example">
      <date-picker locale="en,ar" format="YYYY/M/D" />
      <br />
      <date-picker v-model="date" :clearable="true" />
      <br />
      <date-picker v-model="datetime" type="datetime" />
      <br />
      <date-picker v-model="time" type="time" />
      <br />
      <date-picker v-model="yearMonth" type="year-month" />
      <br />
      <date-picker v-model="year" type="year" min="2000" max="2080" />
      <br />
      <date-picker v-model="month" type="month" />

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker locale="en,ar" format="YYYY/M/D" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" :clearable="true" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="datetime" type="datetime" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="time" type="time" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="yearMonth" type="year-month" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="year" type="year" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="month" type="month" /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      time: '',
      yearMonth: '',
      datetime: '',
      year: '',
      month: ''
    }
  }
}
</script>
