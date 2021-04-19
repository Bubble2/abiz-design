(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [78],
  {
    '+eQ3': function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['type-avatar-jxc-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              t('JjdP').default['type-avatar-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    '2/a8': function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = t('dEAq');
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
                r['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'API',
            ),
            n.a.createElement(
              'h3',
              { id: 'avatar' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#avatar', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Avatar',
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
                  n.a.createElement('td', null, 'alt'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u56fe\u50cf\u65e0\u6cd5\u663e\u793a\u65f6\u7684\u66ff\u4ee3\u6587\u672c',
                  ),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'gap'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5b57\u7b26\u7c7b\u578b\u8ddd\u79bb\u5de6\u53f3\u4e24\u4fa7\u8fb9\u754c\u5355\u4f4d\u50cf\u7d20',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '4'),
                  n.a.createElement('td', null, '4.3.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'icon'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5934\u50cf\u7684\u81ea\u5b9a\u4e49\u56fe\u6807',
                  ),
                  n.a.createElement('td', null, 'ReactNode'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'shape'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u5934\u50cf\u7684\u5f62\u72b6',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'circle'),
                    ' | ',
                    n.a.createElement('code', null, 'square'),
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'circle'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'size'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5934\u50cf\u7684\u5927\u5c0f',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'number | ',
                    n.a.createElement('code', null, 'large'),
                    ' | ',
                    n.a.createElement('code', null, 'small'),
                    ' | ',
                    n.a.createElement('code', null, 'default'),
                    ' | ',
                    '{',
                    ' xs: number, sm: number, ...',
                    '}',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'default'),
                  ),
                  n.a.createElement('td', null, '4.7.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'src'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u7c7b\u5934\u50cf\u7684\u8d44\u6e90\u5730\u5740\u6216\u8005\u56fe\u7247\u5143\u7d20',
                  ),
                  n.a.createElement('td', null, 'string | ReactNode'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null, 'ReactNode: 4.8.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'srcSet'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u56fe\u7247\u7c7b\u5934\u50cf\u54cd\u5e94\u5f0f\u8d44\u6e90\u5730\u5740',
                  ),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'onError'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u7684\u4e8b\u4ef6\uff0c\u8fd4\u56de false \u4f1a\u5173\u95ed\u7ec4\u4ef6\u9ed8\u8ba4\u7684 fallback \u884c\u4e3a',
                  ),
                  n.a.createElement('td', null, '() => boolean'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
            n.a.createElement(
              'p',
              null,
              'Tip\uff1a\u4f60\u53ef\u4ee5\u8bbe\u7f6e ',
              n.a.createElement('code', null, 'icon'),
              ' \u6216 ',
              n.a.createElement('code', null, 'children'),
              ' \u4f5c\u4e3a\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u7684\u9ed8\u8ba4 fallback \u884c\u4e3a\uff0c\u4f18\u5148\u7ea7\u4e3a ',
              n.a.createElement('code', null, 'icon'),
              ' > ',
              n.a.createElement('code', null, 'children'),
            ),
            n.a.createElement(
              'h3',
              { id: 'avatargroup-450' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#avatargroup-450', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Avatar.Group (4.5.0+)',
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
                  n.a.createElement('td', null, 'maxCount'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u7684\u6700\u5927\u5934\u50cf\u4e2a\u6570',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'maxPopoverPlacement'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u591a\u4f59\u5934\u50cf\u6c14\u6ce1\u5f39\u51fa\u4f4d\u7f6e',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'top'),
                    ' | ',
                    n.a.createElement('code', null, 'bottom'),
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'top'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'maxStyle'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u591a\u4f59\u5934\u50cf\u6837\u5f0f',
                  ),
                  n.a.createElement('td', null, 'CSSProperties'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'size'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u5934\u50cf\u7684\u5927\u5c0f',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'number | ',
                    n.a.createElement('code', null, 'large'),
                    ' | ',
                    n.a.createElement('code', null, 'small'),
                    ' | ',
                    n.a.createElement('code', null, 'default'),
                    ' | ',
                    '{',
                    ' xs: number, sm: number, ...',
                    '}',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'default'),
                  ),
                  n.a.createElement('td', null, '4.8.0'),
                ),
              ),
            ),
          ),
        );
      };
    },
    Bjia: function(e, a, t) {
      'use strict';
      var l = t('0Owb'),
        n = t('PpiC'),
        r = t('cDcd'),
        c = t.n(r),
        m = t('ZpkN');
      a['a'] = c.a.forwardRef((e, a) => {
        var t = e.children,
          r = Object(n['default'])(e, ['children']);
        return c.a.createElement(
          m['a'],
          Object(l['default'])({}, r, { forwardedRef: a }),
          c.a.createElement(c.a.Fragment, null, t),
        );
      });
    },
    G0ik: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['fallback-avatar-jxc-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              t('JjdP').default['fallback-avatar-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    PNU9: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['responsive-avatar-jxc-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              t('JjdP').default['responsive-avatar-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    fNXq: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = t('dEAq'),
        c = t('g5U0'),
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
              { id: '\u5934\u50cf' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#\u5934\u50cf', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5934\u50cf',
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: t('fZ2B').default(),
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
                    children: t('lpKq').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('hB30').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('ori9').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('PNU9').default(),
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
                    children: t('+eQ3').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('kq0R').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('n+Y4').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: t('G0ik').default(),
                  }),
                ),
              ),
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: t('2/a8').default(),
              }),
              n.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    fZ2B: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = t('dEAq');
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
              '\u7528\u6765\u4ee3\u8868\u7528\u6237\u6216\u4e8b\u7269\uff0c\u652f\u6301\u56fe\u7247\u3001\u56fe\u6807\u6216\u5b57\u7b26\u5c55\u793a\u3002',
            ),
            n.a.createElement(
              'h2',
              { id: '\u8bbe\u8ba1\u5e08\u4e13\u5c5e' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u8bbe\u8ba1\u5e08\u4e13\u5c5e',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u8bbe\u8ba1\u5e08\u4e13\u5c5e',
            ),
            n.a.createElement(
              'p',
              null,
              '\u5b89\u88c5 ',
              n.a.createElement(
                r['Link'],
                { to: 'https://kitchen.alipay.com/' },
                'Kitchen Sketch \u63d2\u4ef6 \ud83d\udc8e',
              ),
              '\uff0c\u4e00\u952e\u586b\u5145\u9ad8\u903c\u683c\u5934\u50cf\u548c\u6587\u672c\u3002',
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
    hB30: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['dynamic-avatar-jxc-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              t('JjdP').default['dynamic-avatar-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    kq0R: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c = (t('ltCa'), t('Bjia')),
        m = n.a.memo(t('JjdP').default['badge-avatar-jxc-demo'].component);
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              t('JjdP').default['badge-avatar-jxc-demo'].previewerProps,
              n.a.createElement(m, null),
            ),
            n.a.createElement(
              'div',
              { className: 'markdown' },
              n.a.createElement(c['a'], {
                code:
                  "/* tile uploaded pictures */\n.avatar-item {\n  margin-right: 24px;\n}\n\n[class*='-col-rtl'] .avatar-item {\n  margin-right: 0;\n  margin-left: 24px;\n}\n",
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    lpKq: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['basic-avatar-jxc-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              t('JjdP').default['basic-avatar-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
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
    'n+Y4': function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(
            t('JjdP').default['toggle-debug-avatar-jxc-demo'].component,
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
              r['default'],
              t('JjdP').default['toggle-debug-avatar-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    ori9: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t('cDcd'),
        n = t.n(l),
        r = (t('dEAq'), t('g5U0'), t('ekZX')),
        c =
          (t('ltCa'),
          t('Bjia'),
          n.a.memo(t('JjdP').default['group-avatar-jxc-demo'].component));
      a['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              t('JjdP').default['group-avatar-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
