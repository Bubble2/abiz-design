(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [152],
  {
    '++0c': function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(
            t('JjdP').default['accordion-collapse-miccn-demo'].component,
          ));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['accordion-collapse-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    '64tl': function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(
            t('JjdP').default['collapsible-collapse-miccn-demo'].component,
          ));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['collapsible-collapse-miccn-demo']
                .previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    Bjia: function(e, a, t) {
      'use strict';
      var l = t('0Owb'),
        n = t('PpiC'),
        c = t('cDcd'),
        r = t.n(c),
        m = t('ZpkN');
      a['a'] = r.a.forwardRef((e, a) => {
        var t = e.children,
          c = Object(n['default'])(e, ['children']);
        return r.a.createElement(
          m['a'],
          Object(l['default'])({}, c, { forwardedRef: a }),
          r.a.createElement(r.a.Fragment, null, t),
        );
      });
    },
    JK1R: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['ghost-collapse-miccn-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['ghost-collapse-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    Mm4t: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = t('dEAq');
      t('g5U0'), t('ekZX'), t('ltCa'), t('Bjia');
      a['default'] = function() {
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
                c['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'API',
            ),
            n.a.createElement(
              'h3',
              { id: 'collapse' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#collapse', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Collapse',
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
                  n.a.createElement('th', null, '\u7248\u672c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'accordion'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u624b\u98ce\u7434\u6a21\u5f0f',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'activeKey'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5f53\u524d\u6fc0\u6d3b tab \u9762\u677f\u7684 key',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'string[] | string ',
                    n.a.createElement('br', null),
                    ' number[] | number',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u65e0\uff0caccordion \u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u7b2c\u4e00\u4e2a\u5143\u7d20',
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'bordered'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5e26\u8fb9\u6846\u98ce\u683c\u7684\u6298\u53e0\u9762\u677f',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'true'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'collapsible'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6240\u6709\u5b50\u9762\u677f\u662f\u5426\u53ef\u6298\u53e0\u6216\u6307\u5b9a\u53ef\u6298\u53e0\u89e6\u53d1\u533a\u57df',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'header'),
                    ' | ',
                    n.a.createElement('code', null, 'disabled'),
                  ),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null, '4.9.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'defaultActiveKey'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 key',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'string[] | string',
                    n.a.createElement('br', null),
                    ' number[] | number',
                  ),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'destroyInactivePanel'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9500\u6bc1\u6298\u53e0\u9690\u85cf\u7684\u9762\u677f',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'expandIcon'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u5207\u6362\u56fe\u6807',
                  ),
                  n.a.createElement('td', null, '(panelProps) => ReactNode'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'expandIconPosition'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u56fe\u6807\u4f4d\u7f6e',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'left'),
                    ' | ',
                    n.a.createElement('code', null, 'right'),
                  ),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'ghost'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u4f7f\u6298\u53e0\u9762\u677f\u900f\u660e\u4e14\u65e0\u8fb9\u6846',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null, '4.4.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'onChange'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5207\u6362\u9762\u677f\u7684\u56de\u8c03',
                  ),
                  n.a.createElement('td', null, 'function'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: 'collapsepanel' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#collapsepanel', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Collapse.Panel',
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
                  n.a.createElement('th', null, '\u7248\u672c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'collapsible'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u53ef\u6298\u53e0\u6216\u6307\u5b9a\u53ef\u6298\u53e0\u89e6\u53d1\u533a\u57df',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'header'),
                    ' | ',
                    n.a.createElement('code', null, 'disabled'),
                  ),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null, '4.9.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'extra'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u6e32\u67d3\u6bcf\u4e2a\u9762\u677f\u53f3\u4e0a\u89d2\u7684\u5185\u5bb9',
                  ),
                  n.a.createElement('td', null, 'ReactNode'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'forceRender'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 DOM \u7ed3\u6784',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'header'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9762\u677f\u5934\u5185\u5bb9',
                  ),
                  n.a.createElement('td', null, 'ReactNode'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'key'),
                  n.a.createElement('td', null, '\u5bf9\u5e94 activeKey'),
                  n.a.createElement('td', null, 'string | number'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'showArrow'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u5c55\u793a\u5f53\u524d\u9762\u677f\u4e0a\u7684\u7bad\u5934',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'true'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
          ),
        );
      };
    },
    NOIj: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(
            t('JjdP').default['borderless-collapse-miccn-demo'].component,
          ));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['borderless-collapse-miccn-demo']
                .previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    OAAa: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['extra-collapse-miccn-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['extra-collapse-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    ZjQp: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = t('dEAq'),
        r = t('g5U0'),
        m = (t('ekZX'), t('ltCa'));
      t('Bjia');
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h1',
              { id: '\u6298\u53e0\u9762\u677f' },
              n.a.createElement(
                c['AnchorLink'],
                {
                  to: '#\u6298\u53e0\u9762\u677f',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u6298\u53e0\u9762\u677f',
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: t('koB/').default(),
              }),
            ),
            n.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              n.a.createElement(
                c['AnchorLink'],
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
                r['a'],
                { span: 24 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('hCIo').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('++0c').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('NOIj').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('64tl').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('kmny').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('t0C3').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('xlD8').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('OAAa').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('JK1R').default(),
                  }),
                ),
              ),
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: t('Mm4t').default(),
              }),
              n.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    g5U0: function(e, a, t) {
      'use strict';
      var l = t('kPKH');
      t('h9md');
      a['a'] = l['a'];
    },
    hCIo: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['basic-collapse-miccn-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['basic-collapse-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    kmny: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r = (t('ltCa'), t('Bjia')),
        m = n.a.memo(t('JjdP').default['custom-collapse-miccn-demo'].component);
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['custom-collapse-miccn-demo'].previewerProps,
              n.a.createElement(m, null),
            ),
            n.a.createElement(
              'div',
              { className: 'markdown' },
              n.a.createElement(r['a'], {
                code:
                  "[data-theme='compact']\n  .site-collapse-custom-collapse\n  .site-collapse-custom-panel,\n.site-collapse-custom-collapse .site-collapse-custom-panel {\n  margin-bottom: 24px;\n  overflow: hidden;\n  background: #f7f7f7;\n  border: 0px;\n  border-radius: 2px;\n}\n",
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    'koB/': function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = t('dEAq');
      t('g5U0'), t('ekZX'), t('ltCa'), t('Bjia');
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'p',
              null,
              '\u53ef\u4ee5\u6298\u53e0/\u5c55\u5f00\u7684\u5185\u5bb9\u533a\u57df\u3002',
            ),
            n.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              n.a.createElement(
                c['AnchorLink'],
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
                '\u5bf9\u590d\u6742\u533a\u57df\u8fdb\u884c\u5206\u7ec4\u548c\u9690\u85cf\uff0c\u4fdd\u6301\u9875\u9762\u7684\u6574\u6d01\u3002',
              ),
              n.a.createElement(
                'li',
                null,
                n.a.createElement('code', null, '\u624b\u98ce\u7434'),
                ' \u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6298\u53e0\u9762\u677f\uff0c\u53ea\u5141\u8bb8\u5355\u4e2a\u5185\u5bb9\u533a\u57df\u5c55\u5f00\u3002',
              ),
            ),
          ),
        );
      };
    },
    ltCa: function(e, a, t) {
      'use strict';
      var l = t('BMrR');
      t('7xIR');
      a['a'] = l['a'];
    },
    t0C3: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['mix-collapse-miccn-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['mix-collapse-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    xlD8: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        c = (t('dEAq'), t('g5U0'), t('ekZX')),
        r =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['noarrow-collapse-miccn-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              t('JjdP').default['noarrow-collapse-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
  },
]);
