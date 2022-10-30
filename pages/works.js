import { Container, Box, SimpleGrid, Divider, Heading } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Section from "../components/Section";
import Layout from "../components/layouts/article";
import thumbBlog from "../public/images/works/blog01.png";
import thumbCuttonBeach from "../public/images/works/cottonbeach01.png";
import thumbCryptoticks from "../public/images/works/cryptoticks01.png";
import thumbDaplan from "../public/images/works/daplan01.png";
import thumbEpicBlog from "../public/images/works/epicblog01.png";
import thumbFirstPorto from "../public/images/works/first-porto01.png";
import thumbGulugulu from "../public/images/works/gulugulu01.png";
import thumbTravelAdvisor from "../public/images/works/traveladvisor01.png";
import thumbSecondPorto from "../public/images/works/secondporto01.png";

const Works = () => {
  return (
	<Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="cuttonbeach" title="Cutton Beach" thumbnail={thumbCuttonBeach}>
            A website for searching and finding hotel or villa
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="cryptoticks"
            title="Cryptoticks"
            thumbnail={thumbCryptoticks}
          >
            Analize and following news about cryptocurrencies
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="daplan"
            title="Daplan Landing Page"
            thumbnail={thumbDaplan}
          >
            Little slicing landing page ui from fixma mock design to code  
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="epicentrum" thumbnail={thumbEpicBlog} title="Epicentrum Blog">
            Awesome blog website
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="firstporto" thumbnail={thumbFirstPorto} title="First Portofolio Project">
            First portofolio project 
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="gulugulu" thumbnail={thumbGulugulu} title="Gulugulu Search Engine">
            Google clone project
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="traveladvice" thumbnail={thumbTravelAdvisor} title="Travel Advisor">
            Searching and finding place for vacation
          </WorkGridItem>
        </Section>
        <Section delay={0.7}>
          <WorkGridItem id="secondporto" thumbnail={thumbSecondPorto} title="Second Portofolio">
            My second Portofolio
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* OLD WORKS */}
      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="blog" thumbnail={thumbBlog} title="Blog-site">
            first project about blog-site from free news API
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
	 </Layout>
  );
};

export default Works;
