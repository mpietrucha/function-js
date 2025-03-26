import { useConfirm, useNegate } from '@/boolean'
import { isFunction } from 'lodash-es'

export const is = useConfirm(isFunction)

export const not = useNegate(is)
