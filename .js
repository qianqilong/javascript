class SXPromise {
  static PENDING = 'pending'
  static FULFILLEN = 'fulfilled'
  static REJECTED = 'rejected'
  static resolve(value) {
    return new SXPromise((resolve, reject) => {
      if (value instanceof SXPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }
  static reject(value) {
    return new SXPromise((resolve, reject) => {
      if (value instanceof SXPromise) {
        value.then(reject, reject)
      } else {
        reject(value)
      }
    })
  }
  static all(arrPromise) {
    return new SXPromise((resolve, reject) => {
      const arr = []
      arrPromise.forEach((item) => {
        item.then(
          (res) => {
            arr.push(res)
            if (arr.length === arrPromise.length) {
              resolve(arr)
            }
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
  static race(arrPromise) {
    return new SXPromise((resolve, reject) => {
      arrPromise.map((item) => {
        item.then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          },
        )
      })
    })
  }
  constructor(callback) {
    // 初始状态
    this.status = SXPromise.PENDING
    // 默认值
    this.value = null
    /**
     * 1.调用回调改变状态
     * 2.回调中逻辑错误抛给拒绝
     */
    try {
      callback(this.#resolve.bind(this), this.#reject.bind(this))
    } catch (error) {
      this.#reject.bind(this)(error)
    }

    // 等待的状态改变的数组
    this.callbacks = []
  }
  #resolve(value) {
    // 1.状态的唯一性
    if (this.status !== SXPromise.PENDING) return
    this.status = SXPromise.FULFILLEN
    this.value = value

    // 7.宏任务中的状态改变宏任务中代码先执行
    setTimeout(() => {
      // 执行等待的状态改变的函数
      this.callbacks.map((item) => {
        item.onFulfilled(this.value)
      })
    })
  }
  #reject(reason) {
    if (this.status !== SXPromise.PENDING) return
    this.status = SXPromise.REJECTED
    this.value = reason
    setTimeout(() => {
      this.callbacks.map((item) => {
        item.onRejected(this.value)
      })
    })
  }
  /**
   *
   * @param {*} onFulfilled  返回成功的结果
   * @param {*} onRejected   返回失败的结果
   * 1.只有不在等待状态才会执行函数
   * 2.调用then时不传失败函数不会报错
   * 3.then函数中出现逻辑错误调用失败结果
   * 4.then中的参数函数是异步执行的(把任务放入队列中)
   * 5.then是等待状态时要等待宏任务中的状态改变
   * 6.等待函数的逻辑错误处理
   * 7.宏任务中的状态改变宏任务中代码先执行
   *
   */
  then(onFulfilled, onRejected) {
    /* 2.调用then时不传失败成功函数不会报错*/
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => {
        // 11.then()不进行处理会发生穿透(你不处理交给下一个)
        return this.value
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {
        // return this.value
      }
    }
    /**
     * 8.then函数的返回值是新promise
     * 9.promise的状态是由改变状态的返回值决定
     * 10.then中发生错误返回的promise是异常状态
     * 11.then()不进行处理会发生穿透
     * 12.如果时promise是由Promise状态决定
     * 13.如果then返回的是promise是内置promise则报错
     */
    //  8.then函数的返回值是新promise
    const p = new SXPromise((resolve, reject) => {
      // 1.只有不在等待状态才会执行函数
      if (this.status === SXPromise.FULFILLEN) {
        // 4.then中的参数函数是异步执行的(把任务放入队列中)
        setTimeout(() => {
          this.#parse(p, onFulfilled(this.value), resolve, reject)
        })
      }
      // 5.then是等待状态时要等待宏任务中的状态改变
      if (this.status === SXPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.#parse(p, onFulfilled(value), resolve, reject)
          },
          onRejected: (value) => {
            // 3.then函数中出现逻辑错误调用失败结果
            this.#parse(p, onRejected(value), resolve, reject)
          },
        })
      }
      if (this.status === SXPromise.REJECTED) {
        setTimeout(() => {
          this.#parse(p, onRejected(this.value), resolve, reject)
        })
      }
    })
    return p
  }
  /**
   * @param {*} p 返回的promise
   * @param {*} result 结果
   * @param {*} resolve 成功的回调
   * @param {*} reject 失败的回调
   */
  #parse(p, result, resolve, reject) {
    if (p === result) {
      throw new TypeError('Chaining cycle detected')
    }
    try {
      // 9.promise的状态是由改变状态的返回值决定
      if (result instanceof SXPromise) {
        // 12.如果时promise是由Promise状态决定
        result.then(resolve, reject)
        //   (res) => {
        //     resolve(res)
        //   },
        //   (err) => {
        //     reject(err)
        //   },
        // )
      } else {
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  }
}

const p1 = new SXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('解决1')
  }, 1000)
})
const p2 = new SXPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('解决2')
  }, 2000)
})

SXPromise.race([p1, p2]).then((res) => {
  console.log(res)
})

