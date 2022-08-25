class Scheduler {
	constructor(limit) {
		// 当前执行异步函数数量
		this.count = 0
		// 暂存异步函数队列
		this.taskList = []
		// 最大可同步执行的异步函数数量
		this.limit = limit
	}
	async add(promiseCreator) {
		// 如果当前执行异步函数的数量 大于 最大可同步执行的异步函数数量
		if (this.count >= this.limit) {
			// 创建一个Promise 将resolve推进任务队列 —— 此时Promise的状态未pending 持续await
			await new Promise(resolve => {
				this.taskList.push(resolve)
			})
		}
		// 当前执行的异步函数数量 +1
		this.count++
		// 等待异步任务的结束
		await promiseCreator()
		// 当前执行的异步函数数量 -1
		this.count--
		// 如果有等待的异步任务
		if (this.taskList.length > 0) {
			// 释放 taskList 中的 resolve 函数,解除上面的pending状态
			this.taskList.shift()()
		} 
	}
}

const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})
  
const scheduler = new Scheduler(2);
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}
  
  
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');