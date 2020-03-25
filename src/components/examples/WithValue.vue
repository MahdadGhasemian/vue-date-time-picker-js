<template>
  <div>
    <card title="With initial value">
      <date-picker v-model="date" format="YYYY/MM/DD" />
      <code class="code">{{ date }}</code>

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            v-model="date"
            format="YYYY/MM/DD"
          /&gt;
        </highlight-code>
        <highlight-code lang="javascript">
          data() {
            return{
              date: '1988/03/09'
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </template>

      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          /**
          * Show datepicker with initial value
          * v-bind:value="..."
          * or v-model="..."
          */
          "value"
          type: String
          default: Null
          example: 20:20  |  1988/03/09 20:20  |   1988/08/08
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker value="1988/03/09" format="YYYY/MM/DD" /&gt;
          &lt;date-picker value="1988-05-05" format="YYYY-MM-DD" /&gt;
          &lt;date-picker value="2017/10/03" format="YYYY/MM/DD" /&gt;
          &lt;date-picker value="2017/10/03" input-format="YYYY/MM/DD" format="YYYY/MM/DD" /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>

    <card
      title="With initial value for start if 'value' is empty"
    >
      <date-picker initial-value="2000/01/01" />
      <br />
      <date-picker type="datetime" initial-value="2000/01/01 20:45" />
      <br />
      <date-picker type="time" initial-value="20:45" />
      <br />
      <date-picker type="year" min="2000" max="2040" initial-value="2010" />
      <br />
      <date-picker type="month" initial-value="05" />

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" initial-value="1988/01/01" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="datetime" type="datetime" initial-value="1988/01/01 20:45" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="time" type="time" initial-value="20:45" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="year" type="year" initial-value="1988" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="month" type="month" initial-value="05" /&gt;
        </highlight-code>
        <highlight-code lang="javascript" v-pre>
          data() {
            return {
              date: '',
              time: '',
              datetime: '',
              year: '',
              month: '',
            }
          }
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
      date: '1988/05/03'
    }
  }
}
</script>
