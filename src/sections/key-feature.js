/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Clean and Hygienic Facilities",
    title: "Clean and Hygienic Facilities",
    text: "Maintain impeccable cleanliness throughout your massage center. This includes clean linens, sanitized equipment, and spotless treatment rooms.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Online Booking",
    title: "Online Booking",
    text: "Implement an easy-to-use online booking system that allows clients to schedule appointments conveniently from their computers or mobile devices.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Holistic Wellness Services",
    title: "Holistic Wellness Services",
    text: "Diversify your services by offering complementary holistic wellness treatments, such as acupuncture, reflexology, facials, or yoga classes.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Membership Programs",
    title: "Membership Programs",
    text: "Create membership programs or packages that reward loyal customers with discounts, special offers, or exclusive access to certain services.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
