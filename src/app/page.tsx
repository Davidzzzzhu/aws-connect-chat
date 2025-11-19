"use client";

import { useEffect } from "react";

export default function HomePage() {
  const customerName = "David Test";
  const customerEmail = "david.test@example.com";
  const customerPhone = "1234567890";
  const platformName = "HeyRevia";

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Set up the amazon_connect function queue BEFORE loading the script
    (window as any).amazon_connect =
      (window as any).amazon_connect ||
      function () {
        ((window as any).amazon_connect.ac =
          (window as any).amazon_connect.ac || []).push(arguments);
      };

    // Configure the chat widget (these calls will be queued and processed when script loads)
    const amazon_connect = (window as any).amazon_connect;

    amazon_connect("styles", {
      iconType: "CHAT",
      openChat: { color: "#FFFFFF", backgroundColor: "#123456" },
      closeChat: { color: "#FFFFFF", backgroundColor: "#123456" },
    });
    amazon_connect(
      "snippetId",
      "QVFJREFIaFg3VVJ2dFRXb2IrUUdndUkvUzRJMnRnQ1NJL3Erc1JKT0lFQ3lCQlNlUEFHcCs3VGZoNWJUS1U3ZDRyRWJIZ2NmQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNMzZwR2FFcFV3WC9YZXF3NEFnRVFnQ3ZZR25FWURuU1V5VTBOSTdObDJVQ2dYVGFFcG5SN1M2Y1Q4aFdjSVpERHVZWEl0c0FDMllZL09ZUkI6OnV3M1BpcC9GL0p0Um5VQlF0aU80bkJhc2VDd0R3cHYvVWJxSnh6QmhIT2trdUdMdEQyYjNCQ0Y2RG1RUFNtMFZkOE5Ic3p3eVZWempvMTdnSUNhWFZzWTVaK1RPVkRzSEYxSDZwTEN3Vm9CZVo4cFdKMXZyTUJaLzhKQmgvMjdhUm5ZL1IrY3pIclBVTnZVWm4rNjArYVZvRFhtV3dRYz0="
    );
    amazon_connect("supportedMessagingContentTypes", [
      "text/plain",
      "text/markdown",
      "application/vnd.amazonaws.connect.message.interactive",
      "application/vnd.amazonaws.connect.message.interactive.response",
    ]);
    amazon_connect("contactAttributes", {
      PlatformName: platformName,
      Name: customerName,
      Email: customerEmail,
      Phone: customerPhone,
    });
    amazon_connect(
      "customerDisplayName",
      function (callback: (name: string) => void) {
        callback(customerName);
      }
    );

    // Load the external script AFTER setting up the queue and making configuration calls
    const script = document.createElement("script");
    script.src =
      "https://openloop.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js";
    script.async = true;
    script.id = "cd562cf1-c73d-48bf-b01c-998a2491a2a6";
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById(
        "cd562cf1-c73d-48bf-b01c-998a2491a2a6"
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [customerName, customerEmail, customerPhone, platformName]);

  return null;
}
