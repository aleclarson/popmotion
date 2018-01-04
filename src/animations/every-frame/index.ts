import { currentTime, currentFrameTime, onFrameUpdate } from 'framesync';
import action, { Action } from '../../action';

const frame = (): Action => action(({ update }) => {
  let isActive = true;
  const startTime = currentTime();

  const nextFrame = () => {
    if (!isActive) return;
    update(currentFrameTime() - startTime);
    onFrameUpdate(nextFrame);
  };

  onFrameUpdate(nextFrame);

  return {
    stop: () => isActive = false
  };
});

export default frame;
