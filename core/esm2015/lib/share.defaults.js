/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CopyButton, EmailButton, FacebookButton, GooglePlusButton, LineButton, LinkedinButton, MessengerButton, MixButton, PinterestButton, PrintButton, RedditButton, SmsButton, TelegramButton, TumblrButton, TwitterButton, VkButton, WhatsappButton, XingButton } from './buttons';
/**
 * Default share buttons properties
 * @type {?}
 */
export const SHARE_BUTTONS = {
    facebook: {
        create: (a, b, c, d, e, f, g) => new FacebookButton(a, b, c, d, e, f, g),
        text: 'Facebook',
        icon: ['fab', 'facebook-f'],
        color: '#4267B2',
        ariaLabel: 'Share on Facebook'
    },
    twitter: {
        create: (a, b, c, d, e, f, g) => new TwitterButton(a, b, c, d, e, f, g),
        text: 'Twitter',
        icon: ['fab', 'twitter'],
        color: '#00acee',
        ariaLabel: 'Share on Twitter'
    },
    linkedin: {
        create: (a, b, c, d, e, f, g) => new LinkedinButton(a, b, c, d, e, f, g),
        text: 'LinkedIn',
        icon: ['fab', 'linkedin-in'],
        color: '#006fa6',
        ariaLabel: 'Share on LinkedIn'
    },
    google: {
        create: (a, b, c, d, e, f, g) => new GooglePlusButton(a, b, c, d, e, f, g),
        text: 'Google+',
        icon: ['fab', 'google-plus-g'],
        color: '#DB4437',
        ariaLabel: 'Share on Google plus'
    },
    pinterest: {
        create: (a, b, c, d, e, f, g) => new PinterestButton(a, b, c, d, e, f, g),
        text: 'Pinterest',
        icon: ['fab', 'pinterest-p'],
        color: '#BD091D',
        ariaLabel: 'Share on Pinterest'
    },
    reddit: {
        create: (a, b, c, d, e, f, g) => new RedditButton(a, b, c, d, e, f, g),
        text: 'Reddit',
        icon: ['fab', 'reddit-alien'],
        color: '#FF4006',
        ariaLabel: 'Share on Reddit'
    },
    tumblr: {
        create: (a, b, c, d, e, f, g) => new TumblrButton(a, b, c, d, e, f, g),
        text: 'Tumblr',
        icon: ['fab', 'tumblr'],
        color: '#36465D',
        ariaLabel: 'Share on Tumblr'
    },
    mix: {
        create: (a, b, c, d, e, f, g) => new MixButton(a, b, c, d, e, f, g),
        text: 'Mix',
        icon: ['fab', 'mix'],
        color: '#ff8226',
        ariaLabel: 'Share on Mix'
    },
    vk: {
        create: (a, b, c, d, e, f, g) => new VkButton(a, b, c, d, e, f, g),
        text: 'VKontakte',
        icon: ['fab', 'vk'],
        color: '#4C75A3',
        ariaLabel: 'Share on VKontakte'
    },
    telegram: {
        create: (a, b, c, d, e, f, g) => new TelegramButton(a, b, c, d, e, f, g),
        text: 'Telegram',
        icon: ['fab', 'telegram-plane'],
        color: '#0088cc',
        ariaLabel: 'Share on Telegram'
    },
    messenger: {
        create: (a, b, c, d, e, f, g) => new MessengerButton(a, b, c, d, e, f, g),
        text: 'Messenger',
        icon: ['fab', 'facebook-messenger'],
        color: '#0080FF',
        ariaLabel: 'Share on Messenger'
    },
    whatsapp: {
        create: (a, b, c, d, e, f, g) => new WhatsappButton(a, b, c, d, e, f, g),
        text: 'WhatsApp',
        icon: ['fab', 'whatsapp'],
        color: '#25D366',
        ariaLabel: 'Share on WhatsApp'
    },
    xing: {
        create: (a, b, c, d, e, f, g) => new XingButton(a, b, c, d, e, f, g),
        text: 'Xing',
        icon: ['fab', 'xing'],
        color: '#006567',
        ariaLabel: 'Share on Xing'
    },
    line: {
        create: (a, b, c, d, e, f, g) => new LineButton(a, b, c, d, e, f, g),
        text: 'Line',
        icon: ['fab', 'line'],
        color: '#00b900',
        ariaLabel: 'Share on Line'
    },
    sms: {
        create: (a, b, c, d, e, f, g) => new SmsButton(a, b, c, d, e, f, g),
        text: 'SMS',
        icon: 'comment-alt',
        color: '#20c16c',
        ariaLabel: 'Share link via SMS'
    },
    email: {
        create: (a, b, c, d, e, f, g) => new EmailButton(a, b, c, d, e, f, g),
        text: 'Email',
        icon: 'envelope',
        color: '#FF961C',
        ariaLabel: 'Share link via email'
    },
    print: {
        create: (a, b, c, d, e, f, g) => new PrintButton(a, b, c, d, e, f, g),
        text: 'Print',
        icon: 'print',
        color: '#765AA2',
        ariaLabel: 'Print page'
    },
    copy: {
        create: (a, b, c, d, e, f, g) => new CopyButton(a, b, c, d, e, f, g),
        text: 'Copy link',
        icon: 'link',
        color: '#607D8B',
        ariaLabel: 'Copy link',
        extra: {
            successLabel: 'Copied',
            successIcon: 'check'
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuZGVmYXVsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2hhcmUuZGVmYXVsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLGNBQWMsRUFDZCxlQUFlLEVBQ2YsU0FBUyxFQUNULGVBQWUsRUFDZixXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGFBQWEsRUFDYixRQUFRLEVBQ1IsY0FBYyxFQUNkLFVBQVUsRUFDWCxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFPbkIsTUFBTSxPQUFPLGFBQWEsR0FBa0I7SUFDMUMsUUFBUSxFQUFFO1FBQ1IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQztRQUMzQixLQUFLLEVBQUUsU0FBUztRQUNoQixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFD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QUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRSxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxPQUFPO1FBQ2IsS0FBSyxFQUFFLFNBQVM7UUFDaEIsU0FBUyxFQUFFLFlBQVk7S0FDeEI7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRSxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxXQUFXO1FBQ3RCLEtBQUssRUFBRTtZQUNMLFlBQVksRUFBRSxRQUFRO1lBQ3RCLFdBQVcsRUFBRSxPQUFPO1NBQ3JCO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29weUJ1dHRvbixcclxuICBFbWFpbEJ1dHRvbixcclxuICBGYWNlYm9va0J1dHRvbixcclxuICBHb29nbGVQbHVzQnV0dG9uLFxyXG4gIExpbmVCdXR0b24sXHJcbiAgTGlua2VkaW5CdXR0b24sXHJcbiAgTWVzc2VuZ2VyQnV0dG9uLFxyXG4gIE1peEJ1dHRvbixcclxuICBQaW50ZXJlc3RCdXR0b24sXHJcbiAgUHJpbnRCdXR0b24sXHJcbiAgUmVkZGl0QnV0dG9uLFxyXG4gIFNtc0J1dHRvbixcclxuICBUZWxlZ3JhbUJ1dHRvbixcclxuICBUdW1ibHJCdXR0b24sXHJcbiAgVHdpdHRlckJ1dHRvbixcclxuICBWa0J1dHRvbixcclxuICBXaGF0c2FwcEJ1dHRvbixcclxuICBYaW5nQnV0dG9uXHJcbn0gZnJvbSAnLi9idXR0b25zJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9ucyB9IGZyb20gJy4vc2hhcmUubW9kZWxzJztcclxuXHJcblxyXG4vKipcclxuICogRGVmYXVsdCBzaGFyZSBidXR0b25zIHByb3BlcnRpZXNcclxuICovXHJcbmV4cG9ydCBjb25zdCBTSEFSRV9CVVRUT05TOiBJU2hhcmVCdXR0b25zID0ge1xyXG4gIGZhY2Vib29rOiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgRmFjZWJvb2tCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnRmFjZWJvb2snLFxyXG4gICAgaWNvbjogWydmYWInLCAnZmFjZWJvb2stZiddLFxyXG4gICAgY29sb3I6ICcjNDI2N0IyJyxcclxuICAgIGFyaWFMYWJlbDogJ1NoYXJlIG9uIEZhY2Vib29rJ1xyXG4gIH0sXHJcbiAgdHdpdHRlcjoge1xyXG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZykgPT4gbmV3IFR3aXR0ZXJCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnVHdpdHRlcicsXHJcbiAgICBpY29uOiBbJ2ZhYicsICd0d2l0dGVyJ10sXHJcbiAgICBjb2xvcjogJyMwMGFjZWUnLFxyXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gVHdpdHRlcidcclxuICB9LFxyXG4gIGxpbmtlZGluOiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgTGlua2VkaW5CdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnTGlua2VkSW4nLFxyXG4gICAgaWNvbjogWydmYWInLCAnbGlua2VkaW4taW4nXSxcclxuICAgIGNvbG9yOiAnIzAwNmZhNicsXHJcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBMaW5rZWRJbidcclxuICB9LFxyXG4gIGdvb2dsZToge1xyXG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZykgPT4gbmV3IEdvb2dsZVBsdXNCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnR29vZ2xlKycsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdnb29nbGUtcGx1cy1nJ10sXHJcbiAgICBjb2xvcjogJyNEQjQ0MzcnLFxyXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gR29vZ2xlIHBsdXMnXHJcbiAgfSxcclxuICBwaW50ZXJlc3Q6IHtcclxuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcpID0+IG5ldyBQaW50ZXJlc3RCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnUGludGVyZXN0JyxcclxuICAgIGljb246IFsnZmFiJywgJ3BpbnRlcmVzdC1wJ10sXHJcbiAgICBjb2xvcjogJyNCRDA5MUQnLFxyXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gUGludGVyZXN0J1xyXG4gIH0sXHJcbiAgcmVkZGl0OiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgUmVkZGl0QnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcpLFxyXG4gICAgdGV4dDogJ1JlZGRpdCcsXHJcbiAgICBpY29uOiBbJ2ZhYicsICdyZWRkaXQtYWxpZW4nXSxcclxuICAgIGNvbG9yOiAnI0ZGNDAwNicsXHJcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBSZWRkaXQnXHJcbiAgfSxcclxuICB0dW1ibHI6IHtcclxuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcpID0+IG5ldyBUdW1ibHJCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnVHVtYmxyJyxcclxuICAgIGljb246IFsnZmFiJywgJ3R1bWJsciddLFxyXG4gICAgY29sb3I6ICcjMzY0NjVEJyxcclxuICAgIGFyaWFMYWJlbDogJ1NoYXJlIG9uIFR1bWJscidcclxuICB9LFxyXG4gIG1peDoge1xyXG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZykgPT4gbmV3IE1peEJ1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnKSxcclxuICAgIHRleHQ6ICdNaXgnLFxyXG4gICAgaWNvbjogWydmYWInLCAnbWl4J10sXHJcbiAgICBjb2xvcjogJyNmZjgyMjYnLFxyXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gTWl4J1xyXG4gIH0sXHJcbiAgdms6IHtcclxuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcpID0+IG5ldyBWa0J1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnKSxcclxuICAgIHRleHQ6ICdWS29udGFrdGUnLFxyXG4gICAgaWNvbjogWydmYWInLCAndmsnXSxcclxuICAgIGNvbG9yOiAnIzRDNzVBMycsXHJcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBWS29udGFrdGUnXHJcbiAgfSxcclxuICB0ZWxlZ3JhbToge1xyXG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZykgPT4gbmV3IFRlbGVncmFtQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcpLFxyXG4gICAgdGV4dDogJ1RlbGVncmFtJyxcclxuICAgIGljb246IFsnZmFiJywgJ3RlbGVncmFtLXBsYW5lJ10sXHJcbiAgICBjb2xvcjogJyMwMDg4Y2MnLFxyXG4gICAgYXJpYUxhYmVsOiAnU2hhcmUgb24gVGVsZWdyYW0nXHJcbiAgfSxcclxuICBtZXNzZW5nZXI6IHtcclxuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcpID0+IG5ldyBNZXNzZW5nZXJCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnTWVzc2VuZ2VyJyxcclxuICAgIGljb246IFsnZmFiJywgJ2ZhY2Vib29rLW1lc3NlbmdlciddLFxyXG4gICAgY29sb3I6ICcjMDA4MEZGJyxcclxuICAgIGFyaWFMYWJlbDogJ1NoYXJlIG9uIE1lc3NlbmdlcidcclxuICB9LFxyXG4gIHdoYXRzYXBwOiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgV2hhdHNhcHBCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnV2hhdHNBcHAnLFxyXG4gICAgaWNvbjogWydmYWInLCAnd2hhdHNhcHAnXSxcclxuICAgIGNvbG9yOiAnIzI1RDM2NicsXHJcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBXaGF0c0FwcCdcclxuICB9LFxyXG4gIHhpbmc6IHtcclxuICAgIGNyZWF0ZTogKGEsIGIsIGMsIGQsIGUsIGYsIGcpID0+IG5ldyBYaW5nQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcpLFxyXG4gICAgdGV4dDogJ1hpbmcnLFxyXG4gICAgaWNvbjogWydmYWInLCAneGluZyddLFxyXG4gICAgY29sb3I6ICcjMDA2NTY3JyxcclxuICAgIGFyaWFMYWJlbDogJ1NoYXJlIG9uIFhpbmcnXHJcbiAgfSxcclxuICBsaW5lOiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgTGluZUJ1dHRvbihhLCBiLCBjLCBkLCBlLCBmLCBnKSxcclxuICAgIHRleHQ6ICdMaW5lJyxcclxuICAgIGljb246IFsnZmFiJywgJ2xpbmUnXSxcclxuICAgIGNvbG9yOiAnIzAwYjkwMCcsXHJcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBvbiBMaW5lJ1xyXG4gIH0sXHJcbiAgc21zOiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgU21zQnV0dG9uKGEsIGIsIGMsIGQsIGUsIGYsIGcpLFxyXG4gICAgdGV4dDogJ1NNUycsXHJcbiAgICBpY29uOiAnY29tbWVudC1hbHQnLFxyXG4gICAgY29sb3I6ICcjMjBjMTZjJyxcclxuICAgIGFyaWFMYWJlbDogJ1NoYXJlIGxpbmsgdmlhIFNNUydcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgRW1haWxCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnRW1haWwnLFxyXG4gICAgaWNvbjogJ2VudmVsb3BlJyxcclxuICAgIGNvbG9yOiAnI0ZGOTYxQycsXHJcbiAgICBhcmlhTGFiZWw6ICdTaGFyZSBsaW5rIHZpYSBlbWFpbCdcclxuICB9LFxyXG4gIHByaW50OiB7XHJcbiAgICBjcmVhdGU6IChhLCBiLCBjLCBkLCBlLCBmLCBnKSA9PiBuZXcgUHJpbnRCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnUHJpbnQnLFxyXG4gICAgaWNvbjogJ3ByaW50JyxcclxuICAgIGNvbG9yOiAnIzc2NUFBMicsXHJcbiAgICBhcmlhTGFiZWw6ICdQcmludCBwYWdlJ1xyXG4gIH0sXHJcbiAgY29weToge1xyXG4gICAgY3JlYXRlOiAoYSwgYiwgYywgZCwgZSwgZiwgZykgPT4gbmV3IENvcHlCdXR0b24oYSwgYiwgYywgZCwgZSwgZiwgZyksXHJcbiAgICB0ZXh0OiAnQ29weSBsaW5rJyxcclxuICAgIGljb246ICdsaW5rJyxcclxuICAgIGNvbG9yOiAnIzYwN0Q4QicsXHJcbiAgICBhcmlhTGFiZWw6ICdDb3B5IGxpbmsnLFxyXG4gICAgZXh0cmE6IHtcclxuICAgICAgc3VjY2Vzc0xhYmVsOiAnQ29waWVkJyxcclxuICAgICAgc3VjY2Vzc0ljb246ICdjaGVjaydcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iXX0=