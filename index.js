export
function badep(len, to_d) { // 这是一个 npm 上未注册的名字
  // console.debug({ len, to_d })
  if (to_d === 0) return []
  if (to_d < 0) throw Error('invalid to_d')
  if (!Number.isInteger(to_d)) throw Error('to_d should be an integer')
  if (len <= to_d) throw Error('len <= to_d')

  const result = []
  const step = len / to_d
  let count = 0
  let i = 0
  while(count < to_d) {
    result.push(Math.round((i + i+step)/2))
    i += step
    count++
  }
  return result
}
