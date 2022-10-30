import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/Section";

import thumbPortfolio from "../public/images/contents/youtube-how-to-build-portfolio.jpg";
import thumbHowToUseInkdrop from "../public/images/contents/youtube-how-to-use-inkdrop.jpg";
import thumbFishWorkflow from "../public/images/contents/youtube-fish-workflow.jpg";
import thumbMyDeskSetup from "../public/images/contents/youtube-my-desk-setup.jpg";
import thumb500PaidUsers from "../public/images/contents/blog-500-paid-users.jpg";
import thumbFinancialGoal from "../public/images/contents/blog-financial-goal.png";
import thumbHowToPriceYourself from "../public/images/contents/blog-how-to-price-yourself.jpg";
import thumb50xFaster from "../public/images/contents/youtube-50x-faster.jpg";

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>

        <Section delay={0.1}>
          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="How to build a portfolio website"
              thumbnail={thumbPortfolio}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
            />
            <GridItem
              title="How to take notes in Markdown efficiently with Inkdrop"
              thumbnail={thumbHowToUseInkdrop}
              href="https://www.youtube.com/watch?v=-qBavwqc_mY"
            />
            <GridItem
              title="My Fish workflow"
              thumbnail={thumbFishWorkflow}
              href="https://www.youtube.com/watch?v=KKxhf50FIPI"
            />
            <GridItem
              title="My desk setup (Late 2020)"
              thumbnail={thumbMyDeskSetup}
              href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
            />
          </SimpleGrid> */}
        </Section>       
      </Container>
    </Layout>
  );
};

export default Posts;
