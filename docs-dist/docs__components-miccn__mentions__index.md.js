(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [170],
  {
    '+gM7': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['prefix-mentions-miccn-demo'].component));
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
              a('JjdP').default['prefix-mentions-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    '/kwW': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['async-mentions-miccn-demo'].component));
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
              a('JjdP').default['async-mentions-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    '3yOi': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(
            a('JjdP').default['autoSize-mentions-miccn-demo'].component,
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
              a('JjdP').default['autoSize-mentions-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    Bjia: function(e, t, a) {
      'use strict';
      var n = a('0Owb'),
        l = a('PpiC'),
        r = a('cDcd'),
        c = a.n(r),
        m = a('ZpkN');
      t['a'] = c.a.forwardRef((e, t) => {
        var a = e.children,
          r = Object(l['default'])(e, ['children']);
        return c.a.createElement(
          m['a'],
          Object(n['default'])({}, r, { forwardedRef: t }),
          c.a.createElement(c.a.Fragment, null, a),
        );
      });
    },
    CyNF: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = a('dEAq'),
        c = (a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia'));
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
            l.a.createElement(c['a'], {
              code:
                '\n<Mentions onChange={onChange}>\n  <Mentions.Option value="sample">Sample</Mentions.Option>\n</Mentions>\n',
              lang: 'jsx',
            }),
            l.a.createElement(
              'h3',
              { id: 'mentions' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#mentions', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Mentions',
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
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'autoFocus'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u52a8\u83b7\u5f97\u7126\u70b9',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'autoSize'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u9002\u5e94\u5185\u5bb9\u9ad8\u5ea6\uff0c\u53ef\u8bbe\u7f6e\u4e3a true | false \u6216\u5bf9\u8c61\uff1a',
                    '{',
                    ' minRows: 2, maxRows: 6 ',
                    '}',
                  ),
                  l.a.createElement('td', null, 'boolean | object'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'defaultValue'),
                  l.a.createElement('td', null, '\u9ed8\u8ba4\u503c'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'filterOption'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u903b\u8f91',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'false | (input: string, option: OptionProps) => boolean',
                  ),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'getPopupContainer'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u5efa\u8bae\u6846\u6302\u8f7d\u7684 HTML \u8282\u70b9',
                  ),
                  l.a.createElement('td', null, '() => HTMLElement'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'notFoundContent'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5f53\u4e0b\u62c9\u5217\u8868\u4e3a\u7a7a\u65f6\u663e\u793a\u7684\u5185\u5bb9',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'Not Found'),
                  ),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'placement'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5f39\u51fa\u5c42\u5c55\u793a\u4f4d\u7f6e',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'top'),
                    ' | ',
                    l.a.createElement('code', null, 'bottom'),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'bottom'),
                  ),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'prefix'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u89e6\u53d1\u5173\u952e\u5b57',
                  ),
                  l.a.createElement('td', null, 'string | string[]'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, '@'),
                  ),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'split'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u9009\u4e2d\u9879\u524d\u540e\u5206\u9694\u7b26',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, ' '),
                  ),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'validateSearch'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u89e6\u53d1\u9a8c\u8bc1\u903b\u8f91',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '(text: string, props: MentionsProps) => void',
                  ),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'value'),
                  l.a.createElement('td', null, '\u8bbe\u7f6e\u503c'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onBlur'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1',
                  ),
                  l.a.createElement('td', null, '() => void'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onChange'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u503c\u6539\u53d8\u65f6\u89e6\u53d1',
                  ),
                  l.a.createElement('td', null, '(text: string) => void'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onFocus'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u83b7\u5f97\u7126\u70b9\u65f6\u89e6\u53d1',
                  ),
                  l.a.createElement('td', null, '() => void'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onResize'),
                  l.a.createElement('td', null, 'resize \u56de\u8c03'),
                  l.a.createElement(
                    'td',
                    null,
                    'function(',
                    '{',
                    ' width, height ',
                    '}',
                    ')',
                  ),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onSearch'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u641c\u7d22\u65f6\u89e6\u53d1',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '(text: string, prefix: string) => void',
                  ),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onSelect'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u9009\u62e9\u9009\u9879\u65f6\u89e6\u53d1',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '(option: OptionProps, prefix: string) => void',
                  ),
                  l.a.createElement('td', null, '-'),
                ),
              ),
            ),
            l.a.createElement(
              'h3',
              { id: 'mentions-\u65b9\u6cd5' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#mentions-\u65b9\u6cd5',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Mentions \u65b9\u6cd5',
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
                  l.a.createElement('th', null, '\u540d\u79f0'),
                  l.a.createElement('th', null, '\u63cf\u8ff0'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'blur()'),
                  l.a.createElement('td', null, '\u79fb\u9664\u7126\u70b9'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'focus()'),
                  l.a.createElement('td', null, '\u83b7\u53d6\u7126\u70b9'),
                ),
              ),
            ),
            l.a.createElement(
              'h3',
              { id: 'option' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#option', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Option',
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
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'children'),
                  l.a.createElement('td', null, '\u9009\u9879\u5185\u5bb9'),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'value'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u9009\u62e9\u65f6\u586b\u5145\u7684\u503c',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
    LB1x: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['form-mentions-miccn-demo'].component));
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
              a('JjdP').default['form-mentions-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    LYYj: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = a('dEAq'),
        c = a('g5U0'),
        m = (a('ekZX'), a('ltCa'));
      a('Bjia');
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: '\u63d0\u53ca' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#\u63d0\u53ca', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u63d0\u53ca',
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: a('ekWW').default(),
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
              m['a'],
              { gutter: '8' },
              l.a.createElement(
                c['a'],
                { span: 12 },
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('tylk').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('LB1x').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('XLf9').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('3yOi').default(),
                  }),
                ),
              ),
              l.a.createElement(
                c['a'],
                { span: 12 },
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('/kwW').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('+gM7').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('PbHr').default(),
                  }),
                ),
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: a('CyNF').default(),
              }),
              l.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    PbHr: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(
            a('JjdP').default['placement-mentions-miccn-demo'].component,
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
              a('JjdP').default['placement-mentions-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    XLf9: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(
            a('JjdP').default['readonly-mentions-miccn-demo'].component,
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
              a('JjdP').default['readonly-mentions-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    ekWW: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = a('dEAq');
      a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia');
      t['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement('p', null, '\u63d0\u53ca\u7ec4\u4ef6\u3002'),
            l.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u4f55\u65f6\u4f7f\u7528',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4f55\u65f6\u4f7f\u7528',
            ),
            l.a.createElement(
              'p',
              null,
              '\u7528\u4e8e\u5728\u8f93\u5165\u4e2d\u63d0\u53ca\u67d0\u4eba\u6216\u67d0\u4e8b\uff0c\u5e38\u7528\u4e8e\u53d1\u5e03\u3001\u804a\u5929\u6216\u8bc4\u8bba\u529f\u80fd\u3002',
            ),
          ),
        );
      };
    },
    g5U0: function(e, t, a) {
      'use strict';
      var n = a('kPKH');
      a('h9md');
      t['a'] = n['a'];
    },
    ltCa: function(e, t, a) {
      'use strict';
      var n = a('BMrR');
      a('7xIR');
      t['a'] = n['a'];
    },
    tylk: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['basic-mentions-miccn-demo'].component));
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
              a('JjdP').default['basic-mentions-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
