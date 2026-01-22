import type { CourseCardHorizontalProps } from "./types";

export const pickList = (data: unknown): CourseCardHorizontalProps[] => {
  if (!data || typeof data !== "object") return [];
  const record = data as Record<string, unknown>;
  const nested = record.data;
  if (nested && typeof nested === "object") {
    const nestedRecord = nested as Record<string, unknown>;
    if (Array.isArray(nestedRecord.data)) {
      return nestedRecord.data as CourseCardHorizontalProps[];
    }
  }
  return [];
};

export const getAvailabilityMessage = (skill: string, location: string) => {
  if (location.toLowerCase() === "online") {
    return `${skill || "Tutors"} available online`;
  }
  if (location) {
    return `${skill || "Tutors"} not found in ${location}`;
  }
  return "No tutors found for this query";
};

export const stripTags = (value?: string) =>
  value ? value.replace(/<[^>]*>/g, "").trim() : "";

export const formatMode = (mode?: string) => {
  if (mode === "Both") return "Online & Offline";
  if (mode) return mode;
  return "Mode";
};
