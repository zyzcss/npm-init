export const globalKey = 'cybertron-';

export function getClassName(name: string, status?: string, ele?: string): string {
  if (!name) {
    return globalKey;
  }
  if (name && ele && status) {
    return `${globalKey}${name}_${ele}--${status}`;
  }
  if (!ele && !status) {
    return `${globalKey}${name}`;
  }
  if (!status) {
    return `${globalKey}${name}_${ele}`;
  }
  if (!ele) {
    return `${globalKey}${name}--${status}`;
  }
  return globalKey;
}
