import { ViewStatuses } from '@src/app/store/modules/user/user.types';

/**
 * Get user view status title
 *
 * @param status
 */
export const getUserViewStatusTitle = (status: ViewStatuses) => {
  switch (status) {
    case ViewStatuses.STUDENT:
      return 'student';

    case ViewStatuses.TEACHER:
      return 'creator';

    default:
      return 'unknown';
  }
};

export * from './forms';
export * from './messages';