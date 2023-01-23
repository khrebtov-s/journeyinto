import { StudentInterface } from "./students";
import { RecordingInterface } from "./recording";

export interface DefaultTeacherInterface {
  user: number;
  slug?: string;
  city?: string;
  description?: string;
  image?: string;
  profile_title?: string;
  currency?: string;
  qualifications?: string;
  stripe_link?: string;
  token?: string;
  stripe_user_id?: string;
  style?: string;
  vimeo_url?: string;
  creator_type?: string;
}

export interface TeacherInterface extends DefaultTeacherInterface {
  email: string;
  first_name: string;
  last_name: string;
  links: {
    label: string;
    url: string;
  }[];
  classes: RecordingInterface[]; // teacher classes both bought and not bought by the student
  sample_classes: RecordingInterface[]; // free teacher classes
  telephone: string;
  subscribed: TeacherProductInterface[];
  product?: TeacherProductInterface;
  currency: string;
  news_events?: string;
}

export interface TeacherStatusInterface extends StudentInterface {
  creator: TeacherInterface;
  view_status: string;
}

export interface TeacherListInterface {
  name: string;
  slug: string;
}

export interface TeacherProductInterface {
  cost: string | number;
  frequency: string;
  end_period?: Date;
  id?: "string";
  status?: "string";
}
