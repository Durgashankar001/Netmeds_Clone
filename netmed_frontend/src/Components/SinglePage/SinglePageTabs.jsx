import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const SinglePageTabs = () => {
  return (
    <div>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Description</Tab>
          <Tab>Key Benefits</Tab>
          <Tab>Direction for Use/Dosage</Tab>
          <Tab>Safety Information/Precaution</Tab>
          <Tab>Other Information</Tab>
        </TabList>
        <TabPanels>
          {/* tab 1 */}
          <TabPanel>
            <p>
              INLIFE Guggul Extract Capsules contain safe, natural ingredients
              and is manufactured to high-quality standards. Each capsule
              contains 400 mg pure Guggul extract standardized to 2.5% Guggul
              Sterones. It is enriched with a high level of antioxidant that
              increases immunity and protects your body from diseases. It also
              rejuvenates our cells so that we stay strong and healthy. Guggul
              extract capsules supplement is a very useful herbal supplement for
              vocal cords, joint pain. It reduces lymph gland swelling and
              improves voice quality. It provides you with a healthy immune
              system and supports your connective tissues.
            </p>
          </TabPanel>

          {/* tab2 */}
          <TabPanel>
            <li> Helps in body purification.</li>
            <li> Aids in healthy cholesterol levels.</li>
            <li> Promotes healthy weight management.</li>
            <li> Natural source of Antioxidants.</li>
            <li> It is an ideal anti-inflammatory agent.</li>
            <li> Promotes liver’s abilit</li>
          </TabPanel>

          {/* tab 3 */}
          <TabPanel>
            <p>
              Take 1 capsule daily before your meals with water or as directed
              by a healthcare professional.
            </p>
          </TabPanel>

          {/* tab 4 */}
          <TabPanel>
            <p>
              Pregnant or lactating women, diabetics and people with known
              medical conditions and/or taking drugs should consult with a
              licensed physician prior to taking dietary supplements. Keep out
              of reach of children.
            </p>
          </TabPanel>

          {/* tab 5 */}
          <TabPanel>
            Disclaimer: The product information contained herein is for
            informational purposes only, and is not intended to diagnose, treat,
            or prevent any disease or health condition. Netmeds.com does not
            endorse the appropriateness or reliability of this informa
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default SinglePageTabs;
