import type { Emitter } from 'mitt'
import mitt from 'mitt'

interface Events {}

const emitter: Emitter<Events> = mitt<Events>()

export default emitter
