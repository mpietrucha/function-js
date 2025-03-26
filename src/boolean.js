import { usePipeline } from '@/pipeline'
import { negate as useNegate } from 'lodash-es'

export { useNegate }

export const useConfirm = usePipeline(useNegate, useNegate)
