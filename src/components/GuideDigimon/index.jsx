import React from "react";

import UnlockCard from "@site/src/components/UnlockCard";
import InfoBox from "@site/src/components/InfoBox";
import WarningBox from "@site/src/components/WarningBox";
import TipBox from "@site/src/components/TipBox";

export default function GuideDigimon({ guide }) {
  return (
    <>
      <UnlockCard
        title={guide.title}
        rank={guide.rank}
        attribute={guide.attribute}
        difficulty={guide.difficulty}
        time={guide.time}
        description={guide.description}
      />

      {guide.info && (
        <InfoBox>
          {guide.info}
        </InfoBox>
      )}

      <h2>Overview</h2>

      <p>{guide.overview}</p>

      <hr />

      <h2>Unlock Requirements</h2>

      <ul>
        {guide.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <hr />

      <h2>Required Items</h2>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Source</th>
          </tr>
        </thead>

        <tbody>
          {guide.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.source}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>Unlock Steps</h2>

      <ol>
        {guide.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {guide.warning && (
        <>
          <hr />

          <WarningBox>
            {guide.warning}
          </WarningBox>
        </>
      )}

      {guide.tips?.length > 0 && (
        <>
          <hr />

          <h2>Tips</h2>

          {guide.tips.map((tip, index) => (
            <TipBox key={index}>
              {tip}
            </TipBox>
          ))}
        </>
      )}
    </>
  );
}