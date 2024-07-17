/** 从 len 个元素的数组中，删除 to_d 个元素，这些被删除的元素是比较均匀地分布于数组中。
 * chatgpt 说这叫“balancing deleting problem”，我在 google 上没搜到相关名称。
 * @param len 数组长度
 * @param to_d 要删除的元素个数
 * @returns 被删除元素的下标
 */
export
declare function badep(len: number, to_d: number): number[]
