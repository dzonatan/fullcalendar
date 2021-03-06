import { EmitterMixin } from '@fullcalendar/core'

/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/
export default abstract class ElementDragging {

  emitter: EmitterMixin

  constructor() {
    this.emitter = new EmitterMixin()
  }

  destroy() {
  }

  // if given true, should prevent dragstart+dragmove+dragend from firing
  abstract setIgnoreMove(bool: boolean): void

  setMirrorIsVisible(bool: boolean) {
    // optional if subclass doesn't want to support a mirror
  }

  setMirrorNeedsRevert(bool: boolean) {
    // optional if subclass doesn't want to support a mirror
  }

}
