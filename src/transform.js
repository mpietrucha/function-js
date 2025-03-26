import { flow as createPipeline, negate as useNegate } from 'lodash-es'

export { useNegate }

export const useConfirm = createPipeline(useNegate, useNegate)
