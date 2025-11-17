'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Inline the exact script from chat_include.html
    const scriptContent = `
      (function (w, d, x, id) {
        s = d.createElement('script');
        s.src = 'https://openloopconn-dev.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
        s.async = 1;
        s.id = id;
        d.getElementsByTagName('head')[0].appendChild(s);
        w[x] = w[x] || function () { (w[x].ac = w[x].ac || []).push(arguments) };
      })(window, document, 'amazon_connect', 'c16e02ca-e4c7-4a5c-99ea-07b7daf80b4b');

      amazon_connect('styles', { iconType: 'CHAT', openChat: { color: '#fbfaff', backgroundColor: '#e90a54' }, closeChat: { color: '#fbfaff', backgroundColor: '#e90a54' } });
      amazon_connect('snippetId', 'QVFJREFIaFg3VVJ2dFRXb2IrUUdndUkvUzRJMnRnQ1NJL3Erc1JKT0lFQ3lCQlNlUEFINFIxR2JkOEFBc2VYVjVPcmpQd2dOQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNWCt0bHRwL3FxSVFmZ05raEFnRVFnQ3Q0QnIxYnUrbXJGazRKcUcycSswZW9vMjhyeGw0cFVHQURlLzFTZWFyMTVuV0F3bUdUSG5ZazIxR2I6OnFzUVNwZjErK25wVG9YMGx5MGxVOWp4b3BIR3ZjV1RQZVRPTTRxTTBLTVdob04rV3BsZ1RLdlYybUNyOG9hYzU0U3BoSjk0ZkdLZ2VkK084TGpNNmJCeDFvNnBIMXBpVUVPbTJQSm5OZG53TmpyRlVRekJDVGk1QThwUlM0V2VvUDdGaWp5UE55NVZHWERzVUREbVRPaVZ0bVp1UmYrWT0=');
      amazon_connect('supportedMessagingContentTypes', ['text/plain', 'text/markdown', 'application/vnd.amazonaws.connect.message.interactive', 'application/vnd.amazonaws.connect.message.interactive.response']);
      
      amazon_connect('customDisplayNames', {
        header: {
          headerMessage: "Welcome to Openloop!",
          logoUrl: 'https://mma.prnewswire.com/media/1804134/OpenLoop_Logo.jpg?p=facebook',
          logoAltText: "Openloop Logo",
        },
        transcript: {
          systemMessageDisplayName: "Agent",
          botMessageDisplayName: "Agent"
        },
        footer: {
          textInputPlaceholder: "Type Here!",
          endChatButtonText: "End Session",
          closeChatButtonText: "Close Chat",
          startCallButtonText: "Start Call"
        },
      })

      amazon_connect('customizationObject', {
        header: {
          dropdown: true,
          dynamicHeader: false,
          hideTranscriptDownloadButton: true
        },
        transcript: {
          hideDisplayNames: false,
          eventNames: {
            customer: "Jianfei Chen",
            agent: "OHL Ops",
            bot:"Agent",
            system:"Agent",
            supervisor: "OHL Supervisor"
          },
          displayIcons: true,
          iconSources: { 
              botMessage: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
              systemMessage: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
              agentMessage: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
              customerMessage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }
        }
      });

      amazon_connect('customStyles', {
        global: {
          frameWidth: '500px',
          frameHeight: '700px',
          textColor: '#fe3251',
          fontSize: '20px',
          footerHeight: '120px',
          headerHeight: '120px',
        },
        header: {
          headerTextColor: '#fbfaff',
          headerBackgroundColor: '#e90a54',
        },
        transcript: {
          messageFontSize: '13px',
          messageTextColor: '#1f1e1f',
          widgetBackgroundColor: '#f6f4ff',
          agentMessageTextColor: '#1f1e1f',
          systemMessageTextColor: '#1f1e1f',
          customerMessageTextColor: '#1f1e1f',
          agentChatBubbleColor: '#e9e9e9',
          systemChatBubbleColor: '#e9e9e9',
          customerChatBubbleColor: '#f9f2f9',
        },
        footer: {
          buttonFontSize: '20px',
          buttonTextColor: '#fbfaff',
          buttonBorderColor: '#e90a54',
          buttonholer: '#e90a54',
          buttonBackgroundColor: '#e90a54',
          backgroundColor: '#e90a54',
          footerBackgroundColor: '#0e80f2',
          backgroundColor: '#0e80f2',
          startCallButtonTextColor: '#541218',
          startChatButtonBorderColor: '#fe3',
          startCallButtonBackgroundColor: '#fe3',
        },
        logo: {
          logoMaxHeight: '61px',
          logoMaxWidth: '99%',
        }
      })

      amazon_connect('contactAttributes', {
        PlatformName: 'Medvi'
      })
    `;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = scriptContent;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

