export
function badep(len, to_d) { // 这是一个 npm 上未注册的名字
  // console.debug({ len, to_d })
  if (to_d === 0) return []
  if (to_d < 0) throw Error('invalid to_d')
  if (!Number.isInteger(to_d)) throw Error('to_d should be an integer')
  if (len <= to_d) throw Error('len <= to_d')

  let opposite = false
  if (len / to_d < 1.5) { // !!! 不好解释
    to_d = len - to_d
    opposite = true
  }

  const result = []
  let i = 0
  let remaining = len
  while (true) {
    let step = Math.round(remaining / to_d)
    i += step // 被删除元素下标：步长对应的最后一个元素
    result.push(i - 1)

    to_d--
    remaining -= step
    if (remaining === 0)
      break
  }

  if (!opposite)
    return result

  const oppo_result = []
  for (let i=0; i<len; i++)
    if (!result.includes(i))
      oppo_result.push(i)
  return oppo_result
}
