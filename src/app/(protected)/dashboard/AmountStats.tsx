import { namespaceTranslation } from "@/helper/i18n";
import React from "react";

const t = namespaceTranslation("charts");

function AmountStats({}): React.JSX.Element {
  return (
    <div className="stats bg-base-100 shadow">
      <div className="stat">
        <div className="stat-title">{t("Amount to be Collected")}</div>
        <div className="stat-value">$25,600</div>
        <div className="stat-actions">
          <button className="btn btn-xs">{t("View Users")}</button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">{t("Cash in hand")}</div>
        <div className="stat-value">$5,600</div>
        <div className="stat-actions">
          <button className="btn btn-xs">{t("View Members")}</button>
        </div>
      </div>
    </div>
  );
}

export default AmountStats;
