(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [81],
  {
    '6GrB': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c = (t('ltCa'), t('Bjia')),
        m = l.a.memo(
          t('JjdP').default['router-4-breadcrumb-jxc-demo'].component,
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
              t('JjdP').default['router-4-breadcrumb-jxc-demo'].previewerProps,
              l.a.createElement(m, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(c['a'], {
                code:
                  '.demo {\n  margin: 16px;\n}\n.demo-nav {\n  height: 30px;\n  margin-bottom: 16px;\n  line-height: 30px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  padding: 0 8px;\n  line-height: 30px;\n}\n.app-list {\n  margin-top: 16px;\n}\n',
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    '7OGi': function(e, a, t) {
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
            l.a.createElement(
              'h3',
              { id: 'breadcrumb' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#breadcrumb', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Breadcrumb',
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
                  l.a.createElement('td', null, 'itemRender'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u94fe\u63a5\u51fd\u6570\uff0c\u548c react-router \u914d\u7f6e\u4f7f\u7528',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '(route, params, routes, paths) => ReactNode',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'params'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8def\u7531\u7684\u53c2\u6570',
                  ),
                  l.a.createElement('td', null, 'object'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'routes'),
                  l.a.createElement(
                    'td',
                    null,
                    'router \u7684\u8def\u7531\u6808\u4fe1\u606f',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      r['AnchorLink'],
                      { to: '#routes' },
                      'routes[]',
                    ),
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'separator'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5206\u9694\u7b26\u81ea\u5b9a\u4e49',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, '/'),
                  ),
                  l.a.createElement('td', null),
                ),
              ),
            ),
            l.a.createElement(
              'h3',
              { id: 'breadcrumbitem' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#breadcrumbitem', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Breadcrumb.Item',
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
                  l.a.createElement('td', null, 'className'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u7c7b\u540d',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'dropdownProps'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u5f39\u51fa\u4e0b\u62c9\u83dc\u5355\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      r['Link'],
                      { to: '/components/dropdown' },
                      'Dropdown',
                    ),
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'href'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u94fe\u63a5\u7684\u76ee\u7684\u5730',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'overlay'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u4e0b\u62c9\u83dc\u5355\u7684\u5185\u5bb9',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      r['Link'],
                      { to: '/components/menu' },
                      'Menu',
                    ),
                    ' | () => Menu',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onClick'),
                  l.a.createElement('td', null, '\u5355\u51fb\u4e8b\u4ef6'),
                  l.a.createElement('td', null, '(e:MouseEvent) => void'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
              ),
            ),
            l.a.createElement(
              'h3',
              { id: 'breadcrumbseparator' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#breadcrumbseparator',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Breadcrumb.Separator',
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
                  l.a.createElement('td', null, 'children'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8981\u663e\u793a\u7684\u5206\u9694\u7b26',
                  ),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, '/'),
                  ),
                  l.a.createElement('td', null),
                ),
              ),
            ),
            l.a.createElement(
              'p',
              null,
              '\u6ce8\u610f\uff1a\u5728\u4f7f\u7528 ',
              l.a.createElement('code', null, 'Breadcrumb.Separator'),
              ' \u65f6\uff0c\u5176\u7236\u7ec4\u4ef6\u7684\u5206\u9694\u7b26\u5fc5\u987b\u8bbe\u7f6e\u4e3a ',
              l.a.createElement('code', null, 'separator=""'),
              '\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u7236\u7ec4\u4ef6\u9ed8\u8ba4\u7684\u5206\u9694\u7b26\u3002',
            ),
            l.a.createElement(
              'h3',
              { id: 'routes' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#routes', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'routes',
            ),
            l.a.createElement(c['a'], {
              code:
                '\ninterface Route {\n  path: string;\n  breadcrumbName: string;\n  children: Array<{\n    path: string;\n    breadcrumbName: string;\n  }>;\n}\n',
              lang: 'ts',
            }),
            l.a.createElement(
              'h3',
              { id: '\u548c-browserhistory-\u914d\u5408' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u548c-browserhistory-\u914d\u5408',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u548c browserHistory \u914d\u5408',
            ),
            l.a.createElement(
              'p',
              null,
              '\u548c react-router \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u9ed8\u8ba4\u751f\u6210\u7684 url \u8def\u5f84\u662f\u5e26\u6709 ',
              l.a.createElement('code', null, '#'),
              ' \u7684\uff0c\u5982\u679c\u548c browserHistory \u4e00\u8d77\u4f7f\u7528\u7684\u8bdd\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ',
              l.a.createElement('code', null, 'itemRender'),
              ' \u5c5e\u6027\u5b9a\u4e49\u9762\u5305\u5c51\u94fe\u63a5\u3002',
            ),
            l.a.createElement(c['a'], {
              code:
                "\nimport { Link } from 'react-router';\n\nconst routes = [\n  {\n    path: 'index',\n    breadcrumbName: 'home',\n  },\n  {\n    path: 'first',\n    breadcrumbName: 'first',\n    children: [\n      {\n        path: '/general',\n        breadcrumbName: 'General',\n      },\n      {\n        path: '/layout',\n        breadcrumbName: 'Layout',\n      },\n      {\n        path: '/navigation',\n        breadcrumbName: 'Navigation',\n      },\n    ],\n  },\n  {\n    path: 'second',\n    breadcrumbName: 'second',\n  },\n];\n\nfunction itemRender(route, params, routes, paths) {\n  const last = routes.indexOf(route) === routes.length - 1;\n  return last ? (\n    <span>{route.breadcrumbName}</span>\n  ) : (\n    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>\n  );\n}\n\nreturn <Breadcrumb itemRender={itemRender} routes={routes} />;\n",
              lang: 'jsx',
            }),
          ),
        );
      };
    },
    '8MS5': function(e, a, t) {
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
              '\u663e\u793a\u5f53\u524d\u9875\u9762\u5728\u7cfb\u7edf\u5c42\u7ea7\u7ed3\u6784\u4e2d\u7684\u4f4d\u7f6e\uff0c\u5e76\u80fd\u5411\u4e0a\u8fd4\u56de\u3002',
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
                '\u5f53\u7cfb\u7edf\u62e5\u6709\u8d85\u8fc7\u4e24\u7ea7\u4ee5\u4e0a\u7684\u5c42\u7ea7\u7ed3\u6784\u65f6\uff1b',
              ),
              l.a.createElement(
                'li',
                null,
                '\u5f53\u9700\u8981\u544a\u77e5\u7528\u6237\u300e\u4f60\u5728\u54ea\u91cc\u300f\u65f6\uff1b',
              ),
              l.a.createElement(
                'li',
                null,
                '\u5f53\u9700\u8981\u5411\u4e0a\u5bfc\u822a\u7684\u529f\u80fd\u65f6\u3002',
              ),
            ),
          ),
        );
      };
    },
    BRud: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['basic-breadcrumb-jxc-demo'].component));
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
              t('JjdP').default['basic-breadcrumb-jxc-demo'].previewerProps,
              l.a.createElement(c, null),
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
    JXh7: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(
            t('JjdP').default['withIcon-breadcrumb-jxc-demo'].component,
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
              t('JjdP').default['withIcon-breadcrumb-jxc-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    SAUw: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(
            t('JjdP').default['separator-breadcrumb-jxc-demo'].component,
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
              t('JjdP').default['separator-breadcrumb-jxc-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    VG08: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(
            t('JjdP').default['separator-indepent-breadcrumb-jxc-demo']
              .component,
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
              t('JjdP').default['separator-indepent-breadcrumb-jxc-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    YVR2: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('cDcd'),
        l = t.n(n),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          l.a.memo(t('JjdP').default['overlay-breadcrumb-jxc-demo'].component));
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
              t('JjdP').default['overlay-breadcrumb-jxc-demo'].previewerProps,
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
    ltCa: function(e, a, t) {
      'use strict';
      var n = t('BMrR');
      t('7xIR');
      a['a'] = n['a'];
    },
    pvK5: function(e, a, t) {
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
              'h2',
              { id: '\u9762\u5305\u5c51' },
              l.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u9762\u5305\u5c51',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u9762\u5305\u5c51',
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: t('8MS5').default(),
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
                    children: t('BRud').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('6GrB').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('YVR2').default(),
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
                    children: t('JXh7').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('SAUw').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: t('VG08').default(),
                  }),
                ),
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: t('7OGi').default(),
              }),
              l.a.createElement('div', null),
            ),
          ),
        );
      };
    },
  },
]);
