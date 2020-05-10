import React, { useState } from "react";
import { Row, Col, CustomInput } from "reactstrap";
import PricingCard from "../helper-components/PricingCard";
import { basicFeatures, statndardFeatures, advancedFeatures } from "../../data";

function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const handleChange = () => {
    setIsYearly(!isYearly);
  };
  return (
    <section className="text-center">
      <div className="container">
        <h2>Pricing</h2>
        <hr className="hr-short" />
        <div className="d-flex justify-content-center">
          <span>Monthly</span>
          <CustomInput
            className="ml-2"
            type="switch"
            id="pricing-checkbox"
            checked={isYearly}
            onChange={handleChange}
          />
          <span>Yearly</span>
        </div>
        <Row className="mt-5">
          <Col lg="4">
            <PricingCard
              title="Basic"
              subTitle="Start your free journey"
              price={isYearly ? "108" : "9"}
              billingType={isYearly ? "yearly" : "monthly"}
              features={basicFeatures}
            />
          </Col>
          <Col lg="4">
            <PricingCard
              title="Standard"
              subTitle="Most popular among users"
              price={isYearly ? "180" : "20"}
              recommended
              billingType={isYearly ? "yearly" : "monthly"}
              features={statndardFeatures}
            ></PricingCard>
          </Col>
          <Col lg="4">
            <PricingCard
              title="Advanced"
              subTitle="All possible options in a single frame"
              price={isYearly ? "450" : "50"}
              billingType={isYearly ? "yearly" : "monthly"}
              features={advancedFeatures}
            ></PricingCard>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Pricing;
