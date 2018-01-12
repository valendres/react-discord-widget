# React Discord Widget
Customizable discord widget, which can be inserted anywhere in your website (using an iframe).

[![widget.png](https://s14.postimg.org/c9ujjev8x/widget.png)](https://postimg.org/image/giz9lkyi5/)
## Getting Started
To get started, obtain your server ID by following [this guide](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) and replace the fake serverID in the iframe below, then copy the entire iframe to your website.


```html
<iframe src="https://valendres.github.io/react-discord-widget/?serverId=00000000" width="260" height="300" allowtransparency="true" frameborder="0"></iframe>
```
## API
All configuration is passed as [URL query strings](http://wiki.marketruler.com/What_is_the_correct_syntax_for_query_strings%3F); each setting is passed as a key/value pair, separated by an ampersand (**&**). For example, to configure `showHeader` and `channelFontColor`, append the following to the widget URL:

```
https://valendres.github.io/react-discord-widget/?serverId=00000000&showHeader=false&channelFontColor=#b846ef
```

_**Note:** the serverId is required._

### Settings
A full list of configuration options are listed below.

| Key | Data Type | Default | Description |
| :--- | :---: | :--- | :--- |
| `serverId` | number | - | **Required:** the Discord server server  D. It can be obtained by following [this guide](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) |
| `refreshInterval` | number | 10000 | The frequency (in miliseconds) which server data will be fetched. |
| `serverName` | string | auto | A custom server name to displayed in the header. If this parameter is not provided, your _Server Name_ as defined in _Server Settings_ will be used. |
| `showHeader` | boolean | true | Toggle visiblity of the header |
| `showChannels` | boolean | true | Toggle visiblity of the channel names. If this option is enabled, only members in voice channels will be displayed. Otherwise, all members currently signed into Discord will be shown. |
| `showChannelIcons` | boolean | true | Toggle visiblity of the channel icons. |
| `showServerStats` | boolean | true | Toggle visiblity of server statistics. Format is: _{players in channel count}_/_{total players online count}_|
| `avatarBorderRadius` | string | 50% | ... |
| `avatarMarginRight` | string | 8px | ... |
| `avatarSize` | string | 20px | ... |
| `bodyBackgroundColor` | string | #2f3136 | ... |
| `bodyPadding` | string | 8px | ... |
| `channelFontColor` | string | #dcddde | ... |
| `channelFontSize` | string | 1rem | ... |
| `channelFontWeight` | string | 200 | ... |
| `channelIconColor` | string | inherit | ... |
| `channelIconContent` | string | 🔊 | ... |
| `channelIconImage` | string | - | ... |
| `channelIconWidth` | string | 25px | ... |
| `channelIconHeight` | string | auto | ... |
| `channelIconSpacing` | string | 0 | ... |
| `channelIconVerticalAlign` | string | bottom | ... |
| `fontFamily` | string | Helvetica | ... |
| `headerBackgroundColor` | string | #202225 | ... |
| `headerFontColor` | string | #ffffff | ... |
| `headerFontSize` | string | 1.1rem | ... |
| `headerFontWeight` | string | 600 | ... |
| `headerPadding` | string | 8px | ... |
| `memberFontColor` | string | #72767d | ... |
| `memberFontSize` | string | 0.9rem | ... |
| `memberFontWeight` | string | 200 | ... |
| `memberSpacing` | string | 4px | ... |
| `serverStatsFontColor` | string | #dcddde | ... |
| `serverStatsFontSize` | string | 0.8rem | ... |
| `serverStatsFontWeight` | string | 200 | ... |
| `statusIndicatorBorderWidth` | string | 2px | ... |
| `statusIndicatorOffset` | string | -2px | ... |
| `statusIndicatorSize` | string | 8px | ... |

# Checklist
- [x] Initial release
- [x] Documentation
- [ ] Error message to indicate invalid server id
- [ ] Optional loading indicator
- [ ] Contributing guide

# Built with
* [TypeScript](https://github.com/Microsoft/TypeScript)
* [React](https://github.com/facebook/react)
* [Styled Components](https://github.com/styled-components/styled-components)

# Authors
* [Valendres](https://www.wowprogress.com/character/us/saurfang/Valendres) <[Storm Hammer](http://www.storm-hammer.net/)> - Saurfang (US)

# License
This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for details.

# Acknowledgments
* [Igorbek](https://github.com/Igorbek) for the styled components [compatibility function](https://github.com/styled-components/styled-components/issues/630#issuecomment-317277803).