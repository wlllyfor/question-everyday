var app = new Vue({
  el: '#app',
  data: {
    arr: ['w', 'e', '', 'a', 'r', 'e', '', ''],
    msg: '',
    msg1: ''
  },
  methods: {
    start() {
      this.arr = ['w', 'e', '', 'a', 'r', 'e', '', '']
      $('#imgI').animate({
        left: '275px'
      }, 500)
      $('#imgJ').animate({
        left: '375px'
      }, 500, () => {
        this.msg = '指针 i 指向原来有效字符的末尾 e，指针 j 指向新数组的末尾'
      })
    },
    next1() {
      this.arr = ['w', 'e', '', 'a', 'r', 'e', '', 'e']
      this.msg = '指针 i 指向内容不是空格，将指针 i 指向的内容赋值给 j'
      $('#imgI').animate({
        left: '275px'
      }, 500)
      $('#imgJ').animate({
        left: '375px'
      }, 500)
    },
    next2() {
      this.msg = '指针 i 指向内容不是空格，将指针 i 指向的内容赋值给 j'
      $('#imgI').animate({
        left: '225px'
      }, 400)
      $('#imgJ').animate({
        left: '325px'
      }, 400, () => {
        this.arr = ['w', 'e', '', 'a', 'r', 'e', 'r', 'e']
      })
    },
    next3() {
      this.msg = '指针 i 指向内容不是空格，将指针 i 指向的内容赋值给 j'
      $('#imgI').animate({
        left: '175px'
      }, 400)
      $('#imgJ').animate({
        left: '275px'
      }, 400, () => {
        this.arr = ['w', 'e', '', 'a', 'r', 'a', 'r', 'e']
      })
    },
    next4() {
      $('#imgI').animate({
        left: '125px'
      }, 400)
      $('#imgJ').animate({
        left: '225px'
      }, 400, () => {
        this.msg = '指针 i 指向内容是空格，将指针 j 改为 0'
        this.arr = ['w', 'e', '', 'a', '0', 'a', 'r', 'e']
      })
    },
    next5() {
      $('#imgI').animate({
        left: '125px'
      }, 400)
      $('#imgJ').animate({
        left: '175px'
      }, 400, () => {
        this.msg = '将指针 j 继续左移，指向改为 2'
        this.arr = ['w', 'e', '', '2', '0', 'a', 'r', 'e']
      })
    },
    next6() {
      $('#imgI').animate({
        left: '112px'
      }, 400)
      $('#imgJ').animate({
        left: '130px'
      }, 400, () => {
        this.msg = '将指针 j 继续左移，指向改为 %'
        this.arr = ['w', 'e', '%', '2', '0', 'a', 'r', 'e']
        this.msg1 = '当指针 i 和指针 j 走到一起时，循环结束'
      })
    }
  }
})



