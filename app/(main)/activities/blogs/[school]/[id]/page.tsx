"use client";

import { useParams } from "next/navigation";
import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import ActivitiesBlog from "@/components/organisms/activities/activities-blog";
import { useEffect, useState } from "react";
import { BlogDetail, Blogs } from "@/data/api";
import { Blog } from "@/types/app";
import ActivitiesDetail from "@/components/organisms/activities/activities-detail";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesBlogs(props: Props) {
  const {} = props;
  const params = useParams();
  const { id, school } = params;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Activities"),
          name: "Activities",
        }}
        header={{
          title: "Activities",
          description:
            "Every student is encouraged to join clubs, organizations, teams, and groups to follow their passions, try new things, and further develop their learning at Mitra Kasih.",
          image:
            "/images/DOKUMENTASI/ACTIVITY 2022-2023/P/DSC06010 (Large).JPG",
        }}
      />

      <div className="space-y-40">
        <ActivitiesDetail
          school={school as "sd" | "smp" | "sma" | undefined}
          id={id as string}
        />
      </div>
    </ContainerBase>
  );
}
