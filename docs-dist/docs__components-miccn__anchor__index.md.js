(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [140],
  {
    '/7z+': function(e, t, a) {
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
              { id: 'anchor-props' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#anchor-props', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Anchor Props',
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
                  l.a.createElement('th', null, '\u6210\u5458'),
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
                  l.a.createElement('td', null, 'affix'),
                  l.a.createElement('td', null, '\u56fa\u5b9a\u6a21\u5f0f'),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'true'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'bounds'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u951a\u70b9\u533a\u57df\u8fb9\u754c',
                  ),
                  l.a.createElement('td', null, 'number'),
                  l.a.createElement('td', null, '5'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'getContainer'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u6eda\u52a8\u7684\u5bb9\u5668',
                  ),
                  l.a.createElement('td', null, '() => HTMLElement'),
                  l.a.createElement('td', null, '() => window'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'getCurrentAnchor'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u9ad8\u4eae\u7684\u951a\u70b9',
                  ),
                  l.a.createElement('td', null, '() => string'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'offsetTop'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8ddd\u79bb\u7a97\u53e3\u9876\u90e8\u8fbe\u5230\u6307\u5b9a\u504f\u79fb\u91cf\u540e\u89e6\u53d1',
                  ),
                  l.a.createElement('td', null, 'number'),
                  l.a.createElement('td', null),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'showInkInFixed'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement(
                      'code',
                      null,
                      'affix=',
                      '{',
                      'false',
                      '}',
                    ),
                    ' \u65f6\u662f\u5426\u663e\u793a\u5c0f\u5706\u70b9',
                  ),
                  l.a.createElement('td', null, 'boolean'),
                  l.a.createElement('td', null, 'false'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'targetOffset'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u951a\u70b9\u6eda\u52a8\u504f\u79fb\u91cf\uff0c\u9ed8\u8ba4\u4e0e offsetTop \u76f8\u540c\uff0c',
                    l.a.createElement(
                      r['AnchorLink'],
                      { to: '#components-anchor-demo-targetOffset' },
                      '\u4f8b\u5b50',
                    ),
                  ),
                  l.a.createElement('td', null, 'number'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onChange'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u76d1\u542c\u951a\u70b9\u94fe\u63a5\u6539\u53d8',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    '(currentActiveLink: string) => void',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'onClick'),
                  l.a.createElement(
                    'td',
                    null,
                    l.a.createElement('code', null, 'click'),
                    ' \u4e8b\u4ef6\u7684 handler',
                  ),
                  l.a.createElement(
                    'td',
                    null,
                    'function(e: Event, link: Object)',
                  ),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
              ),
            ),
            l.a.createElement(
              'h3',
              { id: 'link-props' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#link-props', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Link Props',
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
                  l.a.createElement('th', null, '\u6210\u5458'),
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
                  l.a.createElement('td', null, 'href'),
                  l.a.createElement('td', null, '\u951a\u70b9\u94fe\u63a5'),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'target'),
                  l.a.createElement(
                    'td',
                    null,
                    '\u8be5\u5c5e\u6027\u6307\u5b9a\u5728\u4f55\u5904\u663e\u793a\u94fe\u63a5\u7684\u8d44\u6e90\u3002',
                  ),
                  l.a.createElement('td', null, 'string'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', null, 'title'),
                  l.a.createElement('td', null, '\u6587\u5b57\u5185\u5bb9'),
                  l.a.createElement('td', null, 'ReactNode'),
                  l.a.createElement('td', null, '-'),
                  l.a.createElement('td', null),
                ),
              ),
            ),
          ),
        );
      };
    },
    '5YSj': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['onChange-anchor-miccn-demo'].component));
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
              a('JjdP').default['onChange-anchor-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    '9pEr': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['basic-anchor-miccn-demo'].component));
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
              a('JjdP').default['basic-anchor-miccn-demo'].previewerProps,
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
    FAN8: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['onClick-anchor-miccn-demo'].component));
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
              a('JjdP').default['onClick-anchor-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    Jgmq: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(a('JjdP').default['static-anchor-miccn-demo'].component));
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
              a('JjdP').default['static-anchor-miccn-demo'].previewerProps,
              l.a.createElement(c, null),
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
    hE50: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(
            a('JjdP').default['customizeHighlight-anchor-miccn-demo'].component,
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
              a('JjdP').default['customizeHighlight-anchor-miccn-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    ltCa: function(e, t, a) {
      'use strict';
      var n = a('BMrR');
      a('7xIR');
      t['a'] = n['a'];
    },
    mNSF: function(e, t, a) {
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
              'h1',
              { id: '\u951a\u70b9' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#\u951a\u70b9', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u951a\u70b9',
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: a('tk8z').default(),
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
                    children: a('9pEr').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('FAN8').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('xddn').default(),
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
                    children: a('Jgmq').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('hE50').default(),
                  }),
                ),
                l.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  l.a.createElement(l.a.Fragment, {
                    children: a('5YSj').default(),
                  }),
                ),
              ),
            ),
            l.a.createElement(
              'div',
              null,
              l.a.createElement(l.a.Fragment, {
                children: a('/7z+').default(),
              }),
              l.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    tk8z: function(e, t, a) {
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
            l.a.createElement(
              'p',
              null,
              '\u7528\u4e8e\u8df3\u8f6c\u5230\u9875\u9762\u6307\u5b9a\u4f4d\u7f6e\u3002',
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
              '\u9700\u8981\u5c55\u73b0\u5f53\u524d\u9875\u9762\u4e0a\u53ef\u4f9b\u8df3\u8f6c\u7684\u951a\u70b9\u94fe\u63a5\uff0c\u4ee5\u53ca\u5feb\u901f\u5728\u951a\u70b9\u4e4b\u95f4\u8df3\u8f6c\u3002',
            ),
          ),
        );
      };
    },
    xddn: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('cDcd'),
        l = a.n(n),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          l.a.memo(
            a('JjdP').default['targetOffset-anchor-miccn-demo'].component,
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
              a('JjdP').default['targetOffset-anchor-miccn-demo']
                .previewerProps,
              l.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
