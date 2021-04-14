import UploadImagePreview from "container/layout/components/UploadImagePreview";
import React from "react";

const QuickLookupScreen = () => {
  return (
    <div className="cs-quick-scan">
      <div>
        <UploadImagePreview />
      </div>
      <button className="cs-q-c-btn-trans">Dịch</button>
    </div>
  );
};

export default QuickLookupScreen;
