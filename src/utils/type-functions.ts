import { Interpolation } from '@emotion/core'

export type StyleNames<T extends string[]> = { [name in T[number]]: Interpolation }