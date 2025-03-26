import { useConfirm, useNegate } from '@/transform'
import { isFunction } from 'lodash-es'

export const is = useConfirm(isFunction)

export const not = useNegate(is)
