import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PricingCard({
  title,
  subTitle,
  price,
  recommended,
  billingType,
  features,
}) {
  return (
    <Card className={recommended ? "border-primary" : null}>
      <CardBody>
        <h2>{title}</h2>
        <p className="mb-4">{subTitle}</p>
        <div className="display-3 d-flex justify-content-center">
          <FontAwesomeIcon
            icon="dollar-sign"
            className="mr-1"
            transform="shrink-3"
            style={{ fontSize: "20px" }}
          />
          <span style={{ lineHeight: "50px", fontWeight: "bolder" }}>
            {price}
          </span>
          <span style={{ fontSize: "18px", lineHeight: "90px" }}>
            /{billingType}
          </span>
        </div>
        <ul className="list-unstyled text-left mb-4">
          {features &&
            features.map((feature, index) => (
              <li
                {...(feature.status === "inactive" && {
                  className: "text-muted",
                })}
                key={index}
              >
                <FontAwesomeIcon
                  icon="check"
                  className={`mr-2 ${
                    feature.status === "active" && "text-success"
                  }`}
                  transform="shrink-3"
                />
                {feature.title}
              </li>
            ))}
        </ul>
        <Button block color="primary" {...(!recommended && { outline: true })}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
}

export default PricingCard;
