/**
 * Hero sequence: 120 frames at 15fps.
 * Path: /public/sequence-2/ezgif-frame-001.jpg … ezgif-frame-120.jpg
 */
export const SEQUENCE_FRAME_COUNT = 120;
export const SEQUENCE_BASE_PATH = "/sequence-1/ezgif-frame-";
export const SEQUENCE_FPS = 15;
export const SEQUENCE_DURATION = SEQUENCE_FRAME_COUNT / SEQUENCE_FPS;

export function getSequenceFramePath(index: number): string {
  const oneBased = Math.max(0, Math.min(index, SEQUENCE_FRAME_COUNT - 1)) + 1;
  return `${SEQUENCE_BASE_PATH}${String(oneBased).padStart(3, "0")}.jpg`;
}
