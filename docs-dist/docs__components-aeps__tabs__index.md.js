(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [64],
  {
    '/d0r': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = t('dEAq');
      t('g5U0'), t('ekZX'), t('ltCa'), t('Bjia');
      a['default'] = function() {
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
              'h3',
              { id: 'tabs' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#tabs', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Tabs',
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
                  l.a.createElement('td', null, 'activeKey'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5f53\u524d\u6fc0\u6d3b tab \u9762\u677f\u7684 key',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'addIcon'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u6dfb\u52a0\u6309\u94ae',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, '4.4.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'animated'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u4f7f\u7528\u52a8\u753b\u5207\u6362 Tabs, \u4ec5\u751f\u6548\u4e8e ',
                    l.a.createElement('code', null, 'tabPosition="top"'),
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'boolean | ',
                    '{',
                    ' inkBar: boolean, tabPane: boolean ',
                    '}',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '{',
                    ' inkBar: true, tabPane: false ',
                    '}',
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'centered'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u6807\u7b7e\u5c45\u4e2d\u5c55\u793a',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                  l.a.createElement('td', null, '4.4.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'defaultActiveKey'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u521d\u59cb\u5316\u9009\u4e2d\u9762\u677f\u7684 key\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e activeKey',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      '\u7b2c\u4e00\u4e2a\u9762\u677f',
                    ),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'hideAdd'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u9690\u85cf\u52a0\u53f7\u56fe\u6807\uff0c\u5728 ',
                    l.a.createElement('code', null, 'type="editable-card"'),
                    ' \u65f6\u6709\u6548',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'keyboard'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5f00\u542f\u952e\u76d8\u5207\u6362\u529f\u80fd',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'true'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'renderTabBar'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u66ff\u6362 TabBar\uff0c\u7528\u4e8e\u4e8c\u6b21\u5c01\u88c5\u6807\u7b7e\u5934',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'size'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5927\u5c0f\uff0c\u63d0\u4f9b ',
                    l.a.createElement('code', null, 'large'),
                    ' ',
                    l.a.createElement('code', null, 'default'),
                    ' \u548c ',
                    l.a.createElement('code', null, 'small'),
                    ' \u4e09\u79cd\u5927\u5c0f',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'default'),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'tabBarExtraContent'),
                  l.a.createElement(
                    'td',
                    null,
                    'tab bar \u4e0a\u989d\u5916\u7684\u5143\u7d20',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'ReactNode | ',
                    '{',
                    'left?: ReactNode, right?: ReactNode',
                    '}',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, 'object: 4.6.0'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'tabBarGutter'),
                  l.a.createElement(
                    'td',
                    null,
                    'tabs \u4e4b\u95f4\u7684\u95f4\u9699',
                  ),
                  l.a.createElement('td', null, 'number'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'tabBarStyle'),
                  l.a.createElement(
                    'td',
                    null,
                    'tab bar \u7684\u6837\u5f0f\u5bf9\u8c61',
                  ),
                  l.a.createElement('td', null, 'object'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'tabPosition'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u9875\u7b7e\u4f4d\u7f6e\uff0c\u53ef\u9009\u503c\u6709 ',
                    l.a.createElement('code', null, 'top'),
                    ' ',
                    l.a.createElement('code', null, 'right'),
                    ' ',
                    l.a.createElement('code', null, 'bottom'),
                    ' ',
                    l.a.createElement('code', null, 'left'),
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'top'),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'type'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u9875\u7b7e\u7684\u57fa\u672c\u6837\u5f0f\uff0c\u53ef\u9009 ',
                    l.a.createElement('code', null, 'line'),
                    '\u3001',
                    l.a.createElement('code', null, 'card'),
                    ' ',
                    l.a.createElement('code', null, 'editable-card'),
                    ' \u7c7b\u578b',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'line'),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onChange'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5207\u6362\u9762\u677f\u7684\u56de\u8c03',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'function(activeKey) ',
                    '{',
                    '}',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onEdit'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u65b0\u589e\u548c\u5220\u9664\u9875\u7b7e\u7684\u56de\u8c03\uff0c\u5728 ',
                    l.a.createElement('code', null, 'type="editable-card"'),
                    ' \u65f6\u6709\u6548',
                  ),
                  l.a.createElement('td', null, '(targetKey, action): void'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onTabClick'),
                  l.a.createElement(
                    'td',
                    null,
                    'tab \u88ab\u70b9\u51fb\u7684\u56de\u8c03',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'function(key: string, event: MouseEvent)',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onTabScroll'),
                  l.a.createElement(
                    'td',
                    null,
                    'tab \u6eda\u52a8\u65f6\u89e6\u53d1',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'function(',
                    '{',
                    ' direction: ',
                    l.a.createElement('code', null, 'left'),
                    ' | ',
                    l.a.createElement('code', null, 'right'),
                    ' | ',
                    l.a.createElement('code', null, 'top'),
                    ' | ',
                    l.a.createElement('code', null, 'bottom'),
                    ' ',
                    '}',
                    ')',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null, '4.3.0'),
                ),
              ),
            ),
            l.a.createElement(
              'h3',
              { id: 'tabstabpane' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#tabstabpane', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Tabs.TabPane',
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
                  l.a.createElement('td', null, 'closeIcon'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u5173\u95ed\u56fe\u6807\uff0c',
                    l.a.createElement(
                      'code',
                      null,
                      '\u5728 type="editable-card"',
                    ),
                    '\u65f6\u6709\u6548',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'forceRender'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u88ab\u9690\u85cf\u65f6\u662f\u5426\u6e32\u67d3 DOM \u7ed3\u6784',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'key'),
                  l.a.createElement('td', null, '\u5bf9\u5e94 activeKey'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'tab'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u9009\u9879\u5361\u5934\u663e\u793a\u6587\u5b57',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
    Bjia: function(e, a, t) {
      'use strict';
      var n = t('0Owb'),
        l = t('PpiC'),
        r = t('cDcd'),
        c = t.n(r),
        d = t('ZpkN');
      a['a'] = c.a.forwardRef((e, a) => {
        var t = e.children,
          r = Object(l['default'])(e, ['children']);
        return c.a.createElement(
          d['a'],
          Object(n['default'])({}, r, { forwardedRef: a }),
          c.a.createElement(c.a.Fragment, null, t),
        );
      });
    },
    C0vF: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c = (t('ltCa'), t('Bjia')),
        d = l.a.memo(t('JjdP').default['extra-tabs-aeps-demo'].component);
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['extra-tabs-aeps-demo'].previewerProps,
              l.a.createElement(d, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(c['a'], {
                code:
                  '.tabs-extra-demo-button {\n  margin-right: 16px;\n}\n\n.ant-row-rtl .tabs-extra-demo-button {\n  margin-right: 0;\n  margin-left: 16px;\n}\n',
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    EfD4: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['nest-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['nest-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    Etln: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = t('dEAq'),
        c = t('g5U0'),
        d = (t('ekZX'), t('ltCa'));
      t('Bjia');
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: '\u6807\u7b7e\u9875' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u6807\u7b7e\u9875',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u6807\u7b7e\u9875',
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: t('eNI4').default(),
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
                    children: t('NNjy').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('fa72').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('wnFu').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('hiQ8').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('eqta').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('oM+i').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('C0vF').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('FO6x').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('J+Xb').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('rhhs').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('LgC8').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('cIqL').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('w9j6').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('Gzjh').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('EfD4').default(),
                  }),
                ),
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: t('/d0r').default(),
              }),
              l.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    FO6x: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['size-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['size-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    Gzjh: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c = (t('ltCa'), t('Bjia')),
        d = l.a.memo(
          t('JjdP').default['custom-tab-bar-tabs-aeps-demo'].component,
        );
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['custom-tab-bar-tabs-aeps-demo'].previewerProps,
              l.a.createElement(d, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(c['a'], {
                code:
                  '.site-custom-tab-bar {\n  z-index: 1;\n  background: #fff;\n}\n',
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    'J+Xb': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['position-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['position-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    LgC8: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(
            t('JjdP').default['editable-card-tabs-aeps-demo'].component,
          ));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['editable-card-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    NNjy: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['basic-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['basic-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    cIqL: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c = (t('ltCa'), t('Bjia')),
        d = l.a.memo(t('JjdP').default['card-top-tabs-aeps-demo'].component);
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['card-top-tabs-aeps-demo'].previewerProps,
              l.a.createElement(d, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(c['a'], {
                code:
                  ".card-container p {\n  margin: 0;\n}\n.card-container > .ant-tabs-card .ant-tabs-content {\n  height: 120px;\n  margin-top: -16px;\n}\n.card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {\n  padding: 16px;\n  background: #fff;\n}\n.card-container > .ant-tabs-card > .ant-tabs-nav::before {\n  display: none;\n}\n.card-container > .ant-tabs-card .ant-tabs-tab,\n[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab {\n  background: transparent;\n  border-color: transparent;\n}\n.card-container > .ant-tabs-card .ant-tabs-tab-active,\n[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-tab-active {\n  background: #fff;\n  border-color: #fff;\n}\n#components-tabs-demo-card-top .code-box-demo {\n  padding: 24px;\n  overflow: hidden;\n  background: #f5f5f5;\n}\n[data-theme='compact'] .card-container > .ant-tabs-card .ant-tabs-content {\n  height: 120px;\n  margin-top: -8px;\n}\n[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab {\n  background: transparent;\n  border-color: transparent;\n}\n[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {\n  background: #000;\n}\n[data-theme='dark']\n  .card-container\n  > .ant-tabs-card\n  .ant-tabs-content\n  > .ant-tabs-tabpane {\n  background: #141414;\n}\n[data-theme='dark'] .card-container > .ant-tabs-card .ant-tabs-tab-active {\n  background: #141414;\n  border-color: #141414;\n}\n",
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    eNI4: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = t('dEAq');
      t('g5U0'), t('ekZX'), t('ltCa'), t('Bjia');
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'p',
              null,
              '\u9009\u9879\u5361\u5207\u6362\u7ec4\u4ef6\u3002',
            ),
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
              '\u63d0\u4f9b\u5e73\u7ea7\u7684\u533a\u57df\u5c06\u5927\u5757\u5185\u5bb9\u8fdb\u884c\u6536\u7eb3\u548c\u5c55\u73b0\uff0c\u4fdd\u6301\u754c\u9762\u6574\u6d01\u3002',
            ),
            l.a.createElement(
              'p',
              null,
              'Ant Design \u4f9d\u6b21\u63d0\u4f9b\u4e86\u4e09\u7ea7\u9009\u9879\u5361\uff0c\u5206\u522b\u7528\u4e8e\u4e0d\u540c\u7684\u573a\u666f\u3002',
            ),
            l.a.createElement(
              'ul',
              null,
              l.a.createElement(
                'li',
                null,
                '\u5361\u7247\u5f0f\u7684\u9875\u7b7e\uff0c\u63d0\u4f9b\u53ef\u5173\u95ed\u7684\u6837\u5f0f\uff0c\u5e38\u7528\u4e8e\u5bb9\u5668\u9876\u90e8\u3002',
              ),
              l.a.createElement(
                'li',
                null,
                '\u65e2\u53ef\u7528\u4e8e\u5bb9\u5668\u9876\u90e8\uff0c\u4e5f\u53ef\u7528\u4e8e\u5bb9\u5668\u5185\u90e8\uff0c\u662f\u6700\u901a\u7528\u7684 Tabs\u3002',
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  r['AnchorLink'],
                  {
                    to: '/components/radio/#components-radio-demo-radiobutton',
                  },
                  'Radio.Button',
                ),
                ' \u53ef\u4f5c\u4e3a\u66f4\u6b21\u7ea7\u7684\u9875\u7b7e\u6765\u4f7f\u7528\u3002',
              ),
            ),
          ),
        );
      };
    },
    eqta: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['icon-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['icon-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    fa72: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['disabled-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['disabled-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    g5U0: function(e, a, t) {
      'use strict';
      var n = t('kPKH');
      t('h9md');
      a['a'] = n['a'];
    },
    hiQ8: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['centered-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['centered-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    ltCa: function(e, a, t) {
      'use strict';
      var n = t('BMrR');
      t('7xIR');
      a['a'] = n['a'];
    },
    'oM+i': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['slide-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['slide-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    rhhs: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['card-tabs-aeps-demo'].component));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['card-tabs-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    w9j6: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(
            t('JjdP').default['custom-add-trigger-tabs-aeps-demo'].component,
          ));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['custom-add-trigger-tabs-aeps-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    wnFu: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(
            t('JjdP').default['custom-tab-bar-node-tabs-aeps-demo'].component,
          ));
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement('div', { className: 'markdown' }),
            l.a.createElement(
              r['default'],
              t('JjdP').default['custom-tab-bar-node-tabs-aeps-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
