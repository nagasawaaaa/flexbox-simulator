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
          <div class="form-group form-group-sm clearfix" v-for="setting in containerPropSetting">
            <label class="col-sm-5 control-label" v-html="setting.name"></label>
            <div class="col-sm-7">
              <p class="setting-item" v-for="(value, key) in setting.option">
                <span class="setting-item__tooltip">{{ value.desc }}</span>
                <label class="radio">
                  <input type="radio" v-bind:value="value.name" v-model="containerStyle[setting.slug]" v-bind:name="setting.slug"> {{ value.name }}
                </label>
              </p>
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
      selectedItems: 24,
      selected: 6,
      exportCode: '',
      containerPropSetting: {
        flexDirection: {
          name: 'flex-direction<br>（子要素の並ぶ向き）',
          slug: 'flex-direction',
          option: [
            {
              name: 'row',
              desc: '左から右に配置（初期値）'
            },
            {
              name: 'row-reverse',
              desc: '右から左に配置'
            },
            {
              name: 'column',
              desc: '上から下に配置'
            },
            {
              name: 'column-reverse',
              desc: '下から上に配置'
            }
          ]
        },
        flexWrap: {
          name: 'flex-wrap<br>（子要素の折り返し）',
          slug: 'flex-wrap',
          option: [
            {
              name: 'nowrap',
              desc: '折り返しせず、一行で配置（初期値）'
            },
            {
              name: 'wrap',
              desc: '折り返して、複数行で上から下へ配置'
            },
            {
              name: 'wrap-reverse',
              desc: '折り返して、複数行で下から上へ配置'
            }
          ]
        },
        justifyContent: {
          name: 'justify-content<br>（水平方向の揃え）',
          slug: 'justify-content',
          option: [
            {
              name: 'flex-start',
              desc: '行の開始位置から配置。横配置（row）の場合は左揃え。縦配置（column）の場合は上揃え（初期値）'
            },
            {
              name: 'flex-end',
              desc: '行末から配置。横配置（row）の場合は右揃え。縦配置（column）の場合は下揃え'
            },
            {
              name: 'center',
              desc: '中央揃え'
            },
            {
              name: 'space-between',
              desc: '最初と最後の子要素を両端に配置し、残りの均等間隔に配置'
            },
            {
              name: 'space-around',
              desc: '両端の子要素も含め、均等間隔に配置（左右にマージンが空く）'
            }
          ]
        },
        alignItems: {
          name: 'align-items<br>（垂直方向の揃え）',
          slug: 'align-items',
          option: [
            {
              name: 'stretch',
              desc: '親要素の高さに合わせて広げて配置（初期値）'
            },
            {
              name: 'flex-start',
              desc: '親要素の開始位置から配置。横配置（row）（row）の場合は上揃え。縦配置（column）（column）の場合は左揃え。'
            },
            {
              name: 'flex-end',
              desc: '親要素の終点から配置。横配置（row）の場合は下揃え。縦配置（column）の場合は右揃え。'
            },
            {
              name: 'center',
              desc: '上下中央揃え'
            },
            {
              name: 'baseline',
              desc: 'ベースラインで揃える'
            }
          ]
        },
        alignContent: {
          name: 'align-content<br>（複数行にした時の揃え。flex-wrapプロパティの値をnowrap以外に有効）',
          slug: 'align-content',
          option: [
            {
              name: 'stretch',
              desc: '親要素の高さに合わせて広げて配置（初期値）'
            },
            {
              name: 'flex-start',
              desc: '親要素の開始位置から配置。横配置（row）（row）の場合は上揃え。縦配置（column）（column）の場合は左揃え。'
            },
            {
              name: 'flex-end',
              desc: '親要素の終点から配置。横配置（row）の場合は下揃え。縦配置（column）の場合は右揃え。'
            },
            {
              name: 'center',
              desc: '上下中央揃え'
            },
            {
              name: 'space-between',
              desc: '最初と最後の子要素を上下の端に配置し、残りの均等間隔に配置'
            },
            {
              name: 'space-around',
              desc: '上下端にある子要素も含め、均等間隔に配置（上下にマージンが空く）'
            }
          ]
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
.setting-item {
  position: relative;
  &:hover {
    .setting-item__tooltip {
      opacity: 1;
      z-index: 100;

    }
  }
  &__tooltip {
    background-color: rgba(0,0,0,0.8);
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    padding: 10px;
    position: absolute;
    left: 50%;
    top: -10px;
    width: 280px;
    z-index: -1;
    opacity: 0;
    &:before {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      top: 50%;
      left: -5px;
      margin-top: -5px;
      content: "";
      border-width: 5px 5px 5px 0;
      border-right-color: rgba(0,0,0,0.8);
    }
  }
}
</style>
