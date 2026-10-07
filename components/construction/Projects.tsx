"use client";

import { useState } from "react";
import {
  constructionProjects,
  projectFilters,
  type ProjectFilter,
} from "@/lib/construction";
import { Pill } from "./Pill";

export function ConstructionProjects() {
  const [filter, setFilter] = useState<ProjectFilter>("ALL PROJECTS");
  const visible =
    filter === "ALL PROJECTS"
      ? constructionProjects
      : constructionProjects.filter((project) => project.category === filter);
  const feature = visible[0];

  return (
    <section
      id="projects"
      className="page inset-grid"
      style={{ paddingBottom: "calc(220 * var(--u))" }}
    >
      <div className="flex flex-col" style={{ gap: "calc(44 * var(--u))" }}>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <h2 className="t-64">Explore our work in interactive 3D</h2>
          <Pill href="#projects">VIEW ALL PROJECTS</Pill>
        </div>
        <div className="flex flex-wrap" style={{ gap: "calc(12 * var(--u))" }} role="group" aria-label="Project categories">
          {projectFilters.map((item) => {
            const active = item === filter;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item)}
                className={`t-18 rounded-[40px] px-[calc(26*var(--u))] py-[calc(6*var(--u))] ${
                  active
                    ? "bg-[#e4ddcf] text-[#472313]"
                    : "border border-[rgba(71,35,19,0.28)] bg-[#fff8ec] text-[#472313]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="c-projects" style={{ marginTop: "calc(44 * var(--u))" }}>
        <img
          src={filter === "ALL PROJECTS" ? "/construction/project-featured.png" : feature.image}
          alt={filter === "ALL PROJECTS" ? "Featured residential building at dusk" : feature.title}
          width={1135}
          height={605}
          className="c-project-frame w-full object-cover object-bottom"
        />
        <div className="c-project-list">
          {visible.map((project) => (
            <article
              key={`${project.category}-${project.title}`}
              className="flex items-center bg-[#f8f0e2]"
              style={{
                gap: "calc(14 * var(--u))",
                borderRadius: "var(--radius-card)",
                minHeight: "calc(187 * var(--u))",
                padding: "calc(14 * var(--u)) calc(33 * var(--u)) calc(13 * var(--u)) calc(15 * var(--u))",
              }}
            >
              <img
                src={project.image}
                alt=""
                width={project.width}
                height={project.height}
                className="shrink-0 object-cover object-bottom"
                style={{
                  width: "calc(187 * var(--u))",
                  height: `calc(${project.height} * var(--u))`,
                  borderRadius: "calc(13 * var(--u))",
                }}
              />
              <div className="flex flex-col" style={{ gap: "calc(12 * var(--u))" }}>
                <p className="t-18 opacity-50">{project.category}</p>
                <p className="c-fs-24">{project.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
