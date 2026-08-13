import { describe, expect, it } from "vitest";
import { LAB_PROJECTS, MERIDIAN, PROFILE, RESUME_PROJECTS } from "./portfolio";

describe("canonical portfolio content", () => {
  it("uses professional positioning without unsupported seniority", () => {
    expect(PROFILE.role).toBe("Product-focused Front-End Engineer");
    expect(JSON.stringify(PROFILE)).not.toMatch(/senior|self-taught|phone/i);
  });

  it("keeps Meridian as the sole published flagship", () => {
    expect(MERIDIAN.path).toBe("/work/meridian");
    expect(RESUME_PROJECTS[0].title).toContain("Meridian");
    expect(JSON.stringify(RESUME_PROJECTS)).not.toMatch(/Carryover/i);
  });

  it("keeps only Luxen and HALO in the technical lab", () => {
    expect(LAB_PROJECTS.map((project) => project.id)).toEqual(["luxen", "halo"]);
  });

  it("uses the verified Meridian passing count", () => {
    expect(MERIDIAN.evidence.find((item) => item.label === "passing tests")?.value).toBe("46");
  });
});
