/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.gif';
declare module '*.svg';
declare module eruda {
  export function init(): void;
  export function destroy(): void;
  export const _isInit: boolean;
}
