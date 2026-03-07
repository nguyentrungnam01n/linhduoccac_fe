import * as auth from '@/api/auth';
import * as categories from '@/api/categories';
import * as contents from '@/api/contents';
import * as leads from '@/api/leads';
import * as media from '@/api/media';
import * as settings from '@/api/settings';

export const adminApi = {
  ...auth,
  ...categories,
  ...contents,
  ...leads,
  ...media,
  ...settings,
};
