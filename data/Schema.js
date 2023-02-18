import React from "react";

const Schema = ({ jsonSchema }) => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema) }} />
  </>
);

export default Schema;
