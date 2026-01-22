import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.API_BASE_URL ?? "https://stageapis.findmyguru.com/api",
});

export type ListingSearchParams = {
  page?: string | string[];
  area?: string | string[];
  batch_type?: string | string[];
  rating?: string | string[];
  sortby?: string | string[];
};

export type ListingFilters = {
  slug: string;
  skill: string;
  page?: string;
  area?: string[];
  batch_type?: string;
  rating?: string;
  sortby?: string;
  teaching_mode?: string;
};

const SLUG_SPLIT = "-tutors-in-";

const normalizeSlugPart = (value: string) =>
  decodeURIComponent(value).replace(/-/g, " ").trim();

const normalizeValue = (value?: string | string[]) =>
  Array.isArray(value) ? value[0] : value;

const parseCsv = (value?: string | string[]) => {
  const raw = Array.isArray(value) ? value.join(",") : value;
  return raw
    ? raw
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean)
    : [];
};

export const parseListingSlug = (slug?: string) => {
  const safeSlug = slug ?? "";
  const [skillPart, locationPart = ""] = safeSlug.split(SLUG_SPLIT);
  return {
    skill: normalizeSlugPart(skillPart || safeSlug),
    location: normalizeSlugPart(locationPart || ""),
  };
};

export const buildListingFilters = (
  slug: string,
  searchParams: ListingSearchParams
): ListingFilters => {
  const { skill, location } = parseListingSlug(slug);
  const normalizedLocation = location.toLowerCase();
  const areaFromQuery = parseCsv(searchParams.area);
  const resolvedArea =
    areaFromQuery.length > 0
      ? areaFromQuery
      : normalizedLocation && normalizedLocation !== "online"
        ? [normalizedLocation]
        : undefined;

  return {
    slug,
    skill,
    page: normalizeValue(searchParams.page),
    batch_type: normalizeValue(searchParams.batch_type),
    rating: normalizeValue(searchParams.rating),
    sortby: normalizeValue(searchParams.sortby),
    area: resolvedArea,
    teaching_mode: normalizedLocation === "online" ? "Online" : undefined,
  };
};

export const fetchCourseListing = async (
  slug: string,
  searchParams: ListingSearchParams
) => {
  const params = buildListingFilters(slug, searchParams);
  const response = await api.get("/course/listing", { params });
  return response.data;
};
