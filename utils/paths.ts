import { dirname } from 'path';
import { mkdir } from 'fs/promises';

export async function ensureDirAndReturnPath(path: string) {
  await mkdir(dirname(path), { recursive: true });
  return path;
}
