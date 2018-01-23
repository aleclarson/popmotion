import frame from 'framesync';
import action, { Action } from '../../action';

const everyFrame = (): Action => action(({ update }) => {
  let isActive = true;
  const startTime = frame.now();

  const nextFrame = () => {
    if (!isActive) return;
    update(frame.time - startTime);
    frame.once('update', nextFrame);
  };

  frame.once('update', nextFrame);

  return {
    stop: () => isActive = false
  };
});

export default everyFrame;
