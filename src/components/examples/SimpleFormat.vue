<template>
  <div>
    <card title="Formatting">
      <date-picker v-model="date" format="YYYY MMMM DD" />
      <code class="code">{{ date }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html">
          &lt;date-picker
            v-model="date"
            format="YYYY MMMM DD"
          /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>

      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          "format"
          type: String
          default:
            HH:mm                         //for time
            YYYY/MM/DD HH:mm              //for datetime
            YYYY/MM/DD                    //for date
            YYYY                          //for year
            MM                            //for month
          example:
            YY-MM-DD                      //{{ moment().format('YY-MM-DD') }}
            YY/MM/DD                      //{{ moment().format('YY/MM/DD') }}
            YY MMMM DD                    //{{ moment().format('YY MMMM DD') }}
            YYYY MMMM DD                  //{{ moment().format('YYYY MMMM DD') }}
            dddd DD MMMM YYYY             //{{ moment().format('dddd DD MMMM YYYY') }}
            dddd DD MMMM YYYY Time HH:mm  //{{ moment().format('dddd DD MMMM YYYY Time HH:mm') }}
        </highlight-code>
        <!-- eslint-enable -->
        See
        <a href="https://github.com/moment/moment/" target="_blank"> moment </a>
      </template>
    </card>

    <card title="Format only for display">
      <div style="max-width: 250px">
        <input
          v-model="name"
          type="text"
          placeholder="Name"
          class="form-control mb-2"
        />
        <input
          v-model="tel"
          type="tel"
          placeholder="Tel"
          class="form-control mb-2"
        />
        <date-picker
          v-model="birthday"
          format="YYYY-MM-DD HH:mm:ss"
          display-format="dddd DD MMMM YYYY"
          placeholder="Birthday"
          initial-value="1989-03-21 00:00:00"
        />
      </div>

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html">
          &lt;input type="text" v-model="user.name" placeholder="Name" class="form-control" /&gt;

          &lt;input type="tel" v-model="user.tel" placeholder="Tel" class="form-control" /&gt;

          &lt;date-picker
            v-model="user.birthday"
            format="YYYY-MM-DD HH:mm:ss"
            display-format="dddd DD MMMM YYYY"
          /&gt;
        </highlight-code>
        <highlight-code lang="javascript">
          data() {
            return {
              user: {
                name: '{{ name }}',
                tel: '{{ tel }}',
                birthday: '{{ birthday }}',
              }
            }
          }
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
      moment: moment,
      name: '',
      tel: '',
      birthday: ''
    }
  }
}
</script>
