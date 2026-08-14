import { describe, expect, it } from "vitest";
import { CARRYOVER, LAB_PROJECTS, MERIDIAN, PROFILE, RESUME_PROJECTS } from "./portfolio";

describe("canonical portfolio content", () => {
  it("uses professional positioning without unsupported seniority", () => {
    expect(PROFILE.role).toBe("Product-focused Front-End Engineer");
    expect(JSON.stringify(PROFILE)).not.toMatch(/senior|self-taught|phone/i);
  });

  it("publishes Meridian and Carryover as the two verified flagships", () => {
    expect(MERIDIAN.path).toBe("/work/meridian");
    expect(CARRYOVER.path).toBe("/work/carryover");
    expect(CARRYOVER.liveUrl).toBe("https://carryover-6m1z.vercel.app");
    expect(RESUME_PROJECTS[0].title).toContain("Meridian");
    expect(RESUME_PROJECTS[1].title).toContain("Carryover");
  });

  it("keeps only Luxen and HALO in the technical lab", () => {
    expect(LAB_PROJECTS.map((project) => project.id)).toEqual(["luxen", "halo"]);
  });

  it("uses the verified Meridian passing count", () => {
    expect(MERIDIAN.evidence.find((item) => item.label === "passing tests")?.value).toBe("46");
  });

  it("uses verified Carryover release evidence", () => {
    expect(CARRYOVER.evidence.find((item) => item.label === "unit tests")?.value).toBe("25");
    expect(CARRYOVER.evidence.find((item) => item.label === "browser checks")?.value).toBe("105");
  });
});
