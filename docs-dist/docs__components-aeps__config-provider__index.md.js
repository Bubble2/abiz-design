(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [26],
  {
    '8PuM': function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        l = n.n(a),
        r = n('dEAq'),
        c = (n('g5U0'), n('ekZX'), n('ltCa'), n('Bjia'));
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'p',
              null,
              '\u4e3a\u7ec4\u4ef6\u63d0\u4f9b\u7edf\u4e00\u7684\u5168\u5c40\u5316\u914d\u7f6e\u3002',
            ),
            l.a.createElement(
              'h2',
              { id: '\u4f7f\u7528' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4f7f\u7528',
            ),
            l.a.createElement(
              'p',
              null,
              'ConfigProvider \u4f7f\u7528 React \u7684 ',
              l.a.createElement(
                r['Link'],
                { to: 'https://facebook.github.io/react/docs/context.html' },
                'context',
              ),
              ' \u7279\u6027\uff0c\u53ea\u9700\u5728\u5e94\u7528\u5916\u56f4\u5305\u88f9\u4e00\u6b21\u5373\u53ef\u5168\u5c40\u751f\u6548\u3002',
            ),
            l.a.createElement(c['a'], {
              code:
                '\nimport { ConfigProvider } from \'antd\';\n\n// ...\n\nexport default () => (\n  <ConfigProvider direction="rtl">\n    <App />\n  </ConfigProvider>\n);\n',
              lang: 'jsx',
            }),
            l.a.createElement(
              'h3',
              { id: 'content-security-policy' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#content-security-policy',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Content Security Policy',
            ),
            l.a.createElement(
              'p',
              null,
              '\u90e8\u5206\u7ec4\u4ef6\u4e3a\u4e86\u652f\u6301\u6ce2\u7eb9\u6548\u679c\uff0c\u4f7f\u7528\u4e86\u52a8\u6001\u6837\u5f0f\u3002\u5982\u679c\u5f00\u542f\u4e86 Content Security Policy (CSP)\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ',
              l.a.createElement('code', null, 'csp'),
              ' \u5c5e\u6027\u6765\u8fdb\u884c\u914d\u7f6e\uff1a',
            ),
            l.a.createElement(c['a'], {
              code:
                "\n<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>\n  <Button>My Button</Button>\n</ConfigProvider>\n",
              lang: 'jsx',
            }),
          ),
        );
      };
    },
    Bjia: function(e, t, n) {
      'use strict';
      var a = n('0Owb'),
        l = n('PpiC'),
        r = n('cDcd'),
        c = n.n(r),
        d = n('ZpkN');
      t['a'] = c.a.forwardRef((e, t) => {
        var n = e.children,
          r = Object(l['default'])(e, ['children']);
        return c.a.createElement(
          d['a'],
          Object(a['default'])({}, r, { forwardedRef: t }),
          c.a.createElement(c.a.Fragment, null, n),
        );
      });
    },
    Nllk: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        l = n.n(a),
        r = n('dEAq'),
        c = n('g5U0'),
        d = (n('ekZX'), n('ltCa'));
      n('Bjia');
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: '\u5168\u5c40\u5316\u914d\u7f6e' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u5168\u5c40\u5316\u914d\u7f6e',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5168\u5c40\u5316\u914d\u7f6e',
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: n('8PuM').default(),
              }),
            ),
            l.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u4ee3\u7801\u6f14\u793a',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4ee3\u7801\u6f14\u793a',
            ),
            l.a.createElement(
              d['a'],
              { gutter: '8' },
              l.a.createElement(
                c['a'],
                { span: 24 },
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: n('eHQS').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: n('iaOp').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: n('YfUw').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: n('fSm3').default(),
                  }),
                ),
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: n('ZPv8').default(),
              }),
              l.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    YfUw: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        l = n.n(a),
        r = (n('dEAq'), n('g5U0'), n('ekZX')),
        c =
          (n('ltCa'),
          n('Bjia'),
          l.a.memo(
            n('JjdP').default['size-config-provider-aeps-demo'].component,
          ));
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              n('JjdP').default['size-config-provider-aeps-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    ZPv8: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        l = n.n(a),
        r = n('dEAq'),
        c = (n('g5U0'), n('ekZX'), n('ltCa'), n('Bjia'));
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'api' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'API',
            ),
            l.a.createElement(
              'table',
              null,
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, '\u53c2\u6570'),
                  l.a.createElement('th', null, '\u8bf4\u660e'),
                  l.a.createElement('th', null, '\u7c7b\u578b'),
                  l.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  l.a.createElement('th', null, '\u7248\u672c'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'autoInsertSpaceInButton'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u4e3a ',
                    l.a.createElement('code', null, 'false'),
                    ' \u65f6\uff0c\u79fb\u9664\u6309\u94ae\u4e2d 2 \u4e2a\u6c49\u5b57\u4e4b\u95f4\u7684\u7a7a\u683c',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'true'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'componentSize'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e antd \u7ec4\u4ef6\u5927\u5c0f',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'small'),
                    ' | ',
                    l.a.createElement('code', null, 'middle'),
                    ' | ',
                    l.a.createElement('code', null, 'large'),
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'csp'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e ',
                    l.a.createElement(
                      r['Link'],
                      {
                        to:
                          'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
                      },
                      'Content Security Policy',
                    ),
                    ' \u914d\u7f6e',
                  ),
                  l.a.createElement('td', null, '{', ' nonce: string ', '}'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'direction'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6587\u672c\u5c55\u793a\u65b9\u5411\u3002 ',
                    l.a.createElement(
                      r['AnchorLink'],
                      { to: '#components-config-provider-demo-direction' },
                      '\u793a\u4f8b',
                    ),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'ltr'),
                    ' | ',
                    l.a.createElement('code', null, 'rtl'),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'ltr'),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'dropdownMatchSelectWidth'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u4e0b\u62c9\u83dc\u5355\u548c\u9009\u62e9\u5668\u540c\u5bbd\u3002\u9ed8\u8ba4\u5c06\u8bbe\u7f6e ',
                    l.a.createElement('code', null, 'min-width'),
                    '\uff0c\u5f53\u503c\u5c0f\u4e8e\u9009\u62e9\u6846\u5bbd\u5ea6\u65f6\u4f1a\u88ab\u5ffd\u7565\u3002',
                    l.a.createElement('code', null, 'false'),
                    ' \u65f6\u4f1a\u5173\u95ed\u865a\u62df\u6eda\u52a8',
                  ),
                  l.a.createElement('td', null, 'boolean | number'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, '4.3.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'form'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e Form \u7ec4\u4ef6\u7684\u901a\u7528\u5c5e\u6027',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '{',
                    ' validateMessages?: ',
                    l.a.createElement(
                      r['AnchorLink'],
                      { to: '/components/form/#validateMessages' },
                      'ValidateMessages',
                    ),
                    ', requiredMark?: boolean | ',
                    l.a.createElement('code', null, 'optional'),
                    ' ',
                    '}',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, 'requiredMark: 4.8.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'getPopupContainer'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5f39\u51fa\u6846\uff08Select, Tooltip, Menu \u7b49\u7b49\uff09\u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a\u3002',
                  ),
                  l.a.createElement('td', null, 'function(triggerNode)'),
                  l.a.createElement('td', null, '() => document.body'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'getTargetContainer'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u914d\u7f6e Affix\u3001Anchor \u6eda\u52a8\u76d1\u542c\u5bb9\u5668\u3002',
                  ),
                  l.a.createElement('td', null, '() => HTMLElement'),
                  l.a.createElement('td', null, '() => window'),
                  l.a.createElement('td', null, '4.2.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'input'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e Input \u7ec4\u4ef6\u7684\u901a\u7528\u5c5e\u6027',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '{',
                    ' autoComplete?: string ',
                    '}',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, '4.2.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'locale'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bed\u8a00\u5305\u914d\u7f6e\uff0c\u8bed\u8a00\u5305\u53ef\u5230 ',
                    l.a.createElement(
                      r['Link'],
                      { to: 'http://unpkg.com/antd/lib/locale/' },
                      'antd/lib/locale',
                    ),
                    ' \u76ee\u5f55\u4e0b\u5bfb\u627e',
                  ),
                  l.a.createElement('td', null, 'object'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'pageHeader'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u7edf\u4e00\u8bbe\u7f6e PageHeader \u7684 ghost\uff0c\u53c2\u8003 ',
                    l.a.createElement(
                      r['Link'],
                      { to: '/components/page-header' },
                      'PageHeader',
                    ),
                  ),
                  l.a.createElement('td', null, '{', ' ghost: boolean ', '}'),
                  l.a.createElement('td', null, 'true'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'prefixCls'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u7edf\u4e00\u6837\u5f0f\u524d\u7f00\u3002\u6ce8\u610f\uff1a\u9700\u8981\u914d\u5408 ',
                    l.a.createElement('code', null, 'less'),
                    ' \u53d8\u91cf ',
                    l.a.createElement(
                      r['Link'],
                      {
                        to:
                          'https://github.com/ant-design/ant-design/blob/2c6c789e3a9356f96c47aea0083f5a15538315cf/components/style/themes/default.less#L7',
                      },
                      '@ant-prefix',
                    ),
                    ' \u4f7f\u7528',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'ant'),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'renderEmpty'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7a7a\u72b6\u6001\u3002\u53c2\u8003 ',
                    l.a.createElement(
                      r['Link'],
                      { to: '/components/empty/' },
                      '\u7a7a\u72b6\u6001',
                    ),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'function(componentName: string): ReactNode',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'space'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e Space \u7684 ',
                    l.a.createElement('code', null, 'size'),
                    '\uff0c\u53c2\u8003 ',
                    l.a.createElement(
                      r['Link'],
                      { to: '/components/space' },
                      'Space',
                    ),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '{',
                    ' size: ',
                    l.a.createElement('code', null, 'small'),
                    ' | ',
                    l.a.createElement('code', null, 'middle'),
                    ' | ',
                    l.a.createElement('code', null, 'large'),
                    ' | ',
                    l.a.createElement('code', null, 'number'),
                    ' ',
                    '}',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, '4.1.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'virtual'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e ',
                    l.a.createElement('code', null, 'false'),
                    ' \u65f6\u5173\u95ed\u865a\u62df\u6eda\u52a8',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, '4.3.0'),
                ),
              ),
            ),
            l.a.createElement(
              'h2',
              { id: 'faq' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#faq', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'FAQ',
            ),
            l.a.createElement(
              'h4',
              {
                id:
                  '\u5982\u4f55\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u8bed\u8a00\u5305\uff1f',
              },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to:
                    '#\u5982\u4f55\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u8bed\u8a00\u5305\uff1f',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5982\u4f55\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u8bed\u8a00\u5305\uff1f',
            ),
            l.a.createElement(
              'p',
              null,
              '\u53c2\u8003',
              l.a.createElement(
                r['AnchorLink'],
                {
                  to:
                    '/docs/react/i18n#%E5%A2%9E%E5%8A%A0%E8%AF%AD%E8%A8%80%E5%8C%85',
                },
                '\u300a\u589e\u52a0\u8bed\u8a00\u5305\u300b',
              ),
              '\u3002',
            ),
            l.a.createElement(
              'h4',
              {
                id:
                  '\u4e3a\u4ec0\u4e48\u6211\u4f7f\u7528\u4e86-configprovider-locale\uff0c\u65f6\u95f4\u7c7b\u7ec4\u4ef6\u7684\u56fd\u9645\u5316\u8fd8\u6709\u95ee\u9898\uff1f',
              },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to:
                    '#\u4e3a\u4ec0\u4e48\u6211\u4f7f\u7528\u4e86-configprovider-locale\uff0c\u65f6\u95f4\u7c7b\u7ec4\u4ef6\u7684\u56fd\u9645\u5316\u8fd8\u6709\u95ee\u9898\uff1f',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4e3a\u4ec0\u4e48\u6211\u4f7f\u7528\u4e86 ConfigProvider ',
              l.a.createElement('code', null, 'locale'),
              '\uff0c\u65f6\u95f4\u7c7b\u7ec4\u4ef6\u7684\u56fd\u9645\u5316\u8fd8\u6709\u95ee\u9898\uff1f',
            ),
            l.a.createElement(
              'p',
              null,
              '\u8bf7\u68c0\u67e5\u662f\u5426\u6b63\u786e\u8bbe\u7f6e\u4e86 moment \u8bed\u8a00\u5305\uff0c\u6216\u8005\u662f\u5426\u6709\u4e24\u4e2a\u7248\u672c\u7684 moment \u5171\u5b58\u3002',
            ),
            l.a.createElement(c['a'], {
              code:
                "\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n",
              lang: 'js',
            }),
            l.a.createElement(
              'h4',
              {
                id:
                  '\u914d\u7f6e-getpopupcontainer-\u5bfc\u81f4-modal-\u62a5\u9519\uff1f',
              },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to:
                    '#\u914d\u7f6e-getpopupcontainer-\u5bfc\u81f4-modal-\u62a5\u9519\uff1f',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u914d\u7f6e ',
              l.a.createElement('code', null, 'getPopupContainer'),
              ' \u5bfc\u81f4 Modal \u62a5\u9519\uff1f',
            ),
            l.a.createElement(
              'p',
              null,
              '\u76f8\u5173 issue\uff1a',
              l.a.createElement(
                r['Link'],
                { to: 'https://github.com/ant-design/ant-design/issues/19974' },
                'https://github.com/ant-design/ant-design/issues/19974',
              ),
            ),
            l.a.createElement(
              'p',
              null,
              '\u5f53\u5982\u4e0b\u5168\u5c40\u8bbe\u7f6e ',
              l.a.createElement('code', null, 'getPopupContainer'),
              ' \u4e3a\u89e6\u53d1\u8282\u70b9\u7684 parentNode \u65f6\uff0c\u7531\u4e8e Modal \u7684\u7528\u6cd5\u4e0d\u5b58\u5728 ',
              l.a.createElement('code', null, 'triggerNode'),
              '\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4 ',
              l.a.createElement('code', null, 'triggerNode is undefined'),
              ' \u7684\u62a5\u9519\uff0c\u9700\u8981\u589e\u52a0\u4e00\u4e2a',
              l.a.createElement(
                r['Link'],
                {
                  to:
                    'https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a',
                },
                '\u5224\u65ad\u6761\u4ef6',
              ),
              '\u3002',
            ),
            l.a.createElement(c['a'], {
              code:
                '\n <ConfigProvider\n-  getPopupContainer={triggerNode => triggerNode.parentNode}\n+  getPopupContainer={node => {\n+    if (node) {\n+      return node.parentNode;\n+    }\n+    return document.body;\n+  }}\n >\n   <App />\n </ConfigProvider>\n',
              lang: 'diff',
            }),
          ),
        );
      };
    },
    eHQS: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        l = n.n(a),
        r = (n('dEAq'), n('g5U0'), n('ekZX')),
        c = (n('ltCa'), n('Bjia')),
        d = l.a.memo(
          n('JjdP').default['direction-config-provider-aeps-demo'].component,
        );
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              n('JjdP').default['direction-config-provider-aeps-demo']
                .previewerProps,
              l.a.createElement(d, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(c['a'], {
                code:
                  '.button-demo .ant-btn,\n.button-demo .ant-btn-group {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n.button-demo .ant-btn-group > .ant-btn,\n.button-demo .ant-btn-group > span > .ant-btn {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.head-example {\n  display: inline-block;\n  width: 42px;\n  height: 42px;\n  vertical-align: middle;\n  background: #eee;\n  border-radius: 4px;\n}\n\n.ant-badge:not(.ant-badge-not-a-wrapper) {\n  margin-right: 20px;\n}\n.ant-badge-rtl:not(.ant-badge-not-a-wrapper) {\n  margin-right: 0;\n  margin-left: 20px;\n}\n',
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    fSm3: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        l = n.n(a),
        r = (n('dEAq'), n('g5U0'), n('ekZX')),
        c =
          (n('ltCa'),
          n('Bjia'),
          l.a.memo(
            n('JjdP').default['prefixCls-config-provider-aeps-demo'].component,
          ));
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              n('JjdP').default['prefixCls-config-provider-aeps-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    g5U0: function(e, t, n) {
      'use strict';
      var a = n('kPKH');
      n('h9md');
      t['a'] = a['a'];
    },
    iaOp: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        l = n.n(a),
        r = (n('dEAq'), n('g5U0'), n('ekZX')),
        c = (n('ltCa'), n('Bjia')),
        d = l.a.memo(
          n('JjdP').default['locale-config-provider-aeps-demo'].component,
        );
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              n('JjdP').default['locale-config-provider-aeps-demo']
                .previewerProps,
              l.a.createElement(d, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(c['a'], {
                code:
                  '.site-config-provider-calendar-wrapper {\n  width: 319px;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n}\n\n.locale-components {\n  padding-top: 16px;\n  border-top: 1px solid #d9d9d9;\n}\n\n.code-box-demo .example {\n  margin: 16px 0;\n}\n\n.code-box-demo .example > * {\n  margin-right: 8px;\n}\n\n.change-locale {\n  margin-bottom: 16px;\n}\n',
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    ltCa: function(e, t, n) {
      'use strict';
      var a = n('BMrR');
      n('7xIR');
      t['a'] = a['a'];
    },
  },
]);
