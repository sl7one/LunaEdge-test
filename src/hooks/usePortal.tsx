import React, { useState } from "react";

export default function usePortal() {
  const [portalIsVisible, setPortalIsVisible] = useState(false);
  return { portalIsVisible, setPortalIsVisible };
}
