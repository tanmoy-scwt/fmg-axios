export type CourseCardHorizontalProps = {
  id: number | string;
  course_logo?: string;
  course_logo_preview?: string;
  course_name?: string;
  f_name?: string;
  course_content?: string;
  users_description?: string;
  year_of_exp?: string | number;
  duration_value?: string | number;
  duration_unit?: string;
  average_rating?: number;
  teaching_mode?: "Online" | "Offline" | "Both" | string;
  skills?: string;
  featured?: number;
  slug?: string;
};

export type CourseListingViewProps = {
  data: unknown;
  skill: string;
  location: string;
};
