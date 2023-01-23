export type TSignUpAttempt = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  telephone?: string;
  view_status: 'student' | 'teacher';
  acceptTC?: boolean;
  marketing?: boolean;
};
