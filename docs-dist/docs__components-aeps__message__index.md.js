(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [44],
  {
    '2wxj': function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['loading-message-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['loading-message-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    '7KBU': function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['info-message-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['info-message-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    Bjia: function(e, t, a) {
      'use strict';
      var l = a('0Owb'),
        n = a('PpiC'),
        r = a('cDcd'),
        c = a.n(r),
        m = a('ZpkN');
      t['a'] = c.a.forwardRef((e, t) => {
        var a = e.children,
          r = Object(n['default'])(e, ['children']);
        return c.a.createElement(
          m['a'],
          Object(l['default'])({}, r, { forwardedRef: t }),
          c.a.createElement(c.a.Fragment, null, a),
        );
      });
    },
    D9kK: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq'),
        c = (a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia'));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h2',
              { id: 'api' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'API',
            ),
            n.a.createElement(
              'p',
              null,
              '\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9759\u6001\u65b9\u6cd5\uff0c\u4f7f\u7528\u65b9\u5f0f\u548c\u53c2\u6570\u5982\u4e0b\uff1a',
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message.success(content, [duration], onClose)',
                ),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message.error(content, [duration], onClose)',
                ),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message.info(content, [duration], onClose)',
                ),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message.warning(content, [duration], onClose)',
                ),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message.warn(content, [duration], onClose)',
                ),
                ' // alias of warning',
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message.loading(content, [duration], onClose)',
                ),
              ),
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u53c2\u6570'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'content'),
                  n.a.createElement('td', null, '\u63d0\u793a\u5185\u5bb9'),
                  n.a.createElement('td', null, 'ReactNode | config'),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'duration'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2\u3002\u8bbe\u4e3a 0 \u65f6\u4e0d\u81ea\u52a8\u5173\u95ed',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '3'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'onClose'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5173\u95ed\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                  n.a.createElement('td', null, 'function'),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
            n.a.createElement(
              'p',
              null,
              '\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b promise \u63a5\u53e3\u3002',
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message[level](content, [duration]).then(afterClose)',
                ),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement(
                  'code',
                  null,
                  'message[level](content, [duration], onClose).then(afterClose)',
                ),
              ),
            ),
            n.a.createElement(
              'p',
              null,
              '\u5176\u4e2d ',
              n.a.createElement('code', null, 'message[level]'),
              ' \u662f\u7ec4\u4ef6\u5df2\u7ecf\u63d0\u4f9b\u7684\u9759\u6001\u65b9\u6cd5\u3002',
              n.a.createElement('code', null, 'then'),
              ' \u63a5\u53e3\u8fd4\u56de\u503c\u662f Promise\u3002',
            ),
            n.a.createElement(
              'p',
              null,
              '\u4e5f\u53ef\u4ee5\u5bf9\u8c61\u7684\u5f62\u5f0f\u4f20\u9012\u53c2\u6570\uff1a',
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.open(config)'),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.success(config)'),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.error(config)'),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.info(config)'),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.warning(config)'),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.warn(config)'),
                ' // alias of warning',
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.loading(config)'),
              ),
            ),
            n.a.createElement(
              'p',
              null,
              n.a.createElement('code', null, 'config'),
              ' \u5bf9\u8c61\u5c5e\u6027\u5982\u4e0b\uff1a',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u53c2\u6570'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'className'),
                  n.a.createElement('td', null, '\u81ea\u5b9a\u4e49 CSS class'),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'content'),
                  n.a.createElement('td', null, '\u63d0\u793a\u5185\u5bb9'),
                  n.a.createElement('td', null, 'ReactNode'),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'duration'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2\u3002\u8bbe\u4e3a 0 \u65f6\u4e0d\u81ea\u52a8\u5173\u95ed',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '3'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'icon'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u56fe\u6807',
                  ),
                  n.a.createElement('td', null, 'ReactNode'),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'key'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5f53\u524d\u63d0\u793a\u7684\u552f\u4e00\u6807\u5fd7',
                  ),
                  n.a.createElement('td', null, 'string | number'),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'style'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u5185\u8054\u6837\u5f0f',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement(
                      r['Link'],
                      {
                        to:
                          'https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794',
                      },
                      'CSSProperties',
                    ),
                  ),
                  n.a.createElement('td', null, '-'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'onClose'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5173\u95ed\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570',
                  ),
                  n.a.createElement('td', null, 'function'),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: '\u5168\u5c40\u65b9\u6cd5' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u5168\u5c40\u65b9\u6cd5',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5168\u5c40\u65b9\u6cd5',
            ),
            n.a.createElement(
              'p',
              null,
              '\u8fd8\u63d0\u4f9b\u4e86\u5168\u5c40\u914d\u7f6e\u548c\u5168\u5c40\u9500\u6bc1\u65b9\u6cd5\uff1a',
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.config(options)'),
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, 'message.destroy()'),
              ),
            ),
            n.a.createElement(
              'p',
              null,
              '\u4e5f\u53ef\u901a\u8fc7 ',
              n.a.createElement('code', null, 'message.destroy(key)'),
              ' \u6765\u5173\u95ed\u4e00\u6761\u6d88\u606f\u3002',
            ),
            n.a.createElement(
              'h4',
              { id: 'messageconfig' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#messageconfig', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'message.config',
            ),
            n.a.createElement(
              'p',
              null,
              '\u5f53\u4f60\u4f7f\u7528 ',
              n.a.createElement('code', null, 'ConfigProvider'),
              ' \u8fdb\u884c\u5168\u5c40\u5316\u914d\u7f6e\u65f6\uff0c\u7cfb\u7edf\u4f1a\u9ed8\u8ba4\u81ea\u52a8\u5f00\u542f RTL \u6a21\u5f0f\u3002(4.3.0+)',
            ),
            n.a.createElement(
              'p',
              null,
              '\u5f53\u4f60\u60f3\u5355\u72ec\u4f7f\u7528\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u8bbe\u7f6e\u5f00\u542f RTL \u6a21\u5f0f\u3002',
            ),
            n.a.createElement(c['a'], {
              code:
                "\nmessage.config({\n  top: 100,\n  duration: 2,\n  maxCount: 3,\n  rtl: true,\n  prefixCls: 'my-message',\n});\n",
              lang: 'js',
            }),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u53c2\u6570'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  n.a.createElement('th', null, '\u7248\u672c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'duration'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u81ea\u52a8\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '3'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'getContainer'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u914d\u7f6e\u6e32\u67d3\u8282\u70b9\u7684\u8f93\u51fa\u4f4d\u7f6e',
                  ),
                  n.a.createElement('td', null, '() => HTMLElement'),
                  n.a.createElement('td', null, '() => document.body'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'maxCount'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6700\u5927\u663e\u793a\u6570, \u8d85\u8fc7\u9650\u5236\u65f6\uff0c\u6700\u65e9\u7684\u6d88\u606f\u4f1a\u88ab\u81ea\u52a8\u5173\u95ed',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'prefixCls'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6d88\u606f\u8282\u70b9\u7684 className \u524d\u7f00',
                  ),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'ant-message'),
                  ),
                  n.a.createElement('td', null, '4.5.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'rtl'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5f00\u542f RTL \u6a21\u5f0f',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'top'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6d88\u606f\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '24'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
            n.a.createElement(
              'h2',
              { id: 'faq' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#faq', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'FAQ',
            ),
            n.a.createElement(
              'h3',
              {
                id:
                  '\u4e3a\u4ec0\u4e48-message-\u4e0d\u80fd\u83b7\u53d6-context\u3001redux-\u7684\u5185\u5bb9\u548c-configprovider-\u7684-localeprefixcls-\u914d\u7f6e\uff1f',
              },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to:
                    '#\u4e3a\u4ec0\u4e48-message-\u4e0d\u80fd\u83b7\u53d6-context\u3001redux-\u7684\u5185\u5bb9\u548c-configprovider-\u7684-localeprefixcls-\u914d\u7f6e\uff1f',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4e3a\u4ec0\u4e48 message \u4e0d\u80fd\u83b7\u53d6 context\u3001redux \u7684\u5185\u5bb9\u548c ConfigProvider \u7684 ',
              n.a.createElement('code', null, 'locale/prefixCls'),
              ' \u914d\u7f6e\uff1f',
            ),
            n.a.createElement(
              'p',
              null,
              '\u76f4\u63a5\u8c03\u7528 message \u65b9\u6cd5\uff0cantd \u4f1a\u901a\u8fc7 ',
              n.a.createElement('code', null, 'ReactDOM.render'),
              ' \u52a8\u6001\u521b\u5efa\u65b0\u7684 React \u5b9e\u4f53\u3002\u5176 context \u4e0e\u5f53\u524d\u4ee3\u7801\u6240\u5728 context \u5e76\u4e0d\u76f8\u540c\uff0c\u56e0\u800c\u65e0\u6cd5\u83b7\u53d6 context \u4fe1\u606f\u3002',
            ),
            n.a.createElement(
              'p',
              null,
              '\u5f53\u4f60\u9700\u8981 context \u4fe1\u606f\uff08\u4f8b\u5982 ConfigProvider \u914d\u7f6e\u7684\u5185\u5bb9\uff09\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ',
              n.a.createElement('code', null, 'message.useMessage'),
              ' \u65b9\u6cd5\u4f1a\u8fd4\u56de ',
              n.a.createElement('code', null, 'api'),
              ' \u5b9e\u4f53\u4ee5\u53ca ',
              n.a.createElement('code', null, 'contextHolder'),
              ' \u8282\u70b9\u3002\u5c06\u5176\u63d2\u5165\u5230\u4f60\u9700\u8981\u83b7\u53d6 context \u4f4d\u7f6e\u5373\u53ef\uff1a',
            ),
            n.a.createElement(c['a'], {
              code:
                '\nconst [api, contextHolder] = message.useMessage();\n\nreturn (\n  <Context1.Provider value="Ant">\n    {/* contextHolder \u5728 Context1 \u5185\uff0c\u5b83\u53ef\u4ee5\u83b7\u5f97 Context1 \u7684 context */}\n    {contextHolder}\n    <Context2.Provider value="Design">\n      {/* contextHolder \u5728 Context2 \u5916\uff0c\u56e0\u800c\u4e0d\u4f1a\u83b7\u5f97 Context2 \u7684 context */}\n    </Context2.Provider>\n  </Context1.Provider>\n);\n',
              lang: 'tsx',
            }),
            n.a.createElement(
              'p',
              null,
              '**\u5f02\u540c\uff1a**\u901a\u8fc7 hooks \u521b\u5efa\u7684 ',
              n.a.createElement('code', null, 'contextHolder'),
              ' \u5fc5\u987b\u63d2\u5165\u5230\u5b50\u5143\u7d20\u8282\u70b9\u4e2d\u624d\u4f1a\u751f\u6548\uff0c\u5f53\u4f60\u4e0d\u9700\u8981\u4e0a\u4e0b\u6587\u4fe1\u606f\u65f6\u8bf7\u76f4\u63a5\u8c03\u7528\u3002',
            ),
          ),
        );
      };
    },
    FJhF: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['other-message-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['other-message-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    GQvH: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['thenable-message-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['thenable-message-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    JXpF: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq');
      a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'p',
              null,
              '\u5168\u5c40\u5c55\u793a\u64cd\u4f5c\u53cd\u9988\u4fe1\u606f\u3002',
            ),
            n.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u4f55\u65f6\u4f7f\u7528',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4f55\u65f6\u4f7f\u7528',
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                '\u53ef\u63d0\u4f9b\u6210\u529f\u3001\u8b66\u544a\u548c\u9519\u8bef\u7b49\u53cd\u9988\u4fe1\u606f\u3002',
              ),
              n.a.createElement(
                'li',
                null,
                '\u9876\u90e8\u5c45\u4e2d\u663e\u793a\u5e76\u81ea\u52a8\u6d88\u5931\uff0c\u662f\u4e00\u79cd\u4e0d\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u8f7b\u91cf\u7ea7\u63d0\u793a\u65b9\u5f0f\u3002',
              ),
            ),
          ),
        );
      };
    },
    NQ87: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq'),
        c = a('g5U0'),
        m = (a('ekZX'), a('ltCa'));
      a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h1',
              { id: '\u5168\u5c40\u63d0\u793a' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u5168\u5c40\u63d0\u793a',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5168\u5c40\u63d0\u793a',
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('JXpF').default(),
              }),
            ),
            n.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u4ee3\u7801\u6f14\u793a',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4ee3\u7801\u6f14\u793a',
            ),
            n.a.createElement(
              m['a'],
              { gutter: '8' },
              n.a.createElement(
                c['a'],
                { span: 12 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('7KBU').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('fsoP').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('GQvH').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('TAo8').default(),
                  }),
                ),
              ),
              n.a.createElement(
                c['a'],
                { span: 12 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('FJhF').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('2wxj').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('WXv7').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('vzP9').default(),
                  }),
                ),
              ),
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('D9kK').default(),
              }),
              n.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    TAo8: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(
            a('JjdP').default['custom-style-message-aeps-demo'].component,
          ));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['custom-style-message-aeps-demo']
                .previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    WXv7: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['update-message-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['update-message-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    fsoP: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['duration-message-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['duration-message-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    g5U0: function(e, t, a) {
      'use strict';
      var l = a('kPKH');
      a('h9md');
      t['a'] = l['a'];
    },
    ltCa: function(e, t, a) {
      'use strict';
      var l = a('BMrR');
      a('7xIR');
      t['a'] = l['a'];
    },
    vzP9: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['hooks-message-aeps-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['hooks-message-aeps-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
