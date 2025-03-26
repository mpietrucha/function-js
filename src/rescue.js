import { useStartComposition } from '@/composition'
import { usePipeline } from '@/pipeline'
import { attempt, isError } from 'lodash-es'

export const useAttempt = source => {
    return useStartComposition(attempt, source)
}

export const useRescue = (source, fallback) => {
    return usePipeline(useAttempt(source), response => {
        if (isError(response)) {
            return fallback
        }

        return response
    })
}
