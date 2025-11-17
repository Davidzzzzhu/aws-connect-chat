"use client";

import { useEffect } from "react";

export default function HomePage() {
  const customerName = "David Test";
  const customerEmail = "david.test@example.com";
  const customerPhone = "1234567890";
  const platformName = "HeyRevia";

  useEffect(() => {
    // Inline the exact script from chat_include.html
    const scriptContent = `
      (function(w, d, x, id){
    s=d.createElement('script');
    s.src='https://openloop.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
    s.async=1;
    s.id=id;
    d.getElementsByTagName('head')[0].appendChild(s);
    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
  })(window, document, 'amazon_connect', 'cd562cf1-c73d-48bf-b01c-998a2491a2a6');
  amazon_connect('styles', { iconType: 'CHAT', openChat: { color: '#FFFFFF', backgroundColor: '#123456' }, closeChat: { color: '#FFFFFF', backgroundColor: '#123456'} });
  amazon_connect('snippetId', 'QVFJREFIaFg3VVJ2dFRXb2IrUUdndUkvUzRJMnRnQ1NJL3Erc1JKT0lFQ3lCQlNlUEFHcCs3VGZoNWJUS1U3ZDRyRWJIZ2NmQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNMzZwR2FFcFV3WC9YZXF3NEFnRVFnQ3ZZR25FWURuU1V5VTBOSTdObDJVQ2dYVGFFcG5SN1M2Y1Q4aFdjSVpERHVZWEl0c0FDMllZL09ZUkI6OnV3M1BpcC9GL0p0Um5VQlF0aU80bkJhc2VDd0R3cHYvVWJxSnh6QmhIT2trdUdMdEQyYjNCQ0Y2RG1RUFNtMFZkOE5Ic3p3eVZWempvMTdnSUNhWFZzWTVaK1RPVkRzSEYxSDZwTEN3Vm9CZVo4cFdKMXZyTUJaLzhKQmgvMjdhUm5ZL1IrY3pIclBVTnZVWm4rNjArYVZvRFhtV3dRYz0=');
  amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown', 'application/vnd.amazonaws.connect.message.interactive', 'application/vnd.amazonaws.connect.message.interactive.response' ]);
  amazon_connect('contactAttributes', {
        PlatformName: ${platformName},
        Name: ${customerName},
        Email: ${customerEmail},
        Phone: ${customerPhone},
      });
  amazon_connect('customerDisplayName', function(callback) {
    const name = ${customerName};
    callback(name);
  });
    `;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = scriptContent;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
