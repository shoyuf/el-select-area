配合el-data-table使用

```vue
<template>
  <el-data-table
      ref="contractsIndexList"
      v-bind="tableConfig"
      :customQuery="{}"
    ></el-data-table>
</template>
<script>
export default {
  data() {
    return {
      tableConfig: {
        url: '/api', // 接口地址
        searchForm: [
          {
            $id: 'area',
            $type: 'select-area',
            label: '加盟区域',
            $default: [],
            // inputFormat(row) {
            //   return [row.province, row.city, row.area]
            // },
            // outputFormat(value) {
            //   console.log(value);
            // },
            $el: {
              // placeholders: ['请选择省', '请选择市', '请选择区县'],
              // type: 'all',
              // size: 'mini',
              // type: 'code',
              // level: 2,
              // size: 'mini',
              // class: 'custom-select-area',
              // autoFill: false // 禁止动选择关联
            }
          },
        ]
      }
    }
  },
  methods: {
    getForm() {
      console.log(this.$refs.ruleForm.getFormValue())
    },
    updateForm() {
      this.$refs.ruleForm.updateForm({
        area: ['110000', '110100', '110106']
      })
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
}
</script>
```
