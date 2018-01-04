import { Action } from '../../action';

export interface EventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
}

export type EventListener = (
  type: string,
  listener: (event: Event) => void,
  options?: EventListenerOptions | boolean
) => void;

export type ListenFactory = (element: Element | Document | Window, events: string, options?: EventListenerOptions | boolean) => Action;
