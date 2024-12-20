function O(){import("data:text/javascript,")}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(t){if(t.ep)return;t.ep=!0;const c=n(t);fetch(t.href,c)}})();const S=[{key:"KEY_TITLE",cn:"MahGen",en:"MahGen"},{key:"KEY_SUBTITLE",cn:"\u65E5\u9EBB\u724C\u578B\u56FE\u7247\u751F\u6210\u5DE5\u5177",en:"Japanese Mahjong Tile Images Generator"},{key:"KEY_DOC_TITLE",cn:"MahGen - \u65E5\u9EBB\u724C\u578B\u56FE\u7247\u751F\u6210\u5DE5\u5177",en:"MahGen - Mahjong Tile Images Generator"},{key:"KEY_THEME_AUTO",cn:"\u8DDF\u968F\u7CFB\u7EDF",en:"Auto"},{key:"KEY_THEME_DARK",cn:"\u6DF1\u8272",en:"Dark"},{key:"KEY_THEME_LIGHT",cn:"\u6D45\u8272",en:"Light"},{key:"KEY_INPUT_PLACEHOLDER",cn:"\u5728\u8FD9\u91CC\u8F93\u5165\u724C\u578B\u5E8F\u5217\u2026\u2026",en:"Input Sequence Here..."},{key:"KEY_GENERATE",cn:"\u751F\u6210\uFF01",en:"Generate!"},{key:"KEY_FIGCAPTION",cn:"<small>\u60A8\u53EF\u4EE5\u53F3\u952E\u70B9\u51FB\u56FE\u7247\u5C06\u5B83\u4FDD\u5B58\u5230\u672C\u5730\u4F9B\u65E5\u540E\u4F7F\u7528\u3002</small>",en:"<small>You can right click on the image and save it locally for further uses.</small>"},{key:"KEY_FOOTER",cn:'<small>Mahgen \u7531 <a href="https://github.com/eric200203" target="_blank">Eric Lee</a> \u5F00\u53D1\uFF0C\u4F7F\u7528 MIT \u8BB8\u53EF\u8BC1\u3002</small>',en:'<small>Mahgen was created by <a href="https://github.com/eric200203" target="_blank">Eric Lee</a> and is licensed under the MIT license.</small>'},{key:"KEY_SYNTAX_TITLE",cn:"<u>\u8BED\u6CD5\u8BF4\u660E</u>",en:"<u>Syntax Description</u>"},{key:"KEY_SYNTAX_NUMBER_TITLE",cn:"\u6570\u724C\uFF08\u997C\u3001\u7D22\u3001\u4E07\uFF09",en:"Numbered Suits(Pin, So, Man)"},{key:"KEY_SYNTAX_NUMBER_DESC_1",cn:"\u5728\u65E5\u672C\u9EBB\u5C06\u4E2D\uFF0C\u901A\u5E38\u4F7F\u7528\u6570\u5B57 <code>1-9</code> \u63CF\u8FF0\u724C\u7684\u70B9\u6570\uFF0C\u4F7F\u7528\u5B57\u6BCD <code>p</code>\u3001<code>s</code>\u3001<code>m</code> \u63CF\u8FF0\u724C\u7684\u7C7B\u578B <em>\u997C Pin</em>\u3001<em>\u7D22 So</em>\u3001<em>\u4E07 Man</em>\u3002\u56E0\u6B64\uFF0C\u5E8F\u5217 <code>1m2m3m</code> \u5C31\u8868\u793A\u724C\u578B <em>\u4E00\u4E07\u4E8C\u4E07\u4E09\u4E07</em>\uFF0C<code>5p6p7p</code> \u5219\u8868\u793A <em>\u4E94\u997C\u516D\u997C\u4E03\u997C</em>\u3002",en:"In Japanese mahjong, the digits <code>1-9</code> are usually used to describe the number of a tile, and the letters <code>p</code>, <code>s</code>, <code>m</code> to describe the suit <code>Pin</code>, <code>So</code>, <code>Man</code>. Therefore, the sequence <code>1m2m3m</code> would indicate the pattern <em>1-wan, 2-wan, 3-wan</em>, and <code>5p6p7p</code> <em>5-pin, 6-pin, 7-pin</em>."},{key:"KEY_SYNTAX_NUMBER_DESC_2",cn:"\u7279\u522B\u5730\uFF0C\u6211\u4EEC\u4F7F\u7528\u6570\u5B57 <code>0</code> \u8868\u793A\u7EA2\u5B9D\u724C\uFF0C\u56E0\u6B64 <code>0p</code>\u3001<code>0s</code>\u3001<code>0m</code> \u5206\u522B\u8868\u793A <em>\u7EA2\u4E94\u997C\u3001\u7EA2\u4E94\u7D22\u3001\u7EA2\u4E94\u4E07</em>\uFF1A",en:"In particular, we use the number <code>0</code> to denote a red dora, so <code>0p</code>, <code>0s</code>, <code>0m</code> denote <em>red 5-pin, red 5-so, red 5-wan</em>, respectively:"},{key:"KEY_SYNTAX_NUMBER_DESC_3",cn:"\u4E3A\u4E86\u7B80\u5316\u4E66\u5199\uFF0C\u4F60\u53EF\u4EE5\u5C06\u540C\u4E00\u7C7B\u578B\u7684\u724C\u7684\u7C7B\u578B\u63CF\u8FF0\u5168\u90E8\u7701\u7565\uFF0C\u53EA\u4FDD\u7559\u6700\u540E\u4E00\u4E2A\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u5C06\u4E0A\u6587\u4E2D\u7684 <code>1m2m3m</code> \u7B80\u5199\u4E3A <code>123m</code>\uFF0C<code>5p6p7p</code> \u7B80\u5199\u4E3A <code>567p</code>\u3002\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5199\u4F5C <code>1m23m</code> \u6216 <code>12m3m</code>\uFF0C\u5B83\u4EEC\u90FD\u8868\u793A <em>\u4E00\u4E07\u4E8C\u4E07\u4E09\u4E07</em> \u8FD9\u4E2A\u724C\u578B\u3002",en:"For tiles of the same suit, You can omit all the letters except for the last one for simplicity. For example, you can simplify <code>1m2m3m</code> to <code>123m</code> and <code>5p6p7p</code> to <code>567p</code>. You can also write <code>1m23m</code> or <code>12m3m</code> for they all represent the pattern <em>1-wan, 2-wan, 3-wan</em>"},{key:"KEY_SYNTAX_HONOR_TITLE",cn:"\u5B57\u724C\uFF08\u98CE\u724C\u3001\u4E09\u5143\u724C\uFF09",en:"Honor Tiles(Wind Tiles, Dragon Tiles)"},{key:"KEY_SYNTAX_HONOR_DESC_1",cn:'\u65E5\u672C\u9EBB\u5C06\u4F7F\u7528\u5B57\u6BCD <code>z</code> \u8868\u793A\u5B57\u724C\uFF0C\u4E14\u5B57\u724C\u7684\u987A\u5E8F\u4E3A"\u4E1C\u5357\u897F\u5317\u767D\u53D1\u4E2D"\uFF0C\u56E0\u6B64 <code>1z 2z 3z 4z 5z 6z 7z</code> \u5C31\u5206\u522B\u8868\u793A <em>\u4E1C \u5357 \u897F \u5317 \u767D \u53D1 \u4E2D</em>\u3002',en:'The letter <code>z</code> is used to represent the honor tiles in Japanese mahjong, with the order "Ton, Nan, Sha, Pei, Haku, Hatsu, Chun". So <code>1z 2z 3z 4z 5z 6z 7z</code> represent <em>Ton, Nan, Sha, Pei, Haku, Hatsu, Chun</em>, respectively.'},{key:"KEY_SYNTAX_HONOR_DESC_2",cn:"\u5728\u6B64\u57FA\u7840\u4E0A\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>0z</code> \u8868\u793A <em>\u724C\u80CC</em>\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>0z11p0z</code> \u8868\u793A <em>\u6697\u6760\u4E00\u997C</em>\uFF1A",en:"On this basis, we use <code>0z</code> to denote <em>the back of a tile</em>. For example, we can use <code>0z11p0z</code> to represent <em>a closed quad of 1-pin</em>:"},{key:"KEY_SYNTAX_HONOR_DESC_3",cn:"\u6700\u540E\uFF0C\u4E3A\u4E86\u8BA9\u6240\u6709\u7684\u6570\u5B57\u5BF9\u5B57\u724C\u90FD\u6709\u610F\u4E49\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>8z</code> \u548C <code>9z</code> \u8868\u793A\u4E24\u5F20\u5E76\u4E0D\u5728\u65E5\u672C\u9EBB\u5C06\u4E2D\u51FA\u73B0\u3001\u4F46\u53EF\u80FD\u6709\u7528\u5904\u7684\u724C\uFF1A <em>? \u548C *</em>\u3002",en:"Finally, in order to make all the digits meaningful to the honor tiles, we use <code>8z</code> and <code>9z</code> for two tiles that do not appear in Japanese mahjong, but may be useful: <em>? and *</em>."},{key:"KEY_SYNTAX_HONOR_DESC_4",cn:"\u548C\u6570\u724C\u4E00\u6837\uFF0C\u5B57\u724C\u4E5F\u53EF\u4EE5\u7B80\u5199\uFF0C\u4F8B\u5982 <code>3z3z3z</code> \u53EF\u4EE5\u7B80\u5199\u4E3A <code>333z</code>\u3002",en:"Finally, like the numbered suits, honor tiles can be simplified. For example, <code>3z3z3z</code> can be abbreviated to <code>333z</code>."},{key:"KEY_SYNTAX_SPACE_TITLE",cn:"\u7A7A\u683C",en:"Spaces"},{key:"KEY_SYNTAX_SPACE_DESC_1",cn:"\u6211\u4EEC\u4F7F\u7528 <code>|</code> \u5728\u4E24\u5F20\u724C\u4E4B\u95F4\u63D2\u5165 <em>\u7A7A\u683C</em>\uFF0C\u6BCF\u4E2A\u7A7A\u683C\u662F 1/7 \u5F20\u724C\u7684\u5BBD\u5EA6\u3002\u4F8B\u5982\uFF1A",en:"We use <code>|</code> to insert a space between two tiles, each space is 1/7 the width of a tile. For example:"},{key:"KEY_SYNTAX_SPACE_DESC_2",cn:"\u4F60\u53EF\u4EE5\u8FDE\u7EED\u4F7F\u7528\u591A\u4E2A <code>|</code> \u63D2\u5165\u591A\u4E2A\u8FDE\u7EED\u7684\u7A7A\u683C\u6765\u63A7\u5236\u4E24\u5F20\u724C\u4E4B\u95F4\u7A7A\u683C\u7684\u5BBD\u5EA6\uFF1A",en:"You can control the width of the space between two tiles by inserting multiple consecutive spaces with multiple <code>|</code>."},{key:"KEY_SYNTAX_NAKI_TITLE",cn:"\u526F\u9732",en:"Naki"},{key:"KEY_SYNTAX_NAKI_DESC_1",cn:"\u526F\u9732\u65F6\uFF0C\u9EBB\u5C06\u724C\u53EF\u80FD\u4F1A\u53D1\u751F\u4EE5\u4E0B\u4E09\u79CD\u53D8\u5316\uFF1A\u6A2A\u7F6E\u3001\u52A0\u6760\u4EE5\u53CA\u6D89\u53CA\u7EA2\u5B9D\u724C\u7684\u52A0\u6760\u3002",en:"There are three possible variations for a mahjong tile when tile open calls: side, added open quad, or added open quad with red dora involved."},{key:"KEY_SYNTAX_NAKI_SUBTITLE_1",cn:"\u6A2A\u7F6E",en:"Side"},{key:"KEY_SYNTAX_NAKI_DESC_2",cn:"\u6211\u4EEC\u4F7F\u7528\u524D\u7F00 <code>_</code> \u8868\u793A\u5C06\u7D27\u63A5\u7740\u7684\u4E0B\u4E00\u5F20\u724C\u6A2A\u7F6E\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>_123m</code> \u8868\u793A <em>\u4F7F\u7528\u4E8C\u4E07\u548C\u4E09\u4E07\u5403\u4E0A\u5BB6\u6253\u51FA\u7684\u4E00\u4E07</em>\uFF1A",en:"We use the prefix <code>_</code> to indicate that the next tile is placed horizontally. For example, we can use <code>_123m</code> to represent a call out of <em>Chii</em>:"},{key:"KEY_SYNTAX_NAKI_DESC_3",cn:"\u8FD9\u91CC\u6709\u66F4\u591A\u7684\u793A\u4F8B\uFF1A",en:"Here are some more examples:"},{key:"KEY_SYNTAX_NAKI_SUBTITLE_2",cn:"\u52A0\u6760",en:"Added open quad"},{key:"KEY_SYNTAX_NAKI_DESC_4",cn:"\u6211\u4EEC\u4F7F\u7528\u524D\u7F00 <code>^</code> \u8868\u793A\u7D27\u63A5\u7740\u7684\u4E0B\u4E00\u5F20\u724C\u662F\u52A0\u6760\u5F62\u6210\u7684\u91CD\u53E0\u3002\u4F8B\u5982\uFF1A",en:"We use the prefix <code>^</code> to indicate that the next tile is an overlap formed by added open quad. For example:"},{key:"KEY_SYNTAX_NAKI_SUBTITLE_3",cn:"\u6D89\u53CA\u7EA2\u5B9D\u724C\u7684\u52A0\u6760",en:"Added open quad, involving red dora"},{key:"KEY_SYNTAX_NAKI_DESC_5",cn:"\u6211\u4EEC\u4F7F\u7528\u524D\u7F00 <code>v</code> \u8868\u793A\u7D27\u63A5\u7740\u7684\u4E0B\u4E00\u5F20\u724C\u662F\u52A0\u6760\u5F62\u6210\u7684\u91CD\u53E0\uFF0C\u4E14\u5176\u4E2D\u6709\u4E00\u5F20\u724C\u662F\u7EA2\u5B9D\u724C\u3002\u6211\u4EEC\u5B9A\u4E49\uFF1A<code>v0</code> \u8868\u793A\u91CD\u53E0\u4E2D\u9760\u4E0B\u7684\u724C\u662F\u7EA2\u5B9D\u724C\uFF0C\u9760\u4E0A\u7684\u724C\u662F\u666E\u901A\u6570\u724C\uFF1B<code>v5</code> \u8868\u793A\u91CD\u53E0\u4E2D\u9760\u4E0B\u7684\u724C\u662F\u666E\u901A\u6570\u724C\uFF0C\u9760\u4E0A\u7684\u724C\u662F\u7EA2\u5B9D\u724C\u3002\u4F8B\u5982\uFF1A",en:"We use the prefix <code>v</code> to represent that the next tile is an overlap formed by added open quad, while one of them is a red dora. We define that <code>v0</code> means the lower tile in the overlap is a red dora, and <code>v5</code> means the upper tile in the overlap is a red dora. For example:"},{key:"KEY_SYNTAX_SUMMARY_TITLE",cn:"\u603B\u7ED3",en:"Summary"},{key:"KEY_SYNTAX_SUMMARY_DESC_1",cn:"<code>mahgen</code> \u7684\u8BED\u6CD5\u57FA\u672C\u9075\u5FAA\u65E5\u672C\u9EBB\u5C06\u63CF\u8FF0\u724C\u578B\u7684\u60EF\u4F8B\uFF0C\u5E76\u5728\u5176\u57FA\u7840\u4E0A\u8FDB\u884C\u6269\u5C55 \uFF1A",en:"The syntax of <code>mahgen</code> basically follows and expands upon the conventions of Japanese mahjong for describing tile patterns:"},{key:"KEY_SYNTAX_SUMMARY_LIST_1",cn:"\u4F7F\u7528 <code>1-9</code> \u63CF\u8FF0\u724C\u7684\u70B9\u6570\uFF1B",en:"Use <code>1-9</code> to describe the number of tiles;"},{key:"KEY_SYNTAX_SUMMARY_LIST_2",cn:"\u4F7F\u7528\u540E\u7F00 <code>p\u3001s\u3001m\u3001z</code> \u8868\u793A\u724C\u7684\u7C7B\u578B\uFF1A\u997C\u3001\u7D22\u3001\u4E07\u548C\u5B57\u724C\uFF1B",en:"Use <code>p</code>, <code>s</code>, <code>m</code> and <code>z</code> to indicate the type of tiles: Pin, So, Man and Honor tiles;"},{key:"KEY_SYNTAX_SUMMARY_LIST_3",cn:"\u4F7F\u7528 <code>0</code> \u8868\u793A\u7EA2\u5B9D\u724C\uFF0C<code>0z</code> \u5219\u8868\u793A\u724C\u80CC\uFF1B",en:"Use <code>0</code> for red dora, <code>0z</code> for the back of a tile;"},{key:"KEY_SYNTAX_SUMMARY_LIST_4",cn:"\u4F7F\u7528 <code>|</code> \u63D2\u5165\u7A7A\u683C\uFF1B",en:"Use <code>|</code> to insert a space;"},{key:"KEY_SYNTAX_SUMMARY_LIST_5",cn:"\u4F7F\u7528\u524D\u7F00 <code>_</code> \u8868\u793A\u5C06\u724C\u6A2A\u7F6E\uFF0C<code>^</code> \u8868\u793A\u52A0\u6760\uFF0C<code>v</code> \u8868\u793A\u6D89\u53CA\u7EA2\u5B9D\u724C\u7684\u52A0\u6760\u3002",en:"Use prefix <code>_</code> to indicate placing a tile horizontally, <code>^</code> to added open quads, and <code>v</code> to added open quads with red dora involved."},{key:"KEY_SYNTAX_SUMMARY_DESC_2",cn:"\u5C06\u8FD9\u4E9B\u7B26\u53F7\u7EC4\u5408\u8D77\u6765\uFF0C\u6211\u4EEC\u5C31\u80FD\u591F\u6784\u9020\u51FA\u5404\u79CD\u5404\u6837\u7684\u724C\u578B\uFF0C\u4F8B\u5982\uFF1A",en:"By combing these symbols, we are able to construct a variety of tile patterns, for example:"},{key:"KEY_SYNTAX_SUMMARY_DESC_3",cn:"\u6700\u540E\uFF0C<code>mahgen</code> \u53EA\u4E3A\u7ED9\u5B9A\u7684\u5E8F\u5217\u751F\u6210\u56FE\u7247\uFF0C\u4E0D\u4F1A\u5BF9\u5E8F\u5217\u662F\u5426\u7B26\u5408\u724C\u7406\u8FDB\u884C\u68C0\u67E5\uFF0C\u56E0\u6B64\u8BF8\u5982 <code>_5^50v0m</code> \u7684\u5E8F\u5217\u5BF9 <code>mahgen</code> \u800C\u8A00\u540C\u6837\u662F\u5408\u6CD5\u7684\u3002",en:"Finally, <code>mahgen</code> only generates images for given sequences and does not check whether these sequences match the rules, so sequences like <code>_5^50v0m</code> are legal for <code>mahgen</code>."},{key:"KEY_GUI_SWITCH_GUI",cn:"\u53EF\u89C6\u5316\u754C\u9762",en:"Visual Mode"},{key:"KEY_GUI_SWITCH_TEXT",cn:"\u7EAF\u6587\u672C\u6A21\u5F0F",en:"Text Mode"},{key:"KEY_GUI_ADD_TILE",cn:"\u6DFB\u52A0",en:"Add"},{key:"KEY_GUI_DEL_TILE",cn:"\u5220\u9664",en:"Delete"},{key:"KEY_GUI_CLEAR_TILE",cn:"\u6E05\u7A7A",en:"Clear"},{key:"KEY_GUI_SELECT_SUIT",cn:"\u9009\u62E9\u82B1\u8272",en:"Select Suit"},{key:"KEY_GUI_SELECT_SUIT_MAN",cn:"\u4E07",en:"Man"},{key:"KEY_GUI_SELECT_SUIT_PIN",cn:"\u997C",en:"Pin"},{key:"KEY_GUI_SELECT_SUIT_SO",cn:"\u7D22",en:"So"},{key:"KEY_GUI_SELECT_SUIT_CHAR",cn:"\u5B57\u724C & \u7279\u6B8A\u724C",en:"Char & Special"},{key:"KEY_GUI_SELECT_SUIT_SPACE",cn:"\u7A7A\u683C",en:"Space"},{key:"KEY_0M",cn:"\u7EA2\u4E94\u4E07",en:"0m"},{key:"KEY_1M",cn:"\u4E00\u4E07",en:"1m"},{key:"KEY_2M",cn:"\u4E8C\u4E07",en:"2m"},{key:"KEY_3M",cn:"\u4E09\u4E07",en:"3m"},{key:"KEY_4M",cn:"\u56DB\u4E07",en:"4m"},{key:"KEY_5M",cn:"\u4E94\u4E07",en:"5m"},{key:"KEY_6M",cn:"\u516D\u4E07",en:"6m"},{key:"KEY_7M",cn:"\u4E03\u4E07",en:"7m"},{key:"KEY_8M",cn:"\u516B\u4E07",en:"8m"},{key:"KEY_9M",cn:"\u4E5D\u4E07",en:"9m"},{key:"KEY_0P",cn:"\u7EA2\u4E94\u997C",en:"0p"},{key:"KEY_1P",cn:"\u4E00\u997C",en:"1p"},{key:"KEY_2P",cn:"\u4E8C\u997C",en:"2p"},{key:"KEY_3P",cn:"\u4E09\u997C",en:"3p"},{key:"KEY_4P",cn:"\u56DB\u997C",en:"4p"},{key:"KEY_5P",cn:"\u4E94\u997C",en:"5p"},{key:"KEY_6P",cn:"\u516D\u997C",en:"6p"},{key:"KEY_7P",cn:"\u4E03\u997C",en:"7p"},{key:"KEY_8P",cn:"\u516B\u997C",en:"8p"},{key:"KEY_9P",cn:"\u4E5D\u997C",en:"9p"},{key:"KEY_0S",cn:"\u7EA2\u4E94\u7D22",en:"0s"},{key:"KEY_1S",cn:"\u4E00\u7D22",en:"1s"},{key:"KEY_2S",cn:"\u4E8C\u7D22",en:"2s"},{key:"KEY_3S",cn:"\u4E09\u7D22",en:"3s"},{key:"KEY_4S",cn:"\u56DB\u7D22",en:"4s"},{key:"KEY_5S",cn:"\u4E94\u7D22",en:"5s"},{key:"KEY_6S",cn:"\u516D\u7D22",en:"6s"},{key:"KEY_7S",cn:"\u4E03\u7D22",en:"7s"},{key:"KEY_8S",cn:"\u516B\u7D22",en:"8s"},{key:"KEY_9S",cn:"\u4E5D\u7D22",en:"9s"},{key:"KEY_0Z",cn:"\u724C\u80CC",en:"Back"},{key:"KEY_1Z",cn:"\u4E1C",en:"East"},{key:"KEY_2Z",cn:"\u5357",en:"South"},{key:"KEY_3Z",cn:"\u897F",en:"West"},{key:"KEY_4Z",cn:"\u5317",en:"North"},{key:"KEY_5Z",cn:"\u767D",en:"White"},{key:"KEY_6Z",cn:"\u53D1",en:"Green"},{key:"KEY_7Z",cn:"\u4E2D",en:"Red"},{key:"KEY_8Z",cn:"\u95EE\u53F7",en:"Question"},{key:"KEY_9Z",cn:"\u661F\u53F7",en:"Any"},{key:"KEY_GUI_SELECT_STATE_NORMAL",cn:"\u6B63\u5E38",en:"Normal"},{key:"KEY_GUI_SELECT_STATE_HORIZONTAL",cn:"\u6A2A\u7F6E",en:"Horizontal"},{key:"KEY_GUI_SELECT_STATE_STACK",cn:"\u52A0\u6760",en:"Stack"},{key:"KEY_GUI_SELECT_STATE_DIFF",cn:"\u7EA2\u5B9D\u724C\u52A0\u6760",en:"Stack with Red Dora"},{key:"KEY_GUI_SELECT_STATE_REACH",cn:"\u7ACB\u76F4",en:"Reach"},{key:"KEY_GUI_SELECT_STATE_CUT",cn:"\u6478\u5207",en:"Cut"},{key:"KEY_GUI_SELECT_STATE_CUT_REACH",cn:"\u6478\u5207\u7ACB\u76F4",en:"Cut Reach"},{key:"KEY_RIVER_MODE",cn:"\u724C\u6CB3\u6A21\u5F0F",en:"River Mode"}],k={txt:S},f=Object.freeze(Object.defineProperty({__proto__:null,txt:S,default:k},Symbol.toStringTag,{value:"Module"})),{txt:h}=f,u={_lang:"cn",txtSelector:"[data-i18n]",txtAttr:"data-i18n",btnSelector:"a[data-i18n-switcher]",btnAttr:"data-i18n-switcher",storeKey:"mahgen_i18n_lang",get lang(){return this._lang},set lang(e){this._lang=e,this.save()},init(){this.lang=this.load(),this.initSwitchers()},initSwitchers(){document.querySelectorAll(this.btnSelector).forEach(o=>{o.addEventListener("click",n=>{n.preventDefault(),this.lang=o.getAttribute(this.btnAttr),window.location.reload()},!1)})},load(){return typeof window.localStorage<"u"&&window.localStorage.getItem(this.storeKey)!==null?window.localStorage.getItem(this.storeKey):this._lang},save(){typeof window.localStorage<"u"&&window.localStorage.setItem(this.storeKey,this.lang)},translate(){document.querySelectorAll(this.txtSelector).forEach(n=>{const d=n.getAttribute(this.txtAttr);for(const t of h)if(t.key===d){n.innerHTML=t[this.lang];break}});const o=document.querySelector("#seq");for(const n of h)if(n.key===o.placeholder){o.placeholder=n[this.lang];break}}};window.langSwitcher=u;u.init();u.translate();/*!
 * Minimal theme switcher
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2022 - Licensed under MIT
 */const K={_scheme:"auto",menuTarget:"details[role='list']",buttonsTarget:"a[data-theme-switcher]",buttonAttribute:"data-theme-switcher",rootAttribute:"data-theme",localStorageKey:"picoPreferedColorScheme",init(){this.scheme=this.schemeFromLocalStorage,this.initSwitchers()},get schemeFromLocalStorage(){return typeof window.localStorage<"u"&&window.localStorage.getItem(this.localStorageKey)!==null?window.localStorage.getItem(this.localStorageKey):this._scheme},get preferedColorScheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},initSwitchers(){document.querySelectorAll(this.buttonsTarget).forEach(o=>{o.addEventListener("click",n=>{n.preventDefault(),this.scheme=o.getAttribute(this.buttonAttribute),document.querySelector(this.menuTarget).removeAttribute("open")},!1)})},set scheme(e){e=="auto"?this.preferedColorScheme=="dark"?this._scheme="dark":this._scheme="light":(e=="dark"||e=="light")&&(this._scheme=e),this.applyScheme(),this.schemeToLocalStorage()},get scheme(){return this._scheme},applyScheme(){document.querySelector("html").setAttribute(this.rootAttribute,this.scheme)},schemeToLocalStorage(){typeof window.localStorage<"u"&&window.localStorage.setItem(this.localStorageKey,this.scheme)}};K.init();const y=document.querySelector("#mode-gui"),p=document.querySelector("#mode-text"),A=document.querySelector("#page-gui"),g=document.querySelector("#page-text"),b=document.querySelector("#page-grammar"),I=document.querySelector("#btn"),w=document.querySelector("#seq"),s=document.querySelector("#tile-text"),v=document.querySelector("#text_river_mode_checkbox"),a=document.querySelector("#slt-suit"),l=document.querySelector("#slt-num"),_=document.querySelector("#slt-state"),L=document.querySelector("#btn_add"),C=document.querySelector("#btn_del"),N=document.querySelector("#btn_clear"),T=document.querySelector("#gui_river_mode_checkbox"),m=document.querySelector("#tile-gui");document.querySelector("#opt_state_normal");const M=document.querySelector("#opt_state_horizontal"),U=document.querySelector("#opt_state_stack"),q=document.querySelector("#opt_state_diff");y.addEventListener("click",z);p.addEventListener("click",x);function z(){Y(!0)}function x(){Y(!1)}function Y(e){y.className=e?"":"secondary",p.className=e?"secondary":"",A.hidden=!e,g.hidden=e,b.hidden=e}I.addEventListener("click",R);function R(){const e=w.value;v.checked?s.setAttribute("data-river-mode","true"):s.removeAttribute("data-river-mode"),s.setAttribute("data-seq",e)}a.addEventListener("change",G);function G(){a.value!==""&&a.value!=="|"?(l.style.visibility="visible",_.style.visibility="visible",document.querySelectorAll(".opt-num").forEach(function(o){o.setAttribute("data-i18n","KEY_"+o.value+a.value.toUpperCase())}),window.langSwitcher.translate()):(l.style.visibility="hidden",_.style.visibility="hidden")}const r=[];L.addEventListener("click",D);C.addEventListener("click",P);N.addEventListener("click",X);function D(){const e=a.value;if(e!==""){if(e==="|")r.push(e);else{const o=l.value,d=_.value+o+e;r.push(d)}E()}}function P(){r.pop(),E()}function X(){r.length=0,E()}function E(){let e=r.join("");e.length<=0&&(e+="|"),m.setAttribute("data-seq",e)}T.addEventListener("change",H);function H(){const e=T.checked;e?m.setAttribute("data-river-mode","true"):m.removeAttribute("data-river-mode"),M.setAttribute("data-i18n",e?"KEY_GUI_SELECT_STATE_REACH":"KEY_GUI_SELECT_STATE_HORIZONTAL"),U.setAttribute("data-i18n",e?"KEY_GUI_SELECT_STATE_CUT":"KEY_GUI_SELECT_STATE_STACK"),q.setAttribute("data-i18n",e?"KEY_GUI_SELECT_STATE_CUT_REACH":"KEY_GUI_SELECT_STATE_DIFF"),window.langSwitcher.translate()}export{O as __vite_legacy_guard};
