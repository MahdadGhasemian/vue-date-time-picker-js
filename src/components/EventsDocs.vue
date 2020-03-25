<template>
  <div>
    <card title="@input">
      <date-picker
        value="1988/03/09"
        format="YYYY/MM/DD"
        @input="date = $event"
      />
      <code class="code">{{ date }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            value="1988/03/09"
            format="YYYY/MM/DD"
            @input="date=$event"
          &gt;&lt;/date-picker&gt;
          &lt;span&gt;{{ date }}&lt;/span&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          /**
           * @input
           * triggers when datepicker submitted.
           * returns formatted date as string.
           */
          "$event"
          type: String
          example: 1988 | 1988/03/09 | 1988/03/09 22:20 | 22:20 | ...
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
    <card title="@change">
      <date-picker
        v-model="date_1"
        format="YYYY/MM/DD"
        @change="dateMoment = $event"
      />
      <code class="code">{{ dateMoment.format('dddd DD MMMM YYYY') }}</code>
      <code class="code">{{ date_1 }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            v-model="date"
            format="YYYY/MM/DD"
            @change="dateMoment=$event"
          &gt;&lt;/date-picker&gt;
          &lt;span&gt;{{ dateMoment.format('dddd DD MMMM YYYY') }}&lt;/span&gt;
          &lt;span&gt;{{ date }}&lt;/span&gt;
        </highlight-code>
        <highlight-code lang="javascript" v-pre>
          import moment from 'moment';
          export default {
            data(){
              return {
                date: '1988/03/09',
                dateMoment: moment('1988/03/09', 'YYYY/MM/DD'),
              }
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </template>
      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          /**
           * @change
           * triggers when datepicker submitted.
           * returns moment object.
           */
          "$event"
          type: moment Object
        </highlight-code>
        <!-- eslint-enable -->
        <p>See <a href="http://momentjs.com/">momentjs</a></p>
      </template>
    </card>
    <card title="open/close">
      <date-picker @open="onOpen" @close="onClose" />
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code v-pre lang="html">
          &lt;date-picker @open="onOpen" @close="onClose"&gt;&lt;/date-picker&gt;
        </highlight-code>
        <highlight-code lang="javascript" v-pre>
          export default {
            methods: {
              onOpen(picker) {
                console.log('The datepicker is open');
              },
              onClose(picker){
                console.log('The datepicker was closed');
              }
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </template>
      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          /**
           * @close
           * triggers when datepicker closed.
           * returns null
           */
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      date: '',
      date_1: '1988/03/09',
      dateMoment: moment('1988/03/09', 'YYYY/MM/DD')
    }
  },
  methods: {
    onOpen() {
      // eslint-disable-next-line
      console.log('The datepicker is open')
    },
    onClose() {
      // eslint-disable-next-line
      console.log('The datepicker was closed')
    }
  }
}
</script>
