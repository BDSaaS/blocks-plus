<template>
  <div>
    <div class="b-list">
      <table>
        <thead>
        <tr>
          <th v-if="rowSelection">
            <b-checkbox
                v-model="selectedAll"
                @change="selectAllChange"
            ></b-checkbox>
          </th>
          <th v-for="(col, index) of columns" :key="index">
            {{ col.title }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="row of tableData"
            :key="row.key"
            @mouseenter="enterHandler"
            @mouseleave="leaveHandler"
        >
          <td v-if="rowSelection">
            <b-checkbox v-model="row.selected"></b-checkbox>
          </td>
          <td v-for="(col, index) of columns" :key="index">
            <slot name="bodyCell" :column="col.dataIndex" :record="row">
              {{ row[col.dataIndex] }}
            </slot>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="list-footer">
        <slot name="footer"></slot>
      </div>
    </div>

    <teleport to="body">
      <transition name="slide-fade">
        <div v-if="showFocusMask" class="tr-focus-mask"/>
      </transition>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "BList",
  props: {
    tableData: {
      type: Array,
      require: true
    },
    columns: {
      type: Array,
      require: true
    },
    rowSelection: {
      type: Object,
      default: null,
    },
  },
  watch: {
    tableData: {
      handler(val) {
        this.selectedAll = val.filter((row) => !row.selected).length === 0
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    selectedRows() {
      return this.tableData.filter((row) => row.selected)
    },
    selectedRowKeys() {
      return this.selectedRows.map((row) => row.key)
    }
  },
  data() {
    return {
      showFocusMask: false,
      selectedAll: false,
      focusTime: 0,
      FOCUS_TIME: 2,
      timer: null
    }
  },
  methods: {
    enterHandler(e) {
      this.timer = window.setInterval(() => {
        this.focusTime++
        if (this.focusTime === this.FOCUS_TIME) {
          clearInterval(this.timer)
          ;(e.target).classList.add('focused')
          this.showFocusMask = true
        }
      }, 1000)
    },
    leaveHandler(e) {
      clearInterval(this.timer)
      ;(e.target).classList.remove('focused')
      this.showFocusMask = false
      this.focusTime = 0
    },
    selectAllChange(val) {
      if (val) {
        this.tableData.forEach((row) => (row.selected = true))
      } else {
        this.tableData.forEach((row) => (row.selected = false))
      }

      if (typeof this.rowSelection?.onChange === 'function') {
        this.rowSelection.onChange(this.selectedRowKeys, this.selectedRows)
      }

      this.$emit('selectAllChange', val)
    }
  }
}
</script>

<style lang="less">
.b-list {
  background: #fff;

  table {
    table-layout: auto;
    width: 100%;
    text-align: left;
    border-radius: 2px 2px 0 0;
    border-collapse: separate;
    border-spacing: 0;
  }

  thead {
    tr {
      height: 68px;
      box-shadow: 0 10px 24px 0 rgba(36, 41, 52, 0.05);
      border-radius: 4px 4px 0 0;
    }

    th {
      position: relative;
      text-align: left;
      transition: background .3s ease;

      padding-left: 20px;
      padding-right: 20px;
      border-bottom: 1px solid #EDF1F6;

      font-size: 14px;
      font-weight: 400;
      color: #9CA6B9;
      line-height: 14px;
    }
  }

  tbody {
    tr {
      position: relative;
      height: 80px;
      transition: .3s ease-in-out;

      &.focused {
        z-index: 2;
        transform: scale3d(1.2, 1.2, 1.2);
        box-shadow: 0 0 36px 0 rgba(100, 107, 122, 0.4);
      }

      &:hover {
        box-shadow: 0 0 36px 0 rgba(100, 107, 122, 0.4);
      }

      &:last-child td {
        border-bottom: 1px solid #EDF1F6;
      }
    }

    td {
      height: 14px;
      font-size: 14px;
      font-weight: 400;
      color: #646B7A;
      line-height: 14px;

      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .list-footer {
    min-height: 79px;
  }
}

.tr-focus-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: hsla(0, 0%, 100%, 0.75);
  backdrop-filter: blur(5px);
}

/*========== animate ==========*/

.slide-fade-active, .slide-fade-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
