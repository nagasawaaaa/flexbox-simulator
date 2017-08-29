<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        <h2>Setting</h2>
        <div class="flex-setting">

          <div class="form-group form-group-sm clearfix">
            <label class="col-sm-5 control-label" for="formGroupInputSmall">小要素の数</label>
            <div class="col-sm-7">
              <select class="form-control" v-on:change="changeItems(selected)" v-model="selected">
                <option v-for="n in selectedItems">{{n}}</option>
              </select>
            </div>
          </div>
          <div class="form-group form-group-sm clearfix" v-for="setting in containerStyleSetting">
            <label class="col-sm-5 control-label" v-html="setting.name"></label>
            <div class="col-sm-7">
              <label class="radio" v-for="(value, key) in setting.option" >
                <input type="radio" v-bind:value="value" v-model="containerStyle[setting.slug]" v-bind:name="setting.slug"> {{ value }}
              </label>
            </div>
          </div>

        </div>
        <!-- /.flex-setting -->
      </div>
      <!-- /.sidebar -->

      <div class="col-sm-7">
        <h2>Code</h2>
        <div class="flex-code">
          <textarea v-model="createCode" readonly></textarea>
        </div>
        <!-- /.flex-code -->
        <h2>Export</h2>
        <div class="flex-container" v-bind:style="containerStyle">
          <div v-for="item in items" class="flex-item">Item {{ item }}</div>
        </div>
        <!-- /.flex-container -->
      </div>
      <!-- /.main -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'flexbox',
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6],
      selectedItems: 16,
      selected: 6,
      exportCode: '',
      containerStyleSetting: {
        flexDirection: {
          name: 'flex-direction<br>（子要素の並ぶ向き）',
          slug: 'flex-direction',
          option: ['row', 'row-reverse', 'column', 'column-reverse']
        },
        flexWrap: {
          name: 'flex-wrap<br>（子要素の折り返し）',
          slug: 'flex-wrap',
          option: ['nowrap', 'wrap', 'wrap-reverse']
        },
        justifyContent: {
          name: 'justify-content<br>（水平方向の揃え）',
          slug: 'justify-content',
          option: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
        },
        alignItems: {
          name: 'align-items<br>（垂直方向の揃え）',
          slug: 'align-items',
          option: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']
        },
        alignContent: {
          name: 'align-content<br>（複数行にした時の揃え）',
          slug: 'align-content',
          option: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']
        }
      },
      containerStyle: {
        'flex-direction': 'row',
        'flex-wrap': 'nowrap',
        'justify-content': 'flex-start',
        'align-items': 'stretch',
        'align-content': 'stretch'
      }
    }
  },
  methods: {
    changeItems: function (value) {
      this.items = []
      for (let i = 1; i <= this.selected; i++) {
        this.items.push(i)
      }
    }
  },
  computed: {
    createCode: function () {
      let textObj = this.containerStyle
      let html = '.flex-container {\n'

      html += '\tdisplay: flex;\n'
      for (var prop in textObj) {
        if (textObj.hasOwnProperty(prop)) {
          html += '\t' + prop + ': ' + textObj[prop] + ';\n'
        }
      }
      html += '}'

      return html
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.flex-setting {
  background-color: #fff;
  padding: 10px;
}
.flex-container {
  background-color: #fff;
  display: flex;
  padding: 10px;
  overflow: hidden;
  min-height: 300px;
}
.flex-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  text-align: center;
}
.flex-code {
  textarea {
    width: 100%;
    resize: none;
    overflow: auto;
    height: 200px;
    padding: 10px;
  }
}
</style>
