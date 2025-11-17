"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Inline the exact script from chat_include.html
    const scriptContent = `
      (function(w, d, x, id){
    s=d.createElement('script');
    s.src='https://openloopconn-uat.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
    s.async=1;
    s.id=id;
    d.getElementsByTagName('head')[0].appendChild(s);
    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
  })(window, document, 'amazon_connect', 'f1ca75e0-f758-4d61-8cfd-996108196325');
  amazon_connect('styles', { iconType: 'CHAT', openChat: { color: '#FFFFFF', backgroundColor: '#123456' }, closeChat: { color: '#FFFFFF', backgroundColor: '#123456'} });
  amazon_connect('snippetId', 'QVFJREFIaFg3VVJ2dFRXb2IrUUdndUkvUzRJMnRnQ1NJL3Erc1JKT0lFQ3lCQlNlUEFGSG1sNUFNM0RvcGJZY3Q2ei8rK0IwQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNcVdkM3FyL25HelZwSnVSMEFnRVFnQ3V1MmxsVkdkYVRqOHB3MHM4OGllV1NGTUZKaGcvcEhYcjZJdUFnZk5hS1krVkpSSDA0SjJyTlY4WVQ6OlR3akxUS29DdVVNbEtmblExRk8yNVVTc1liN3MzbThXQ1k0WGpFZEFDTDZ6QUovNGRrTzlpa3EzdUhreCswSUx2VmFUdlB3K0hVenI1NTl2V2poV0xiNVJoU25TM3ljQnFGenJLY2J5U1RHMktSYVVYMC9wZmNnemZwZ1JFOHFCQWdZTU1JTklsSUNYeTVNV1NxSno1bXhia0FoRXZiYz0=');
  amazon_connect('supportedMessagingContentTypes', [ 'text/plain', 'text/markdown', 'application/vnd.amazonaws.connect.message.interactive', 'application/vnd.amazonaws.connect.message.interactive.response' ]);
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
