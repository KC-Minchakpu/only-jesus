"use client";

import { IKContext } from "imagekitio-react";

export default function ImageKitProvider({ children }) {
  return (
    <IKContext urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}>
      {children}
    </IKContext>
  );
}
