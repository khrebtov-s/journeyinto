export type TStudentStepOnePayload = {
  teacherSlug: string;
};

export type TTeacherStepOnePayload = {
  vimeo_url: string;
  biography: string;
  addresses: { address: string }[];
  yourYoga: { style: string; qualification: string }[];
};

export type TTeacherStepTwoPayload = {
  account_details: {
    account_number: string;
    sort_code: string;
  };
  billing_details: {
    address_line_1: string;
    address_line_2: string;
    city: string;
    country: string;
    postcode: string;
  };
};
