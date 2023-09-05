import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import Container from "@/components/atoms/container";
import PageTitle from "../../../../components/atoms/heading";
import {
  mission_vision,
  page_quote,
  page_title,
} from "@/dev/dummies/mission-vision";
import PageQuote from "../../../../components/atoms/quote";
import { IconAssembly } from "@tabler/icons-react";
import PageParagraph from "../../../../components/atoms/paragraph";
import React from "react";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AboutMissionVisionPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{ navigations: getNavigation("About"), name: "About" }}
      />
      <div className="space-y-40 min-h-screen">
        <section className="mt-32">
          <Container size="md">
            <PageTitle>School Leadership</PageTitle>
            <article className="mt-10">
              <PageParagraph>
                Jakarta Intercultural School is led by a team of experienced
                administrators under the direction of the Board of Management
                and governed by a Board of Trustees. They work together to
                ensure that every Mitra Kasih student gains a high-quality,
                fulfilling, consistent, and appropriate education.
              </PageParagraph>
            </article>
          </Container>
        </section>
      </div>
    </ContainerBase>
  );
}
