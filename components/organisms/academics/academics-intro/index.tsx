import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageQuote from "../../../atoms/quote";
import PageParagraph from "../../../atoms/paragraph";
import Figure from "@/components/molecules/figure";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";

interface Props {}

export default function AcademicsIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Academics</PageTitle>
        <PageQuote>
          From Early Years to High School, Mitra Kasih offers a premier learning
          environment that is accredited by the Western Association of Schools
          and Colleges, and the Council of International Schools.
        </PageQuote>

        <article className="columns-2 gap-12 space-y-8">
          <PageParagraph>
            The Mitra Kasih Early Years academic program is based on The
            Creative Curriculum® for preschool, a comprehensive early childhood
            educational system that has been shown to promote cognitive,
            physical, social/emotional, and language development of children.
          </PageParagraph>

          <PageParagraph>
            Like Mitra Kasih as a whole, the Mitra Kasih Elementary School
            curriculum adopts programs which demonstrate the best international
            standards, practices and results for student learning. We place
            strong emphasis on language arts and mathematics. To ensure a
            balanced curriculum, we provide programs in science and technology,
            social studies, modern language, fine arts and physical development.
          </PageParagraph>

          <PageParagraph>
            The Mitra Kasih Middle School curriculum emphasizes research-based
            teaching and learning practices through age-appropriate
            intellectual, physical, cultural and social experiences. There are a
            variety of classes and opportunities for students that introduce
            them to new areas of learning where they can start to develop
            passions.
          </PageParagraph>

          <PageParagraph>
            Based on international standards, the Mitra Kasih High School
            academic program is designed to prepare students for a university
            that fits them best. It includes options to take the International
            Baccalaureate (IB) and Advanced Placement (AP) diploma/courses. The
            more options students have to find the right path for them, the more
            success they will have now and in the future.
          </PageParagraph>
        </article>

        <div className="grid grid-cols-2 gap-8 mt-10">
          <Figure
            title="Early Years"
            image={getRandomImageUrl()}
            description="Ages 3-6"
            linkLabel="Find Out More"
            linkHref="#"
            size="sm"
          />

          <Figure
            title="Elementary School"
            image={getRandomImageUrl()}
            description="Grades 1 to 5"
            linkLabel="Find Out More"
            linkHref="#"
            size="sm"
          />

          <Figure
            title="Middle School"
            image={getRandomImageUrl()}
            description="Grades 6 to 8"
            linkLabel="Find Out More"
            linkHref="#"
            size="sm"
          />

          <Figure
            title="High School"
            image={getRandomImageUrl()}
            description="Grades 9 to 12"
            linkLabel="Find Out More"
            linkHref="#"
            size="sm"
          />
        </div>
      </Container>
    </section>
  );
}
