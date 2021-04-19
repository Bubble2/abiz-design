(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [32],
  {
    Bjia: function(e, a, t) {
      'use strict';
      var n = t('0Owb'),
        l = t('PpiC'),
        r = t('cDcd'),
        c = t.n(r),
        m = t('ZpkN');
      a['a'] = c.a.forwardRef((e, a) => {
        var t = e.children,
          r = Object(l['default'])(e, ['children']);
        return c.a.createElement(
          m['a'],
          Object(n['default'])({}, r, { forwardedRef: a }),
          c.a.createElement(c.a.Fragment, null, t),
        );
      });
    },
    HIhk: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['customize-empty-aeps-demo'].component));
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
              t('JjdP').default['customize-empty-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    YVd7: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = t('dEAq'),
        c = (t('g5U0'), t('ekZX'), t('ltCa'), t('Bjia'));
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
            l.a.createElement(c['a'], {
              code: '\n<Empty>\n  <Button>\u521b\u5efa</Button>\n</Empty>\n',
              lang: 'jsx',
            }),
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
                  l.a.createElement('td', null, 'description'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u63cf\u8ff0\u5185\u5bb9',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'image'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u663e\u793a\u56fe\u7247\uff0c\u4e3a string \u65f6\u8868\u793a\u81ea\u5b9a\u4e49\u56fe\u7247\u5730\u5740\u3002',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      'Empty.PRESENTED_IMAGE_DEFAULT',
                    ),
                  ),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'imageStyle'),
                  l.a.createElement('td', null, '\u56fe\u7247\u6837\u5f0f'),
                  l.a.createElement('td', null, 'CSSProperties'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
              ),
            ),
            l.a.createElement(
              'h2',
              { id: '\u5185\u7f6e\u56fe\u7247' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u5185\u7f6e\u56fe\u7247',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5185\u7f6e\u56fe\u7247',
            ),
            l.a.createElement(
              'ul',
              null,
              l.a.createElement(
                'li',
                null,
                l.a.createElement('p', null, 'Empty.PRESENTED_IMAGE_SIMPLE'),
                l.a.createElement(
                  'div',
                  {
                    className: [
                      'site-empty-buildIn-img',
                      'site-empty-buildIn-simple',
                    ],
                  },
                  l.a.createElement('div', null),
                ),
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement('p', null, 'Empty.PRESENTED_IMAGE_DEFAULT'),
                l.a.createElement('div', {
                  className: [
                    'site-empty-buildIn-img',
                    'site-empty-buildIn-default',
                  ],
                }),
              ),
            ),
            l.a.createElement('style', {
              dangerouslySetInnerHTML: {
                __html:
                  '\n  .site-empty-buildIn-img {\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  .site-empty-buildIn-simple {\n    width: 55px;\n    height: 35px;\n    background-image: url("https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png");\n  }\n  .site-empty-buildIn-default {\n    width: 121px;\n    height: 116px;\n    background-image: url("https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png");\n  }\n  [data-theme="dark"] .site-empty-buildIn-simple {\n    background-image: url("https://gw.alipayobjects.com/zos/antfincdn/ldFsHUh3Xh/ea62c5fe-07bb-4fcd-9d35-19220cef372e.png");\n  }\n  [data-theme="dark"] .site-empty-buildIn-default {\n    background-image: url("https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*gfq-SoT3wF0AAAAAAAAAAABkARQnAQ");\n  }\n',
              },
            }),
          ),
        );
      };
    },
    eEhE: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['simple-empty-aeps-demo'].component));
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
              t('JjdP').default['simple-empty-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    eY3A: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = t('dEAq'),
        c = t('g5U0'),
        m = (t('ekZX'), t('ltCa'));
      t('Bjia');
      a['default'] = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h1',
              { id: '\u7a7a\u72b6\u6001' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u7a7a\u72b6\u6001',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u7a7a\u72b6\u6001',
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: t('pQKA').default(),
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
                { span: 24 },
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('xetn').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('eEhE').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('HIhk').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('y6H0').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('uFwb').default(),
                  }),
                ),
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: t('YVd7').default(),
              }),
              l.a.createElement('div', null),
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
    ltCa: function(e, a, t) {
      'use strict';
      var n = t('BMrR');
      t('7xIR');
      a['a'] = n['a'];
    },
    pQKA: function(e, a, t) {
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
              '\u7a7a\u72b6\u6001\u65f6\u7684\u5c55\u793a\u5360\u4f4d\u56fe\u3002',
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
              'ul',
              null,
              l.a.createElement(
                'li',
                null,
                '\u5f53\u76ee\u524d\u6ca1\u6709\u6570\u636e\u65f6\uff0c\u7528\u4e8e\u663e\u5f0f\u7684\u7528\u6237\u63d0\u793a\u3002',
              ),
              l.a.createElement(
                'li',
                null,
                '\u521d\u59cb\u5316\u573a\u666f\u65f6\u7684\u5f15\u5bfc\u521b\u5efa\u6d41\u7a0b\u3002',
              ),
            ),
          ),
        );
      };
    },
    uFwb: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['description-empty-aeps-demo'].component));
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
              t('JjdP').default['description-empty-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    xetn: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['basic-empty-aeps-demo'].component));
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
              t('JjdP').default['basic-empty-aeps-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    y6H0: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(
            t('JjdP').default['config-provider-empty-aeps-demo'].component,
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
              t('JjdP').default['config-provider-empty-aeps-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
